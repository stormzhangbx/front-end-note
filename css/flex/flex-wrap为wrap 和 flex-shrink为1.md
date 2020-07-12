# flex-wrap为wrap 和 flex-shrink为1

## 1 flex 布局

```html
<style>
  .box {
    display: flex;
    background-color: #ccc;
  }
  .item {
    width: 200px;
    height: 200px;
  }
  .bgc-red {
    background-color: red;
  }
  .bgc-green {
    background-color: green;
  }
  .bgc-blue {
    background-color: blue;
  }
  .bgc-yellow {
    background-color: yellow;
  }
</style>

<div class="box">
    <div class="item bgc-red"></div>
    <div class="item bgc-green"></div>
    <div class="item bgc-blue"></div>
    <div class="item bgc-yellow"></div>
</div>
```

调整浏览器宽度，容器宽度随浏览器宽度变化而变化，当容器宽度不够时，项目会被压缩。

## 2 容器添加 `flex-wrap: wrap;`

```html
<style>
  .box {
    display: flex;
    flex-wrap: wrap;
    background-color: #ccc;
  }
  .item {
    width: 200px;
    height: 200px;
  }
  .bgc-red {
    background-color: red;
  }
  .bgc-green {
    background-color: green;
  }
  .bgc-blue {
    background-color: blue;
  }
  .bgc-yellow {
    background-color: yellow;
  }
</style>

<div class="box">
    <div class="item bgc-red"></div>
    <div class="item bgc-green"></div>
    <div class="item bgc-blue"></div>
    <div class="item bgc-yellow"></div>
</div>
```

调整浏览器宽度，容器宽度随浏览器宽度变化而变化，当容器宽度不够时，项目不被压缩，项目会换行显示。

## 3 项目添加 `flex-shrink: 0;`

```html
<style>
  .box {
    display: flex;
    background-color: #ccc;
  }
  .item {
    width: 200px;
    height: 200px;
    flex-shrink: 0;
  }
  .bgc-red {
    background-color: red;
  }
  .bgc-green {
    background-color: green;
  }
  .bgc-blue {
    background-color: blue;
  }
  .bgc-yellow {
    background-color: yellow;
  }
</style>

<div class="box">
    <div class="item bgc-red"></div>
    <div class="item bgc-green"></div>
    <div class="item bgc-blue"></div>
    <div class="item bgc-yellow"></div>
</div>
```

调整浏览器宽度，容器宽度随浏览器宽度变化而变化，当容器宽度不够时，项目溢出，容器出现横向滚动条。

## 4 容器添加 `flex-wrap: wrap;`、项目添加 `flex-shrink: 0;`（或`flex-shrink: 1;`）

```html
<style>
  .box {
    display: flex;
    flex-wrap: wrap;
    background-color: #ccc;
  }
  .item {
    width: 200px;
    height: 200px;
    flex-shrink: 0;
    /* flex-shrink: 1; */
  }
  .bgc-red {
    background-color: red;
  }
  .bgc-green {
    background-color: green;
  }
  .bgc-blue {
    background-color: blue;
  }
  .bgc-yellow {
    background-color: yellow;
  }
</style>

<div class="box">
    <div class="item bgc-red"></div>
    <div class="item bgc-green"></div>
    <div class="item bgc-blue"></div>
    <div class="item bgc-yellow"></div>
</div>
```

调整浏览器宽度，容器宽度随浏览器宽度变化而变化，当容器宽度不够时，项目不被压缩，项目会换行显示。

效果跟第二种情况一样。说明当容器设置成可换行时，项目的 flex-shrink 属性失效。