# 📄 File-Slice-Upload

<!-- [english](./README_en.md) -->

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
fileUpload(1024 * 1024)
.setFile(youFile)
.setAjax(async({chunk, md5})=>{
  const success = await postChunkFile(chunk, md5)
  return success   /* 返回 true 将会上传下一个文件碎片 */
})
.start()
```
### demo

1. [live-demo](https://zhao-huo-long.github.io/file-slice-upload/demo/demo.html)

## 🔥🔥🔥 特点
1. 只需专注上传逻辑!
2. 友好、易读的 api `.start()` `.cancel()`
3. 支持事件 `start` `finish` `stop` `progress` `error`, 降低代码耦合
4. 轻量
5. 使用 typescript 编码, 类型提示良好

### API文档

#### 默认导出
`FileSliceUpload`类的工厂函数，返回 `FileSliceUpload` 实例
1. `factory(chunkSize)` => `FileSliceUpload`

| 参数名   | 类型            | 必传  | 说明 |
|------| --------------- | ----- | ---------------- |
| chunkSize | int | false | 分片大小(BYTE), 默认值1024 * 1024(1MB) |

#### FileSliceUpload 类
方法列表
1. `setFile(file)` => `this`

| 参数名   | 类型            | 必传  | 说明 |
| ------ | --------------- | ----- | ---------------- |
| file | File | true | 分片上传的文件 |

2.  `fileUpload.setAjax(ajax)`  => `this`

| 参数名   | 类型            | 必传  | 说明 |
| ------ | --------------- | ----- | ---------------- |
| ajax | `({chunk: File, index: number, md5: string, all: number}) => Promise<boolean>` | true | 上传文件碎片的函数，该函数被调用返回true就上传下一个碎片|

3.  `fileUpload.start()` 开始上传
4.  `fileUpload.cancel()` 取消上传
5.  `fileUpload.on(eventName, cb)`  => `this` 监听上传事件

| eventName   | 说明            | cb函数类型
| ------ | --------------- | ----- |
| start | 开始上传 | `() => void` |
| finish | 上传完成 | `({ file: File, chunkSize: number, md5: string, all: number }) => void`|
| cancel | 取消上传 | `() => void` |
| progress | 上传进度 | `({done: number, all: number, type: 'md5' | 'upload'}) => void` |
| chunk-uploaded | 分片上传成功 |`({chunk: File, index: number, file: File, md5: string}) => void `|
| error | 上传失败 | `() => void` |

6.  `fileUpload.getFile()` => `file` 获取原始完整文件

7. `fileUpload.off(eventName, cb)` => `this` 取消事件注册
