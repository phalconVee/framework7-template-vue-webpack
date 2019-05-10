<template>
  <f7-page>
    <f7-block-title>
        <small>Welcome,</small>
        <br/> <span style="color: #ff3b30;">Malachi Ani</span>
    </f7-block-title>

    <f7-list>
        <f7-list-item link="/profile/" panel-close>
            <div>
                <!--<f7-icon md="person_outline" size="20px" style="color: #ff9500;"></f7-icon>-->
                <i class="material-icons" style="color: #ff3b30;">person_outline</i>
                Profile
            </div>
        </f7-list-item>

        <f7-list-item link="/about/" panel-close>
            <div>
                <!--<f7-icon md="person_outline" size="20px" style="color: #ff9500;"></f7-icon>-->
                <i class="material-icons" style="color: #ff3b30;">info_outline</i>
                About
            </div>
        </f7-list-item>


      <f7-list-item link="/notifications/" panel-close>
          <div>
              <i class="material-icons" style="color: #ff3b30;">notifications_none</i>
              Notifications
          </div>
      </f7-list-item>

        <f7-list-item link="/settings/" panel-close>
            <div>
                <f7-icon f7="settings" style="color: #ff3b30;"></f7-icon>
                Settings
            </div>
        </f7-list-item>

    </f7-list>

    <Logout></Logout>

  </f7-page>
</template>

<script>
    import Logout from '../components/Logout'
    export default {
        components: {
            Logout
        },
    };
</script>
