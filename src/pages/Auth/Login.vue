<template>
    <f7-page no-toolbar no-navbar no-swipeback login-screen>
        <f7-login-screen-title>
            <img src="../../img/icons/logo-header.png" style="height: 15%;width: 30%"/>
        </f7-login-screen-title>
        <f7-list form>
            <f7-list-input
                    label="Email"
                    type="email"
                    placeholder="Your email"
                    :value="username"
                    @input="username = $event.target.value"
            ></f7-list-input>
            <f7-list-input
                    label="Password"
                    type="password"
                    placeholder="Your password"
                    :value="password"
                    @input="password = $event.target.value"
            ></f7-list-input>
        </f7-list>
        <f7-list>
            <f7-list-button @click="signIn" raised>
                Sign In
            </f7-list-button>

            <f7-block-footer>
                &copy; 3MandD Labs LLC.
            </f7-block-footer>
        </f7-list>
    </f7-page>
</template>

<script>
    export default {
        data() {
            return {
                username: '',
                password: '',
            };
        },
        methods: {
            signIn() {
                const self = this;
                const app = self.$f7;
                const router = self.$f7router;

                app.preloader.show();

                setTimeout(function() {
                    app.preloader.hide();
                    router.navigate('/home/');
                }, 3000);

            },
        },
    };
</script>

<style scoped>

</style>