# 分页el-pagination

查询接口通常包含如下请求参数

- page 表示请求第几页
- size 表示每页数据条数

以典型的上方是查询表单，下方是表格的页面为例，给页面应该具备如下基本功能：

1. 点击查询按钮，调用接口**参数page需置为1**，表示请求第一页

2. 通过上一页（prev）、页码列表（pager）、下一页（next）进行分页时，调用接口，参数page需置为点击分页按钮后的当前页

3. 调整每页显示的数据条数（sizes），调用接口，参数size置为调整后的值，**参数page需置为1**，例如，如果总共有50条数据，每页20条数据，那么总共有3页，正在查看第3页，此时将每页显示的数据量调为40条，如果请求参数page为3，size为40，显然此时接口将不会返回数据，因为page为40时，只有两页数据。所以调整每页条数后，需要将page置为1。

完整示例：

```html
<template>
  <div>
    <el-card class="search-header">
      <el-input
        placeholder="请输入姓名"
        v-model="name"
        clearable
        @keyup.enter.native="query"
      />
      <el-button type="primary" @click="query">查询</el-button>
    </el-card>

    <el-card class="search-body">
      <el-table
        v-loading="loading"
        :data="studentList"
      >
        <el-table-column prop="name" label="姓名"/>
        <el-table-column prop="age" label="年龄"/>
        <el-table-column prop="address" label="地址"/>
      </el-table>
      <el-pagination
        v-if="total>0"
        layout="total, sizes, prev, pager, next, jumper"
        :page-sizes="[10, 20, 40, 100]"
        :total="total"
        :current-page.sync="page"
        :page-size.sync="size"
        @size-change="handleSizeChange"
      />
    </el-card>
  </div>
</template>

<script>
import { listUser } from '@/api/student'

export default {
  name: 'Card',
  data () {
    return {
      loading: false,
      name: '',
      studentList: [],
      total: 0,
      page: 1,
      size: 10
    }
  },
  methods: {
    getList () {
      this.loading = true
      const params = {
        name: this.name,
        page: this.page,
        size: this.size
      }
      listUser(params).then(res => {
        // 请求成功立马关闭loading
        this.loading = false
        this.total = res.data.total
        this.studentList = res.data.list
      })
    },
    query () {
      this.page = 1
      this.getList()
    },
    handleSizeChange () {
      this.page = 1
      this.getList()
    }
  },
  mounted () {
    this.getList()
  }
}
</script>

<style scoped lang="less">
  .search-header {
    .el-input {
      width: 240px;
    }

    .el-button {
      margin-left: 20px;
    }
  }
</style>

```

封装el-pagination，抽离成一个组件：

