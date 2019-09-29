<template>
   <el-form v-model="loginForm" @keydown.enter.native="handleSubmit" :size="this.$store.state.app.componentSize">
      <el-form-item>
         <el-input v-model="loginForm.username"></el-input>
      </el-form-item>
      <el-form-item>
         <el-input type="password" v-model="loginForm.password" show-password clearable></el-input>
      </el-form-item>
      <el-form-item>
         <el-button type="primary" class="btn-block">登录</el-button>
      </el-form-item>
   </el-form>
</template>

<script>
    export default {
        name: "LoginForm",
        data() {
            return {
                loginForm: {
                    username: '',
                    password: ''
                }

            };
        },
        methods: {
            handleSubmit() {
                this.$router.replace({name: 'dashboard'});
            }
        }
    }
</script>

<style scoped>

</style>
