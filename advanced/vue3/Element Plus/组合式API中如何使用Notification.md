# 组合式API中如何使用Notification

单独引入也是按需引入，此时调用方法为 ElNotification(options)。我们也为每个 type 定义了各自的方法，如 ElNotification.success(options)。并且可以调用 ElNotification.closeAll() 手动关闭所有实例。

```js
import { ElNotification } from 'element-plus'
```