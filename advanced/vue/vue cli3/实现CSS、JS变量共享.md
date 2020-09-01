# 实现CSS、JS变量共享

以下特性在通过 vue-cli 生成的项目中可以直接使用，**不需要另外的配置**。

在样式文件（less/sass/css）中通过 `:export` 暴露一个对象，`:export` 在功能上类似 ES6 中的 `export` 关键字。`:export` 将导出一个对象，该对象包含要在 Javascript 中使用的变量名称及其关联的值，这些值导出为**字符串**。

在样式文件中导出对象：

- variables.less

  ```less
  @red: #ff0000;

  :export {
    red: @red;
  }
  ```

- variables.sass

  ```sass
  // 定义一个变量
  $red: red;

  :export {
    red: $red;
  }
  ```

- variables.css

  ```css
  /*定义一个变量*/
  @value red: #ff0000;

  :export {
      red: red;
  }
  ```

在 js 文件或 Vue 单文件组件 script 标签中：

```js
import variables from '@/assets/styles/variables.less'

// 或者
//import variables from '../assets/styles/variables.less'

//import variables from '@/assets/styles/variables.sass'
//import variables from '../assets/styles/variables.sass'

//import variables from '@/assets/styles/variables.css'
//import variables from '../assets/styles/variables.css'

console.log(varibales.red)  // {red: "#ff0000"}
```