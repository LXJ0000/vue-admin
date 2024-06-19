<template>
  <div class="register">
    <a-form :model="form" :style="{ width: '600px' }" @submit="handleSubmit">
      <a-form-item field="username" label="用户名">
        <a-input v-model="form.username" />
      </a-form-item>
      <a-form-item field="email" label="邮箱">
        <a-input v-model="form.email" />
      </a-form-item>
      <a-form-item field="password" label="密码">
        <a-input-password
          v-model="form.password"
          v-model:visibility="visibility"
          :defaultVisibility="false"
          allow-clear
        />
      </a-form-item>
      <a-form-item field="confirmPassword" label="确认密码">
        <a-input-password
          v-model="form.confirmPassword"
          v-model:visibility="visibility"
          :defaultVisibility="false"
          allow-clear
        />
      </a-form-item>
      <a-form-item field="agreeTerms">
        <a-checkbox v-model="form.agreeTerms"> 我同意注册协议 </a-checkbox>
      </a-form-item>
      <a-form-item>
        <a-button html-type="submit">注册</a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script>
import { reactive } from 'vue'
import axios from 'axios'
import { Message } from '@arco-design/web-vue'
import { ref } from 'vue'

export default {
  setup() {
    const visibility = ref(true)
    const form = reactive({
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
      agreeTerms: false,
    })

    const handleSubmit = () => {
      if (form.password !== form.confirmPassword) {
        Message.error('两次输入的密码不一致')
        return
      }

      if (!form.agreeTerms) {
        Message.error('请同意注册协议')
        return
      }

      axios
        .post('http://120.78.128.186/api/signup', {
          username: form.username,
          email: form.email,
          password: form.password,
        })
        .then((resp) => {
          Message.success('注册成功')
          console.log(resp.data.message)
        })
        .catch((error) => {
          Message.error('注册失败，请重试')
          console.error(error.response.data.message)
        })
    }

    return {
      form,
      handleSubmit,
      visibility,
    }
  },
}
</script>

<style scoped>
.register {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
</style>
