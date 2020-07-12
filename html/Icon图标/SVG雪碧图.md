# SVG 雪碧图

## 1 几种图标使用方式的对比

### 1.1 原始时代

在没有 image 雪碧图的时代，页面中每处用到图标的地方都意味着一次 http 请求，过多的请求不利于页面的优化。 

### 1.2 image 雪碧图

image 雪碧图就是将多个图片合成一个图片，然后利用 css 的 background-position 定位显示不同的图片。image 雪碧图有些缺点：

- 难以维护，每新增一个图标，都需要改动原始图片，还可能不小心出错影响到前面定位好的图片。
- 不能修改很好修改图标的颜色和大小。

### 1.3 SVG 雪碧图

SVG 雪碧图具有如下优点：

- 减少了http请求。
- 通过webpack 的 require.context可以批量、自动导入 SVG 文件，易于维护。
- 很好修改图标颜色（支持多色）、大小

## 2 通过 Vue 组件使用 SVG 雪碧图

[手摸手，带你优雅的使用 icon](https://juejin.im/post/59bb864b5188257e7a427c09)

[https://segmentfault.com/a/1190000015367490](https://segmentfault.com/a/1190000015367490)