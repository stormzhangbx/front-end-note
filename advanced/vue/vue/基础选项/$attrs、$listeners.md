# $attrs、$listeners

[禁用 Attribute 继承](https://cn.vuejs.org/v2/guide/components-props.html#%E7%A6%81%E7%94%A8-Attribute-%E7%BB%A7%E6%89%BF)

 `$attrs` 表示使用组件时，组件上除了 prop 之外的一些 attribute（class 和 style除外）组成的对象，对象的属性名是 attribute 名称，属性值是 attribute 值。

[将原生事件绑定到组件](https://cn.vuejs.org/v2/guide/components-custom-events.html#%E5%B0%86%E5%8E%9F%E7%94%9F%E4%BA%8B%E4%BB%B6%E7%BB%91%E5%AE%9A%E5%88%B0%E7%BB%84%E4%BB%B6)

 `$listeners` 表示使用组件时，通过 v-on 绑定在组件上的事件（使用 .native 的除外）组成的对象，对象的属性名是事件名，属性值是对应的事件处理函数。

 在定义组件时，可以使用`$attrs`、`$listeners`，如在模板中`v-bind="$attrs"`、`v-on="$listeners"`

例子：

为什么在`<el-button @click="handleclick">查询</el-button>`上不需要加`.native`也是可以的？

查看源码（只展示部分）：

```html
<template>
  <button @click="handleClick"></button>
</template>

<script>
return default {
  methods: {
    handleClick(evt) {
      this.$emit('click', evt);
    }
  }
}
</script>
```

通过源码知道不加native的click是一个自定义事件。其次加native的click也是可以的，表示将原生点击事件绑定到按钮上。

如果想将其他原生事件绑定到el-button上，还是需要使用`.native`，否则没有效果。

 