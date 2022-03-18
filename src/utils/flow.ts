import fileHandler from './getFileChunk'
import emmiter from 'emitter-tiny'
export type IAjax = (chunk: File, index: number, all: number) => Promise<boolean | void>

const createFlow = (file: File, chunkSize: number, ajax: IAjax, event = new emmiter()) => {
  const { getChunk, chunkNums } = fileHandler(file, chunkSize)
  let sendIndex = 0
  let cancel = false
  return {
    async start() {
      cancel = false
      while (sendIndex < chunkNums) {
        const chunk = getChunk(sendIndex)
        if (!chunk.size) return
        const next = await ajax(chunk, sendIndex, chunkNums)
        if (!next) return event.emit('error', { chunk, file, index: sendIndex })
        event.emit('chunk-uploaded', { chunk, file, index: sendIndex })
        if (cancel) {
          event.emit('cancel', { chunk, file, index: sendIndex })
          return
        }
        sendIndex++
        event.emit('progress', { done: sendIndex, all: chunkNums })
      }
      event.emit('finish', { file })
    },
    async cancel() {
      cancel = true
    }
  }
}


export default createFlow
