import FileUpload from './file-upload'

export { default as fileUpload } from './file-upload'

export default function factory <T extends number>(parallel: T = 1 as T){
  return new FileUpload(parallel)
}
