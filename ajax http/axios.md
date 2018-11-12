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