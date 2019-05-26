# Math

与其它全局对象不同的是, `Math` 不是一个构造器.  `Math` 的所有属性和方法都是静态的. 你用到的常数pi可以用 `Math.PI` 表示,用 x 作参数 `Math.sin(x)`调用sin函数. JavaScript中的常数, 是以全精度的实数定义的.

方法 | 单词含义 | 说明 | 例子
:-- | :-- | :-- | :--
Math.ceil(x) | v 装天花板 |  向上取整，返回大于或等于一个给定数字的最小整数 | Math.ceil(1.2) === 2，Math.ceil(2) === 2
Math.floor(x) | n 地板，地面 |  向下取整，返回小于或等于一个给定数字的最大整数 | Math.floor(1.2) === 1，Math.floor(2) === 2
Math.random() | adj 随机的 |  返回一个[0, 1)直接的随机数，包头不包尾，即包括0，不包括1 | 0.6918679161423025、0.12033890072949838

- 随机返回数据中的任意一项

```js
function getRandomItem (arr) {
  var randomIndex = Math.floor(Math.random() * arr.length)
  return arr[randomIndex]
}

var arr = ['Yes', 'No', 'Maybe']
console.log(getRandomItem (arr)) // 随机返回数据中的任意一项
```

- 得到一个两数之间的随机数

```js
function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}
console.log(getRandomArbitrary(4.3, 5.6)) // 得到[4.3, 5.6)间的随机数
```

- 得到一个两数min和max之间的随机整数，如果min是整数，则返回值可以是min；不管max是否是整数，返回值一定比max小

```js
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //不含最大值，含最小值
}
```

- 得到一个两数min和max之间的随机整数，包括两个数在内，如果min是整数，则返回值可以是min；如果max是整数，则返回值可以是max

```js
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //含最大值，含最小值
}
```
