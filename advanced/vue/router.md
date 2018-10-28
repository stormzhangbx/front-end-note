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

  
