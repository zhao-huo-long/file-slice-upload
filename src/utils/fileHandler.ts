export type BuildNameFunt = (file: File, index: number) => string

const buildChunkName: BuildNameFunt = (file, index) => `${file.name}-${index}`

type isBlob<T extends boolean> = T extends false ? File : Blob

const fileHandler = (file: File, chunkSize: number, isBlob = false, chunkName?: BuildNameFunt) => {
  const chunkNums = Math.ceil(file.size / chunkSize)
  return {
    getChunk: (index: number): isBlob<typeof isBlob>  => {
      const chunkBlob = file.slice(index * chunkSize, (index + 1) * chunkSize)
      if(isBlob) return chunkBlob
      const chunkFileName = chunkName || buildChunkName
      return new File(
        [chunkBlob],
        chunkFileName(file, index), {
        type: file.type
      })
    },
    chunkNums
  }
}


export type FileChunks = ReturnType<typeof fileHandler>

export default fileHandler
