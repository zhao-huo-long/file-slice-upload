import SparkMD5 from 'spark-md5'
import fileHandler from './fileHandler'
import emmiter from 'emitter-tiny'


const md5 = (file: File, chunkSize: number, event = new emmiter()) => {
  const computer = new SparkMD5();
  const { getChunk, chunkNums } = fileHandler(file, chunkSize, true)
  let cancel = false
  return {
    startCompute: async () => {
      return new Promise<boolean>((res) => {
        cancel = false
        const reader = new FileReader()
        let i = 0
        reader.onload = (e) => {
          if (cancel) return res(false)
          const content = e.target.result as string
          computer.append(content)
          event.emit('progress', { done: i + 1, all: chunkNums, type: 'md5' })
          if (i < chunkNums) {
            reader.readAsArrayBuffer(getChunk(i++))
          } else {
            res(true)
          }
        }
        reader.readAsArrayBuffer(getChunk(i))
      })
    },
    cancelCompute: () => cancel = true
  }
}


export default md5
