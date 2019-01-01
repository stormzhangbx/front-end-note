/*
* 通过递归生成一个与arr结构
* 相似的新对象数组
*/
export const change1 = (arr) => {
  let tem = [] // 声明一个临时数组
  arr.forEach(item => { // 遍历输入数组arr的每一项（为对象）
    let obj = {  // 这里设置新的结构
      place: item.name,
      children: []
    }
    if(item.children && item.children.length){
      obj.children = change1(item.children)
    }
    tem.push(obj)
  })
  return tem
}

export const change2 = (arr) => {
  let tem = []
  arr.forEach(item => {
    let obj = {
      place: item.name,
    }
    if(item.children && item.children.length){
      obj.children = change2(item.children)
    }
    tem.push(obj)
  })
  return tem
}
/* var arr1 = [
  {
    name: 'china',
    children: [
      {
        name: 'hubei',
        children: [
          {
            name: 'huangshi',
            children: []  //对象参数由name和children组成，children即使为空，也要写上
          }
        ]
      }

    ]
  },
  {
    name: 'japan',
    children: [
      {
        name: 'tokyo',
        children: []
      }
    ]
  }
]
console.log(change1(arr1))

var arr2 = [
  {
    name: 'china',
    children: [
      {
        name: 'hubei',
        children: [
          {
            name: 'huangshi',
          }
        ]
      }

    ]
  },
  {
    name: 'japan',
    children: [
      {
        name: 'tokyo',
      }
    ]
  }
]
console.log(change2(arr2)) */

/**
 * 上述方法的另外一种实现形式
 * @param {array} itemList 结构是对象数组
 */
export const transfrom = (itemList) => {
  const itemListNew = itemList.map(item => {
    let tem = {
      test: false,
      structureName: item.structureName,
      structureId: item.structureId,
      children: []  //没有子代有两种形式，一种children: []，一种直接没有children这项。
    }
    if(item.children && item.children.length){
      tem.children = transfrom(item.children)
    }
    return tem
  })
  return itemListNew
}
/* var itemList = [
  {
    structureName: '首页',
    structureId: 1,
    children: [
      {
        structureName: '国内',
        structureId: 2,
      },
      {
        structureName: '国外',
        structureId: 3,
      }
    ]
  },
  {
    structureName: '体育',
    structureId: 4,
  }
] */

/**
 * 检测类型
 * @param {*} obj
 */
export const toType = (obj) => {
  return Object.prototype.toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase()
}

// 处理数据格式
export const arrMap = (oldArr) => {
  const newArr = []
  oldArr.forEach(item => {
    const obj = {}
    for (let i in item) {
      if (i !== 'friends') {
        obj[i] = item[i]
      } else {
        item[i].forEach(subItem => {
          obj[subItem.name] = subItem
        })
      }
    }
    newArr.push(obj)
  })
  return newArr
}
/* const arr = [
  {
    name: 'Jack',
    age: 20,
    friends: [
      {
        name: 'Marry',
        age: 22
      },
      {
        name: 'Harry',
        age: 24
      }
    ]
  }
]
const output = {
  name: 'Jack',
  age: 20,
  Marry: {
    name: 'Marry',
    age: 22
  },
  Harry: {
    name: 'Harry',
    age: 24
  }
} */

/**
 * 将数组的某一元素上移或者下移
 * @param {string} type 操作类型，'up'表示上移，'down'表示下移
 * @param {array} array 要操作的数组
 * @param {number} index 要操作数组项的索引
 * @example
 * ```javascript
 * let arr = ['1', '2', '3', '4']
 * //output: false
 * console.log(upOrDown('up', arr, 0))
 *
 * //output: ['2', '1', '3', '4']
 * console.log(upOrDown('up', arr, 1))
 * ```
 */
export const upOrDown = (type, array, index) => {
  if (type === 'up' && index === 0) {
    return false
  } else if (type === 'down' && index === (array.length - 1)) {
    return false
  }
  let changeItem = type === 'up' ? array[index-1] : array[index+1]
  if (type === 'up') {
    array.splice(index - 1, 1, array[index])
  } else {
    array.splice(index + 1, 1, array[index])
  }
  array.splice(index, 1, changeItem)
  return array
}

/**
 * 重写forEach, 提高兼容性
 * @param {array} arr
 * @param {function} fn
 */
export const forEach = (arr, fn) => {
  if (!arr.length || !fn) return
  let i = -1
  let len = arr.length
  while (++i < len) {
    let item = arr[i]
    fn(item, i, arr)
  }
}

/**
 * 获取树状结构数据中的某一个属性值
 * @param {array} targetArr
 */
export const getUrlList = (targetArr) => {
  let arr = []
  targetArr.forEach(item => {
      item.url && arr.push(item.url) // 此例子中要符合url为真值得条件
      if (item.childMenus && item.childMenus.length) {
        arr = arr.concat(getUrlList(item.childMenus))
      }
  })
  return arr
}
// const test = [
//   {
//     url: '',
//     childMenus: [
//       {
//         url: '',
//         childMenus: [
//           {
//             url: '/111',
//             childMenus: []
//           },
//           {
//             url: '/112',
//             childMenus: []
//           },
//           {
//             url: '/113',
//             childMenus: []
//           },
//           {
//             url: '/114',
//             childMenus: []
//           }
//         ]
//       },
//       {
//         url: '',
//         childMenus: [
//           {
//             url: '/121',
//             childMenus: []
//           },
//           {
//             url: '/122',
//             childMenus: []
//           },
//           {
//             url: '/123',
//             childMenus: []
//           },
//           {
//             url: '/124',
//             childMenus: []
//           }
//         ]
//       }
//     ]
//   },
//   {
//     url: '',
//     childMenus: [
//       {
//         url: '',
//         childMenus: [
//           {
//             url: '/211',
//             childMenus: []
//           },
//           {
//             url: '/212',
//             childMenus: []
//           },
//           {
//             url: '/213',
//             childMenus: []
//           },
//           {
//             url: '/214',
//             childMenus: []
//           }
//         ]
//       },
//       {
//         url: '',
//         childMenus: [
//           {
//             url: '/221',
//             childMenus: []
//           },
//           {
//             url: '/222',
//             childMenus: []
//           },
//           {
//             url: '/223',
//             childMenus: []
//           },
//           {
//             url: '/224',
//             childMenus: []
//           }
//         ]
//       }
//     ]
//   }
// ]
// console.log(getUrlList(test))
