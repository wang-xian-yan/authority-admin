<template>
   <a-form
           :form="loginForm"
           @submit="handleSubmit">
      <a-form-item>
         <a-input
                 v-decorator="[
          'note',
          {rules: [{ required: true, message: 'Please input your note!' }]}
        ]"
         >
            <a-icon
                    slot="prefix"
                    type="user"
                    style="color:rgba(0,0,0,.25)"
            />
         </a-input>
      </a-form-item>
      <a-form-item>
         <a-input
                 v-decorator="[
          'note',
          {rules: [{ required: true, message: 'Please input your note!' }]}
        ]"
         >
            <a-icon
                    slot="prefix"
                    type="lock"
                    style="color:rgba(0,0,0,.25)"
            />
         </a-input>
      </a-form-item>
      <a-form-item>
         <a-button
                 type="primary"
                 block
                 html-type="submit">
            登录
         </a-button>
      </a-form-item>
   </a-form>
</template>

<script>
    export default {
        name: "LoginForm",
        data() {
            return {
               loginForm: this.$form.createForm(this)

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
