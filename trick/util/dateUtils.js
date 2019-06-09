/**
 * 获取两个日期之间的日期（包头包尾）
 * @param {Object} startDate 日期对象,开始时间
 * @param {Object} endDate 日期对象,结束时间
 * @example
 * console.log(getDateList(new Date('2018-06-29'), new Date('2018-07-03')))
 */
export const getDateList = (startDate, endDate) => {
  const dateList = []
  dateList.push(new Date(startDate))
  while (startDate.getTime() < endDate.getTime()) {
    startDate.setDate(startDate.getDate() + 1)
    dateList.push(new Date(startDate))
  }
  return dateList
}

/**
 * 格式化日期时间,通过修改参数format,可以控制年月日时分秒之间的连接符
 * @param {(string|number)} d 可转换为日期的参数,如1453094034000,'2018-11-13',或者是Date对象(如console.log(new Date()), 打印Fri Jan 11 2019 14:57:12 GMT+0800 (中国标准时间))
 * @param {*} format 希望返回的日期格式
 * @example
 * formatDate('1980-02-03 22:22:22', 'yyyy年MM月dd日') // 1980年02月03日
 */
export const formatDate = (d, format = 'yyyy-MM-dd hh:mm:ss') => {
  if (!d) return
  d = /-/g.test(d) ? new Date(d.replace(/-/g, '/')) : d = new Date(d)
  const year = d.getFullYear()
  const month = d.getMonth() + 1 // 月份是从0开始的
  const day = d.getDate()
  const hour = d.getHours()
  const minute = d.getMinutes()
  const second = d.getSeconds()
  const arr = ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09']
  const result = format.replace(/yyyy/, year)
    .replace(/MM/, arr[month] || month)
    .replace(/dd/, arr[day] || day)
    .replace(/hh/, arr[hour] || hour)
    .replace(/mm/, arr[minute] || minute)
    .replace(/ss/, arr[second] || second)
  return result
}

/**
 * 根据出生日期获取年龄
 * @param {string} strBirthday 出生日期,如'1999-01-23'
 */
export const getAge = (strBirthday) => {
  var returnAge
  var strBirthdayArr = strBirthday.split('-')
  var birthYear = strBirthdayArr[0]
  var birthMonth = strBirthdayArr[1]
  var birthDay = strBirthdayArr[2]

  var d = new Date()
  var nowYear = d.getFullYear()
  var nowMonth = d.getMonth() + 1
  var nowDay = d.getDate()

  if (nowYear === birthYear) {
    returnAge = 0 // 同年 则为0岁
  } else if (nowYear > birthYear) {
    var ageDiff = nowYear - birthYear // 年之差
    if (nowMonth === birthMonth) {
      var dayDiff = nowDay - birthDay // 日之差
      if (dayDiff < 0) {
        returnAge = ageDiff - 1
      } else {
        returnAge = ageDiff
      }
    } else if (nowMonth < birthMonth) {
      returnAge = ageDiff - 1
    } else {
      returnAge = ageDiff
    }
  } else {
    returnAge = -1 // 返回-1 表示出生日期输入错误 晚于今天
  }
  return returnAge // 返回周岁年龄
}

/**
 * 根据身份号获取生日和性别
 * @param {string} idCard
 */
export const getBirAndSex = (idCard) => {
  let birthday = ''
  let sex = ''
  if (idCard.length === 18) {
    birthday = `${idCard.substring(6, 10)}-${idCard.substring(10, 12)}-${idCard.substring(12, 14)}`
    sex = (idCard[16] % 2 === 0) ? '女' : '男'
  } else {
    birthday = `19${idCard.substring(6, 8)}-${idCard.substring(8, 10)}-${idCard.substring(10, 12)}`
    sex = (idCard[14] % 2 === 0) ? '女' : '男'
  }

  return { birthday, sex }
}

/**
 * 将一组时间按升序排列
 * @param {array} dateArr
 */
export const sortDate = (dateArr) => {
  return dateArr.sort((a, b) => new Date(a).getTime() - new Date(b).getTime())
}

/**
 * 格式化一个毫秒
 * @param {*} time
 * @example
 * console.log(new Date('2018-11-23') - new Date('2018-11-20')) // 259200000
 * formate(new Date('2018-11-23') - new Date('2018-11-20')) // '72小时0分钟0秒'
 */
