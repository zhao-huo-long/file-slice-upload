import fileHandler from './fileHandler'
import emmiter from 'emitter-tiny'

export type IAjax = (params: { chunk: File, index: number, all: number, md5: string }) => Promise<boolean | void>

const createFlow = (
  file: File,
  chunkSize: number,
  ajax: IAjax,
  event = new emmiter()
) => {
  const { getChunk, chunkNums } = fileHandler(file, chunkSize, false)
  let sendIndex = 0
  let cancel = false
  return {
    async start(md5: string) {
      cancel = false
      while (sendIndex < chunkNums) {
        const chunk = getChunk(sendIndex)
        if (!chunk.size) return
        const next = await ajax({
          chunk: chunk as File,
          index: sendIndex,
          all: chunkNums,
          md5,
        })
        if (!next) return event.emit('error', { chunk, file, index: sendIndex })
        event.emit('chunk-uploaded', { chunk, file, index: sendIndex, md5 })
        if (cancel) {
          event.emit('cancel', { chunk, file, index: sendIndex })
          return
        }
        sendIndex++
        event.emit('progress', { file, done: sendIndex, all: chunkNums, type: 'upload' })
      }
      event.emit('finish', { file, md5, all: chunkNums, chunkSize })
    },
    async cancel() {
      cancel = true
    }
  }
}

export default createFlow
