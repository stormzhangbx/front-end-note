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
css属性|作用
:--|:--
height|设置元素的长度
position、top、bottom、left、right|配合起来可以设置元素的位置
transform|设置元素的样式外观的

元素的样式从一种情况变为另外一种情况，加上一定的过程时间，就可以形成过渡（动画）效果。而能设置时间的有CSS属性transition、animation，以及javascript（jq）,因此可以把css属性分为两类，一类是height、position、transform等设置静态样式的，另一类是transition、animation设置过渡（动画）的。

## 2 过渡transition

CSS3的过渡功能就像是一种黄油，可以让CSS的一些变化变得平滑。因为原生的CSS过渡在客户端需要处理的资源要比用JavaScript和Flash少的多，所以才会更平滑。

## 2.1 过渡属性

属性 | 描述
:--|:--
transition|简写属性，用于在一个属性中设置四个过渡属性
transition-property|指定应用过渡的css属性的名称，可以是none、all(默认)、property
transition-duration|指定完成过渡效果花费的时间，以秒（s）或毫秒计（ms），需指定单位，默认是0，意味着不会有效果
transition-timing-function|指定过渡函数，默认是ease
transition-delay|指定过渡开始出现的延迟时间，以秒（s）或毫秒计（ms），默认是0

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

CSS属性animation就是为了解决这些问题而提出的。

## 3 动画animation

CSS3的animation属性可以像Flash制作动画一样，通过控制关键帧来控制动画的每一步，实现更为复杂的动画效果。ainimation实现动画效果主要由两部分组成：

- 通过类似Flash动画中的帧来声明一个动画。
- 在animation属性中调用关键帧声明的动画。

**Note**：animation属性到目前为止得到了大多数浏览器的支持，但是，需要添加浏览器前缀哦！需要添加浏览器前缀哦！需要添加浏览器前缀哦！

动画属性：
属性|描述
:--|:--
@keyframes|规定动画。
animation|所有动画属性的简写属性，除了 animation-play-state 属性
animation-name|规定 @keyframes 动画的名称
animation-duration|规定动画完成一个周期所花费的秒或毫秒。默认是 0
animation-timing-function|规定动画的速度曲线。默认是 "ease"
animation-fill-mode|规定当动画不播放时（当动画完成时，或当动画有一个延迟未开始播放时），要应用到元素的样式
animation-delay|规定动画何时开始，即触发后多久开始动画。默认是 0，如果为infinite，则无限次循环播放
animation-iteration-count|规定动画被播放的次数。默认是 1
animation-direction|规定动画是否在下一周期逆向地播放。默认是 "normal"，如果 animation-direction 值是 "alternate"，则动画会在奇数次数（1、3、5 等等）正常播放，而在偶数次数（2、4、6 等等）反向播放（反向即将关键帧@keyframes中定义的步骤反过来）
animation-play-state|规定动画是否正在运行或暂停。默认是 "running"，"paused"表示暂停 

animation-fill-mode介绍：
- none：这是默认值，正是这个值，使得动画不会对动画等待和动画完成的元素样式产生改变。
- forwards：如果设置为这个值，那么在动画结束后，元素的样式将设置为动画的最后一帧的样式。
- backwards：如果设置为这个值，那么在动画等待的那段时间内，元素的样式将设置为动画第一帧的样式。
- both：相当于同时配置了backwards和forwards，意味着在动画等待和动画结束状态，元素将分别应用动画第一帧和最后一帧的样式。

