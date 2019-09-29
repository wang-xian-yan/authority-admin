<template>
    <Form ref="loginForm" :model="loginForm">
        <FormItem prop="user">
            <Input type="text" v-model="loginForm.username" placeholder="Username">
                <Icon type="ios-person-outline" slot="prepend"></Icon>
            </Input>
        </FormItem>
        <FormItem prop="password">
            <Input type="password" v-model="loginForm.password" placeholder="Password">
                <Icon type="ios-lock-outline" slot="prepend"></Icon>
            </Input>
        </FormItem>
        <FormItem>
            <Button type="primary" @click="handleSubmit()" long>登录</Button>
        </FormItem>
    </Form>
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
