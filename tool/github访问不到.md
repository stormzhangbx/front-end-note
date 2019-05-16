# github访问不到，登陆不上

[参考](https://yq.aliyun.com/articles/623838)
解决办法：

找到计算机的host文件C:\Windows\System32\drivers\etc\HOSTS，用Notepad++打开，并添加如下两行

```
192.30.253.112 github.com
151.101.113.194 github.global.SSL.fastly.net
```
