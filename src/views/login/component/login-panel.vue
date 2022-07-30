<template>
  <div class="login-panel">
    <h1 class="title">Backstage Management System</h1>
    <el-tabs type="border-card" stretch>
      <el-tab-pane name="account">
        <template #label>
          <span
            ><el-icon><User /></el-icon> Account Login</span
          >
        </template>
        <login-user ref="accountRef" />
      </el-tab-pane>
      <el-tab-pane name="phone">
        <template #label>
          <span
            ><el-icon><Iphone /></el-icon>Mobile Login</span
          >
        </template>
        <login-phone />
      </el-tab-pane>
    </el-tabs>

    <div class="account-control">
      <el-checkbox v-model="isKeepPassword">Rememb</el-checkbox>
      <el-link type="primary">Forgot your password</el-link>
    </div>

    <el-button type="primary" class="login-btn" @click="handleLoginClick"
      >Immediately On</el-button
    >
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import LoginUser from './login-user.vue'
import LoginPhone from './login-phone.vue'

export default defineComponent({
  components: {
    LoginUser,
    LoginPhone
  },
  setup() {
    const isKeepPassword = ref(false)
    const accountRef = ref<InstanceType<typeof LoginUser>>()

    const handleLoginClick = () => {
      console.log('ONE OK ROCK')
      accountRef.value?.loginAction()
    }

    return {
      isKeepPassword,
      handleLoginClick,
      accountRef
    }
  }
})
</script>

<style scoped lang="less">
.login-panel {
  width: 370px;
  margin-bottom: 150px;

  .title {
    text-align: center;
  }

  .account-control {
    margin-top: 12px;
    display: flex;
    justify-content: space-between;
  }

  .login-btn {
    margin-top: 10px;
    width: 100%;
  }
}
</style>
