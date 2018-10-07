# install及参数

install命令用于安装包，以及所安装包依赖的所有包

## 1 -g

安装在全局的地方，所有node项目都可以使用这个module，安装路径可以通过npm root -g查看。

## 2 不带参数

安装在项目目录下的node_modules目录中。在项目根目录下使用（含package.json）。安装package.json中列出的所有依赖（开发和生产环境）

## 3 --save或者-S

安装在项目目录下的node_modules目录中，并把安装包信息写入package.json文件的devDependencies字段中，表明是开发时依赖，正常使用`npm install`时，会下载dependencies和devDependencies中的模块，当使用`npm install –production`或者注明NODE_ENV变量值为production时，只会下载dependencies中的模块。

## 4 --save-d或者-D

安装在项目目录下的node_modules目录中，并安装包信息写入package.json文件的dependencies字段中，表明是运行时依赖