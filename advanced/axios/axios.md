## 传参
### data
axios中规定了'PUT', 'POST', 和 'PATCH'传参是通过如下方式

```js
{
  // 在没有设置 `transformRequest` 时，value必须是以下类型之一：
  // - string, plain object, ArrayBuffer, ArrayBufferView, URLSearchParams
  // - 浏览器专属：FormData, File, Blob
  // - Node 专属： Stream
  data: value,
}
```

平时value的值多是对象，其实也可以是数组等，如

```js
{
  data: [1, 2, 3]
}
```

规定'get'传参是通过如下方式

```js
{
  params: {
    id: '123'
  }
}
```

### params

get请求通过`params`来传参

请求头content-type默认是'application/json; charset=utf-8'

## 封装axios

封装axios的目的主要是以下几点

- 在每个请求请求头设置token（登录请求除外）
- 在每个请求之前开始loading，在请求结束后结束loading
- axios get和post请求等请求方式的传参形式不同，封装可以统一传参形式
- **如果请求发生错误（有两类错误：1 http状态码status非2xx类错误；2 http状态码status为2xx，但是返回数据code不是success或者00之类标识）**
- 请求成功时，结果response是一个对象，属性包含config、data等，而主要使用的时其中的data，封装可以减少重复操作
