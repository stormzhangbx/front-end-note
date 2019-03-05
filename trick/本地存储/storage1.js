const storage = {
  setStorage (key, value, duration) {
    const data = {
      value: value,
      expiryTime: !duration || isNaN(duration) ? 0 : this.getCurrentTimeStamp() + parseInt(duration)
    }
    localStorage.setItem(key, JSON.stringify(data))
  },
  getStorage (key) {
    const data = localStorage[key]
    if (data === null) return null
    const now = this.getCurrentTimeStamp()
    let obj
    try {
        obj = JSON.parse(data)
    } catch (e) {
        return null
    }
    if (obj.expiryTime === 0 || obj.expiryTime > now) {
        return obj.value
    }
    return null
  },
  removeStorage (key) {
    localStorage.removeItem(key)
  },
  clearStorage () {
    localStorage.clear()
  },
  getCurrentTimeStamp () {
    return (new Date()).getDate()
  }
}
