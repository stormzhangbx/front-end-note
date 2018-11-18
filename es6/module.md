# 模块

一个模块就是一个独立的文件。该文件内部的所有变量，外部无法获取。如果你希望外部能够读取模块内部的某个变量，就必须输出该变量（作为一个接口暴露出去）

```js
export const name = 'Jack'
export const run = () => {
  console.log('I can run')
}

const info = {
  age: 20,
  hobby: ['book', 'music'],
  read() {
    console.log('I can read')
  }
}
export default info
```

```js
export default {
  data() {
    return {

    }
  },
  methods: {

  }
}
```

`export default`用于指定模块默认输出，因此一个模块中可以有多个`export`，但最多只能有一个`export default`

本质上，export default就是输出一个叫做default的变量或方法，然后输入时系统允许你为它取任意名字。所以，下面的写法是有效的。
```js
// modules.js
function add(x, y) {
  return x * y;
}
export {add as default};
// 等同于
// export default add;

// app.js
import { default as foo } from 'modules';
// 等同于
// import foo from 'modules';
```
所以`export default`后面不能跟变量声明语句，`export default`既可用于匿名函数，也可用于非匿名函数

```js
export defualt function () {
   console.log('Jack')
}
```

```js
function foo () {
   console.log('Jack')
}
export defualt foo
```