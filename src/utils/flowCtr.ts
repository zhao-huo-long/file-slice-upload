
export type UploadAjaxFunc<T> = (chunk:T, index: number, chunks: readonly T[] ) => Promise<unknown>

export type flowCtr<T> = (ajax: UploadAjaxFunc<T>, chunks: readonly T[], start: number) => {
  stop: () => void,
  continue: () => ReturnType<flowCtr<T>>
};


/** upload chunks flow control function */
function flowCtr<M>(uploadChunkAjax:UploadAjaxFunc<M>, chunks: readonly M[], start = 0): ReturnType<flowCtr<M>>{
  const stop = { val: false };
  const copyChunks: M[] = chunks.slice(start);
  let i = 0;
  (async function () {
    while (copyChunks.length) {
      const res = await uploadChunkAjax(copyChunks.shift(), i, chunks)
      if (res !== true) {
        console.error('error')
        break
      }
      if (res === true && stop.val === false) {
        console.warn('upload:', i)
        i++
        continue
      }
      if (stop.val === true) {
        console.warn('stop')
        break
      }
    }
    if (!copyChunks.length) console.warn('finish')
  })()
  return {
    stop: () => stop.val = true,
    continue: () => flowCtr(uploadChunkAjax, chunks, i)
  }
}


export default flowCtr
