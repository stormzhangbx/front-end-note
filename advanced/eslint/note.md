# eslint 笔记

如果eslint是全局安装的，那么使用的`eslint-config-*`,`eslint-plugin-*`也得全局安装；如果eslint是本地安装的，那么使用的`eslint-config-*`,`eslint-plugin-*`也得本地安装

## parser

## extends

一个配置文件可以从基础配置中继承已启用的规则，值可以为字符串或者数组

值为 `eslint-config-*` 的 `extends`属性是别人写好的配置文件，如一个流行的风格指南[eslint-config-standard](https://github.com/standard/eslint-config-standard)。`extends` 属性值可以省略包名的前缀 `eslint-config-`

值为 `eslint:recommended` 的extends属性启用一系列核心规则，这些规则报告一些常见问题，在 [规则页面](https://cn.eslint.org/docs/rules/) 中被标记为对勾

## plugins

在配置文件里配置插件时，可以使用 `plugins` 关键字来存放插件名字的列表。插件名称可以省略 `eslint-plugin-` 前缀。

## eslint 注释

有时候会不可避免的违反eslint规则，如果不想修改eslint配置文件，可以通过在文件中注释使错误或警告消失。

### 特定行

```js
// 在某一特定的行上禁用所有规则
alert('foo') /* eslint-disable-line */
```

```js
// 在某一特定的行上禁用某个指定的规则
alert('foo') /* eslint-disable-line no-alert */
```

### 整个文件或一块代码

`/* eslint-disable */`之后的代码将禁用eslint规则或者某些eslint规则

```js
// 在整个文件或一块代码范围内禁止规则出现警告
/* eslint-disable */
alert('foo')
```

```js
// 在整个文件或一块代码范围内禁用某个指定的规则
/* eslint-disable no-alert */
alert('foo')
```
