# note

1 两个字符串变量通过比较运算符比较大小时需注意

```js
var a = '50', b = '100'
console.log(a > b) // true
```

```js
var a = '50', b = '100'
console.log(a - b > 0) // false
```

