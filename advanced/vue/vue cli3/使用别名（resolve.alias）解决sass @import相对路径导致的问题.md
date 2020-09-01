# 使用别名（resolve.alias）解决sass @import相对路径导致的问题

所有 vue-cli 创建的项目都默认配置了将 @ 指向 /src。

在 Javascript 代码中（包括js 文件 和 Vue 单文件 script 标签中），既可以使用相对路径也可以使用别名来导入样式文件。使用的关键字是`import`

在 Vue 单文件 style 标签中如果使用别名来导入就要小心点。使用的关键字是 `@import`

## 1 sass

在 js 中在导入一个 sass 文件时

```js
// 原本
import './../src/sass/icon.sass'

// 现在
import '@sass/icon.sass'
```

在 sass 或 Vue 单文件的 style 标签中导入 sass 文件时，注意现在是~@

```
// 原本
@import './../src/sass/icon.sass' 

// 现在
@import '~@sass/icon.sass'
```

## 2 less

在js文件、Vue 单文件 script 标签中

main.js

```js
import '@/assets/styles/index.less'
```

Layout.vue

```html
<script>
import '@/assets/styles/index.less'
</script>
```

在 Vue 单文件 style 标签中

```html
<style lang='less'>
  @import '../assets/styles/variables.less';
  //@import '~@assets/styles/variables.less'; // 这种方式不行
</style>
```