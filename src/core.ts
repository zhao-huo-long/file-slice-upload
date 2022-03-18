
import createFlow from './utils/flow'
import type { IAjax } from './utils/flow'

class FileSliceUpload {
  private file: File
  private ajax: IAjax
  private cancelUpload: () => void
  constructor(private chunkSize: number){}
  setFile = (file: File) => {
    this.file = file
    return this
  }
  getFile = () => this.file
  setAjax = (ajax: IAjax) => {
    this.ajax = ajax
    return this
  }
  start = () => {
    const { file, ajax, chunkSize } = this
    const { start, cancel } = createFlow(file, chunkSize, ajax)
    this.cancelUpload = cancel
    start()
    return this
  }
  cancel = () => {
    this?.cancelUpload?.()
  }
}


export default FileSliceUpload
