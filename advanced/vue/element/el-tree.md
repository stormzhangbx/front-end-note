有时候需要懒加载节点，通常是通过接口获取节点信息然后渲染出来，

```html
<el-tree
  lazy
  :props="{label: 'layerName',isLeaf: 'isLeaf'}"
  :load="loadNode"
  node-key="id"
  :expend-on-click-node="false"
  highlight-current
  @node-click="handleNodeClick"
>
  <span slot-scope="{node, data}">
    <span :class="['img', data.type==='layer'?'layer':'file']" />
    <span>{{node.label}}</span>
  </span>
</el-tree>

<script>
export default {
  methods: {
    loadNode (node, resolve){
      // 获取最顶层节点数据，并渲染
      // 最顶层节点是一进入页面就要渲染出来的，开始我在mounted钩子中调用下面接口方法，赋值给一个data，然后使用resolve渲染，发现报错！！！
      if (node.level === 0) {
        this.getLayer(res => {
          resolve(res.list)
        })
      } else {
        // 当点击某个节点左侧箭头展开该节点时，获取子节点数据，并渲染
        this.getLayer(node.data.id, res => {
          resolve(res.list)
        })
      }
    },
    handleNodeClick (data, node) {
      // data是源数据中的节点数据对象，node是源节点数据经过包装后的数据对象
      if (data.type === 'table') {
        this.currentTable = data
        this.getRelation(data.catalogCode)
      }
    }
  }
}
</script>
```

el-tree 组件上各个属性的作用

- lazy 表示这是懒加载的数据，懒加载的树不用设置 data prop，树的数据来自方法
- props 接口返回的数据可能不是标准的格式，这里做下声明
- load 定义数据加载方法
- node-key 非必须设置，但如果要使用树的某些方法时，必须要设置该prop
- expand-on-click-node 设置只有在点击节点左侧的箭头图标时才展开或者收缩
- highlight-current 高亮当前选中的节点
- node-click 节点被点击时的回调


源节点对象data类似如下，该对象的属性不是固定的，可以跟后端协商确定

```js
{
  id: '1'
  layerName: '业务层',
  children: [
    //...
  ],
  type: 'layer'
  isLeaf: false
}
```

包装后的node类似如下，该对象的属性是固定的，包装了源数据，还包含了节点的一些其他信息

```js
{
  // 表示当前的勾选状态
  checked: false,
  childNodes: [
    // ...
  ],
  // 即上面的data
  data: {
    // ...
  },
  // 表示当前的展开状态
  expended: false,
  level: 1,
  isLeaf: false,
  // 对应源对象中node-key prop指定的值（即id）
  key: '1'
  // ...
}
```
