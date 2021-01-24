# 类数组

类数组：拥有一个 length 属性和若干索引属性的任意对象

```js
// function getArray(a, b) {
//   return [a, b]
// }

// function getArray (...numbers) {
//   return numbers
// }

// function getArray () {
//   return Array.from(arguments)
// }

function getArray() {
  // return Array.prototype.slice.call(arguments)
  return [].slice.call(arguments)
}

console.log(getArray(1, 2))
```