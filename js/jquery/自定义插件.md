# 自定义插件

jQuery 自定义插件可以分为以下两类：

- 自定义一个工具方法，类似 `$.trim(str)`，这种比较简单，相当于在 $ 中新增一个属性，如

  ```js
  $.myMethod(obj)
  ```

- 自定义一个插件，这种常用到，在网上找到的 jQuery 插件通常就是这种，如

  ```js
  $(selector).myPlugin(option)
  ```
下面讲述第二种插件的创建、使用。

## 1 创建

新建一个 js 文件，文件名为 jQuery.myPlugin.js，插件添加到 `jQuery.fn` 对象下，定义时像这样

```js
// 将代码包裹在一个自执行函数中，防止全局变量污染
(function (jQuery) {
  jQuery.fn.myPlugin = function (options) {
    // options 为插件配置项，并提供配置项默认值
    var options = jQuery.extend({
      key1: value1,
      key2: value2,
      //...
    }, options);
    // 插件中定义的所有方法/函数的末尾都必须带有一个 “;”（分号），否则将不利于代码的最小化

    // 函数中的 this 用于引用 jQuery 对象，即 `$(selector)`
    // 因为选择器选择的元素可能有多个，通过 this.each() 迭代匹配的元素
    // 返回 jQuery 对象，便于 jQuery 的链式调用
    return this.each(function () {
      // 此处的 this，表示当前被迭代到的 jQuery 对象
    });
  }
})(jQuery)
```

## 2 使用

```js
<script src="./plugin/jquery.js"></script>
<script src="./plugin/jquery.myPlugin.js"></script>
<script>
  $(selector).myPlugin(option)
</script>
```

