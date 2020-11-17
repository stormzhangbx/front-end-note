# mixins、extends

[混入](https://cn.vuejs.org/v2/guide/mixins.html)
[mixins](https://cn.vuejs.org/v2/api/#extends)

都是 Vue 中的选项，类似面向对象中的继承。

mixins 的值是对象数组，可以理解为多继承。extends 的值是对象或者函数，可以理解为单继承。

## 使用场景一

例如有些属性、方法等在多个组件中被使用，可以将这些通用的属性、方法等提取到一个 js 文件中，然后在用到这些属性、方法的组件中通过 mixins 导入，例如：

page.js

```js
export default {
  data () {
    return {
      page: 1,
      size: 10,
      total: 0
    }
  }
}
```

user.vue

```html
<template>
  <!-- ... -->
</template>

<script>
import page from '@/mixins/page.js'
export default {
  mixins: [page],
  //...
}
</script>
```

## 使用场景二

修改一个已有组件的默认值。

下面通过 mixins 或 extends，修改 element-ui 中按钮的默认大小，注意 my-button.vue 文件中不需要定义 template 部分。

my-button.vue

```vue
<script>
import { Button } from 'element-ui'

export default {
  // extends: Button,
  mixins: [Button],
  name: 'myButton',
  props: {
    size: {
      default: 'small'
    }
  },
  data () {
    return {}
  },
  methods: {}
}
</script>
```
