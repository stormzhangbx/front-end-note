# $event

v-on 的值可以是事件处理器（即一个方法名），或者内联语句（即Javascript语句），如果是内联语句，语句内可以访问一个 $event property：

```html
<button @click="handle('ok', $event)">按钮</button>
<CustomComponent @customMethod="fun($event)"></CustomComponent>
```

## 1 原生dom事件

对于原生dom事件，$event表示的是一个事件对象

- 不使用大括号，$event被自动当作实参传入

```html
<template>
  <div>
    <!-- 这里没有大括号，相当于 -->
    <!-- <div @click="clickFunc($event)"></div> -->
    <div @click="clickFunc">hello</div>
    
    <!-- 当事件逻辑较少时可以直接写在模板上 -->
    <div @click="$event.target.innerHTML = 'world'">hello</div>
  </div>
</template>

<script>
  export default {
    methods: {
      clickFunc (e) { // 这里是定义事件回调函数，如果定义了参数（1个参数、2个参数或者多个参数），那么事件触发时就得传入相应参数数据
        console.log(e) // 打印出div元素上的一个click事件对象
      }
    }
  }
</script>
```

- 使用圆括号，必须显式的传入 `$event` 对象，如果不传入可能最终找到的是全局的window.event

```html
<template>
  <div>
    <div @click="clickFunc('hello', $event)"></div>
  </div>
</template>

<script>
  export default {
    methods: {
      clickFunc (p, e) {
        console.log(e)
      }
    }
  }
</script>
```

## 2 自定义事件

[使用事件抛出一个值](https://cn.vuejs.org/v2/guide/components.html#%E4%BD%BF%E7%94%A8%E4%BA%8B%E4%BB%B6%E6%8A%9B%E5%87%BA%E4%B8%80%E4%B8%AA%E5%80%BC)

对于自定义事件，$event表示的是自定义事件参数

```html
<template>
  <div class="p20">
    <upload-dialog
      :isShow="isVisible"
      @update:isShow="isVisible = $event"/>
  </div>
</template>
```
