
export type UploadAjaxFunc = (chunk: File, index: number, chunks: File[]) => Promise<unknown>

export type FlowCtr = (ajax: UploadAjaxFunc, chunks: File[], start: number) => {
  stop: () => void
}

const flowCtr: FlowCtr = (uploadChunkAjax, chunks, start = 0) => {
  const stop = { val: false };
  const copyChunks: File[] = chunks.slice(start);
  let i = 0;
  (async function () {
    while (copyChunks.length) {
      const res = await uploadChunkAjax(copyChunks.shift(), i, chunks)
      if(res !== true){
        console.error('error')
        break
      }
      if(res === true && stop.val === false){
        console.warn('upload:' , i)
        i++
        continue
      }
      if(stop.val === true){
        console.warn('stop')
        break
      }
    }
    if(!copyChunks.length) console.warn('finish')
  })()
  return {
    stop: () => stop.val = true,
    continue: () => flowCtr(uploadChunkAjax, chunks, i)
  }
}


export default flowCtr
