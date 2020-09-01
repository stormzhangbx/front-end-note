# 使用FormData上传文件

```html
<div>
  <p>姓名 <input type="text" id="name"></p>
  <p>附件 <input type="file" id="attachment" multiple></p>
  <p>
    <button type="button" id="btn">提交</button>
  </p>
</div>
<script src="jquery-3.3.1.js"></script>
<script>
  $('#btn').on('click', function () {
    const data = new FormData()
    const files = $('#attachment')[0].files

    data.append('name', $('#name').val())
    for (let i = 0; i < files.length; i++) { // 使用同一个名称添加多个值
      data.append('attachment', files[i], files[i].name)
    }

    console.log(data) // 打印一个FormData实例对象
    console.log(data.get('name'))
    console.log(data.get('attachment')) // 返回最后一次append到attachment的File对象
    console.log(data.getAll('attachment')) // 返回由多个File对象组成的数组

    $.ajax({
      url: '/url',
      type: 'post',
      processData: false, // 表示不需要对数据做处理
      contentType: false, // 因为前面已经声明了是FormData对象
      data: data,
      success: function () {
        alert('ok')
      }
    })
  })
</script>
```