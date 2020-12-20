查看 el-button 组件源码可以看出组件内部有一个自定义的 click 事件，源码简化如下

```html
<template>
  <button @click="handleClick"> </button>
</template>

<script>
export default {
  methods: {
    handleClick(evt) {
      this.$emit('click', evt);
    }
  }
}
</script>
```

所以可以在 el-button 上监听 “click” 事件，而不需要加上 “.native”。若组件内部没有做相应的处理，在组件上监听原生事件，需要加上 “.native” 修饰符。如下面想要使用回车键就能触发查询操作：

```html
<el-input v-model="form.name" @keyup.enter.native="search" />

```