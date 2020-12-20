# 路由使用 history

## 1 开发环境

webpack.config.js

```js
devServer:{
  ...
 historyApiFallback: true
}
```

## 2 生成环境

nginx.conf

```conf
location / {
  try_files $uri $uri/ /index.html;
}
```
