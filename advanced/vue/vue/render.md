# render

[vue中el属性，template属性，render函数的优先级，el属性，template属性，render函数分别都做了什么事情](https://blog.csdn.net/jiang7701037/article/details/83178630)

在配置 Vue 实例时（一般是在 index.js 文件中），el 选项、实例的 $mount 方法两者必须有一个。可以没有template选项、render选项，如果同时存在，也只有 render 会生效，因为其优先级更高。

如果存在 render 或 template，就会用 render 或 template 内容，替换 el 的 **outHTML**。