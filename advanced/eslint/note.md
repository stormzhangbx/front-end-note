# eslint 笔记

如果eslint是全局安装的，那么使用的`eslint-config-*`,`eslint-plugin-*`也得全局安装；如果eslint是本地安装的，那么使用的`eslint-config-*`,`eslint-plugin-*`也得本地安装

## parser

## extends

一个配置文件可以从基础配置中继承已启用的规则，值可以为字符串或者数组

值为 `eslint-config-*` 的 `extends`属性是别人写好的配置文件，如一个流行的风格指南[eslint-config-standard](https://github.com/standard/eslint-config-standard)。`extends` 属性值可以省略包名的前缀 `eslint-config-`

值为 `eslint:recommended` 的extends属性启用一系列核心规则，这些规则报告一些常见问题，在 [规则页面](https://cn.eslint.org/docs/rules/) 中被标记为对勾

## plugins

在配置文件里配置插件时，可以使用 `plugins` 关键字来存放插件名字的列表。插件名称可以省略 `eslint-plugin-` 前缀。
