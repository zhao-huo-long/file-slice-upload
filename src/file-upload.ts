import type { UploadAjaxFunc } from './utils/flowCtr'
import sliceFile from './utils/sliceFile'
import type { Unit } from './utils/strToByte'
import strToByte from './utils/strToByte'
import flowCtr from './utils/flowCtr'
import type { FlowCtr } from './utils/flowCtr'
import v from 'assert-tiny'
import emitter from 'emitter-tiny'
import type { Emitter } from 'emitter-tiny'

type EventType = {
  start: () => void;
  finish: (val: {chunks: File[], chunkSize: number}) => void;
  continue: () => void;
  progress: (payload: { done: number, all: number }) => void;
  'chunk-uploaded': (payload: { chunk: File, index: number, chunks: File[] }) => void;
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
  private event: Emitter = new emitter()
  /** flow */
  private flow: FlowCtr<ChunkType<T>>
  /** file */
  private file_: File
  /** chunkSize */
  private chunkSize: number

  constructor(private readonly parallel: T = 1 as T) { }

  /** event listen */
  on<M extends keyof EventType>(eventName: M, handler: EventType[M]) {
    v(handler).isTypeOf(Function, 'handler expect function type')
    this.event.on(eventName, handler)
    return this
  }

  /** event close listen */
  off<M extends keyof EventType>(eventName: M, handler: EventType[M]) {
    v(handler).isTypeOf(Function, 'handler expect function type')
    this.event.off(eventName, handler)
    return this
  }

  /** set upload file */
  public file(file: File, chunkSizeStr: Unit,) {
    v(file).isTypeOf(File, 'file expect File type')
    v(chunkSizeStr).isTypeOf(String, 'chunkSizeStr expect String type likes `"2MB"`')
    this.file_ = file
    const chunkSize = strToByte(chunkSizeStr)
    this.chunkSize = chunkSize
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
    v(ajax).isTypeOf(Function, 'expect Function')
    this.uploadFunc_ = ajax.bind(this)
    return this
  }

  /** start upload */
  public start() {
    v(this.uploadFunc_).isTypeOf(Function, 'please set upload function use .uploadFunc()')
    v(this.file_).isTypeOf(File, 'please set upload file use .file(file)')
    this.flow?.stop?.()
    this.event.emit('start', 'start')
    this.flow = flowCtr<ChunkType<T>>
      (this.uploadFunc_, this.chunkArr, this.event, 0, this.chunkSize)
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
    if (this.flow?.continue) {
      this.flow = this.flow.continue()
    }
    this.event.emit('continue', 'continue')
    return this
  }

  public getFile(){
    return this.file_
  }

  public getChunkSize(){
    return this.chunkSize
  }

}

export default FileUpload

