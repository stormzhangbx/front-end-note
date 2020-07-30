# vuex

Vuex和全局变量的区别：
- Vuex中存储的是响应式的，如同组件中的data
- 不能直接改变store中的状态。改变store中的状态的唯一途径就是显式地提交 (commit) mutation。如同react或微信小程序中通过setData来修改数据


在构造状态实例时，传入的参数中：
- state 中存放的是各种状态
- getters 中存放的是从 state 中派生出来的状态，相当于组件中的计算属性
- mutations 中存放的是一些用于修改状态的函数，只能是同步的，所以函数的逻辑一般比较简单
- actions 中存放的是异步操作。提交 mutation，而不是直接修改状态