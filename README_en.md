# 📄 File-Slice-Upload


## Quick Start
1. Install
  * Use npm install
  ```shell
  npm install file-slice-upload
  ```
  * Use yarn install
  ```shell
  yarn add file-slice-upload
  ```

2. Use file-slice-upload upload chunk
```tsx
import fileUpload from 'file-slice-upload'
fileUpload()
.file(youFile, '1MB')
.uploadFunc(async(chunk)=>{
  const success = await postChunkFile(chunk)
  /* return is true will upload next chunk */
  return success
})
.start()
```

## Feature
1. Easy to control the upload flow, help you focus on upload file logic !
2. Friendly api `.start()` `.stop()` `.continue()`...
3. More event `start` `finish` `stop` `progress` `error`...
4. Light
5. Don't depend on any 3-th lib
6. Use Typescript code
