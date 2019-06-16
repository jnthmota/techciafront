<template>
  <!-- HEADER -->
  <b-row class="header">
    <b-col lg="6" md="6" sm="12" xs="12">
      <router-link to="/">
        <img class="logo" src="@/assets/images/logo.png" alt>
      </router-link>
    </b-col >
    <b-col v-if="loggedIn" class="text-right menu" lg="6" md="6" sm="12" xs="12">
      <b-link to="/">Home</b-link>
      <b-link @click.prevent="logout">Logout</b-link>
    </b-col>
    <b-col v-else class="text-right menu" lg="6" md="6" sm="12" xs="12">
      <b-link to="/">Home</b-link>
      <b-link to="/login">Login</b-link>
      <b-link to="/registerCandidate">Cadastrar Candidato</b-link>
      <b-link to="/registerCompany">Cadastrar Empresa</b-link>
    </b-col>
  </b-row>
</template>
<script>
import { HeaderDropdown as AppHeaderDropdown } from "@coreui/vue";
export default {
  name: "Header",
  computed: {
    loggedIn() {
      return this.$store.state.authentication.status.loggedIn;
    }
  },
  methods: {
    logout() {
      const { dispatch } = this.$store;
      dispatch("authentication/logout");
      this.$router.push('/')
    }
  }
};
</script>
