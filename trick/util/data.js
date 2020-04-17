// 树形数组分为两类，一类是每个节点都有children属性（叶子节点的children长度为0），一类是非叶子节点才有children属性

var arr1 = [
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

var arr3 = [
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
]

let arr5 = [
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

let arr8 = [
  {
    url: '',
    childMenus: [
      {
        url: '',
        childMenus: [
          {
            url: '/111',
            childMenus: []
          },
          {
            url: '/112',
            childMenus: []
          },
          {
            url: '/113',
            childMenus: []
          },
          {
            url: '/114',
            childMenus: []
          }
        ]
      },
      {
        url: '',
        childMenus: [
          {
            url: '/121',
            childMenus: []
          },
          {
            url: '/122',
            childMenus: []
          },
          {
            url: '/123',
            childMenus: []
          },
          {
            url: '/124',
            childMenus: []
          }
        ]
      }
    ]
  },
  {
    url: '',
    childMenus: [
      {
        url: '',
        childMenus: [
          {
            url: '/211',
            childMenus: []
          },
          {
            url: '/212',
            childMenus: []
          },
          {
            url: '/213',
            childMenus: []
          },
          {
            url: '/214',
            childMenus: []
          }
        ]
      },
      {
        url: '',
        childMenus: [
          {
            url: '/221',
            childMenus: []
          },
          {
            url: '/222',
            childMenus: []
          },
          {
            url: '/223',
            childMenus: []
          },
          {
            url: '/224',
            childMenus: []
          }
        ]
      }
    ]
  }
]

var arr9 = [
  { key: '01', value: '乐乐' },
  { key: '02', value: '博博' },
  { key: '03', value: '淘淘' },
  { key: '04', value: '哈哈' },
  { key: '01', value: '乐乐' }
]

var arr11 = [
  { costItem: '护理费', amount: '90', accountId: 1 },
  { costItem: '床位费', amount: '100', accountId: 1 },
  { costItem: '餐饮费', amount: '80', accountId: 2 },
  { costItem: '电费', amount: '70', accountId: 3 },
  { costItem: '水费', amount: '80', accountId: 3 },
]

var arr12 = [
  { id: 1, key: '01', value: '乐乐' },
  { id: 2, key: '02', value: '博博' },
  { id: 3, key: '03', value: '淘淘' },
  { id: 4, key: '04', value: '哈哈' },
  { id: 5, key: '01', value: '乐乐' }
]
var deleteList = [
  { id: 3, key: '03', value: '淘淘' },
  { id: 4, key: '04', value: '哈哈' },
]

var arr13 = [
  { date: '2019-05-03', activity: '篮球' },
  { date: '2019-03-01', activity: '音乐' },
  { date: '2019-04-01', activity: '电影' },
  { date: '2019-04-20', activity: '书法' },
  { date: '2019-05-03', activity: '羽毛球' },
  { date: '2019-05-03', activity: '乒乓球' },
]

let arr15 = [
  {
    name: '1',
    children: [
      {
        name: '11',
        children: [
          {
            name: '111',
            children: [
              {
                name: '1111'
              }
            ]
          }
        ]
      },
      {
        name: '12'
      }
    ]
  },
  {
    name: '2'
  }
]
