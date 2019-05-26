# Number数字

## Number()、parseInt() 和 parseFloat() 的区别

parseInt、parseFloat是直接定义在全局对象window下的

[链接](https://www.cnblogs.com/yi0921/p/6196841.html)

## Number.prototype.toFixed()

使用定点表示法来格式化一个数，会用到四舍五入。

注意在使用toFixed前，一定要将目标数据转换为Number类型，否则会报错，所以使用前最好先转换为Number。但是该方法的返回值是字符串形式

用法：
numObj.toFixed(digits) digits表示小数点后数字的个数，如果忽略该参数，则默认为0

```js
var s = '1.234'
var r = s.toFixed(1) // Uncaught TypeError: s.toFixed is not a function
```

```js
function financial(x, d) {
  return parseFloat(parseFloat(x).toFixed(d))
}
var n = financial(2.3456, 2) // 2.35
console.log(typeof n) // number
```

