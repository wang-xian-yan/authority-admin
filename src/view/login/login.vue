<style lang="less">
    @import 'login.less';
</style>
<template>
    <div class="login">
        <div class="login-form">
            <Card>
                <p slot="title">欢迎登录</p>
                <login-form/>
            </Card>
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


