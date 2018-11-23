export default {
  /**
   * 判断客户端是否是移动端
   * @example
   * if (isMobile) {
   *   const searchStr = window.location.search
   *   const hashStr = window.location.hash
   *   window.location.replace('./mobile.html' + searchStr + hashStr)
   * }
   */
  isMobile () {
    const userAgent = navigator.userAgent.toLocaleLowerCase()
    if ((/(mobile)/.test(userAgent)) || (/(android)/.test(userAgent)) || (/(iphone|ipad|ipod)/.test(userAgent)) || (/(windows phone)/.test(userAgent))) {
      return true
    } else {
      return false
    }
  },

  /**
   * 判断obj对象是否为空
   * @method isEmptyObject
   * @param { * } obj 需要判断的对象
   * @remind 如果判断的对象是NULL， 将直接返回true， 如果是数组且为空， 返回true， 如果是字符串， 且字符串为空，
   *          返回true， 如果是普通对象， 且该对象没有任何实例属性， 返回true
   * @return { Boolean } 对象是否为空
   * @example
   * ```javascript
   *
   * //output: true
   * console.log( isEmptyObject( {} ) );
   *
   * //output: true
   * console.log( isEmptyObject( [] ) );
   *
   * //output: true
   * console.log( isEmptyObject( "" ) );
   *
   * //output: false
   * console.log( isEmptyObject( { key: 1 } ) );
   *
   * //output: false
   * console.log( isEmptyObject( [1] ) );
   *
   * //output: false
   * console.log( isEmptyObject( "1" ) );
   *
   * ```
   */
  isEmptyObject (obj) {
    if (obj == null) return true
    if (this.isArray(obj) || this.isString(obj)) return obj.length === 0
    for (var key in obj) if (obj.hasOwnProperty(key)) return false
    return true
  },

  /**
   * 自定义判断元素类型
   * @param {*} obj
   * @example
   * ```javascript
   * let arr = [1, 2, 3, 4]
   *
   * //output: 'array'
   * console.log(toType(arr))
   * ```
   */
  toType (obj) {
    return Object.prototype.toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase()
  },

  /**
   * 判断某个字符串是否符合JSON格式（以{开头，而不是以[开头）
   * @param {String} str
   * @returns {Boolean} true表示符合JSON格式，false表示不符合JSON格式
   */
  isJSON (str) {
    if (typeof str === 'string') {
      try {
        const obj = JSON.parse(str)
        if (typeof obj === 'object' && obj !== null && str.trim().indexOf('{') === 0) {
          return true
        } else {
          return false
        }
      } catch (e) {
        return false
      }
    }
  },

  /**
   * 判断对象是否为{}，也可以通过JSON.stringify(a) === '{}'来判断
   * @param {object} obj
   */
  isEmptyObject1 (obj) {
    for (let i in obj) {
      return false
    }
    return true
  },
}
