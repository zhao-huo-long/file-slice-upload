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

## 特点
1. 轻松控制上传流程, 让你只需专注上传逻辑!
2. 友好、易读的 api `.start()` `.stop()` `.continue()`...
3. 支持事件 `start` `finish` `stop` `progress` `error`...
4. 轻量
5. 不依赖任何第三方库
6. 使用 typescript 编码, 代码提示良好


## API文档

