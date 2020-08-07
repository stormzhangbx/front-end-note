# 使用文件

## 1 选择文件

### 1.1 使用原生 file input 元素

```html
<input type="file" multiple accept="image/*" onchange="changeHandler">
```

### 1.2 隐藏 file input 元素

方式一：

```html
<input type="file" id="fileElem" multiple accept="image/*" style="display:none" onchange="handleFiles(this.files)">
<button id="fileSelect">Select some files</button>

<script>
const fileSelect = document.getElementById("fileSelect"),
  fileElem = document.getElementById("fileElem");

fileSelect.addEventListener("click", function (e) {
  if (fileElem) {
    fileElem.click();
  }
}, false);

function handleFiles (files) {
  console.log(files)
}
</script>
```

方式二：

```html
<style>
.visually-hidden {
  position: absolute;
  clip: rect(0 0 0 0);
  width: 0;
}
label {
  display: inline-block;
  line-height: 20px;
  font-size: 14px;
  text-align: center;
  color: #4c5161;
  border: 1px solid #d0d0d5;
  border-radius: 4px;
  padding: 9px 15px;
  min-width: 50px;
  background-color: #fff;
  transition: border-color .15s,background-color .15s,opacity .15s;
  cursor: pointer;
  overflow: visible;
}
label:hover {
  border: 1px solid #2486ff;
  background-color: #2486ff;
  color: #fff;
}
</style>

<input type="file" id="fileElem" multiple accept="image/*" class="visually-hidden">
<label for="fileElem">Select some files</label>
```

### 1.1 使用拖放来选择文件

```html
<style>
  .box {
    width: 128px;
    padding: 25px;
    border: 2px #ccc dashed;
    border-radius: 5px;
    text-align: center;
    font: 20pt bold, "Vollkorn";
    color: #ccc;
  }
</style>

<div class="box" id="dropBox">Drop files here</div>

<script>
  const dropBox = document.getElementById('dropBox');
  dropBox.ondragover = function (e) {
    e.stopPropagation();
    e.preventDefault();
  };
  dropBox.ondrop = function (e) {
    e.stopPropagation();
    e.preventDefault();
    const files = e.dataTransfer.files;
    console.log(files)
  }
</script>
```

## 2 使用文件

### 2.1 显示用户选择的图片的缩略图

#### 2.1.1 通过 Data URL

```html
<input type="file" multiple onchange="handleFiles(this.files)">
<div id="preview"></div>

<script>
  const preview = document.getElementById('preview')

  function handleFiles(files) {
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const imageType = /^image\//;

      if (!imageType.test(file.type)) {
        continue;
      }

      const img = document.createElement("img");
      img.classList.add("obj");
      img.file = file;
      preview.appendChild(img); // 假设"preview"就是用来显示内容的div

      const reader = new FileReader();
      reader.onload = (function(aImg) { return function(e) { aImg.src = e.target.result; }; })(img);
      reader.readAsDataURL(file);
    }
  }
</script>
```

#### 2.1.2 通过对象 URL

```html
<input type="file" id="fileElem" multiple accept="image/*" style="display:none" onchange="handleFiles(this.files)">
<a href="#" id="fileSelect">Select some files</a>
<div id="fileList">
  <p>No files selected!</p>
</div>

<script>
  window.URL = window.URL || window.webkitURL;

  var fileSelect = document.getElementById("fileSelect"),
    fileElem = document.getElementById("fileElem"),
    fileList = document.getElementById("fileList");

  fileSelect.addEventListener("click", function (e) {
    if (fileElem) {
      fileElem.click();
    }
    e.preventDefault(); // prevent navigation to "#"
  }, false);

  function handleFiles(files) {
    if (!files.length) {
      fileList.innerHTML = "<p>No files selected!</p>";
    } else {
      fileList.innerHTML = "";
      const list = document.createElement("ul");
      fileList.appendChild(list);
      for (let i = 0; i < files.length; i++) {
        const li = document.createElement("li");
        list.appendChild(li);

        const img = document.createElement("img");
        img.src = window.URL.createObjectURL(files[i]);
        img.height = 60;
        img.onload = function() {
          window.URL.revokeObjectURL(this.src);
        }
        li.appendChild(img);
        const info = document.createElement("span");
        info.innerHTML = files[i].name + ": " + files[i].size + " bytes";
        li.appendChild(info);
      }
    }
  }
</script>
```

### 2.2 上传一个用户选择的文件