export const formate = (time) => {
  time = time / 1000 // 单位秒
  let hour = parseInt(time / 3600)
  let min = parseInt(time % 3600 / 60)
  let sec = parseInt(time % 3600 % 60)
  return hour + '小时' + min + '分钟' + sec + '秒'
}

/**
 * 格式化一个毫秒
 * @param {*} time
 * @example
 * console.log(new Date('2018-11-20') - new Date('2018-11-23')) // -259200000
 * formate(new Date('2018-11-20') - new Date('2018-11-23')) // '已超时72小时0分钟0秒'
 */
export const format = (time) => {
  let hour = parseInt(time / 1000 / 3600)
  let min = parseInt((time / 1000 - hour * 3600) / 60)
  let sec = parseInt(time / 1000 - hour * 3600 - min * 60)
  if (time > 0) {
    return sec >= 0 ? hour + '小时' + min + '分钟' + sec + '秒' : '已超时'
  } else {
    return '已超时' + (-hour) + '小时' + (-min) + '分钟' + (-sec) + '秒'
  }
}

/**
 * 通过日期获取中文星期几
 * @param {*} date 日期参数
 */
export const getWeek = (date) => {
  const day = new Date(date).getDay()
  const mapWeek = ['日', '一', '二', '三', '四', '五', '六']
  return mapWeek[day]
}

/**
 * 获取当前月份第一天日期
 */
export const getCurMonthFirst = () => {
  let date = new Date()
  date.setDate(1)
  return date
}

/**
 * 获取当前月份最后一天日期
 */
export const getCurMonthLast = () => {
  let date = new Date()
  let curMonth = date.getMonth()
  let nextMonth = ++curMonth
  let nextMonthFirstDay = new Date(date.getFullYear(), nextMonth, 1)
  const oneDay = 24 * 60 * 60 * 1000
  return new Date(nextMonthFirstDay - oneDay)
}

/**
 * 获取当前时间前后N天前后日期的方法
 * @param {number} addDayCount
 * @example
 * console.log("一月前："+GetDateStr(-30));
 * console.log("昨天："+GetDateStr(-1));
 * console.log("今天："+GetDateStr(0));
 * console.log("明天："+GetDateStr(1));
 * console.log("后天："+GetDateStr(2));
 */
export const getDateStr = (addDayCount) => {
  var dd = new Date()
  dd.setDate(dd.getDate() + addDayCount) // 获取addDayCount天后的日期
  var y = dd.getFullYear()
  var m = (dd.getMonth() + 1) < 10 ? '0' + (dd.getMonth() + 1) : (dd.getMonth() + 1) // 获取当前月份的日期，不足10补0
  var d = dd.getDate() < 10 ? '0' + dd.getDate() : dd.getDate() // 获取当前几号，不足10补0
  return y + '-' + m + '-' + d
}

/**
 * 获取当前时间前后N天前后日期的方法
 * @param {number} dayCount 整数，负数表示当前时间之前的日期
 */
export const getDateStr1 = (dayCount) => {
  var dd = new Date()
  dd = new Date(dd.getTime() + dayCount * 8.64e7)
  return formatDate(dd)
}

/**
 * 相对日
 * @param {*} d 日期
 * @param {*} monthCount 几个月后的相对日
 */
export const getRelateDate = (d, monthCount) => {
  d = new Date(d)
  d.setMonth(d.getMonth() + 1)
  d.setDate(d.getDate() - 1)
  var yy1 = d.getFullYear()
  var mm1 = d.getMonth() + 1 // 因为getMonth（）返回值是 0（一月） 到 11（十二月） 之间的一个整数。所以要给其加1
  var dd1 = d.getDate()
  if (mm1 < 10) {
    mm1 = '0' + mm1
  }
  if (dd1 < 10) {
    dd1 = '0' + dd1
  }
  return yy1 + '-' + mm1 + '-' + dd1
}

/**
 * 兼容IE浏览器
 * @param {*} d 作为日期构造函数的参数
 */
export const replaceFunc = (d) => {
  return /-/g.test(d) ? new Date(d.replace(/-/g, '/')) : new Date(d)
}
