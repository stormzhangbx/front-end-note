# 递归

递归，也就是函数体中调用函数本身。递归一定符合下列的三个特点

- 一定是因为存在某种“循环”逻辑才需要递归；
- 一定存在某个终止条件（假设这个条件为a），当符合这个条件时要结束（跳出）循环，类似break关键字；
- 当else条件（上述所述终止条件的对立面），即“!a”条件时，需要调用函数本身，并**返回调用函数本身的返回结果**。

例子一：

```js
/**
 * 除去字符串中某种字符
 * @param word 字符串
 * @param char 要除去的字符
 * @returns {*} 除去某种字符后的字符串
 */
function deleteChar(word, char) {
    var index = word.indexOf(char);
    if (index < 0) { // 当字符串word中不含字符char时，无需再进行除去操作，退出循环
        return word
    } else { // 否则就要除去左起第一次出现的字符char，并递归调用函数本身
        var wordArr = word.split('');
        wordArr.splice(index, 1);
        var newWord = wordArr.join('');
        return deleteChar(newWord, char) // 返回整个函数
    }
}
console.log(deleteChar('chiaia', 'i'))
```

这里只是用于演示，除去字符串中某种字符最快的方式是使用字符串的replace方法，如`'chiaia'.replace(/i/g, '')`

例子二：

```js
/**
 * 返回某个数的阶乘
 * @param a
 * @returns {number}
 */
function f(a){
    if (a === 1) { // 当a的值为1时，它的阶乘就为1，退出循环
        return 1
    } else {
        return a * f(a-1)  // 返回整个函数
    }
}
console.log(f(5))
```

例子三：

返回某个数的所有公约数（以数组的形式）

```js
let res = [];
let n = 1;
function f(a) {
    if (n > a) {
        return res
    } else {
        if (a % n === 0) {
            res.push(n)
        }
        n++;
        return f(a);
    }
}
f(4)
console.log(res)
```

或者

```js
/**
 * 返回某个数的所有公约数（以数组的形式）
 * @param a 某个数
 * @param n 起始于1的中间变量，循环递增，用于测试是否是某个数的公约数
 * @param res 用于存放公约数的数组
 * @returns {*[]}
 */
function f(a, n = 1, res = []) {
    if (n > a) { // n不可能大于a，否则说明我们已经尝试测试完了[1, a]之间的所有整数，无需再测试，退出循环
        return res
    } else {
        if (a % n === 0) {
            res.push(n)
        }
        n++
        return f(a, n, res)  // 返回整个函数
    }
}
console.log(f(4))
```

**后者实现方式避免了污染全局命名空间，明显优于前者**