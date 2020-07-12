# 表单的input、change事件

[HTMLElement: input event](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/input_event)

[HTMLElement: change event](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event)

 都可以用于`<input>`, `<select>`, 和 `<textarea>`，都在控件的值改变时触发，对于 `<input type="text">` 和 `<textarea>`，这两种事件略有区别。

 对于 `<input type="text">` 和 `<textarea>`，随着键盘的输入，每次都会触发 input 事件，而 change 事件是在输入完成后，元素失去焦点后才触发。