# js调用后台接口下载Excel

XMLHttpRequest Level 2 可以用于获取服务器端的二进制数据。

调用接口，通过流下载Excel，此处使用了 FileReader

```js
$('#download').click(function () {
  var xhr = new XMLHttpRequest()
  // 其他请求方式也可以
  xhr.open('POST', 'url', true)
  // 把 responseType 设为 blob，表示服务器传回的是二进制对象
  xhr.responseType = 'blob'
  // 定义请求完成的处理函数，请求前也可以增加loading、禁用下载按钮逻辑
  xhr.onload = function () {
    // 如果想要关闭loading，可以放在这里
    if (this.status === 200) {
      var blob = this.response
      var reader = new FileReader()
      reader.readAsDataURL(blob)
      reader.onload = function (e) {
        var a = document.createElement('a')
        a.href = e.target.result
        // 文件名称也可以由接口设置
        a.download = '导出表格名字.xls'
        $('body').append(a)
        a.click()
        $(a).remove()
      }
    }
  }
  xhr.send()
 })
```

调用接口，通过流展示图片。此处使用了 URL.createObjectURL(blob)

```js
var xhr = new XMLHttpRequest();
xhr.open('GET', url, true);
xhr.responseType = "blob";
xhr.setRequestHeader("client_type", "DESKTOP_WEB");
xhr.setRequestHeader("desktop_web_access_key", _desktop_web_access_key);
xhr.onload = function() {
    if (this.status == 200) {
        var blob = this.response;
        var img = document.createElement("img");
        img.onload = function(e) {
            window.URL.revokeObjectURL(img.src); //释放。
        };
        img.src = window.URL.createObjectURL(blob);//将blob加载到img中 由于blob太大 会有性能影响 应该在加载之后释放
        $("#imgcontainer").html(img);    
    }
}
xhr.send();
```

使用 jQuery 无法实现上述功能，因为 jQuery 将返回的数据转换为了 string，不支持 blob 类型。