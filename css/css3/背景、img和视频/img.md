# img

`<img src="" alt=""/>`

必需属性：src 和 alt，常用属性：width和height

如果一个div里包含一个img，此时img下面会有点白边，设置div的font-size为0即可解决这个问题，或者设置img `vertical-align: bottom;`

设置元素属性width和height或者css属性width和height都可以改变img显示的大小，如果只设置width，那么img显示高也将等比例的改变，img将等比例缩放，同理如果值设置height也一样。

元素属性width和height或者css属性width和height的单位可以是px(或其他的如em等)，也可以是百分比，相对的是包含img的元素的宽高。
