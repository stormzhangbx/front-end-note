# css3 过渡和动画

目录

- [1 概述](#1-概述)
- [2 过渡transition](#2-过渡transition)
  - [2.1 过渡属性](#21-过渡属性)
  - [2.2 触发过渡](#22-触发过渡)
  - [2.3 过渡的局限性](#23-过渡的局限性)
- [3 动画animation](#3-动画animation)

## 1 概述

动画可以通过 gif、flash、JavaScript来创建，如 jq 的$(selector).animate({params}, speed, callback)

- params，定义形成动画的css属性，注意css属性要写成驼峰形式
- speed，规定效果的时长，可以是“slow”、“fast”或毫秒
- callback，可选，动画完成后执行的回调函数

jq动画注意：默认地，所有HTML元素都有一个静态位置，且无法移动，如需对位置进行操作，记得首先把元素的CSS position属性设置为relative、fixed或者absolute。

CSS属性是规定元素的样式，如
| css属性                            | 作用                       |
| :--------------------------------- | :------------------------- |
| height                             | 设置元素的长度             |
| position、top、bottom、left、right | 配合起来可以设置元素的位置 |
| transform                          | 设置元素的样式外观的       |

元素的样式从一种情况变为另外一种情况，加上一定的过程时间，就可以形成过渡（动画）效果。而能设置时间的有CSS属性transition、animation，以及javascript（jq）,因此可以把css属性分为两类，一类是height、position、transform等设置静态样式的，另一类是transition、animation设置过渡（动画）的。

## 2 过渡transition

CSS3的过渡功能就像是一种黄油，可以让CSS的一些变化变得平滑。因为原生的CSS过渡在客户端需要处理的资源要比用JavaScript和Flash少的多，所以才会更平滑。

## 2.1 过渡属性

属性 | 描述
:--|:--
transition-property|指定要过渡的css属性，可以是none、all(默认)、property
transition-duration|指定完成过渡要花费的时间，以秒（s）或毫秒计（ms），需指定单位，默认值0，意味着不会有效果
transition-time-function|指定过渡函数，默认值ease
transition-delay|指定过渡开始出现的延迟时间，以秒（s）或毫秒计（ms），默认值0

因为过渡所需要时间与过渡延迟时间的单位都是秒，所以在合起来写transition的属性的时候，第一个time会解析为transiton-duration，第二个解析为transition-delay。所以，可以给transition一个速记法:
`transition：过渡属性 过渡所需时间 过渡函数 过渡延迟时间;`

如下面的代码，图片的宽高本来都是15px，想要让它1秒的时间内过渡到宽高为450px，通过：hover来触发，那么代码就可以如下：

```css
img{
  height:15px;
  width:15px;
  transition: height 1s ease 1s; /* 合在一起 */
}
/* 或者：*/
img{
  height：15px;
  width: 15px;
  transition-property: height;
  transition-duration: 1s;
  transition-delay: 1s;
  transition-timing-function: ease; /* 属性分开写 */
}
img:hover{
  height: 450px;
  width: 450px;
}
```

因为transition常用于transform属性的过渡，不要误以为其只能用于transform，也可以应用于其他的css属性的过渡。

## 2.2 触发过渡

单纯的代码不会触发任何过渡操作，需要通过用户的行为（如点击，悬浮等）触发，可触发的方式有：:hover、:focus、:checked、媒体查询触发、JavaScript触发


## 2.3 过渡的局限性

> 局限性，即和动画的区别

transition的优点在于简单易用，但是它有几个很大的局限:

- transition需要事件触发，所以没法在网页加载时自动发生。
- transition是一次性的，不能重复发生，除非一再触发。
- transition动画效果简单，只能定义开始状态和结束状态，不能定义中间状态，也就是说只有两个状态。

CSS属性Animation就是为了解决这些问题而提出的。

## 3 动画animation
