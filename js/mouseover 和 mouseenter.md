# mouseover 和 mouseenter

mouseover: 给元素绑定 mouseover 事件，当鼠标移入元素、或其子元素（由于事件冒泡）时会触发该事件。若外层元素有子元素，则鼠标在该元素内移动时，可能多次触发绑定在外层元素上的mouseover事件。相对立的是 mouseout。

mouseenter: 当鼠标移入元素时触发。仅在进入该元素的过程中触发 mouseenter 事件，这也刚好体现了单词 enter 的含义。如果想要再次触发该事件，应先离开该元素，然后再次进入。相对立的是 mouseleave 事件。