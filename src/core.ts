import createFlow from './utils/flow'
import type { IAjax } from './utils/flow'
import type { EventKey, EventType } from './utils/event'
import v from 'assert-tiny'
import emitter from 'emitter-tiny'
import md5 from './utils/compute-md5'


class FileSliceUpload {
  private file: File
  private ajax: IAjax
  private cancelUpload: () => void
  private event = new emitter()

  constructor(private chunkSize: number) { }

  on = <M extends EventKey>(eventName: M, handler: EventType[M]) => {
    v(handler).isTypeOf(Function, 'handler expect function type')
    this.event.on(eventName, handler)
    return this
  }

  /** event close listen */
  off = <M extends keyof EventType>(eventName: M, handler: EventType[M]) => {
    v(handler).isTypeOf(Function, 'handler expect function type')
    this.event.off(eventName, handler)
    return this
  }

  setFile = (file: File) => {
    this.file = file
    return this
  }

  getFile = () => this.file

  setAjax = (ajax: IAjax) => {
    this.ajax = ajax
    return this
  }

  start = async () => {
    const {
      file,
      ajax,
      chunkSize,
      event } = this
    const { startCompute, cancelCompute } = md5(file, chunkSize, event)
    const { start, cancel } = createFlow(file, chunkSize, ajax, event)
    this.cancelUpload = () => {
      cancelCompute()
      cancel()
    }
    event.emit('start', { file, chunkSize })
    const next = await startCompute()
    if(next) {
      start()
    }
  }

  cancel = () => {
    const {
      cancelUpload = () => {},
      event,
      file,
      chunkSize } = this
    cancelUpload()
    event.emit('cancel', { file, chunkSize })
  }
}


export default FileSliceUpload
