<template>
  <div class="login-user">
    <el-form label-width="70px" :rules="accountRules" :model="account" ref="formRef">
      <el-form-item label="Account" prop="name">
        <el-input v-model="account.name" />
      </el-form-item>
      <el-form-item label="Password" prop="password">
        <el-input v-model="account.password" />
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { ElForm } from 'element-plus'
import { defineComponent } from 'vue'
import { reactive, ref } from 'vue'

export default defineComponent({
  setup() {
    const account = reactive({
      name: '',
      password: ''
    })

    const formRef = ref<InstanceType<typeof ElForm>>()

    const loginAction = () => {
      formRef.value?.validate((valid) => {
        if (valid) {
          console.log('真正执行登录逻辑')
        } else {
          console.log(valid)
        }
      })
    }

    const accountRules = {
      name: [
        {
          required: true,
          message: '必须输入用户名',
          trigger: 'blur'
        },
        {
          pattern: /^[a-z0-9]{3,}$/,
          message: '必须是3位以上数字',
          trigger: 'blur'
        }
      ],
      password: [
        {
          required: true,
          message: '必须输入密码',
          trigger: 'blur'
        },
        {
          pattern: /^[a-z0-9]{6,20}$/,
          message: '必须是6~20个字母或者数字',
          trigger: 'blur'
        }
      ]
    }

    return {
      account,
      accountRules,
      loginAction,
      formRef
    }
  }
})
</script>

<style scoped></style>
