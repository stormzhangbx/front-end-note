export default {
  /**
   * 序列化表单值，并拼接成ajax参数
   * @param { String } select jq选择器，选择表单form
   * @example
   * ```javascript
   * //output: 123.jpgs
   * console.log("123.jpgs".replace(/\..{3}$/g,''))
   * ```
   */
  getParam (select) {
    var paramData = {token: token}                     //或var paramData = {token: token};
    var paramForm = $(select).serializeArray()  //[{name: name, value: value},...],表单控件需要有name属性
    for (var i = 0; i < paramForm.length; i++) {
      if (typeof(typeof(paramForm[i].name) !== 'undefined' && paramForm[i].value) !== 'undefined') {
        paramData[paramForm[i].name] = paramForm[i].value
      }
    }
    return paramData
  },

  /**
   * 高亮颜色
   * @param { Boolean } 判断是否要高亮颜色
   * @param { String } jq选择器
   * @param { String } 类名
   * @example
   * ```javascript
   * 获取用户未读消息数
   * $.post(_ctx + "/userMsg/getUnreadTotal", {}, function(ret) {
   *	 highlightColor(ret.data > 0, "#unReadTotal", "c-red");
  *	 if (ret && ret.code == 0) {
  *		 $("#unReadTotal").html(ret.data);
  *	 }
  * }, "json");
  * ```
  */
  highlightColor (flag, ele, cla) {
    flag ? $(ele).addClass(cla) : $(ele).removeClass(cla)
  },


  /**
   * 获取颜色值，16进制字符串
   * @example
   * ```javascript
   * //output: #cccccc
   * getRandomColor()
   * ```
   */
  getRandomColor () {
    let rgb = []
    for (let i =0; i<3; i++){
      let color = Math.floor(Math.random()*256).toString(16)
      color = color.length == 1 ? '0' + color : color
      rgb.push(color)
    }
    return '#' + rgb.join('')
  },

  /**
   * 把rgb格式的颜色值转换成16进制格式
   * @method fixColor
   * @param { String } rgb格式的颜色值
   * @param { String }
   * @example
   * rgb(255,255,255)  => "#ffffff"
   */
  fixColor (name, value) {
    if (/color/i.test(name) && /rgba?/.test(value)) {
      var array = value.split(',')
      if (array.length > 3)
        return ''
      value = '#'
      for (var i = 0, color; color = array[i++];) {
        color = parseInt(color.replace(/[^\d]/gi, ''), 10).toString(16)
        value += color.length == 1 ? '0' + color : color
      }
      value = value.toUpperCase()
    }
    return value
  },

  /**
   * 从已知对象数组中取出符合条件项所在的对象
   * @param {Array} arr
   * @param {String} param
   * @returns {Object}
   */
  getItem (arr, param) {
    let obj = null
    if (arr.length > 0) {
      for (let i = 0; i < arr.length; i++) {
        if(arr[i].name === param) {
          obj = arr[i]
        } else if (arr[i].children && arr[i].children.length > 0) {
          obj = getItem(arr[i].children, param)
        }
        if (obj !== null) {
          break
        }
      }
    }
    return obj
  },



  /**
   * 将json对象语法高亮的打印出来
   * @param { Object } json 需要打印出来的js对象
   * pre .string { color: #885800; }
   * pre .number { color: blue; }
   * pre .boolean { color: magenta; }
   * pre .null { color: red; }
   * pre .key { color: green; }
   * 一般将函数的返回值作为<pre>的innerHTML
   */
  highLightingObj (json) {
    if (json) {
      json = JSON.stringify(json, undefined, 4)
      json = json.replace(/&/g, '&').replace(/</g, '<').replace(/>/g, '>')
      return json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, function(match) {
        var cls = 'number'
        if (/^"/.test(match)) {
          if (/:$/.test(match)) {
            cls = 'key'
          } else {
            cls = 'string'
          }
        } else if (/true|false/.test(match)) {
          cls = 'boolean'
        } else if (/null/.test(match)) {
          cls = 'null'
        }
        return '<span class="' + cls + '">' + match + '</span>'
      })
    }
  },

  /**
   * 移除数组array中所有的元素item
   * @method removeItem
   * @param { Array } array 要移除元素的目标数组
   * @param { * } item 将要被移除的元素
   * @remind 该方法的匹配过程使用的是恒等“===”
   * @example
   * ```javascript
   * var arr = [ 4, 5, 7, 1, 3, 4, 6 ];
   *
   * removeItem( arr, 4 );
   * //output: [ 5, 7, 1, 3, 6 ]
   * console.log( arr );
   *
   * ```
   */
  removeItem (array, item) {
    for (var i = 0, l = array.length; i < l; i++) {
      if (array[i] === item) {
        array.splice(i, 1)
        i--
      }
    }
  },

  /**
   * 删除字符串str的首尾空格
   * @method trim
   * @param { String } str 需要删除首尾空格的字符串
   * @return { String } 删除了首尾的空格后的字符串
   * @example
   * ```javascript
   *
   * var str = " UEdtior ";
   *
   * //output: 9
   * console.log( str.length );
   *
   * //output: 7
   * console.log( UE.utils.trim( " UEdtior " ).length );
   *
   * //output: 9
   * console.log( str.length );
   *
   *  ```
   */
  trim (str) {
    return str.replace(/(^[ \t\n\r]+)|([ \t\n\r]+$)/g, '')
  },

  /**
   * 参数过滤函数,除去obj中参数值为null的项（如果参数值是对象或者数组，会继续除去其中的null项）
   * @param {object} obj
   */
  filterNull (obj) {
    for (let i in obj) {
      if (obj[i] === null) {
        delete obj[i]
      }
      if (toType(obj[i]) === 'string') {
        obj[i] = obj[i].trim()
      } else if (toType(obj[i]) === 'object') {
        obj[i] = this.filterNull(obj[i])
      } else if (toType(obj[i]) === 'array') {
        obj[i] = this.filterNull(obj[i])
      }
    }
    return o
  },

  /**
   * js中生成唯一id的方法
   */
  genId () {
    return Number(Math.random().toString().substr(3, 6) + Date.now()).toString(36)
  },

  /**
  * RFC4122 version 4 compliant unique id creator.
  *
  * Added by by https://github.com/tufanbarisyildirim/
  *
  * @returns {String}
  */
  newGuid () {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      var r =  Math.random() * 16 | 0,
        v = c === 'x' ? r : (r & 0x3 | 0x8)
      return v.toString(16)
    })
  },

  /**
   * 阶乘
   * @param {number} n
   * @example
   * factorial(4) // 24
   */
  factorial (n) {
    return n < 2 ? n : n * this.factorial(n-1) // 递归
  }
}
