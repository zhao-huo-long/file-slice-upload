import MiniEventEmit from './utils/miniEventEmit'
import type { UploadAjaxFunc } from './utils/flowCtr'
import sliceFile from './utils/sliceFile'
import type { Unit } from './utils/strToByte'
import strToByte from './utils/strToByte'
import flowCtr from './utils/flowCtr'
import type { FlowCtr } from './utils/flowCtr'
import { mAssertType } from './utils/miniAssert'

type EventType = {
  start: () => void;
  finish: () => void;
  continue: () => void;
  progress: (payload: { done: number, all: number }) => void;
  error: () => void;
  stop: () => void;
}

type PARALLEL<T> = (T extends 1 | 0 ? File : File[])[]

type ChunkType<T> = T extends 1 | 0 ? File : File[]

class FileUpload<T extends number>{
  /** chunk array */
  private chunkArr: PARALLEL<T> = []
  /** chunks upload function */
  private uploadFunc_: UploadAjaxFunc<ChunkType<T>>
  /** event center */
  private event: MiniEventEmit = new MiniEventEmit()
  /** flow */
  private flow: FlowCtr<ChunkType<T>>
  /** file */
  private file_: File

  constructor(private readonly parallel: T = 1 as T) {}

  /** event listen */
  on<M extends keyof EventType>(eventName: M, handler: EventType[M]) {
    mAssertType(handler, Function, 'handler expecte function type')
    this.event.on(eventName, handler)
    return this
  }

  /** set upload file */
  public file(file: File, chunkSizeStr: Unit,) {
    mAssertType(file, File, 'file expecte File type')
    mAssertType(chunkSizeStr, String, 'chunkSizeStr expecte String type likes `"2MB"`')
    this.file_ = file
    const chunkSize = strToByte(chunkSizeStr)
    const chunkArr = sliceFile(file, chunkSize)
    if ([0, 1, undefined].includes(this.parallel)) {
      this.chunkArr = chunkArr as PARALLEL<T>
      return this
    }
    let i = 0
    const chunkArrArr = [] as File[][]
    while (chunkArr.slice(i * chunkSize, i * chunkSize + chunkSize)) {
      chunkArrArr.push(chunkArr.slice(i * chunkSize, i * chunkSize + chunkSize))
      i++
    }
    this.chunkArr = chunkArrArr as PARALLEL<T>
    return this
  }

  /** set upload file-chunk function, function return true will upload next chunk */
  public uploadFunc(ajax: UploadAjaxFunc<ChunkType<T>>) {
    mAssertType(ajax, Function, 'expecte Function')
    this.uploadFunc_ = ajax
    return this
  }

  /** start upload */
  public start() {
    mAssertType(this.uploadFunc_, Function, 'please set upload function use .uploadFunc()')
    mAssertType(this.file_, File, 'please set upload file use .file(file)')
    this.flow?.stop?.()
    this.event.emit('start', 'start')
    this.flow = flowCtr<ChunkType<T>>
      (this.uploadFunc_, this.chunkArr, this.event, 0)
    return this
  }

  /** stop upload */
  public stop() {
    this.event.emit('stop', 'stop')
    this.flow?.stop?.()
    return this
  }

  /** continue upload */
  public continue() {
    this.event.emit('continue', 'continue')
    if (this.flow?.continue) {
      this.flow = this.flow?.continue?.()
    }
    return this
  }

}

export default FileUpload

