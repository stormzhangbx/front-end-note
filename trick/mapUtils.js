/*
 * 通过递归生成一个与arr结构
 * 相似的新对象数组
 */
const change1 = (arr) => {
  var tem = [] // 声明一个临时数组
  arr.forEach(item => { // 遍历输入数组arr的每一项（为对象）
    let obj = {  // 这里设置新的结构
      place: item.name,
      children: []
    }
    if(item.children && item.children.length !== 0){
      obj.children = change1(item.children)
    }
    tem.push(obj)
  });
  return tem
}
const change2 = (arr) => {
  var tem = []
  arr.forEach(item => {
    let obj = {
      place: item.name,
    }
    if(item.children && item.children.length !== 0){
      obj.children = change2(item.children)
    }
    tem.push(obj)
  });
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
const transfrom = (itemList) => {
  const itemListNew = itemList.map(item => {
    let tem = {
      test: false,
      structureName: item.structureName,
      structureId: item.structureId,
      children: []  //没有子代有两种形式，一种children: []，一种直接没有children这项。
    }
    if(item.children && item.children.length > 0){
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

const toType = (obj) => {
  return Object.prototype.toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase()
}

const arrMap = (oldArr) => {
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
