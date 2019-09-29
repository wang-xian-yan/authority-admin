<template>
    <a-form :form="form">
        <a-form-item>
            <a-input placeholder="Username">
                <a-icon slot="prefix" type="user" />
            </a-input>
        </a-form-item>
        <a-form-item>
            <a-input placeholder="Password">
                <a-icon slot="prefix" type="lock" />
            </a-input>
        </a-form-item>
        <a-form-item>
            <a-button type="primary" block>登录</a-button>
        </a-form-item>
    </a-form>
</template>

<script>
    export default {
        name: "LoginForm",
        data() {
            return {
                form: this.$form.createForm(this)
            };
        },
    }
</script>

<style scoped>

</style>
