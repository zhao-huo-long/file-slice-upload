import FileUpload from './file-upload'

export { default as fileUpload } from './file-upload'

export default function factory <T extends number>(parallel: T = 1 as T){
  return new FileUpload(parallel)
}

factory().file(new File([], 'file.txt'), '1M').uploadFunc(async (file)=>{
  // return true
})
