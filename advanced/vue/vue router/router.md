# router笔记

## 1 路由传参的几种方式

路由常用于“页面”间跳转，跳转时常常需要携带一些参数，可以通过以下几种方式：

1. 通过动态路由
   ```javascript
   // 路由配置
   {
     path: '/detail/:id',
     component: detail
   }
   ```

   ```javascript
   // 编程式导航
   this.$router.push('/detail/001')
   ```
   参数值会被设置到`this.$route.params.id`，这种方式最简单，但不适合传递多个参数

2. 通过params
   ```javascript
   // 路由配置
   {
     path: '/detail',
     name: 'detail'
     component: detail
   }
   ```
   ```javascript
   // 编程式导航
   this.$router.push({
    name: 'detail',
    params: {
      name: 'zbx',
      age: 20
    }
   })
   ```
   参数值会被设置到`this.$route.params.name`

3. 通过query
   ```javascript
   // 路由配置
   {
     path: '/detail',
     component: detail
   }
   ```
   ```javascript
   // 编程式导航
   this.$router.push({ // /detail?name=zbx&age=20
     path: '/detail',
     query: {
       name: 'zbx',
       age: 20
     }
   })
   ```
   参数值会被设置到`this.$route.query.name`

总结，query要用path来引入，params要用name来引入，接收参数都是类似的，分别是`this.$route.query.name`和`this.$route.params.name`。

## 2 声明式导航、编程式导航
||声明式|编程式
:--:|:--|:--
字符串|`<router-link to="/detail"></router-link>`<br>`<router-link :to="'/detail'"></router-link>`|`this.$router.push('/detail')`
对象<br/>简单|`<router-link :to="{path:'/detail'}"></router-link>`|`this.$router.push({path: '/detail'})`
对象<br/>动态路由|`<router-link :to="{path: '/detail/1'}"></router-link>`<br/>这种写法的前提是设置了命名路由，即有name属性,注意params的值是个对象|`this.$router.push({path: '/detail/1'})`
对象<br/>含`params`|`<router-link :to="{name: 'detail', params: {age: 20}}"></router-link>`|`this.$router.push({name: 'detail', params: {age: 20}})`
对象<br/>含`query`|`<router-link :to="{path: '/detail', query: {age: 20}}"></router-link>`|`this.$router.push({path: '/detail', query: {age: 20}})`

## 3 keep-alive

## 4 滚动行为

## 5 vue单页面应用打开新窗口显示跳转页面的方法

一般单页面应用，例如vue都是通过vue-router来做跳转，不会像多页应用一样另起新页面显示，但是也不排除一些业务上的需要，现在的需求是另外开启一个新页面来显示跳转到的页面，原本的窗口保持页面不变

声明式导航：
```html
<router-link tag="a" target="_blank" to="/detail">
```

编程式导航：
```js
const { href } = this.$router.resolve('/detail')
window.open(href, '_blank')
// 或者window.open(href, '_blank', 'toolbar=yes, width=1300, height=900')
```

## 6 路由守卫

路由守卫的类型有多种，使用路由守卫的地方都别忘了调用`next()`




