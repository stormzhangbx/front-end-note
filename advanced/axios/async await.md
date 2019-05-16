# async/await

method | url | 描述
:--: | :--: | :--:
 get|/user|获取用户id
 get|/info/:id|通过用户id，获取用户信息(含用户国家id)
 get|/country/:id|通过国家id，获取国家信息

 ```html
<script>
export default {
  data () {
    return {
      countryInfo: null
    }
  },
  methods: {
    getCountryInfo () {
      this.$axios.get('/user') .then(response => {
        const userId = response.data.userId
        this.$axios.get(`/info/${userId}`).then(response1 => {
          const countryId = response1.data.countryId
          this.$axios.get(`/country/${countryId}`).then(response2 => {
            this.countryInfo = response2.data
          })
        })
      })
    }
  },
  mounted () {
    this.getCountryInfo()
  }
}
</script>
```

 ```html
<script>
export default {
  data () {
    return {
      countryInfo: null
    }
  },
  methods: {
    async getCountryInfo () {
      const response1 = await this.$axios.get('/user')
      const response2 = await this.$axios.get(`/info/${response1.data.userId}`)
      const response3 = await this.$axios.get(`/country/${response2.data.countryId}`)
      this.countryInfo = response3.data
    }
  },
  mounted () {
    this.getCountryInfo()
  }
}
</script>
```

```html
<script>
export default {
  data () {
    return {
      countryInfo: null
    }
  },
  methods: {
    getUserId () {
      return this.$axios.get('/user') .then(response => {
        return response.data.userId
      })
    },
    getCountryId (id) {
      return this.$axios.get(`/info/${id}`) .then(response => {
        return response.data.countryId
      })
    },
    getCountryInfo (id) {
      return this.$axios.get(`/country/${id}`).then(response => {
        return response.data
      })
    }
  },
  mounted () {
    this.getUserId().then(userId => {
      this.getCountryId(userId).then(countryId => {
        this.getCountryInfo(countryId).then(countryInfo => {
          this.countryInfo = countryInfo
        })
      })
    })
  }
}
</script>
```

```html
<script>
export default {
  data () {
    return {
      countryInfo: null
    }
  },
  methods: {
    async getUserId () {
      const response = await this.$axios.get('/user')
      return response.data.userId
    },
    async getCountryId (id) {
      const response = await this.$axios.get(`/info/${id}`)
      return response.data.countryId
    },
    async getCountryInfo (id) {
      const response = await this.$axios.get(`/country/${id}`)
      return response.data
    }
  },
  mounted () {
    this.getUserId().then(userId => {
      this.getCountryId(userId).then(countryId => {
        this.getCountryInfo(countryId).then(countryInfo => {
          this.countryInfo = countryInfo
        })
      })
    })
  }
}
</script>
```