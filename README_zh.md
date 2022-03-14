# 📄 File-Slice-Upload

[english](./README_en.md)

## 快速开始

### 1. 安装
  * 使用 npm 安装
  ```shell
  npm install file-slice-upload
  ```
  * 使用 yarn 安装
  ```shell
  yarn add file-slice-upload
  ```
### 2. 使用 file-slice-upload 上传文件碎片
```tsx
import fileUpload from 'file-slice-upload'
fileUpload()
.file(youFile, '1MB')
.uploadFunc(async(chunk)=>{
  const success = await postChunkFile(chunk)
  return success   /* 返回 true 将会上传下一个文件碎片 */
})
.start()
```
### demo

1. [live-demo](https://zhao-huo-long.github.io/file-slice-upload/demo/demo.html)


## 🔥🔥🔥 特点
1. 轻松控制上传流程, 让你只需专注上传逻辑!
2. 友好、易读的 api `.start()` `.stop()` `.continue()`...
3. 支持事件 `start` `finish` `stop` `progress` `error`...
4. 轻量
5. 使用 typescript 编码, 代码提示良好


## API文档

#### 默认导出
工厂函数，返回`fileUpload` 实例
| 参数   | 类型            | 必传  | 说明           |
| ------ | --------------- | ----- | ---------------- |
| 并发数 | number - (0, 8] | false | 每轮发送n个文件碎片 |


#### fileUpload类
1. `fileUpload.file(file, chunkSize, chunkName?)` => `this`

| 参数名   | 类型            | 必传  | 说明 |
| ------ | --------------- | ----- | ---------------- |
| file | File | true | 分片上传的文件 |
| chunkSize | String | true | 文件碎片大小，传入`'200KB'` `'1MB'` `'2M'` 等格式的字符串 |
| chunkName | (file: 文件, index: 碎片序列) => 文件碎片的名称 | false | 传入函数，该函数返回的字符串作为文件碎片的name属性值 |

2.  `fileUpload.uploadFunc(ajax)`  => `this`

| 参数名   | 类型            | 必传  | 说明 |
| ------ | --------------- | ----- | ---------------- |
| ajax | (chunk: File \| File[], index: number, chunks: File[] \| File[][]) => boolean | true | 上传文件碎片的函数，返回true就上传下一个碎片|

3.  `fileUpload.start()`  => `this`
开始上传
4.  `fileUpload.stop()`  => `this`
暂停上传
5.  `fileUpload.continue()`  => `this`
继续上传

6.  `fileUpload.on(eventName, cb)`  => `this` 监听上传事件

7.  `fileUpload.getFile()` => `file` 获取原始完整文件

8.  `fileUpload.getChunkSize()` => `number` 分片大小


| eventName   | 说明            | cb函数类型
| ------ | --------------- | ----- |
| start | 开始上传 | `() => void` |
| finish | 上传完成 | `(chunks: File[]) => void`|
| continue | 继续上传 | `() => void` |
| progress | 上传进度 | `({done: number, all: number}) => void` |
| chunk-uploaded | 分片上传成功 |`({chunk: File, index: number, chunks: File[] }) => void `|
| error | 上传失败 | `() => void` |

6. `fileUpload.off(eventName, cb)` => `this` 取消事件注册
