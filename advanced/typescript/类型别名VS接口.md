# 类型别名VS接口

```ts
// 类型别名
type g = {
  name: string,
  age: number
}

// 接口
interface Girl {
    name: string;
    age: number
}
```

书写上的区别：
- 类型别名通过`type`关键字定义，而接口通过`interface`定义;
- 类型别名后面需要跟上`=`，而接口不需要;
- 类型别名中使用的是`,`，而接口是`;`