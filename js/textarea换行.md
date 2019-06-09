# textarea 换行

## 1 placeholder 显示换行

### 1.1 通过`&#10;`

```html
<textarea rows="4" placeholder="这是&#10;一段&#10;测试&#10;文本"></textarea>
```

### 1.2 vue 项目

```html
<el-form-item label="项目特色：" prop="characteristic">
    <el-input
        type="textarea"
        v-model="formData.characteristic"
        v-if="type !== 'detail'"
        :placeholder="'请输入项目特色\r\n请输入项目特色'"
        clearable
      />
    <span v-else v-html="formData.characteristic"></span>
</el-form-item>
```

## 2 textarea 内容显示在html页面上换行

1 在 HTML 的 textarea 控件中输入回车并提交会发现，内容中的换行是用 \n 或 \r\n 表示（取决于浏览器和操作系统）。如果我们直接将这个内容显示在 html 页面上，那么文字是不会像输入时的那样换行的。
同样的，在 textarea 中连续敲多个空格，这些内容如果直接显示在 html 页面就会变成一个空格。为了正确显示，我们需要将内容做个转换。

```js
//原始字符串
var string = "欢迎访问!\r\nhangge.com    做最好的开发者知识平台";

//替换所有的换行符
string = string.replace(/\r\n|\n/g, '<br/>')

//替换所有的空格（中文空格、英文空格都会被替换）
string = string.replace(/\s/g, '&nbsp;')

//输出转换后的字符串
console.log(string) // '欢迎访问!<br/>hangge.com&nbsp;&nbsp;&nbsp;&nbsp;做最好的开发者知识平台'，若vue项目，可通过v-html展示该文本
```

2 有时需要去掉所有回车、换行、空格，这个原理同上面一样，也是通过正则替换来实现。只不过将匹配到的内容替换成空字符串

```js
//原始字符串
var string = "欢迎访问!\r\nhangge.com    做最好的开发者知识平台";

//去掉所有的换行符、空格
string = string.replace(/\r\n|\n|\s/g, '')

//输出转换后的字符串
console.log(string) // 欢迎访问!hangge.com做最好的开发者知识平台
```

3 有时需要将`<br/>`、`&nbsp;`转成回车换行、空格

```js
//原始字符串
var string = '欢迎访问!<br/>hangge.com&nbsp;&nbsp;&nbsp;&nbsp;做最好的开发者知识平台'

//替换所有的换行符
string = string.replace(/\<br\/\>/g, '\n')

//替换所有的空格（中文空格、英文空格都会被替换）
string = string.replace(/&nbsp;/g, ' ')

//输出转换后的字符串
console.log(string) // '欢迎访问!\r\nhangge.com    做最好的开发者知识平台'
```

4 通过`style="white-space: pre-line;"`，合并空白，但是保留换行

```html
<template>
  <div>
    <el-input type="textarea" v-model="textareaValue"></el-input>
    <el-button @click="printFunc">打印textareaValue</el-button>
    <p style="white-space: pre-line;">{{textareaValue}}</p>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        textareaValue: ''
      }
    },
    methods: {
      printFunc () {
        console.log(this.textareaValue.replace(/\r\n|\n/g, 'aaaa'))
      }
    }
  }
</script>
```

## 3 html字符实体和js转义字符

### 3.1 html字符实体

有些字符如`<`、`>`，因为浏览器会误认为它们是标签，使用较多的实体有
参考[HTML 字符实体](http://www.w3school.com.cn/html/html_entities.asp)

显示结果 | 描述 | 实体名称 | 实体编号
:--|:--|:--|:--
|  | 空格 | `&nbsp;` | `&#160;`
 `<` | 小于号 | `&lt;` | `&#60;`
 `>` | 大于号 | `&gt;` | `&#62;`

### 3.2 js转义字符

除了普通的可打印字符以外，一些特殊有特殊功能的字符，如单双引号、换行、回车，可以通过转义字符的形式放入字符串中，使用较多的js转义字符有

转义字符 | 描述
:-- |:--
`\0` | 空字符
`\'` | 单引号
`\"` | 双引号
`\\` | 反斜杠
`\n` | 换行
`\r` | 回车
