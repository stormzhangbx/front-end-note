# 如何将el-dialog封装成通用组件

如果项目中某一对话框在多个页面或者一个页面中多处使用，可以考虑将其封装成通用组件。

通用组件：
```html
<-- hello.vue-->
<template>
  <el-dialog
    title="标题"
    :visible.sync="isShow"
    :before-close="beforeCloseFunc">
    <div>hello</div>
    <span slot="footer">
      <el-button @click="cancelFunc">取 消</el-button>
      <el-button type="primary" @click="confirmFunc">确 定</el-button>
    </span>
  </el-dialog>
</template>

<script>
export default {
  name: 'name',
  props: {
    isShow: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {}
  },
  methods: {
    cancelFunc () { // 取消
      this.$emit('update:isShow', false)
    },
    confirmFunc () { // 确定
      this.$emit('update:isShow', false)
    },
    beforeCloseFunc () { // 点击关闭或者遮罩层时的逻辑
      this.$emit('update:isShow', false)
    }
  }
}
</script>

<style scoped>

</style>
```

使用：
```html
<!-- form -->
<template>
  <div class="p20">
    <el-button @click="isVisible = true">click</el-button>
    <upload-dialog :isShow.sync="isVisible"/>
    <!-- 上面是下列3中形式的简写 -->
    <!-- <upload-dialog
      :isShow="isVisible"
      @update:isShow="closeFunc"/> -->
    <!-- <upload-dialog
      :isShow="isVisible"
      @update:isShow="isVisible = $event"/> -->
    <!-- <upload-dialog
      :isShow="isVisible"
      @update:isShow="val => isVisible = val"/> -->
  </div>
</template>

<script>
import UploadDialog from '@/components/uploadFile.vue'

export default {
  components: { UploadDialog },
  data () {
    return {
      isVisible: false
    }
  },
  methods: {
    closeFunc (val) {
      this.isVisible = val
    }
  }
}
</script>
```
