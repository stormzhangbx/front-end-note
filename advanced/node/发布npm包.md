# 发布npm包

> 将自己封装好的代码、方法发布到npm上供他人和自己使用，这样可以避免重复造轮子，提高开发效率，因此要熟练使用node的module（模块）

## 步骤

1 前置条件，安装node环境，注册npm账号

2 新建一个文件夹npm-demo，进入后执行npm init，接下来是一长串表单

- name: 填写你这个包的名字，默认是你这个文件夹的名字。不过这里要着重说一下，最好先去npm上找一下有没有同名的包，否则发布是会因为同名而报错。这里包名叫npm-demo-zbx，初始化完成后也可以直接修改package.json文件
- version: 这个包的版本，默认1.0.0
- description: 描述包时干嘛的，如"my first npm package, just for test"
- entry point：入口文件，默认是index.js，**即暴露包接口的文件**
- test command：测试命令，这个直接回车就好了，因为目前还不需要这个
- git repository：这个是git仓库地址，如果你的包是先放到github上或者其他git仓库里，这时候你的文件夹里面会存在一个隐藏的.git目录，npm会读到这个目录作为这一项的默认值。如果没有的话，直接回车继续。
- keyword：这个是一个重点，这个关系到有多少人会搜到你的npm包。尽量使用贴切的关键字作为这个包的索引。如"test,package"
- author：写你的账号或者你的github账号
- license：这个直接回车，开源文件来着

初始化完成后也可以直接修改package.json文件

3 然后再根目录下新建index.js

```js
// index.js
module.exports = '123456'
```

4 `npm login`，登录npm（确保此时是在npm源下，若不是可以通过nrm切换）

5 `npm publish`，发布包，ok，此时在其他项目中就可以通过`npm i npm-demo-zbx -S`或`npm i npm-demo-zbx -D`来安装该包

## 发布后如何迭代

当更改了包内容后，应该修改package.json中version后重新发布`npm publish`，否则发布会报错

在其他项目更新生产环境依赖包，`npm update npm-demo-zbx -S`； 更新开发环境依赖包，`npm update npm-demo-zbx -D`
