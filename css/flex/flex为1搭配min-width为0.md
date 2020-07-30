# flex:1 搭配 min-width:0

在一个 flex 布局中，对于一个设置了 `flex:1` 的div容器，再对其设置 `min-width: 0`，可以保证内容不超出该div。

```html
<style>
    * {
        padding: 0;
        margin: 0;
    }
    .box {
        display: flex;
        height: 100px;
        width: 300px;
        margin-bottom: 20px;
        background-color: #ccc;
    }
    .item1 {
        flex: 1;
    }
    p {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
</style>

<body>
    <div class="box">
        <div class="item1">
            <p>在一个flex布局中，对于一个设置了flex属性设置为1的div容器，再对其设置min-width：0，对这个div有啥影响？或者这种做法是为了解决什么问题？谢谢大佬指点</p>
        </div>
    </div>
</body>
```

![02](../image/02.png)

当 div.item 样式：

```css
.item1 {
    flex: 1;
    min-width: 0;
}
```

页面效果：

![03](../image/03.png)