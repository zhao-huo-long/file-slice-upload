
export type BuildNameFunt = (file: File, index: number) => string

const buildChunkName: BuildNameFunt = (file, index) => {
  return `${file.name}-${index}`
}

/** file slice to chunks */
const sliceFile = (file: File, chunkSize = 0, chunkName?: BuildNameFunt): File[] => {
  const chunkNums = Math.ceil(file.size / chunkSize)
  const chunksArray = new Array(chunkNums) as File[]
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

export default sliceFile
