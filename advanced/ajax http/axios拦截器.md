# axios 拦截器

![02](images/02.png)

## 1 拦截请求

可用于统一设置请求配置信息

## 2 拦截响应

用 status 表示响应状态码，当 status >= 200 && status < 300，响应被onFullfilled，否则被 onRejected

