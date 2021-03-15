# Vue3和Vue2对比

## 1 创建根应用的不同

### 1.1 Vue2

main.js

```js
import Vue from 'vue'

import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
```

App.Vue

```html
<template>
  <div id="app">
    <Layout/>
  </div>
</template>

<script>
import Layout from '@/components/Layout'
export default {
  components: {
    Layout
  }
}
</script>

<style lang="less">
  #app {
    height: 100%;
  }
</style>
```

### 1.2 Vue3

main.js

```js
import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'
import App from './App.vue'
import router from './router'
import store from './store'

createApp(App).use(store).use(router).use(ElementPlus).mount('#app')
```

## 2 创建组件的不同

## 2.1 Vue2

HelloWorld.vue

```html
<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'hello world'
    }
  }
}
</script>
```
## 2.2 Vue3

选项式API

```html
<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p>{{msg}}</p>
  </div>
</template>

<script>

export default {
  data() {
    return {
      msg: 'hello world'
    }
  }
}
</script
```

组合式API

```html
<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p>{{msg}}</p>
  </div>
</template>

<script>
import { reactive, toRefs } from 'vue'
export default {
  setup (props, cxt) {
    const state = reactive({
      msg: 'hello world'
    })
    return {
      ...toRefs(state)
    }
  }
}
</script>
```

```html
<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p>{{msg}}</p>
  </div>
</template>

<script>
import { defineComponent, reactive, toRefs } from 'vue'
export default defineComponent({
  setup (props, cxt) {
    const state = reactive({
      msg: 'hello world'
    })
    return {
      ...toRefs(state)
    }
  }
})
</script>
```

[Vue3 - defineComponent解决了什么？](https://blog.csdn.net/qq_36157085/article/details/109498473)

defineComponent 函数，只是对 setup 函数封装，返回一个对象：

```js
export function defineComponent(options: unknown) {
  return isFunction(options) ? {setup: options} : options
}
```

defineComponent 最重要的是：在 TypeScript 下，给予组件正确的参数类型推断。

