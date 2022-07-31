<template>
  <div class="login-panel">
    <h1 class="title">Backstage Management System</h1>
    <el-tabs type="border-card" stretch v-model="currentTab">
      <el-tab-pane name="PC">
        <template #label>
          <span
            ><el-icon><User /></el-icon> Account Login</span
          >
        </template>
        <login-user ref="userRef" />
      </el-tab-pane>
      <el-tab-pane name="phone">
        <template #label>
          <span
            ><el-icon><Iphone /></el-icon>Mobile Login</span
          >
        </template>
        <login-phone ref="phoneRef" />
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
    // 定义属性
    const isKeepPassword = ref(false)
    const userRef = ref<InstanceType<typeof LoginUser>>()
    const phoneRef = ref<InstanceType<typeof LoginPhone>>()
    const currentTab = ref('PC')

    // 方法
    const handleLoginClick = () => {
      if (currentTab.value === 'PC') {
        userRef.value?.loginAction(isKeepPassword.value)
      } else {
        console.log('调用phone登录')
      }
    }

    return {
      isKeepPassword,
      userRef,
      phoneRef,
      currentTab,
      handleLoginClick
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
