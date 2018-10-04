# em、rem和%

参考链接
- [CSS中强大的EM](https://www.w3cplus.com/css/px-to-em)

目录
- [1 em](1-em)
- [2 rem](2-em)
- [3 %](3-%)

## 1 em

em是一个相对单位，相对的计算必然会有一个参考物，那么这里相对所指的是相对于元素父元素的font-size。比如说：如果在一个设置字体大小为“16px”，此时这个的后代元素将继承他的字体大小，除非重新在其后代元素中进行过显示的设置。此时，如果你将其子元素的字体大小设置为“0.75em”，那么其字体大小计算出来后就相当于“0.75 X 16px = 12px”。有如下结论：
 
1 浏览器默认字体大小是16px。

2 `font-size: 2em;`字体大小单位如果是em，则相对的始终（一定）是父元素字体大小，如

3 元素自身没有设置字号大小时，元素的width、height、line-height、margin、padding、border等值转换都按下面公式转换：
**(1/父元素的font-size值) * 需转换的像素值**

4 元素设置了字体大小，那么字体大小的转换依旧按第二条公式计算，也就是下面的（此条结论是对2的具体说明）：
**(1/父元素的font-size值) * 需转换的像素值**

5 元素设置了字体大小，此元素的其他属性，如border、width、height、padding、margin、line-height计算就需要按照下面的公式来计算：
**(1/元素自身的font-size值) * 需转换的像素值**

```html
...
<body>
  <div class="d1">
    <div class="d2">hello</div>
  </div>
</body>
```

假设div.d2需要的样式如下：

```css
.d1 {
  width: 200px;
  height: 100px;
  border: 5px solid red;
  margin: 15px;
  padding: 10px;
  line-height: 18px;
}
```

按照上述结论3，将px转换为em

```css
.d1 {
  width: 12.5em; /*1 ÷ 16 × 200 = 12.5em值*/
  height: 6.25em; /*1 ÷ 16 × 100 = 6.25em值*/
  border: 0.3125em solid red; /*1 ÷ 16 × 5 = 0.3125em值*/
  margin: 0.9375em; /*1 ÷ 16 × 15 = 0.9375em值*/
  padding: 0.625em; /*1 ÷ 16 × 10 = 0.625em值*/
  line-height: 1.125em; /*1 ÷ 16 × 18 = 1.125em值*/
}
```

接下来给div.d2新增一个样式`font-size: 14px`，此时font-size按照结论4计算，其他样式值按照结论5计算

```css
.d1 {
  font-size: 0.875em; /*1 ÷ 16 × 14= 0.875em值*/ 
  width: 14.2857em; /*1 ÷ 14 × 200 = 14.2857em值*/ 
  height: 7.1429em; /*1 ÷ 14 × 100 = 7.1429em值*/ 
  border: 0.357em solid red; /*1 ÷ 14 × 5 = 0.357em值*/ 
  margin: 1.071em; /*1 ÷ 14 × 15 = 1.071em值*/ 
  padding: 0.714em; /*1 ÷ 14 × 10 = 0.714em值*/ 
  line-height: 1.2857em; /*1 ÷ 14 × 18 = 1.2857em值*/
}
```

## 2 rem

rem是全部的长度都相对于根元素，根元素是谁？<html>元素。通常做法是给html元素设置一个字体大小，然后其他元素的长度单位就为rem。

## 3 %

`box-size: content-box;`时：
- width：这个属性定义元素内容区的宽度，在内容区外面可以增加内边距、边框和外边距。
- height：这个属性定义元素内容区的高度，在内容区外面可以增加内边距、边框和外边距。

`box-size: border-box;`时：
- width：设置的就是内容区+左右内边距+边框水平方向长度。
- height：设置的就是内容区+左右内边距+边框垂直方向长度。

padding，margin,width这些属性的百分比始终以父容器的内容区宽度为基准，而height是以父容器的高度为基准（若父容器没有设置高度，即height的值为auto,则浏览器会设置子容器的height为auto），这句话重点有两个：
-	是以内容区为基准
-	padding，margin,width是以内容区宽度为基准，height是以内容区高度为基准