参考链接：
[animation-fill-mode的一些思考](https://www.cnblogs.com/lyzg/archive/2016/08/08/5738860.html)
[如何理解animation-fill-mode及其使用？](https://segmentfault.com/q/1010000003867335)

目前浏览器都不支持@keyframes规则，Firefox支持替代的@-moz-keyframes规则，Opera支持替代的@-o-keyframes规则，Safari和Chrome支持替代的@-webkit-keyframes规则

@keyframes中0%可以由from代替，100%可以由to代替。

元素在动画被触发前本来就有一个样式状态，动画的第一帧定义了另一个样式状态，这两个并不相同。可以将第一帧的样式状态定义为元素在动画被触发前本来就有样式状态，这样就不会出现跳跃现象。

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>菜鸟教程(runoob.com)</title>
  <style>
    #myDIV {
      position: relative;
      width: 550px;
      height: 100px;
      margin: 25px;
      font-size: 20px;
      background: orange;
    }
    /* Chrome, Safari, Opera */
    @-webkit-keyframes mymove {
      from {top: 100px;}
      to {top: 200px;}
    }
    @keyframes mymove {
      from {top: 100px;}
      to {top: 200px;}
    }
  </style>
</head>
<body>
  <p>该实例使用了 addEventListener() 方法为 DIV 元素添加"animationstart", "animationiteration" 和 "animationend" 事件。</p>
  <div id="myDIV" onclick="myFunction()">点我开始动画</div>
  <script>
    var x = document.getElementById("myDIV")
    // 使用 JavaScript 开始动画
    function myFunction() {
      x.style.WebkitAnimation = "mymove 4s 2 backwards 5s"; // Chrome, Safari 和 Opera 代码
      x.style.animation = "mymove 4s 2 backwards 5s"; // 这个例子体现了animation-full-mode的作用
    }
    //  Chrome, Safari 和 Opera
    //x.addEventListener("webkitAnimationStart", myStartFunction);
    //x.addEventListener("webkitAnimationIteration", myIterationFunction);
    //x.addEventListener("webkitAnimationEnd", myEndFunction);
    x.addEventListener("animationstart", myStartFunction);
    x.addEventListener("animationiteration", myIterationFunction);
    x.addEventListener("animationend", myEndFunction);

    function myStartFunction() {
      this.innerHTML = "animationstart 事件触发 - 动画已经开始";
      this.style.backgroundColor = "pink";
    }
    function myIterationFunction() {
      this.innerHTML = "animationiteration 事件触发 - 动画重新播放";
      this.style.backgroundColor = "lightblue";
    }
    function myEndFunction() {
      this.innerHTML = "animationend 事件触发 - 动画已经完成";
      this.style.backgroundColor = "lightgray";
    }
  </script>
</body>
</html>
```

```html
<style>
  @keyframes ani {
    0%{background: red}
    25%{background: blue}
    75%{background: yellow}
    100%{background: green}
  }
  .animation {
    width: 100px;
    height: 100px;
    border: 1px solid black;
    animation: ani 5s infinite;
  }
</style>
<body>
  <div class="animation"></div> <!-- 文档一加载就有动画效果-->
</body>
```

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
  <style>
    .box {
      width: 100px;
      height: 100px;
      background-color: red;
    }
    @keyframes move{
      from {
        background-color: blue;
        transform: translate3d(100px, 0, 0)
      }
      33% {
        background-color: green;
        transform: translate3d(100px, 100px, 0)
      }
      66% {
        background-color: green;
        transform: translate3d(0, 100px, 0)
      }
      to {
        background-color: green;
        transform: translate3d(0, 0, 0)
      }
    }
    .ani {
      animation: move 3s;
    }
  </style>
</head>
<body>
  <button type="button">开始动画</button>
  <div class="box"></div>
  <script>
    var button = document.getElementsByTagName('button')[0]
    var box = document.querySelector('.box')
    button.onclick = function () {
      box.className += ' ani'
    }
    box.addEventListener('animationend', function() {
      this.className = 'box' // 使点击按钮可以重复触发动画
    })
  </script>
</body>
</html>
```

## 说明

不管是过渡还是动画，都是需要一定的事件才能触发，如鼠标悬浮事件（hover），对于过渡，元素在hover事件发生前已经定义了transition属性，如`transition: all 2s;`，hover事件发生时给元素添加或者修改样式，这样过渡才发生。即开始样式和时间定义在事件发生前，结束样式定义在事件发生后

对于动画，先定义好动画帧，事件发生时给元素添加animation属性，如`animation: ani 5s infinite;`。即开始样式定义在事件发生前，结束样式和时间定义在事件发生后