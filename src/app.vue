<template>
  <!-- App -->
  <f7-app :params="f7params">

      <f7-statusbar></f7-statusbar>

      <!-- Left Panel -->
      <f7-panel left reveal>
          <f7-view url="/panel-left/" links-view=".view-main"></f7-view>
      </f7-panel>

      <!-- Right Panel -->
      <f7-panel right cover>
          <f7-view url="/panel-right/"></f7-view>
      </f7-panel>

      <f7-view id="main-view" url="/" main class="safe-areas"></f7-view>

  </f7-app>
</template>

<script>
import routes from './routes.js'
import Auth from './store/auth'
import Flash from './helpers/flash'
import { post, interceptors } from './helpers/api'
import constant from './helpers/constants'

export default {
    created() {
        // global error http handler
        interceptors((err) => {
            if(err.response.status === 401) {
                Auth.remove()
                //this.$router.push('/login')
                this.$f7router.navigate('/login')
            }

            if(err.response.status === 500) {
                Flash.setError(err.response.statusText)
            }

            if(err.response.status === 404) {
                //this.$router.push('/not-found')
                this.$f7router.navigate('/not-found')
            }
        })
        Auth.initialize()
    },

  data() {
    return {
      // Framework7 parameters here
      f7params: {
        id: 'io.framework7.testapp', // App bundle ID
        name: 'Framework7', // App name
        theme: 'auto', // Automatic theme detection
        // App routes
        routes: routes,
      },
      authState: Auth.state,
      flash: Flash.state
    }
  },
  computed: {
        auth() {
            if(this.authState.api_token) {
                return true
            }
            return false
        },
        guest() {
            return !this.auth
        }
    },
    methods: {
        /*logout() {
            post(constant.server_url + 'logout', { user_id: Auth.state.user_id })
                .then((res) => {
                    if(res.data.done) {

                        this.$swal("Are you sure you want to do this?", {
                            buttons: ["Oh no!", true],
                        }).then((willLogout) => {
                            if(willLogout) {
                                // remove token
                                Auth.remove();
                                //Flash.setSuccess('You have successfully logged out.');
                                //this.$router.push('/login')
                                this.$f7router.navigate('/login/')
                            }
                        });
                    }
                })
        }*/
        logout() {
            this.$swal("Are you sure you want to do this?", {
                buttons: ["Oh no!", true],
            }).then((willLogout) => {
                if(willLogout) {
                    // remove token
                    Auth.remove();
                    //Flash.setSuccess('You have successfully logged out.');
                    //this.$router.push('/login')
                    this.$f7router.navigate('/login/')
                }
            });
        }
    }
}
</script>
