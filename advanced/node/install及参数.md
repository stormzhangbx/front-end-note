# install及参数

install命令用于安装一个包以及它所依赖的任何包

## 1 -g

安装在全局的地方，所有node项目都可以使用这个module，安装路径可以通过`npm root -g`查看。

## 2 不带参数

`npm i`

默认会安装两种依赖，安装在项目目录下的node_modules目录中。在项目根目录下使用（含package.json）。安装package.json中列出的所有依赖（开发和生产环境）

## 3 --save-prod或是-P(--save或者-S)

安装在项目目录下的node_modules目录中，并把安装包信息写入package.json文件的dependencies字段中，表明是运行时依赖，正常使用`npm install`时，会下载dependencies和devDependencies中的模块，当使用`npm install –production`或者注明NODE_ENV变量值为production时，只会下载dependencies中的模块。

如vue、vue-router

## 4 --save-d或者-D

安装在项目目录下的node_modules目录中，并安装包信息写入package.json文件的devDependencies字段中，表明是开发时依赖

如webpack、loader类、测试类、优化类的包

## 5 只写包名

如 `npm i loadsh`，将会把安装包信息写入package.json文件的dependencies

```json
{
  "name": "elementUI-cli3-template",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "serve": "vue-cli-service serve",
    "build:test": "vue-cli-service build --mode test",
    "build:alpha": "vue-cli-service build --mode alpha",
    "build": "vue-cli-service build",
    "lint": "vue-cli-service lint"
  },
  "dependencies": {
    "axios": "^0.18.0",
    "echarts": "^4.2.0-rc.2",
    "element-ui": "^2.7.0",
    "js-cookie": "^2.2.0",
    "lodash": "^4.17.11",
    "pdfjs-dist": "^2.0.943",
    "store": "^2.0.12",
    "v-charts": "^1.19.0",
    "vue": "^2.6.8",
    "vue-echarts": "^3.1.3",
    "vue-neditor-wrap": "^1.0.4",
    "vue-router": "^3.0.1",
    "vue2-ace-editor": "0.0.13",
    "vuex": "^3.0.1"
  },
  "devDependencies": {
    "@vue/cli-plugin-babel": "^3.2.0",
    "@vue/cli-plugin-eslint": "^3.2.0",
    "@vue/cli-service": "^3.2.0",
    "@vue/eslint-config-standard": "^4.0.0",
    "babel-eslint": "^10.0.1",
    "babel-plugin-component": "^1.1.1",
    "eslint": "^5.8.0",
    "eslint-plugin-vue": "^5.0.0-0",
    "less": "^3.0.4",
    "less-loader": "^4.1.0",
    "vue-cli-plugin-element": "^1.0.0",
    "vue-template-compiler": "^2.6.8"
  }
}
```
