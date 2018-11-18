let phoneReg = /^1[3456789]\d{9}$/
let emailReg = /^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/
let nameReg = /^[\u0391-\uFFE5]{2,24}$|^[a-zA-Z]{4,}$/
let pureNumOrLetterReg = /^[A-Za-z0-9]+$/

let commonValidate = (input, reg, checkItem) => {
  let result = {
    flag: true,
    msg: ''
  }
  if (Object.prototype.toString.call(reg) === '[object RegExp]') {
    if (!reg.test(input)) {
      result.flag = false
      result.msg = `请输入正确的${checkItem}`
    }
  }
  return result
}

let validation = {
  checkPhone(phone) {
    return commonValidate(phone, phoneReg, '手机号码')
  },
  checkEmail(email) {
    return commonValidate(email, emailReg, '邮箱')
  },
  checkName(name) {
    return commonValidate(name, nameReg, '姓名')
  },
  checkPureNumOrLetter(text) {
    return pureNumOrLetterReg.test(text)
  },
  checkIdNo(idNo) {

    let result = {
      flag: true,
      msg: ''
    }
    let area = {
      11: '北京',
      12: '天津',
      13: '河北',
      14: '山西',
      15: '内蒙古',
      21: '辽宁',
      22: '吉林',
      23: '黑龙江',
      31: '上海',
      32: '江苏',
      33: '浙江',
      34: '安徽',
      35: '福建',
      36: '江西',
      37: '山东',
      41: '河南',
      42: '湖北',
      43: '湖南',
      44: '广东',
      45: '广西',
      46: '海南',
      50: '重庆',
      51: '四川',
      52: '贵州',
      53: '云南',
      54: '西藏',
      61: '陕西',
      62: '甘肃',
      63: '青海',
      64: '宁夏',
      65: '新疆',
      71: '台湾',
      81: '香港',
      82: '澳门',
      91: '国外'
    }
    let Y, JYM
    let S, M
    let ereg
    let idcardArray = idNo.split('')
    // 非空验证
    if (idNo.length === 0) {
      result.flag = false
      result.msg = '身份证不能为空'
      return result
    }
    // 地区验证
    if (typeof area[parseInt(idNo.substr(0, 2))] === 'undefined') {
      result.flag = false
      result.msg = '身份证号码有误'
      return result
    }
    // 身份号码位数及格式检验
    switch (idNo.length) {
      case 15:
      // 15位身份号码检测
        if (((parseInt(idNo.substr(6, 2)) + 1900) % 4 === 0 && (parseInt(idNo.substr(6, 2)) + 1900) % 100 !== 0) ||
          ((parseInt(idNo.substr(6, 2)) + 1900) % 100 === 0 && (parseInt(idNo.substr(6, 2)) + 1900) % 400 === 0)) {
            // 测试闰年出生日期的合法性
          ereg = /^[1-9][0-9]{5}[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|[1-2][0-9]))[0-9]{3}$/
        } else {
            // 测试平年出生日期的合法性
          ereg = /^[1-9][0-9]{5}[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|1[0-9]|2[0-8]))[0-9]{3}$/
        }
        if (!ereg.test(idNo)) {
          result.flag = false
          result.msg = '身份证号码有误'
          return result
        }
        break
      case 18:
        // 18位身份号码检测
        if ((parseInt(idNo.substr(6, 4)) % 4 === 0 && parseInt(idNo.substr(6, 4)) % 100 !== 0) ||
          (parseInt(idNo.substr(6, 4)) % 100 === 0 && parseInt(idNo.substr(6, 4)) % 400 === 0)) {
            // 测试闰年出生日期的合法性
          ereg = /^[1-9][0-9]{5}(19|20)[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|[1-2][0-9]))[0-9]{3}[0-9Xx]$/
        } else {
            // 测试平年出生日期的合法性
          ereg = /^[1-9][0-9]{5}(19|20)[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|1[0-9]|2[0-8]))[0-9]{3}[0-9Xx]$/
        }
        if (ereg.test(idNo)) {
            // 计算校验位
          S = (parseInt(idcardArray[0]) + parseInt(idcardArray[10])) * 7 +
                (parseInt(idcardArray[1]) + parseInt(idcardArray[11])) * 9 +
                (parseInt(idcardArray[2]) + parseInt(idcardArray[12])) * 10 +
                (parseInt(idcardArray[3]) + parseInt(idcardArray[13])) * 5 +
                (parseInt(idcardArray[4]) + parseInt(idcardArray[14])) * 8 +
                (parseInt(idcardArray[5]) + parseInt(idcardArray[15])) * 4 +
                (parseInt(idcardArray[6]) + parseInt(idcardArray[16])) * 2 +
                parseInt(idcardArray[7]) * 1 +
                parseInt(idcardArray[8]) * 6 +
                parseInt(idcardArray[9]) * 3
          Y = S % 11
          JYM = '10X98765432'   // 匹配的字符串
          M = JYM.substr(Y, 1) // 获取校验位
          if (M !== idcardArray[17]) {
          // 检测ID的校验位
            result.flag = false
            result.msg = '身份证号码有误'
            return result
          }
        } else {
          result.flag = false
          result.msg = '身份证号码有误'
          return result
        }
        break
      default:
        result.flag = false
        result.msg = '身份证号码位数有误'
        return result
    } // switch end
    return result
  }
}



