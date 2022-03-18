import FileSliceUpload from './core'

export { default as FileSliceUpload } from './core'

export default (chunkSize: number) => new FileSliceUpload(chunkSize)
