# reactive、ref、toRefs

引入

```js
import { reactive, ref, toRefs } from 'vue'
```
## 1 reactive

reactive 可以将一个对象转换为可响应的。

## 2 ref

[Refs](https://vue3js.cn/docs/zh/api/refs-api.html#refs)

[高阶指南-响应性-响应性基础](https://vue3js.cn/docs/zh/guide/reactivity-fundamentals.html#%E5%93%8D%E5%BA%94%E6%80%A7%E5%9F%BA%E7%A1%80)

ref 是将一个普通值（如字符串、数字）转换为可响应的，其内部使用了 reactive，所以 ref 返回的是一个对象，并通过 value 访问值。函数名取自 reactive **ref**erence（响应式的引用）

## 3 toRefs

[toRefs](https://vue3js.cn/docs/zh/api/refs-api.html#torefs)

[响应式状态解构](https://vue3js.cn/docs/zh/guide/reactivity-fundamentals.html#%E5%93%8D%E5%BA%94%E5%BC%8F%E7%8A%B6%E6%80%81%E8%A7%A3%E6%9E%84)
