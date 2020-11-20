# 自定义组件使用v-model

官方文档说明[自定义组件的 v-model](https://cn.vuejs.org/v2/guide/components-custom-events.html#%E8%87%AA%E5%AE%9A%E4%B9%89%E7%BB%84%E4%BB%B6%E7%9A%84-v-model)

`v-model`是 Vue2 中唯一支持双向绑定的指令，用于表单控件绑定，但不代表它只能用在表单控件之上。`v-model`其实是个语法糖。

```html
<input v-model="something">
```

这不过是以下示例的语法糖：

```html
<input :value="something"  @input="something = $event.target.value">
```

也就是说，你只需要在组件中声明一个名称为value的props，并且通过触发名称为input的自定义事件向父组件抛出一个值，就能修改这个value。这跟.sync是很类似的。

```html
<!-- myComponent.vue -->
<template>
  <div>
    <p>{{value}}</p>
    <el-button type="primary" @click="inputFunc">按钮</el-button>
  </div>
</template>

<script>
export default {
  name: 'myComponent',
  props: {
    value: {
      type: String,
      default: ''
    }
  },
  data () {
    return {}
  },
  methods: {
    inputFunc () {
      this.$emit('input', '22222')
    }
  }
}
</script>
```

```html
<!-- form.vue -->
<template>
  <div class="p20">
    <my-component v-model="title"/>
    <!-- 相当于 -->
    <!-- <my-component :value="title" @input="title = $event"/> -->
  </div>
</template>

<script>
import MyComponent from '@/components/myComponent.vue'

export default {
  components: {  MyComponent },
  data () {
    return {
      title: '1111'
    }
  },
}
</script>
```
