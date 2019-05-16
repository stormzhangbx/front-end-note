# nth-child和nth-of-type

> 这类选择器一般与其他选择器（特别是标签选择器）组合使用，匹配的元素**既要符合标签选择器又要符合下列选择器的定义**

## 1 nth-child相关

### 1.1 nth-child(n)

匹配作为父元素下的第n个子元素，这里的n表示自然数（从1开始），也可以是odd(表示奇数)，even(表示偶数)，2n+1（1、3、5…），2n（2、4、6…）

```html
...
<style>
  p:nth-child(2) {
    color: red;
  }
</style>
...
<body>
  <div>
    <h3 id="h1">测试nth-child</h3>
    <p id="p1">语文</p>
    <p id="p2">数学</p>
    <p id="p3">英语</p>
    <p id="p4">英语</p>
    <h3 id="h2">测试结束</h3>
  </div>
...
```

如p:nth-child(2)，表示匹配的元素是p元素，并且是其父元素下的第2个元素，同时符合这两个条件的只有#p1。

而p:nth-child(1),以前以为可以匹配到#h1，这种理解是错误的，因为这只考虑到了作为其（p）父元素下的第1个元素，没有考虑到还得为p元素，所以该选择器没有匹配到任何元素

### 1.2 :nth-last-child(n)

该选择器与:nth-child(n)相对，表示匹配作为父元素下的倒数第n个子元素

### 1.3 :first-child

匹配作为父元素的第一个子元素，nth在英文中是第n的简写（如5th,12th）,first表示第一，因此该选择器其实是:nth-child(1)的简写，如h3:first-child

### 1.4 :last-child

匹配作为父元素下的最后一个子元素,如h3:last-child,等价于h3:nth-last-child(1)
上面例子中p:nth-of-type(1)与p:nth-child(2)是一样的
p:nth-of-type(1),相当于把p元素的父元素下的所有非p元素剔除，再选择第1个元素

## 2 nth-of-type

匹配作为父元素的同类型子元素中的第n个，如，li:nth-of-type(2)选择器的匹配条件是：该`<li>`元素必须是父元素的所有`<li>`类型的子元素中的第二个

### 2.1 nth-last-of-type(n)

匹配作为父元素的同类型子元素中的倒数第n个

### 2.2 first-of-type

匹配作为父元素的第一个该类型的子元素的元素，等价于:nth-of-type(1)

### 2.3 last-of-type

匹配作为父元素的最后一个该类型的子元素的元素，等价于:nth-last-of-type(1)
