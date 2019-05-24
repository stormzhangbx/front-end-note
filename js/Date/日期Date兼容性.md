# 日期Date兼容性

> 一般 直接new Date() 是不会出现兼容性问题的，而 new Date(datetimeformatstring) 常常会出现浏览器兼容性问题，为什么，datetimeformatstring中的某些格式浏览器不兼容。


## 1 无参

`var dateTime = new Date()` 所有浏览器都兼容

## 2 日期参数

### 2.1 参数为`yyyy-MM-dd`

```js
var dateTime = new Date("2019-05-18")
```

- IE9- 不兼容，IE9+（包含IE9） 兼容
- 火狐、谷歌兼容

### 2.2 参数为`yyyy/MM/dd`

```js
var dateTime = new Date("2019/05/18")
```

所有浏览都兼容

## 3 日期时间参数

### 3.1 参数为`yyyy-MM-dd hh:mm:ss`


```js
var dateTime = new Date("2019-05-18 13:41:00")
```

- IE 不管哪个版本，都不兼容
- 火狐 不兼容
- 谷歌 兼容

### 3.2 参数为`yyyy/MM/dd hh:mm:ss`

所有浏览都兼容


综上，所有主流浏览器都支持的格式为：

```js
var dateTime = new Date("2017/09/12")
```

```js
var dateTime = new Date("2017/09/12 13:42:00")
```

那么解决方案就是 将datetimeformatstring 转换成 `yyyy/MM/dd`或`yyyy/MM/dd hh:mm:ss` 格式化字符串即可，如：

```js
var time = "2016-07-20 12:21:12";
var timestart = new Date(str.replace(/-/g,"/"));
```

```js
var s = '2019-05-16'
var s1 = '2019/05/16'
console.log(new Date(s)) // Thu May 16 2019 08:00:00 GMT+0800 (中国标准时间)，注意这里是8点
console.log(new Date(s1)) // Thu May 16 2019 00:00:00 GMT+0800 (中国标准时间)， 注意这里是0点
```
