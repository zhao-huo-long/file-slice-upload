export type BuildNameFunt = (file: File, index: number) => string

const buildChunkName: BuildNameFunt = (file, index) => `${file.name}-${index}`

const fileHandler = (file: File, chunkSize: number, chunkName?: BuildNameFunt) => {
  const chunkNums = Math.ceil(file.size / chunkSize)
  return {
    getChunk: (index: number) => {
      const chunkBlob = file.slice(index * chunkSize, (index + 1) * chunkSize)
      const chunkFileName = chunkName && buildChunkName
      return new File([chunkBlob], chunkFileName(file, index), {
        type: file.type
      })
    },
    chunkNums
  }
}


export type FileChunks = ReturnType<typeof fileHandler>

export default fileHandler
