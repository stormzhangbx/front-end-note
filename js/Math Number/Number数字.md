# Number数字

## 1 Number()、parseInt() 和 parseFloat() 的区别

parseInt、parseFloat是直接定义在全局对象window下的

### 1.1 Number()

### 1.2 parseInt()

语法：
parseInt(string, radix)

string 要被解析的值。如果参数不是一个字符串，则将其转换为字符串(使用  ToString 抽象操作)。字符串开头的空白符将会被忽略。

radix 表示上述字符串的基数。比如参数"10"表示使用我们通常使用的十进制数值系统。始终指定此参数可以消除阅读该代码时的困惑并且保证转换结果可预测。当未指定基数时，不同的实现会产生不同的结果，通常将值默认为10。

返回值：
返回解析后的整数值。 如果被解析参数的第一个字符无法被转化成数值类型，则返回 NaN。

```js
parseInt(15, 16) // 表示15是16进制数，返回10进制数21 => 1*16 + 5
```

### 1.3 parseFloat()


[链接](https://www.cnblogs.com/yi0921/p/6196841.html)

## 2 Number.prototype.toFixed()

使用定点表示法来格式化一个数，会用到四舍五入。

注意在使用toFixed前，一定要将目标数据转换为Number类型，否则会报错，所以使用前最好先转换为Number。但是该方法的返回值是字符串形式

语法：
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

