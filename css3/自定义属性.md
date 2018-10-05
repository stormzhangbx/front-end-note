# 自定义属性

> 或者叫做css变量

包含一个在整个文档中可以重复使用的值，通过var()方法来获取自定义属性的值
一般将自定义属性放在:root（用于匹配文档根元素，即html元素）选择器中

语法：

```css
.selector {
  --somekeyword: left;
  --somecolor: #0000ff;
  --somecomplexvalue: 3px 6px rgb(20, 32, 54);
}
```

例子：

```css
:root { /* 对于 HTML 来说，:root 表示 <html> 元素，除了优先级更高之外，与 html 选择器相同 */
  --first-color: #488cff;
  --second-color: #ffff8c;
}
#firstParagraph {
  background-color: var(--first-color);
  color: var(--second-color);
}
```

demo：[自定义属性demo](./demo/zidingyishuxing01.html)

注意：
`val(--somCustomProperty)`会从css选择器所在那层DOM树开始，向上查找自定义属性，值由最近定义自定义属性决定，即自定义属性只有在所定义元素的子元素中使用才有效，这也就是为什么常在:root选择器中定义自定义属性。