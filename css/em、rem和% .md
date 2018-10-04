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

2 font-size: 2em;字体大小单位如果是em，则相对的始终（一定）是父元素字体大小，如

3 元素自身没有设置字号大小时，元素的width、height、line-height、margin、padding、border等值转换都按下面公式转换:
**(1/父元素的font-size值) * 需转换的像素值**

4 元素设置了字体大小，那么字体大小的转换依旧按第二条公式计算，也就是下面的（此条结论是对2的具体说明）:
**(1/父元素的font-size值) * 需转换的像素值**

5 元素设置了字体大小，此元素的其他属性，如“border、width、height、padding、margin、line-height”计算就需要按照下面的公式来计算：
**(1/元素自身的font-size值) * 需转换的像素值**

```html
<style>
  
</style>
...
<body>
  <div class="d1">
    <div class="d2">hello</div>
  </div>
</body>
```


## 2 rem

## 3 %
