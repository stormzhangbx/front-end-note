# editorconfig

> 使项目代码在不同开发者和编辑器上具有一致样式

想象如下场景，中途进入一个项目时发现该项目的`Tab`键是4个空格，而自己平时编程时`Tab`键是2个空格，并且编辑器vscode也是这样配置的，如果为了这个项目去修改编辑器配置，那么在做其他项目或者自己平时练习时又得去修改编辑器配置，这样很麻烦。editorconfig可以解决这个问题

可以用 `.editorconfig` 来定义项目的编码规范，编辑器的行为会与`.editorconfig`文件中定义的一致，并且其优先级比编辑器自身的设置要搞，在多人合作开发项目时十分有用并且必要。

vscode 原生不支持editorconfig，需要安装插件EditorConfig for VS Code，安装插件后在项目根目录下新建.editorconfig文件，.editorconfig文件可以覆盖编辑器原先的配置

下面是一份平时用的配置

```
root = true

[*]
charset = utf-8
indent_style = space
indent_size = 2
end_of_line = lf
insert_final_newline = true
trim_trailing_whitespace = true
```
