<template>
  <div class="login">
    <a-form :model="form" :style="{ width: '600px' }" @submit="handleSubmit">
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
      <a-form-item field="rememberMe">
        <a-checkbox v-model="form.rememberMe"> 记住我 </a-checkbox>
      </a-form-item>
      <a-form-item>
        <a-button html-type="submit">提交</a-button>
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
      email: '',
      password: '',
      rememberMe: false,
    })
    const handleSubmit = () => {
      axios
        .post('http://120.78.128.186/api/login', {
          email: form.email,
          password: form.password,
        })
        .then((resp) => {
          Message.info('登陆成功')
          console.log(resp.data.message)
        })
        .catch((error) => {
          Message.error('用户名或密码错误')
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
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
</style>
