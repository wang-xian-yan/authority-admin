<style lang="less">
    @import 'login.less';
</style>
<template>
    <div class="login">
        <div class="login-form">
            <a-card title="欢迎登录">
                <login-form/>
            </a-card>
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


