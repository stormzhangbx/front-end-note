# 模块

一个模块就是一个独立的文件。该文件内部的所有变量，外部无法获取。如果你希望外部能够读取模块内部的某个变量，就必须输出该变量（作为一个接口暴露出去）

## 1 输出

> 通过在模块中使用`export`、`export default`来暴露接口

### 1.1 export、export default用法
```js
// 模块中可以有多个export, 但最多只能有一个export default
export const name = 'Jack' // export用法1，直接输出接口，export后直接跟变量声明语句
export const run = () => {
  console.log('I can run')
}

// export { name, run } // export用法2，使用大括号指定所要输出的一组变量
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
// vue单文件组件中的export default
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
function add (x, y) {
  return x * y
}
export { add as default } // 等同于 export default add
```
```js
// app.js
import { default as foo } from 'modules' // 等同于 import foo from 'modules'
```

### 1.2 注意
- **`export default`后面不能跟变量声明语句**
- `export default`既可用于匿名函数，也可用于非匿名函数，如
  ```js
  export default function printMe() {
    console.log('I get called from print.js!');
  }
  ```
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
- `export`命令可以出现在模块的任何位置，只要处于模块顶层就可以。如果处于块级作用域内，就会报错，import命令也是如此

## 2 输入
> 通过`import`输入其他模块对外的接口

### 2.1 用法

- 输入通过`export`输出的接口，如下，其中`export1`，`export2`，`export3`必须与模块module.js中对应的变量名（别名）一样，**即需要知道所要加载的变量名或函数名，否则无法加载**
  `import { export1, export2, export3 } from './module.js'`
  **或者整体加载**
  `import * as util from './module.js'`

- 输入通过`export default`输出的接口，如下，其中`randomName`可以随意取名
  `import randomName from './module.js'`

- 同时输入通过`export`，`export default`输出的接口（即一条import语句中，同时输入默认方法和其他接口）， 如下
  `import randomName, { export1, export2, export3 } from './module.js'`

import后面的from指定模块文件的位置，可以是相对路径，也可以是绝对路径，.js后缀可以省略。如果只是模块名，不带有路径，那么必须有配置文件，告诉 JavaScript 引擎该模块的位置。
`import {myMethod} from 'util'`
上面代码中，util是模块文件名，由于不带有路径，必须通过配置，告诉引擎怎么取到这个模块（**如果使用webpack，其会帮我们做这个工作**）


