# 正则表达式

MDN中关于正则的介绍，[链接](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp#character-sets)

之前看到这样一句话，“正则很强大，可惜你不会用”，的确，虽然平时经常使用正则，但常常是copy现成的。有时同一个功能，使用正则可以节省很多代码量，如下面格式化日期的方法，比常规截取字符串再拼接的方法代码简洁很多。

```js
const formatDate = (d, format = 'yyyy-MM-dd HH-mm-ss') => {
  const date = new Date(d)
  const year = date.getFullYear()
  const month = date.getMonth() + 1 // 月份是从0开始的
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()
  const arr = ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09']
  const result = format.replace(/yyyy/, year)
    .replace(/MM/, arr[month] || month)
    .replace(/dd/, arr[day] || day)
    .replace(/HH/, arr[hour] || hour)
    .replace(/mm/, arr[minute] || minute)
    .replace(/ss/, arr[second] || second)
  return result
}
```

正则表达式中特殊字符的含义（重点！）

- 字符类别（Character Classes）
- 字符集合（Character Sets）
- 边界（Boundaries）
- 分组（grouping）与反向引用（back references）
- 数量词（Quantifiers）
- 断言（Assertions）
