// 树形数组分为两类，一类是每个节点都有children属性（叶子节点的children长度为0），一类是非叶子节点才有children属性

/** --------- 1 ---------
 * 相似的新对象数组（树形数组）
 * @param {array} arr
 * @example console.log(change1(arr1))
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

/** --------- 2 ---------
 *
 * @param {*} arr
 * @example console.log(change2(arr2))
 */
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

/** --------- 3 ---------
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

/** --------- 4 ---------
 * 检测类型
 * @param {*} obj
 */
export const toType = (obj) => {
  return Object.prototype.toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase()
}

/** --------- 5 ---------
 * 处理数据格式
 * @param {array} oldArr
 * @example console.log(arrMap(arr5))
 */
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

/** --------- 6 ---------
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

/** --------- 7 ---------
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

/** --------- 8 ---------
 * 获取树状结构数据中的某一个属性值
 * @param {array} targetArr
 * @example console.log(getUrlList(arr8)) // 获取各级菜单中的url
 */
export const getUrlList = (targetArr) => {
  let arr = []
  targetArr.forEach(item => {
      item.url && arr.push(item.url) // 此例子中要符合url为真值的条件
      if (item.childMenus && item.childMenus.length) {
        arr = arr.concat(getUrlList(item.childMenus))
      }
  })
  return arr
}

/** --------- 9 ---------
 * 对象数组去重
 * @param {array} array 对象数组
 * @example console.log(removeDuplicate(arr9))
 */
export const removeDuplicate = (array) => {
  let result = []
  let obj = {}
  array.forEach(item => {
      if (!obj[item.key]) {
        result.push(item)
        obj[item.key] = true
      }
  })
  return result
}

/** --------- 10 ---------
 *
 * @param {*} array
 * @example console.log(removeDuplicate1(arr9))
 */
export const removeDuplicate1 = (array) => {
  let obj = {}
  return array.reduce((newArr, item) => {
    if (!obj[item.key]) {
      newArr.push(item)
      obj[item.key] = true
    }
    return newArr
  }, [])
}

/** --------- 11 ---------
 * 合并（相加）对象数组中同一类型的项
 * @param {array} array
 * @example console.log(getTotalList(arr11)) // costItem 费用项目，amount金额，accountId所属账号
 */
export const getTotalList = (array) => {
  let result = []
  let obj = {}
  array.forEach(item => {
      if (!obj[item.accountId]) {
        result.push(item)
        obj[item.accountId] = true
      } else {
        result.forEach(rItem => {
          if (rItem.accountId === item.accountId) {
            rItem.amount = Number(rItem.amount) + Number(item.amount) // 原数组中的amount是字符串，直接相加是字符串拼接
          }
        })
      }
  })
  return result // 可以通过数组map方法处理后再返回想要的数据结构
}

/** --------- 12 ---------
 * 对象数组批量删除
 * @param {array} source 源数组，每项数据都有唯一标识，如id
 * @param {array} deleteList 要删除的项组成的数组
 * @example batchDelete(arr12, deleteList); console.log(arr12)
 */
export const batchDelete = (source, deleteList) => {
  for (let i = 0; i < source.length; i++) {
    for (let j = 0; j < deleteList.length; j++) {
      if (source[i]['id'] === deleteList[j]['id']) {
        source.splice(i, 1)
        i--
      }
    }
  }
}

/** --------- 13 ---------
 * 将对象数组按某一个属性进行分组，转换成一个新的对象数组
 * @param {array} array 对象数组
 * @example console.log(getTotalList1(arr13))
 */
export const getTotalList1 = (array) => {
  let result = []
  let obj = {}
  array.forEach(item => {
    if (!obj[item.date]) {
      const o = {
        date: item.date,
        list: [item]
      }
      result.push(o)
      obj[item.date] = true
    } else {
      result.forEach(rItem => {
        if (rItem.date === item.date) rItem.list.push(item)
      })
    }
  })
  return result
}

/** --------- 14 ---------
 *
 * @param {array} array
 * @example console.log(getTotalList2(arr13))
 */
export const getTotalList2 = (array) => {
  let obj = {}
  let res = array.reduce((result, item) => {
    if (!obj[item.date]) {
      const o = {
        date: item.date,
        list: [item]
      }
      result.push(o)
      obj[item.date] = true
    } else {
      result.forEach(rItem => {
        if (rItem.date === item.date) rItem.list.push(item)
      })
    }
    return result
  }, [])
  return res
}

/** --------- 15 ---------
 * 给每个节点添加floor属性，表示该节点所处层数
 * @param {*} treeArr 树形数组
 * @example console.log(addFloor(arr15))
 */
const addFloor = (treeArr) => {
  const each = (arr, floor) => {
    arr.forEach(item => {
      item.floor = floor
      if (item.children && item.children.length) each(item.children, floor + 1)
    })
    return arr
  }
  return each(treeArr, 1)
}

/** --------- 16 ---------
 * 获取树形数组最深层级数
 * @param {array} treeArr 树形数组
 * @example console.log(getMaxFloor(arr15))
 */
const getMaxFloor = (treeArr) => {
  let max = 0;
  const each = (arr, floor) => {
    arr.forEach(item => {
      item.floor = floor
      if (floor > max) max = floor
      if (item.children && item.children.length) each(item.children, floor + 1)
    })
  }
  each(treeArr, 1)
  return max
}

/** --------- 17 ---------
 * 获取所有叶子节点
 * @param {array} treeArr 树形数组
 * @example console.log(getAllLeaf(arr15))
 */
const getAllLeaf = (treeArr) => {
  let result = []
  const each = (arr) => {
    arr.forEach(item => {
      if (!item.children) {
        result.push(item)
      } else {
        each(item.children)
      }
    })
  }
  each(data)
  return result
}
