# Image()

- MDN[链接](https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLImageElement/Image)
- (js中图片预载入与Image()类)[https://www.jianshu.com/p/43172f40347b]

Image()函数将会创建一个新的`HTMLImageElement`实例。它的功能等价于`document.createElement('img')`

## 语法
`new Image(width, height)`，`width`表示图片的宽度 (即 width 属性)，`height`表示图片的高度 (即 height 属性)。

上面的`width`、`height`注意区别`naturalWidth`、`naturalHeight`，`width`、`height`是值图片显示的宽高，而`naturalWidth`、`naturalHeight`是指图片实际的像素大小

创建一个Image对象：`var a=new Image()`; 定义Image对象`a.src='xxx.gif'`; 此时会通过HTTP请求图片，这样做就相当于给浏览器缓存了一张图片。通过这一措施，当真正需要图像时，它就可以被立即从缓存中取出，从而能够立即显示。

当出现`<img src="">`和`var a=new Image(); a.src='xxx.gif'`时，首先会检测浏览器是否已经缓存过该图片，如果已经缓存，则直接从缓存中获取，如果没有，则发生HTTP请求获取

## 属性

border,complete,height,hspace,lowsrc,name,src,vspace,width

可以通过Image对象的complete 属性来检测图像是否加载完成（每个Image对象都有一个complete属性，当图像处于装载过程中时，该属性值false,当发生了onload、onerror、onabort（图片加载中断时触发）中任何一个事件后，则表示图像装载过程结束（不管成没成功），此时complete属性为true）

需要注意的是：src 属性一定要写到 onload 的后面，否则程序在 IE 中会出错。

## 事件

onabort,onerror,onkeydown,onkeypress,onkeyup,onload

其中最有用的一个肯定是 onLoad事件，它在图像完全载入之后调用。这个事件处理器可以与一个自定义函数联系起来，以在图像完全载入之后执行一些特定的任务。src 属性一定要写到 onload 的后面，否则程序在 IE 中会出错。

图片预加载
```js
var modeImgCache = (function () {
  var count = 12
  var imgs = new Array(count)
  var imgLoaded = 0

  // 加载单个图片
  function downloadImage (i) {
    imgs[i].onLoad = validateImages(i)
    imgs[i].src = './image/' + i + '.jpg' // 该js文件同级目录image下有0.jpg-12.jpg图片
  }

  // 验证是否成功加载完成，如不成功则重新加载
  function validateImages(i) {
    if (!imgs[i].complete) { // complete为false肯定是没有加载成功，重新加载
      setTimeout(() => {
        downloadImage(i)
      }, 200)
    } else if (typeof imgs[i].naturalWidth != 'undefined' && imgs[i].naturalWidth == 0) { // onerror和onabort时，虽然complete为true，但也没有加载成功，重新加载
      setTimeout(() => {
        downloadImage(i)
      }, 200)
    } else {
      imgLoaded++
    }
  }
  function preLoadImgs() {
    for (var i = 0; i <= 11; i++) {
      imgs[i] = new Image()
      downloadImage(i)
    }
  }

  preLoadImgs()
  return imgs
})()
console.log(modeImgCache)
```

