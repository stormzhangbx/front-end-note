# deep

当 deep 为 true 时，可以监听到对象、数组的变化，默认值时 false，只能监听到字符串、数字等简单类型。

下面列出了几种监听对象的方式：

## 1 deep 为 true

**监听prop**

user.vue

```html
<template>
  <div>{{info.name}}</div>
</template>

<script>
export default {
  props: ['message'],
  data () {
    return {
      info: { name: 'Jack' }
    }
  },
  watch: {
    message: {
      deep: true,
      handler (val) {
        this.info = val
      }
    }
  }
}
</script>
```

index.html

```html
<template>
  <div>
    <user :message="info" />
    <button type="button" @click="info.name='Bob'">点击</button>
  </div>
</template>

<script>
import User from './components/user'
export default {
  components: {
    User
  },
  data () {
    return {
      info: { name: 'Marry' }
    }
  }
}
</script>
```

结果：页面开始显示的是 Jack，点击按钮显示文本变成 Bob。

分析：因为这里没有设置 immediate，所以组件初始化时不会立即触发监听回调，开始时，info 的值即为i其初始值。

当组件中 deep 值为 false：

user.html

```html
<template>
  <div>{{info.name}}</div>
</template>

<script>
export default {
  props: ['message'],
  data () {
    return {
      info: { name: 'Jack' }
    }
  },
  watch: {
    message: {
      deep: false,
      handler (val) {
        this.info = val
      }
    }
  }
}
</script>
```

页面开始显示的是 Jack，点击按钮页面显示无变化。

## 2 通过计算属性

如果watch监测的是一个对象的话，直接使用watch是不行的，此时我们可以借助于computed计算属性来完成。

**监听计算属性**

```html
<template>
  <div>
    <button type="button" @click="info.name='Bob'">点击</button>
    <div>{{value}}</div>
  </div>
</template>

<script>
export default {
  name: 'test',
  data () {
    return {
      info: { name: 'Jack' },
      value: ''
    }
  },
  computed: {
    name () {
      return this.info.name
    }
  },
  watch: {
    name: {
      handler (val) {
        this.value = val
      }
    }
  }
}
</script>
```

## 3 另一种监听对象的方式

```html
<template>
  <div>
    <button type="button" @click="info.name='Bob'">点击</button>
    <div>{{value}}</div>
  </div>
</template>

<script>
export default {
  name: 'test',
  data () {
    return {
      info: { name: 'Jack' },
      value: ''
    }
  },
  watch: {
    'info.name': {
      handler (val) {
        this.value = val
      }
    }
  }
}
</script>
```