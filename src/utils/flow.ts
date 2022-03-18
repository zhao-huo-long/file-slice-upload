import fileHandler from './getFileChunk'

export type IAjax = (chunk: File, index: number, all: number) => Promise<boolean | void>

const createFlow = (file: File, chunkSize: number, ajax: IAjax) => {
  const { getChunk, chunkNums } = fileHandler(file, chunkSize)
  let sendIndex = 0
  let cacel = false
  return {
    async start(){
      while(sendIndex < chunkNums){
        const chunk = getChunk(sendIndex)
        if(!chunk.size) return
        const next = await ajax(chunk, sendIndex, chunkNums)
        if(!next || cacel) break
        sendIndex++
      }
    },
    async cancel(){
      cacel = true
    }
  }
}


export default createFlow
