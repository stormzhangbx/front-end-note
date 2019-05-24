/**
 * 将查询字符串转化为对象
 * @param { Sting } queryStr 查询字符串
 * @param { String } seperator 分隔符
 */
export const queryStr2obj = (queryStr, seperator='&') => {
  const obj = {}
  if (queryStr === '' || queryStr === null) {
    return obj
  }
  const arr = queryStr.split(seperator)
  let k, v, sub
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== '') {
      sub = arr[i].split('=')
      k = sub[0]
      v = sub[1]
      if (k !== '') {
        obj[k] = v
      }
    }
  }
  return obj
}

/**
 * 拼接对象参数到url
 * @param {string} url 链接地址
 * @param {object} param 对象参数
 * @example
 * // returns '/info?name=Jack&age=20'
 * joinUrl('/info', {name: 'Jack', age: 20})
 */
export const joinUrl = (url, params) => {
  let queryStr = ''
  for (let i in params) {
    queryStr += `&${i}=${params[i]}`
  }
  const newUrl = `${url}?${queryStr.substr(1)}`
  return newUrl.replace(' ', '')
}

/**
 * 获取url指定参数值
 * @param {string} name url参数名称
 */
export const getQueryString = (name) => {
  var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i')
  var r = window.location.search.substr(1).match(reg)
  if (r != null) return decodeURI(r[2])
  return null
}
