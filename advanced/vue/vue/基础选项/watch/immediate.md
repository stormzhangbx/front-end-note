# watch

watch 既能监听 data 中属性变化，也能监听 props 中属性变化，还可以监听计算属性。

handler 不能是箭头函数。

## 1 immediate

user.vue

```html
<template>
  <div>{{name}}</div>
</template>

<script>
export default {
  props: ['message'],
  data () {
    return {
      name: 'Jack'
    }
  },
  watch: {
    message: {
      immediate: true,
      handler (val) {
        this.name = val
      }
    }
  }
}
</script>
```

index.vue

```html
<template>
  <div>
    <button type="button" @click="text='Bob'">点击</button>
    <test :message="text" />
  </div>
</template>

<script>
import Test from './components/test'
export default {
  components: {
    Test
  },
  data () {
    return {
      text: 'Marry'
    }
  }
}
</script>
```

结果：页面开始显示的是 Marry，点击按钮显示文本变成 Bob。

分析：组件中 name property 初始值是 Jack，message prop 默认值是 undefined，在父组件中传入组件的 message 为 'Marry'，因为组件内部监听了 message prop，且 immediate 设置为 true，监听回调会在检测到变化后立即执行，将 message 的值赋给 name，即 Marry。

当把 test.vue 改为

test.vue

```html
<template>
  <div>{{msg}}</div>
</template>

<script>
export default {
  name: 'test',
  props: ['message'],
  data () {
    return {
      msg: 'Jack'
    }
  },
  watch: {
    message: {
      immediate: false,
      handler (val) {
        this.msg = val
      }
    }
  }
}
</script>
```

页面开始显示的是 Jack，点击按钮显示文本变成 Bob。
