# git笔记

使用sourceTree将本地项目通过ssh上传到github上：
- 首先本地安装了git，并且生成了公私钥：id_rsa、id_rsa.pub，然后将公钥id_rsa.pub的内容添加到github
  - 查看是否有.ssh目录：如C:\Users\Administrator\.ssh，如果有，再看看这个目录下有没有id_rsa和id_rsa.pub这两个文件，如果没执行命令`ssh-keygen -t rsa -C "youremail@example.com"`生成
  - 在sourceTree中，给项目添加github仓库地址，设置-添加
  - 工具-选项
    ![图1](../image/vscode01.png "图1")