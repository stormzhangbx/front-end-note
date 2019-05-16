# 导出

```js
var servePath = 'xxx' // 接口公共前缀
function exportExcel () { // 导出
    const params = {
        token: localStorage.getItem('token'),
        ...this.exportConditionData
    }
    const createUrl = (url, param) => {
        var query = '';
        for (let i in param) {
            query += `&${i}=${encodeURIComponent(param[i])}`
        }
        var newUrl = url + '?' + query.substr(1)
        return newUrl.replace(' ','')
    }
    window.location.href = createUrl(servePath + 'api', params)
}
```

导出功能逻辑主要由后端实现，前端拼接好url即可
