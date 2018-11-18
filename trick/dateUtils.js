/**
 * 获取两个日期之间的日期
 * @param {Object} startDate 日期对象,开始时间
 * @param {Object} endDate 日期对象,结束时间
 * @example
 * console.log(getDateList(new Date('2018-06-29'), new Date('2018-07-03')))
 */
const getDateList = (startDate, endDate) => {
  const dateList = []
  dateList.push(new Date(startDate))
  while (startDate.getTime() < endDate.getTime()) {
    startDate.setDate(startDate.getDate() + 1)
    dateList.push(new Date(startDate))  
  }
  return dateList
}

/**
 * 格式化日期时间
 * @param {(string|number)} d 可转换为日期的参数,如1453094034000,'2018-11-13'
 * @param {*} format 希望返回的日期格式
 */
const formatDate = (d, format = 'yyyy-MM-dd HH-mm-ss') => {
  const date = new Date(d)
  const year = date.getFullYear()
  const month = date.getMonth() + 1 // 月份是从0开始的
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()
  const arr = ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09']
  const result = format.replace(/yyyy/, year)
    .replace(/MM/, arr[month] || month)
    .replace(/dd/, arr[day] || day)
    .replace(/HH/, arr[hour] || hour)
    .replace(/mm/, arr[minute] || minute)
    .replace(/ss/, arr[second] || second)
  return result
}

/**
 * 将时间戳转化为日期(时间)
 * @param { Number } timeStamp 需要转换的事件戳
 * @param { String } seperator 分隔符
 */
const stamp2date = (timeStamp, seperator='/') => {
  const oDate =  new Date(timeStamp)
  const year = oDate.getFullYear()
  const month = (oDate.getMonth() + 1) < 10 ? '0' + (oDate.getMonth() + 1) : (oDate.getMonth() + 1)
  const date = oDate.getDate() < 10 ? '0' + oDate.getDate() : oDate.getDate()
  const hourse = oDate.getHours() < 10 ? '0' + oDate.getHours() : oDate.getHours()
  const minute = oDate.getMinutes() < 10 ? '0' + oDate.getMinutes() : oDate.getMinutes()
  const second = oDate.getSeconds() < 10 ? '0' + oDate.getSeconds() : oDate.getSeconds()
  const d = `${year}${seperator}${month}${seperator}${date} ${hourse}${seperator}${minute}${seperator}${second}`
  return d
}

/**
 * 根据出生日期获取年龄
 * @param {string} strBirthday 出生日期,如'1999-01-23'
 */
const getAge = (strBirthday) => {
  var returnAge;
  var strBirthdayArr=strBirthday.split("-");
  var birthYear = strBirthdayArr[0];
  var birthMonth = strBirthdayArr[1];
  var birthDay = strBirthdayArr[2];
  
  d = new Date();
  var nowYear = d.getFullYear();
  var nowMonth = d.getMonth() + 1;
  var nowDay = d.getDate();
  
  if (nowYear == birthYear) {
      returnAge = 0;//同年 则为0岁
  } else {
      var ageDiff = nowYear - birthYear; //年之差
      if (ageDiff > 0) {
          if (nowMonth == birthMonth) {
              var dayDiff = nowDay - birthDay;//日之差
              if(dayDiff < 0) {
                  returnAge = ageDiff - 1;
              } else {
                  returnAge = ageDiff ;
              }
          } else {
              var monthDiff = nowMonth - birthMonth;//月之差
              if(monthDiff < 0) {
                  returnAge = ageDiff - 1;
              } else {
                  returnAge = ageDiff ;
              }
          }
      } else {
          returnAge = -1;//返回-1 表示出生日期输入错误 晚于今天
      }
  }
  return returnAge;//返回周岁年龄
}

/**
 * 根据身份号获取生日和性别
 * @param {string} idCard 
 */
const getBirAndSex = (idCard) => {
  let birthday = ''
  let sex = 0 // 0表示女,1表示男
  if (idCard.length === 18) {
    birthday = `${idCard.substring(6, 10)}-${idCard.substring(11, 12)}-${idCard.substring(13, 14)}`
    sex=(idCard[16] % 2 === 0) ? 0 : 1
  } else {
    birthday=`19${idCard.substring(6, 8)}-${idCard.substring(9, 10)}-${idCard.substring(11, 12)}`
    sex=(idCard[14] % 2 === 0) ? 0 : 1
  }

  return { birthday, sex }
}

/**
 * 通过日期获取中文星期几
 * @param {*} date 日期参数
 */
const getWeek = (date) => {
  const day = new new(date).getDay()
  const mapWeek = ['日', '一',  '二', '三', '四', '五', '六']
  return mapWeek[day]
}