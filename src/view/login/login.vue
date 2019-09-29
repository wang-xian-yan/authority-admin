<style lang="less">
    @import 'login.less';
</style>
<template>
    <div class="login">
        <div class="login-form">
            <el-card class="box-card">
                <div slot="header" class="clearfix">
                    <span>欢迎登录</span>
                </div>
                <login-form/>
            </el-card>
            >
        </div>
    </div>
</template>

<script>
    import LoginForm from '../../components/login/login-form';

    export default {
        name: "login",
        components: {
            LoginForm
        }
    }
</script>


