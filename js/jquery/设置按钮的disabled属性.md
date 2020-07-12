# 设置按钮的disabled属性

按钮的 disabled 属性有点特殊，只要元素存在该属性，不管属性值为什么，按钮都是失效状态。所以只能通过控制元素 disabled 属性的有无来控制按钮的状态

下面的按钮都是失效的

```html
<button type="button" disabled>按钮</button>
<button type="button" disabled="false">按钮</button>
<button type="button" disabled="null">按钮</button>
<button type="button" disabled="undefined">按钮</button>
```

例子：

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <style>
    button + button {
      margin-left: 20px;
    }
  </style>
</head>
<body>
  <button type="button" id="btn">按钮</button>
  <button type="button" onclick="active()">激活</button>
  <button type="button" onclick="disable()">失效</button>

  <script src="./plugin/jquery-3.3.1.js"></script>
  <script>
    var btn = $('#btn')
    // 移除disabled属性
    function active () {
      btn.removeAttr('disabled')
    }

    // 添加disabled属性
    function disable () {
      btn.attr('disabled', true) // 其实将属性值设置成什么都无所谓，这里设置成true，只是让语义显得更明确点
    }
  </script>
</body>
</html>
```