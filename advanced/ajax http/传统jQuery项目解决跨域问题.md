# 传统jQuery项目解决跨域问题

初始化一个npm项目，安装依赖

```
npm init

npm i express http-proxy-middleware --save-dev
```

利用express在搭建本地静态服务器，相对于平时使用的anywhere

项目A，假设为一个平时开发的jQuery项目

通过`http://localhost:3002/`就可以访问目录src下的静态资源文件，如`http://localhost:3002/index.html`、`http://localhost:3002/logo.png`，注意这里容易犯的错是通过`http://localhost:3002/src/`来访问资源

在浏览器中输入`http://localhost:3002/index.html`或`http://localhost:3002`访问index.html页面，点击按钮，此时产生一个ajax请求`http://localhost:3002/api/test`，http-proxy-middleware会将该请求代理到`http://localhost:3000/api/test`从而实现跨域请求

页面在`http://localhost:3002`，接口在`http://localhost:3000`，本来两者是在不同域下的

```
js-demo
|- /node_modules
|- /src
  |- index.html
|- config.js
|- package.json
|- package-lock.json
```

```js
// config.js
var express = require('express')
var proxy = require('http-proxy-middleware')

var app = express()

app.use(express.static(`src`))

app.use('/api', proxy({target: 'http://localhost:3000/', changeOrigin: true}));
app.listen(3002, () => console.log('http://localhost:3002/src/'))
```

```html
...
<body>
  <button onclick="getData()">ajax</button>
  <script>
    const getData = () => {
      var xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP")
      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
          console.log(xhr.response) // 返回响应正文
        }
      }
      xhr.open('GET', '/api/test')
      xhr.send()
    }
  </script>
</body>
...
```

项目B，用express起一个服务，用于体用项目A所需的接口，运行`npm index.js`，即提供get接口`http://localhost:3000/api/test`

```
express-test
|- /node_modules
|- index.js
|- package.json
|- package-lock.json
```

```js
// index.js
const experss = require('express')
const app = experss()

app.get('/api/test', (req, res) => res.send('hello world'))

app.listen(3000, () => console.log('Example app listening on port 3000!'))
```
