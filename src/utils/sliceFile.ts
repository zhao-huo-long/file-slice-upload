
export type BuildNameFunt = (file: File, index: number) => string

const buildChunkName: BuildNameFunt = (file, index) => {
  return `${file.name}-${index}`
}

/** file slice to chunks */
const sliceFile = (file: File, chunkSize = 0, chunkName?: BuildNameFunt): File[] => {
  const chunkNums = Math.ceil(file.size / chunkSize)
  const chunksArray = [] as File[]
  let i = 0;
  while (i < chunkNums) {
    const chunkBlob = file.slice(i * chunkSize, i * chunkSize + chunkSize)
    const chunkFileName = chunkName ? chunkName(file, i) : buildChunkName(file, i)
    chunksArray.push(new File([chunkBlob], chunkFileName, {
      type: file.type
    }))
    i++
  }
  return chunksArray
}

export type IteratorFile = File & {
  [Symbol.iterator]: () => File
}

export const iteraotrFile = (file: File, chunkSize = 0, chunkName?: BuildNameFunt) : IteratorFile =>  {
  const chunkNums = Math.ceil(file.size / chunkSize)
  let i = 0
  file[Symbol.iterator] = function*() {
    while(i < chunkNums){
      const chunkBlob = this.slice(i * chunkSize, i * chunkSize + chunkSize)
      const chunkFileName = chunkName ? chunkName(this, i) : buildChunkName(file, i)
      i++
      yield new File([chunkBlob], chunkFileName, {
        type: this.type
      })
    }
  }
  return file as IteratorFile
}

export default sliceFile
