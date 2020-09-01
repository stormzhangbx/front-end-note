# style-resources-loader

在一个通过 vue-cli 生成的项目中，项目中用到的样式文件可以放在 src/assets/styles 目录下。

## 1 项目中样式文件的使用

### 1.1 全局样式文件

global.less

```less
html, body {
  width: 100%;
  height: 100%;
}

body {
  margin: 0;
}

// ...
```

修改样式库默认样式的样式文件

element.less

```less
.el-scrollbar {
  height: 100%;
}

.scrollbar-wrapper {
  overflow-x: hidden !important;
}

.el-scrollbar__bar.is-vertical {
  right: 0;
}
```

在main.js中导入，样式（注意如果global.less中定义了变量，那么变量不会全局有效）在最终生成的单页面应用中全局生效。

```js
import '@/assets/styles/index.less'
import '@/assets/styles/element.less'
```

### 1.2 暴露了一些变量（CSS、JS变量共享）

variables.less

```less
@red: #ff0000;

:export {
  red: @red;
}
```

在 Vue 单文件 script 标签中导入

```html
<script>
import variables from '@/assets/styles/variables.less'

console.log(varibales.red)  // {red: "#ff0000"}
</script>
```

### 1.3 定义了一些变量、mixin...

style.less

```less
@red: #ff0000;
```

在 Vue 单文件 style 标签中导入

```html
<style lang="less">
  @import '../assets/styles/style.less';

  header {
    color: @red;
  }
</style>
```

如果在index.js 中导入 style.less，然后想当然直接在 Vue 单文件 style 标签中使用变量 `@red`，此时会报错：Variable @red is undefined。

如果 style.less 中定义的变量、mixin...在很多 Vue 单文件组件中有用到，而又不想手动在多个 Vue 单文件 style 中导入 style.less，可以使用 style-resources-loader。

## 2 style-resources-loader

安装 style-resources-loader

```
vue add style-resources-loader
```

安装过程中，命令行会让选择预处理器，这里选择 less。

安装完成后，会在 vue.config.js 里面生成一段代码，我们只需要将 less 文件路径放入其中。

```js
const path = require('path')

module.exports = {
  // ...
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [
        path.resolve(__dirname, './src/assets/styles/style.less')
      ]
    }
  }
}
```



