1. 单文件组件的文件名应该始终是单词大写开头（PascalCase），或者始终横线链接（kebab-case）
2. 在单文件组件的`<template></template>`中组件名应该是PascalCase，如<MyComponent>(这跟react类似)，如
   ```javascript
   ···
   import MyComponent from '@/component/MyComponent'
   export default {
     components: { MyComponent }
   }
   ···
   ```
   或者这样（这种方式显然没有上面一种好）：
   ```javascript
   ···
   import aaa from '@/component/MyComponent'
   export default {
     components: { MyComponent: aaa }
   }
   ···
   ```
3. 在路由配置文件里，路径path、路由名name的值首字母小写
   