<template>
  <!-- HEADER -->
  <b-row class="header">
    <b-col md="6">
      <router-link to="/">
        <img class="logo" src="../../assets/images/logo.png" alt>
      </router-link>
    </b-col>
    <b-col   md="6">
      <b-navbar-nav :v-if="$store.state.auth.isLogin" class="ml-auto">
        <AppHeaderDropdown  right no-caret>
          <template slot="header">
            <img src="img/avatars/6.jpg" class="img-avatar" alt="admin@bootstrapmaster.com">
          </template>\
          <template slot="dropdown">
            <b-dropdown-item>
              <i class="fa fa-user"/> Meu Perfil
            </b-dropdown-item>
            <b-dropdown-item to="/candidate/candidate-update/personalData">
              <i class="fa fa-pencil"/> Editar Perfil
            </b-dropdown-item>
            <b-dropdown-item @click.prevent="logout()">
              <i class="fa fa-lock"/> Sair
            </b-dropdown-item>
          </template>
        </AppHeaderDropdown>
      </b-navbar-nav>
    </b-col>
  </b-row>
</template>
<script>
import { HeaderDropdown as AppHeaderDropdown } from "@coreui/vue";
export default {
  name: "Header",
  data() {
    return {
      isLogin: false
    };
  },
  components: {
    AppHeaderDropdown
  },
  methods: {
    logout(){
      this.$store.dispatch('logout');
    }
  }
};
</script> 
