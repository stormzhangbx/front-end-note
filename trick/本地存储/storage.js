export default {
  getType (object) {
    return Object.prototype.toString
      .call(object)
      .match(/^\[object\s(.*)\]$/)[1]
  },
  setItem (key, value) {
    if (
      this.getType(value) === "Object" ||
      this.getType(value) === "Array"
    ) {
      value = JSON.stringify(value)
    }
    localStorage.setItem(key, value)
  },
  getItem (key, value) {
    var value = localStorage.getItem(key)
    if (value === null) {
      // 如果不存在
      return false
    }
    if (
      (value && value.substring(0, 1) === "{") ||
      value.substring(0, 1) === "["
    ) {
      value = JSON.parse(value)
    }
    return value
  },
  removeItem (key) {
    this.getItem(key) && localStorage.removeItem(key)
  },
  clear () {
    localStorage.clear()
  }
}
