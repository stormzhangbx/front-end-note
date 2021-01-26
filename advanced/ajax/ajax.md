# ajax

参考链接

* [http://www.imooc.com/learn/762](http://www.imooc.com/learn/762)
* [http://www.imooc.com/video/5645](http://www.imooc.com/video/5645)
* [https://developer.mozilla.org/zh-CN/docs/Web/API/XMLHttpRequest](https://developer.mozilla.org/zh-CN/docs/Web/API/XMLHttpRequest)

当服务器内容发生改变时，通过刷新浏览器页面，可以使页面呈现的内容改变。使用XMLHttpRequest (XHR)对象可以与服务器交互。您可以从URL获取数据，而无需让整个的页面刷新。这使得Web页面可以只更新页面的局部，而不影响用户的操作。XMLHttpRequest在 Ajax 编程中被大量使用。

```js
var xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP")
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4 && xhr.status === 200) {
    console.log(xhr.response) // 返回响应正文
  }
}
xhr.open('GET', '/info?userName=zbx')
xhr.send()
```

```js
var xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP")
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4 && xhr.status === 200) {
    console.log(xhr.response)
  }
}
xhr.open('POST', '/info')
xhr.send('userName=zbx')
```

注意点：

* onreadystatechange事件要写在open和send之前
* GET请求不需要设置Content-type，POST请求Content-type默认是'application/x-www-form-urlencoded; charset=utf-8'，通过xhr.setRequestHeader('Content-type', 'xxx')可以设置

**xhr.responseType用于设置或者获取返回响应数据的类型，默认值是一个空字符串，表示响应正文是DOMString类型（如果原先不是这个类型，会转化为DOMString类型），当将responseType设置为一个特定的类型时，你需要确保服务器所返回的类型和你所设置的返回值类型是兼容的。那么如果两者类型不兼容呢?恭喜你，你会发现服务器返回的数据变成了null，即使服务器返回了数据。还有一个要注意的是，给一个同步请求设置responseType会抛出一个InvalidAccessError 的异常。**

如data.json

```json
{"a": 1, "b":"hello"}
```

```js
var xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP")
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4 && xhr.status === 200) {
    console.log(xhr.response) // '{"a": 1, "b":"hello"}'
    console.log(typeof xhr.response) // string
  }
}
xhr.open('GET', '/data.json')
xhr.send('userName=zbx')
```

```js
var xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP")
xhr.responseType = 'json'
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4 && xhr.status === 200) {
    console.log(xhr.response) // {a: 1, b: "hello"}
    console.log(typeof xhr.response) // Object
  }
}
xhr.open('GET', '/data.json')
xhr.send('userName=zbx')
```

创建 XMLHttpRequest 对象（xhr）后，就可以设置 timeout、responseType属性。只有当执行了 open() 后、send()前才可以设置请求头，即执行 setRequestHeader()。

当服务器端在设置的timeout时间内没有响应请求，xhr 即发生 timeout 事件，导致请求终止。

默认情况下xhr.responseType的值为 `text`，请求成功后，`xhr.response`、`xhr.responseText`为字符串。当设置 `xhr.responseType = 'json'`，且服务器端返回值是json格式，则`xhr.response`是一个JavaScript对象。

```js
var xhr = new XMLHttpRequest()
console.log(xhr) // 打印xhr对象
xhr.timeout = 3000 // 设置超时时间为3000毫秒
xhr.onload = function() { // 请求完成时触发
  console.log('onload', this) // this表示当前的xhr对象
}
xhr.onerror = function() { // 请求遇到错误时触发
  console.log('onerror', this)
}
xhr.onabort = function() { // 当请求被停止时触发，例如调用xhr.abort()时
  console.log('onabort', this)
}
xhr.ontimeout = function() { // 在预设时间内没有收到响应时触发
  console.log('ontimeout', this)
}
xhr.open('GET', 'http://localhost:8080/user/1')
xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8')
xhr.send()
```