# node-sass安装失败

根据安装报错信息去github上下载对应node-sass文件，下载位置没有要求，如下载后位置`C:\Users\zbx\Downloads\前端\win32-x64-64_binding.node`

然后安装时，指定变量 sass_binary_path，如：

`npm i node-sass --sass_binary_path=C:\Users\zbx\Downloads\前端\win32-x64-64_binding.node`

这样会在项目node_modules文件夹里新增node-sass文件夹，如果此时运行程序发现提示找不到node_modules\node-sass\vendor，解决办法：

运行`npm rebuild node-sass --save-dev`

或者在node_modules\node-sass中新建vender 文件夹，然后运行`npm rebuild node-sass --save-dev`
