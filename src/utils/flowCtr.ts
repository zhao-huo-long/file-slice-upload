import type { Emitter } from 'emitter-tiny'
import emitter from 'emitter-tiny'
export type UploadAjaxFunc<T> = (chunk: T, index: number, chunks: readonly T[], chunkSize: number) => Promise<unknown>

type flowCtr<T> = (ajax: UploadAjaxFunc<T>, chunks: T[], event: Emitter, start: number,) => {
  stop?: () => void
  continue?: () => ReturnType<flowCtr<T>>
}

export type FlowCtr<T> = ReturnType<flowCtr<T>>


/** upload chunks flow control function */
function flowCtr<M>(
  uploadChunkAjax: UploadAjaxFunc<M>,
  chunks: M[] = [],
  event: Emitter = new emitter(),
  start = 0,
  chunkSize: number
): ReturnType<flowCtr<M>> {
  const stopFlag = { val: false };
  const copyChunks: M[] = chunks.slice(start);
  let i = start;
  if (!copyChunks.length) return {};
  (async function () {
    while (copyChunks.length) {
      const chunk = copyChunks.shift()
      const res = await uploadChunkAjax(chunk, i, chunks, chunkSize)
      if (res !== true) {
        event.emit('error', 'error')
        console.error('error')
        break
      }
      if (res === true && stopFlag.val === false) {
        event.emit('progress', { done: i + 1, all: chunks.length })
        event.emit('chunk-uploaded', { chunk, index: i, chunks })
        i++
        continue
      }
      if (stopFlag.val === true) {
        event.emit('stop', 'stop')
        break
      }
    }
    if (!copyChunks.length) {
      event.emit('finish', {chunks, chunkSize})
    }
  })()
  return {
    stop: () => {
      stopFlag.val = true
    },
    continue: () => {
      stopFlag.val = true
      return flowCtr<M>(uploadChunkAjax, chunks, event, i, chunkSize)
    }
  }

}


export default flowCtr
