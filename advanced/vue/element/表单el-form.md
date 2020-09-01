# 表单 el-formx

el-form-item 的 prop 属性对应 el-form 的属性 model 中的相应字段。作用如下：
- 标识 el-form 的属性 rules 中相应的验证规则。
- 用于表单的 resetFields 方法。

给表单项添加验证规则也可以通过给 el-form-item 设置 rules 属性来实现。

```html
<el-form ref="ruleForm" :model="form" label-width="80px" :rules="rules">
  <el-form-item label="活动名称" prop="name">
    <el-input v-model="form.name"></el-input>
  </el-form-item>
</el-form>

<script>
export default {
  name: 'validate',
  data () {
    return {
      form: {
        name: 'Jack'
      },
      rules: {
        name: [
          { required: true, message: '请输入活动名称', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ]
      }
    }
  }
}
</script>
```

由于**地址引用**，在 el-input 中输入值，会修改对象 ruleForm 的 name 键的值。

在官网动态增加表单项的例子中，也是由于**地址引用**的原因，在表单中输入值，可以修改 `dynamicValidateForm.domains` 的值。

el-form 和 el-form-item 有一些相同的属性，如 rule、label-width、size，这些属性如果在 el-form 上，则作用于每个 el-form-item，如果在 el-form-item 上，则只作用域当前 el-form-item。

clearValidate，仅仅用于移除验证结果，传入待移除的表单项的 prop 属性或者 prop 组成的数组，如不传则移除整个表单的校验结果。

resetFields，对整个表单进行重置，**将所有字段值重置为初始值**并**移除校验结果**，如上面的例子中，执行`this.$refs.ruleForm.resetFields()` 会将 input 的值还原成最初的 Jack