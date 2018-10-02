# :nth-child和:nth-of-type

这两个选择器一般与其他选择器（特别是标签选择器）组合使用，匹配的元素既要符合标签选择器又要符合该选择器的定义

## 1 :nth-child类

匹配作为父元素下的第n个子元素，这里的n表示自然数（从1开始），也可以是odd(表示奇数)，even(表示偶数)

如p:nth-child(2),表示匹配的元素是p元素，并且是其父元素下的第2个元素，同时符合这两个条件的只有#p1

而p:nth-child(1),以前以为可以匹配到#h1，这种理解是错误的，因为这只考虑到了作为其（p）父元素下的第1个元素，没有考虑到还得为p元素，所以该选择器没有匹配到任何元素

![nth-child](https://github.com/stormzhangbx/front-end-note/blob/master/css/image/nth-child.png "图一")
### 1.1 :nth-child(n)

### 1.2 :nth-last-child(n)

### 1.3 :first-child

### 1.4 :last-child

## 2 :nth-of-type类

### 2.1 :nth-of-type(n)

### 2.2 :nth-last-of-type(n)

### 2.3 :first-of-type

### 2.4 :last-of-type
