# 日期时间的获取与设置

名称 | 返回 | 设置
:-- | :-- | :--
年 yyyy | getFullYear() | setFullYear()
月 MM | getMonth() | setMonth()
日 dd | getDate() | setDate()
时 hh | getHours() | setHours()
分 mm | getMinutes() | setMinutes()
秒 ss | getSeconds() | setSeconds()
毫秒 | getMilliseconds() | setMilliseconds()
星期 | getDay() |

上述方法都是用在日期对象上

## 1 年

- getFullYear 根据本地时间返回指定日期对象的年份（四位数年份时返回四位数字）
- setFullYear 根据本地时间为指定日期对象设置完整年份（四位数年份是四个数字）

## 2 月

- getMonth 根据本地时间返回指定日期对象的月份（0-11）
- setMonth 根据本地时间为指定日期对象设置月份

注意0表示一月，11表示十二月，所以在日期格式化方法中需要加1：

```js
var m = dateObj.getMonth() + 1
```
  
## 3 日

- getDate 根据本地时间返回指定日期对象的月份中的第几天（1-31）
- setDate 根据本地时间为指定的日期对象设置月份中的第几天

有时常把这两个误记成getDay、setDay

## 4 时

- getHours 根据本地时间返回指定日期对象的小时（0-23）
- setHours 根据本地时间为指定日期对象设置小时数

## 5 分

- getMinutes 根据本地时间返回指定日期对象的分钟（0-59）
- setMimutes 根据本地时间为指定日期对象设置分钟数

## 6 秒

- getSeconds 根据本地时间返回指定日期对象的秒数（0-59）
- setSeconds 根据本地时间为指定日期对象设置秒数
  
## 7 毫秒

- getMilliseconds 根据本地时间返回指定日期对象的毫秒（0-999）
- setMilliseconds 根据本地时间为指定日期对象设置毫秒数

## 8 星期

- getDay 根据本地时间返回指定日期对象的星期中的第几天（0-6）
  
0表示星期天，6表示星期6

英语中星期几都是以day结尾，所以这里getDay表示获取星期

日期格式化，在年月日时分秒中，除了年不需要补零，月日时分秒都需要补零
