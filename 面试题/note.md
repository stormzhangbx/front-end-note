# note

[web大前端面试——JavaScript](https://www.jianshu.com/p/4840a90751e1)

[前端面试题（三）](https://blog.csdn.net/sysuzjz/article/details/104858308)

1. 讲一讲application/x-www-form-urlencoded、multipart/form-data

2. 下面代码中打印的值分别是多少
   
```js
var a = function () { this.b =3; }
var c = new a();
a.prototype.b = 9;
var b = 7;
a(); 

console.log(b)
console.log(c.b)
```

3. 这两种方式有什么区别

```js
let a = Object.create(null)
let a = {}
```

4. 不知道 div 的宽高，`<body><div id="block"></div></dody>` 在屏幕中垂直并且水平居中？

5. 请实现如下的函数，可以批量请求数据，所有的 URL 地址在 urls 参数中，同时可以通过 max 参数控制请求的并发度，当所有请求结束之后，需要执行 callback 回掉函数。发请求的函数可以直接使用 fetch 即可

```js
function sendRequet(urls: string[], max: number, callback: () => void) {
  // 补全代码
}
```

6. 给定一个升序整形数组[0,1,2,4,5,7,13,15,16]，找出其中连续出现的数字区间为如下：["0->2", "4->5", "7", "13", "15->16"]

```js
function summaryRanges(arr) {
  // 补全代码
}
```

7. 以下两种方式有上面区别

```js
function a () {}; 
const a = () => {};

new a();
```

8. Vue 中父子组件通信的方式有哪些

```html
<A>
    <B></B>
</A>
```

9. Vue 中的 keep-alive 是什么，有什么作用