/**
 * 拼接对象参数到url
 * @param { String } url 链接地址
 * @param { Object } param 对象参数
 */
const createUrl = (url, param) => {
    var links = "";
    $.each(param, function (key, value) {
        links += "&" + key + "=" + value;
    });
    var newUrl = url + "?" + links.substr(1);
	return newUrl.replace(" ","")
}

/**
 * 获取url指定参数值
 * @param { String } name url参数名称
 */
const getQueryString = (name) => {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return decodeURI(r[2]);
    return null;
}

/**
 * 序列化表单值，并拼接成ajax参数
 * @param { String } select jq选择器，选择表单form
 * @example
 * ```javascript
 * //output: 123.jpgs
 * console.log("123.jpgs".replace(/\..{3}$/g,''))
 * ```
 */
const getParam = (select) => {
	var paramData = {token: token};                     //或var paramData = {token: token};
    var paramForm = $(select).serializeArray();  //[{name: name, value: value},...],表单控件需要有name属性
    for (var i = 0; i < paramForm.length; i++) {
        if (typeof(typeof(paramForm[i].name) !== "undefined" && paramForm[i].value) !== "undefined") {
            paramData[paramForm[i].name] = paramForm[i].value;
        }
    }
	return paramData

}

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
const highlightColor = (flag, ele, cla) => {
	flag ? $(ele).addClass(cla) : $(ele).removeClass(cla);
}


/**
 * 获取颜色值，16进制字符串
 * @example
 * ```javascript
 * //output: #cccccc
 * getRandomColor()
 * ```
 */
const getRandomColor = () => {
  let rgb =[]
  for (let i =0; i<3; i++){
    let color = Math.floor(Math.random()*256).toString(16)
    color = color.length == 1 ? '0' + color : color
    rgb.push(color)
  }
  return '#' + rgb.join('')
}

/**
 * 把rgb格式的颜色值转换成16进制格式
 * @method fixColor
 * @param { String } rgb格式的颜色值
 * @param { String }
 * @example
 * rgb(255,255,255)  => "#ffffff"
 */
const fixColor = (name, value) => {
  if (/color/i.test(name) && /rgba?/.test(value)) {
    var array = value.split(",")
    if (array.length > 3)
      return ""
    value = "#"
    for (var i = 0, color; color = array[i++];) {
      color = parseInt(color.replace(/[^\d]/gi, ''), 10).toString(16)
      value += color.length == 1 ? "0" + color : color
    }
    value = value.toUpperCase()
  }
  return value;
}

/**
 * 从已知对象数组中取出符合条件项所在的对象
 * @param {Array} arr
 * @param {String} param
 * @returns {Object}
 */
const getItem = (arr, param) => {
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
}

/**
 * 将查询字符串转化为对象
 * @param { Sting } queryStr 查询字符串
 * @param { String } seperator 分隔符
 */
const queryStr2obj = (queryStr, seperator='&') => {
  const obj = {}
  if (queryStr === '' || queryStr === null) {
	return obj
  }
  const arr = queryStr.split(seperator)
  const k, v, sub
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
 * 将json对象语法高亮的打印出来
 * @param { Object } json 需要打印出来的js对象
 * pre .string { color: #885800; }
 * pre .number { color: blue; }
 * pre .boolean { color: magenta; }
 * pre .null { color: red; }
 * pre .key { color: green; } 
 * 一般将函数的返回值作为<pre>的innerHTML
 */
const highLightingObj = (json) => {
  if (json) {
    json = JSON.stringify(json, undefined, 4);
    json = json.replace(/&/g, '&').replace(/</g, '<').replace(/>/g, '>');
    return json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, function(match) {
      var cls = 'number';
      if (/^"/.test(match)) {
        if (/:$/.test(match)) {
            cls = 'key';
        } else {
            cls = 'string';
        }
      } else if (/true|false/.test(match)) {
        cls = 'boolean';
      } else if (/null/.test(match)) {
        cls = 'null';
      }
      return '<span class="' + cls + '">' + match + '</span>';
    });
  }
}

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
const removeItem = (array, item) => {
  for (var i = 0, l = array.length; i < l; i++) {
    if (array[i] === item) {
      array.splice(i, 1)
      i--
    }
  }
}

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
const trim = (str) => {
  return str.replace(/(^[ \t\n\r]+)|([ \t\n\r]+$)/g, '')
}

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
const isEmptyObject = (obj) => {
  if (obj == null) return true;
  if (this.isArray(obj) || this.isString(obj)) return obj.length === 0;
  for (var key in obj) if (obj.hasOwnProperty(key)) return false
  return true
},

/**
 * 判断客户端是否是移动端
 * @example
 * if (isMobile) {
 *   const searchStr = window.location.search
 *   const hashStr = window.location.hash
 *   window.location.replace('./mobile.html' + searchStr + hashStr)
 * }
 */
const isMobile = () => {
  const userAgent = navigator.userAgent.toLocaleLowerCase()
  if ((/(mobile)/.test(userAgent)) || (/(android)/.test(userAgent)) || (/(iphone|ipad|ipod)/.test(userAgent)) || (/(windows phone)/.test(userAgent))) {
    return true
  } else {
    return false
  }
}

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
const toType = (obj) => {
  return Object.prototype.toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase()
}

/**
 * 参数过滤函数,除去obj中参数值为null的项（如果参数值是对象或者数组，会继续除去其中的null项）
 * @param {object} obj
 */
const filterNull = (obj) => {
  for (let i in obj) {
    if (obj[i] === null) {
      delete obj[i]
    }
    if (toType(obj[i]) === 'string') {
      obj[i] = obj[i].trim()
    } else if (toType(obj[i]) === 'object') {
      obj[i] = filterNull(obj[i])
    } else if (toType(obj[i]) === 'array') {
      obj[i] = filterNull(obj[i])
    }
  }
  return o
}

/**
 * 判断某个字符串是否符合JSON格式（以{开头，而不是以[开头）
 * @param {String} str
 * @returns {Boolean} true表示符合JSON格式，false表示不符合JSON格式
 */
const isJSON = (str) => {
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
}

/**
 * js中生成唯一id的方法
 */
const genId = () => {
  return Number(Math.random().toString().substr(3, 6) + Date.now()).toString(36)
}

/**
* RFC4122 version 4 compliant unique id creator.
*
* Added by by https://github.com/tufanbarisyildirim/
*
* @returns {String}
*/
const newGuid = () => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r =  Math.random() * 16 | 0,
        v = c === 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
};

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
const upOrDown = (type, array, index) => {
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

export const utils = {
  createUrl,
  getQueryString,
  getParam,
  highlightColor,
  getRandomColor,
  fixColor,
  getItem,
  queryStr2obj,
  highLightingObj,
  removeItem,
  trim,
  isEmptyObject,
  toType,
  upOrDown
}