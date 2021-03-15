# constructor方法

constructor 方法是类的默认方法，通过 new 命令生成对象实例时，自动调用该方法。一个类必须有 constructor() 方法，如果没有显示定义，一个空的 constructor() 方法会被默认添加。

```js
class Point {

}

// 等价于
class Point {
  constructor() {}
}
```

上面代码中，定义了一个空的类Point，JavaScript 引擎会自动为它添加一个空的constructor()方法。

constructor()方法默认返回实例对象（即this）

## 1 继承（子类）中的constructor方法

如果子类显式的定义了 constructor 方法，则必须在其中调用 super 方法，否则新建实例时会报错。

```js
class Point { /* ... */ }

class ColorPoint extends Point {
  constructor() {
  }
}

let cp = new ColorPoint(); // ReferenceError
```

上面代码中，ColorPoint继承了父类Point，但是它的构造函数没有调用super方法，导致新建实例时报错。

如果子类没有定义constructor方法，这个方法会被默认添加，代码如下。

```js
class ColorPoint extends Point {
}

// 等同于
class ColorPoint extends Point {
  constructor(...args) {
    super(...args);
  }
}
```

另一个需要注意的地方是，在子类的构造函数中，只有调用super之后，才可以使用this关键字，否则会报错

```js
class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

class ColorPoint extends Point {
  constructor(x, y, color) {
    this.color = color; // Uncaught ReferenceError: Must call super constructor in derived class before accessing 'this' or returning from derived constructor
    super(x, y);
    this.color = color; // 正确
  }
}
```

## 2 super

### 2.1 代表父类的构造函数

作为函数调用时，代表父类的构造函数。作为函数时，super()只能用在子类的构造函数之中，用在其他地方就会报错。

```js
class A {}

class B extends A {
  constructor() {
    super();
  }
}
```

super 虽然代表了父类 A 的构造函数，但是 super 内部的 this 指的是 B 的实例，因此 super() 在这里相当于 A.prototype.constructor.call(this)。

### 2.2 代表父类或者父类的原型对象

super作为对象时，在普通方法中，指向父类的原型对象；在静态方法中，指向父类。

```js
class A {
  p() {
    return 2;
  }
}

class B extends A {
  constructor() {
    super();
    console.log(super.p()); // 2
  }
}

let b = new B();
```