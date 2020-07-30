# URL

[URL.createObjectURL()](https://developer.mozilla.org/zh-CN/docs/Web/API/URL/createObjectURL)
[URL.revokeObjectURL()](https://developer.mozilla.org/zh-CN/docs/Web/API/URL/revokeObjectURL)

静态方法 URL.createObjectURL(obj) 返回一个 url，字符串类型，用于指定参数 obj。参数 obj 可以是 File 对象、Blob 对象或者 MediaSource 对象。​

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
    <a>下载</a>
    <script>
        function createDownloadFile() {
            var content = 'blob data';
            var blob = new Blob([content]); // 创建一个 Blob 对象
            var a = document.getElementsByTagName('a')[0];
            a.download = 'fiel';
            a.href = URL.createObjectURL(blob)
            console.log(URL.createObjectURL(blob)) // blob:http://localhost:63342/89d7e401-871f-406d-9df2-c03fcbe66081
            console.log(typeof URL.createObjectURL(blob)) // string
        }
        window.onload = createDownloadFile
    </script>
</body>
</html>
```