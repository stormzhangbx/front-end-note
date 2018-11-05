# 如何右键显示 vs code 快捷键

如果在安装 vs code 时没有正确设置，右键是不会显示 vs code 快捷键的。此时如果想要右键出现 vs code 快捷键，需要手动修改注册表。

通过`.reg`文件可以快速修改注册表。在桌面新建一个`.reg`文件，文件名随便，如`vsCodeOpenFolder.reg`，编辑内容如下：

```
Windows Registry Editor Version 5.00

[HKEY_CLASSES_ROOT\*\shell\VSCode]
@="Open with Code"
"Icon"="D:\\Users\\Administrator\\AppData\\Local\\Programs\\Microsoft VS Code\\Code.exe"

[HKEY_CLASSES_ROOT\*\shell\VSCode\command]
@="\"D:\\Users\\Administrator\\AppData\\Local\\Programs\\Microsoft VS Code\\Code.exe\" \"%1\""

Windows Registry Editor Version 5.00

[HKEY_CLASSES_ROOT\Directory\shell\VSCode]
@="Open with Code"
"Icon"="D:\\Users\\Administrator\\AppData\\Local\\Programs\\Microsoft VS Code\\Code.exe"

[HKEY_CLASSES_ROOT\Directory\shell\VSCode\command]
@="\"D:\\Users\\Administrator\\AppData\\Local\\Programs\\Microsoft VS Code\\Code.exe\" \"%V\""

Windows Registry Editor Version 5.00

[HKEY_CLASSES_ROOT\Directory\Background\shell\VSCode]
@="Open with Code"
"Icon"="D:\\Users\\Administrator\\AppData\\Local\\Programs\\Microsoft VS Code\\Code.exe"

[HKEY_CLASSES_ROOT\Directory\Background\shell\VSCode\command]
@="\"D:\\Users\\Administrator\\AppData\\Local\\Programs\\Microsoft VS Code\\Code.exe\" \"%V\""
```
注意其中`D:\\Users\\Administrator\\AppData\\Local\\Programs\\Microsoft VS Code\\Code.exe`因人而异，为vs code安装目录下的Code.exe文件路径。编辑完后保存，然后双击`vsCodeOpenFolder.reg`文件，一路确定即可。