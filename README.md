# 📄 File-Slice-Upload

[Chinese](./README_zh.md)

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

2. Use file-slice-upload upload file's chunk

```tsx
import fileUpload from 'file-slice-upload'
fileUpload()
.file(youFile, '1MB')
.uploadFunc(async(chunk)=>{
  const success = await postChunkFile(chunk)
  return success   /* return true will upload next chunk */
})
.start()
```

## Feature
1. Easy to control the upload flow, help you focus on upload file logic !
2. Friendly api `.start()` `.stop()` `.continue()`...
3. More event `start` `finish` `stop` `progress` `error`...
4. Tiny
5. Don't depend on any 3-th lib
6. Use Typescript code


## API document

#### export default
factory function，return the `fileUpload` instance
| param   | type            | require  | description           |
| ------ | --------------- | ----- | ---------------- |
| parallel | number - [1, 8] | false | every time send `n` file's chunks |


#### fileUpload-class
1. `fileUpload.file(file, chunkSize, chunkName?)` => `this`

| param   | type            | require  | description |
| ------ | --------------- | ----- | ---------------- |
| file | File | true | the file's chunk |
| chunkSize | String | true | chunk's size, for example: `'200KB'` `'1MB'` `'2M'` |
| chunkName | (file: File, index: number) => string | false | return this chunk file's name |

2.  `fileUpload.uploadFunc(ajax)`  => `this`

| param   | type            | require  | description |
| ------ | --------------- | ----- | ---------------- |
| ajax | (chunk: File \| File[], index: number, chunks: File[] \| File[][]) => Promise\<any \| true\> | true | upload chunk function , return true will upload next chunk |

3.  `fileUpload.start()`  => `this`
start upload
4.  `fileUpload.stop()`  => `this`
suspend upload
5.  `fileUpload.continue()`  => `this`
continue upload

5.  `fileUpload.on(eventName, cb)`  => `this`
listen event

| eventName   | description | callback function type
| ------ | --------------- | ----- |
| start | start upload | `() => void` |
| finish | suspend upload | `() => void`|
| continue | continue upload | `() => void` |
| progress | upload progress | `({done: number, all: number}) => void` |
| chunk-uploaded | chunk uploaded  |`({chunk: File, index: number, chunks: File[] }) => void `|
| error | upload fail | `() => void` |

6. `fileUpload.off(eventName, cb)` => `this`
 close listen event
