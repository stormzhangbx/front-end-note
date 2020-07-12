# $attrs、$listeners

 $attrs 表示使用组件时，组件上除了 prop 之外的一些 attribute（class 和 style除外）组成的对象，对象的属性名是 attribute 名称，属性值是 attribute 值。

 $listeners 表示使用组件时，通过 v-on 绑定在组件上的事件（使用 .native 的除外）组成的对象，对象的属性名是事件名，属性值是对应的事件处理函数。

 在定义组件时，可以使用$attrs、$listeners，如在模板中`v-bind="$attrs"`、`v-on="$listeners"`

 例子：

 