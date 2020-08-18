# 匿名函数的使用场景

匿名函数顾名思义指的是没有名字的函数，在实际开发中使用的频率非常高！也是学好JS的重点。

声明一个普通函数

```js
function fn() {
  console.log('hello')
}
```

如果在上面的基础上直接去掉函数名，此时浏览器会提示错误 Uncaught SyntaxError: Function statements require a function name

```js
function () {
  console.log('hello')
}
```

匿名函数的应用场景

## 1 函数表达式

```js
var x = function (a, b) {
  return a * b
}
```

## 2 用于事件回调

```html
<input type="button" value="点我啊！" id="sub">

<script>
    //获得按钮元素
    var sub=document.querySelector("#sub");
    //给按钮增加点击事件。
    sub.onclick=function(){
        alert("当点击按钮时会执行到我哦！");
    }
</script>
```

## 3 作为对象值

```js
var obj={
    name: 'Jack',
    age: 18,
    fn: function() {
        return '我叫' + this.name + '今年' + this.age + '岁了！'
    }
}

console.log(obj.fn())
```

## 4 回调函数

```js
setInterval(function(){
    console.log('我其实是一个回调函数，每次1秒钟会被执行一次');
}, 1000);
```
## 5 闭包中的返回值

```js
function fn(){
    //返回匿名函数
    return function(){
        return 'hello'
    }
}
//调用匿名函数
console.log(fn()())

//或
var box=fn();
console.log(box())
```