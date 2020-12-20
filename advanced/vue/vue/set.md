# set

## 1 数组更新检测

[数组更新检测](https://cn.vuejs.org/v2/guide/list.html#%E6%95%B0%E7%BB%84%E6%9B%B4%E6%96%B0%E6%A3%80%E6%B5%8B)

### 1.1 变更方法

顾名思义，会变更调用了这些方法的原始数组，有push、pop、shift、unshift、splice、sort、reverse：

```js
this.list.push({ name: 'Jack' })
```

### 1.2 非变更方法

不会变更原始数组，而总是返回一个新数组，如filter、concat、slice，当使用非变更方法时，可以用新数组替换旧数组：

```js
this.list = this.list.filter(item => item.checked)
```

## 2 set作用

[检测变化的注意事项](https://cn.vuejs.org/v2/guide/reactivity.html#%E6%A3%80%E6%B5%8B%E5%8F%98%E5%8C%96%E7%9A%84%E6%B3%A8%E6%84%8F%E4%BA%8B%E9%A1%B9)

### 2.1 给 data 中的对象 property 添加新属性

```html
<template>
  <div>
    <div>
      <el-button @click="handler">click</el-button>
    </div>
    <ul>
      <li v-for="(value, key) in info" :key="key">{{key}}--{{value}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Button',
  data () {
    return {
      info: {
        name: 'Jack',
        sex: 'man'
      }
    }
  },
  methods: {
    handler () {
      this.$set(this.info, 'age', 20)
    }
  }
}
</script>
```

不可以直接通过键名去添加:

```js
this.info.age = 20
```

注意，如果想修改已有属性的值，可以直接赋值:

```js
this.info.name = 'Marry'
```

### 2.2 利用索引设置数组 property 的某项值

想要变更一个数组 property，**除了使用上面的变更方法、非变更方法外，还可以使用 $set**。如当想要修改数组某一项的值时：

可以：

```html
<template>
  <div>
    <div>
      <el-button @click="handler">click</el-button>
    </div>
    <ul>
      <li v-for="item in students" :key="item">{{item}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      students: ['Jack', 'Marry', 'Tom']
    }
  },
  methods: {
    handler () {
      this.$set(this.students, 2, 'Bob')
    }
  }
}
</script>
```

```js
this.students.splice(2, '1', 'Bob')
```

不可以直接通过索引去设置:

```js
this.students[2] = 'Bob'
```

