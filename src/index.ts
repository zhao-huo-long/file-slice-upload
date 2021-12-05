import FileUpload from './file-upload'

export { default as fileUpload } from './file-upload'

export default <T extends number>(parallel: T) => new FileUpload(parallel)

