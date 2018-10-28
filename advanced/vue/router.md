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
   this.$router.push({
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
对象<br/>动态路由|`<router-link :to="{path:'/detail/1'}"></router-link>`<br/>这种写法的前提是设置了命名路由，即有name属性,注意params的值是个对象|`this.$router.push({path: '/detail/1'})`
对象<br/>含`params`|`<router-link :to="{name: 'detail', params: {age: 20}}"></router-link>`|`this.$router.push({name: 'detail', params: {age: 20}})`
对象<br/>含`query`|`<router-link :to="{path: '/detail', query: {age: 20}}"></router-link>`|`this.$router.push({path: '/detail', query: {age: 20}})`

  
