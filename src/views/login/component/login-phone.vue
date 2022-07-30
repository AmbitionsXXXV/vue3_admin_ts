<template>
  <div>
    <el-form label-width="90px">
      <el-form-item label="PhoneNum" prop="number">
        <el-input v-model="phone.number" />
      </el-form-item>
      <el-form-item label="Verification" prop="verification">
        <div class="verify-code">
          <el-input />
          <el-button type="primary" class="get-btn">Get Code</el-button>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'

export default defineComponent({
  setup() {
    const phone = reactive({
      number: '',
      verification: ''
    })

    return {
      phone
    }
  }
})
</script>

<style scoped lang="less">
.verify-code {
  display: flex;

  .get-btn {
    margin-left: 8px;
  }
}
</style>
