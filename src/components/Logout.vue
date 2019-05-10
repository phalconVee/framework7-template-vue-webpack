<template>
    <div>
        <f7-list>
            <f7-list-item @click.native="logout" style="cursor: pointer;" panel-close>
                <div>
                    <i class="material-icons" style="color: #ff3b30;">
                        power_settings_new
                    </i>
                    Logout
                </div>
            </f7-list-item>
        </f7-list>
    </div>
</template>

<script>
    import Auth from '../store/auth'
    export default {
        methods: {
            logout() {
                this.$swal("Are you sure you want to logout?", {
                    buttons: ["Oh no!", true],
                    dangerMode: true,
                }).then((willLogout) => {
                    if (willLogout) {
                        const self = this;
                        const app = self.$f7;
                        const router = self.$f7router;
                        Auth.remove();
                        router.navigate('/')
                        app.panel.close();

                    }
                });
            }
        }
    }
</script>

<style scoped>

</style>