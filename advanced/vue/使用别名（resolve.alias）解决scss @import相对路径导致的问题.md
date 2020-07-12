# 使用别名（resolve.alias）解决scss @import相对路径导致的问题

所有 vue-cli 创建的项目都默认配置了将 @ 指向 /src。

在 js 中在导入一个 scss 文件时

```js
// 原本
import './../src/scss/icon.scss'

// 现在
import '@scss/icon.scss'
```

在 scss 或 Vue 单文件的 style 标签中导入 scss 文件时，注意现在是~@

```
// 原本
import './../src/scss/icon.scss'

// 现在
import '~@scss/icon.scss'
```