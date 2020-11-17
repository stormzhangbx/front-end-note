[从零开始搭建一个vue-ssr（上）](https://segmentfault.com/a/1190000019618170)
[github](https://github.com/TheWalkingFat/ssr-demo)

[带你五步学会Vue SSR](https://segmentfault.com/a/1190000016637877)
[github](https://github.com/leocoder351/vue-ssr-demo/tree/master/01)

非服务器端渲染 | 服务器端渲染
:-- | :--
后台返回一个空的页面 | 一个非空的页面，有利于爬虫爬取（搜索引擎优化）

每一个路由其实都返回了一个html页面，请求接口响应 content-type 为 `text/html; charset=utf-8`

服务器端渲染指的是服务器端只负责将所需的初始的页面渲染好，页面返回到浏览器后，之后的一些逻辑 js 操作是在浏览器端（客户端）进行的。

Nuxt.js 增强方法

为什么要使用 Nuxt.js 提供的axios?

在传统 Vue 项目中，可以在 main.js 文件中引入（封装的）axios，然后将其绑定到 Vue 原型上，这样在任意一个组件中就可以使用 axios，而无需多次导入。使用 Nuxt.js 提供的axios就可以事项这样的效果。