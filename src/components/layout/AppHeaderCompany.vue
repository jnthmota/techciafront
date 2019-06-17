<template>
  <!-- HEADER -->
  <b-row class="header">
    <b-col lg="6" md="6" sm="6">
      <ul>
        <li>
          <router-link to="/company/vacancys">
            <img class="logo" src="@/assets/images/logo.png" alt>
          </router-link>
        </li>
      </ul>
    </b-col>
    <b-col class="text-right" lg="6" md="6" sm="6">
      <ul class="menu">
        <li>
          <b-link to="/company/vacancys">Vagas</b-link>
        </li>
        <li>
          <b-link to="/company/create-vacancy">Cadastrar Vaga</b-link>
        </li>
        <li>
          <b-link to="/company/view-profile">Meu Perfil</b-link>
        </li>
        <li>
        <li>
          <b-link to="/company/edit-profile">Editar Perfil</b-link>
        </li>
        <li>
          <b-link @click.prevent="logout()">Sair</b-link>
        </li>
      </ul>
    </b-col>
  </b-row>
</template>

<script>
export default {
  name: "AppHeaderCandidate",
  computed: {
    loggedIn() {
      return this.$store.state.authentication.status.loggedIn;
    }
  },
  methods: {
    logout() {
      const { dispatch } = this.$store;
      dispatch("authentication/logout");
      this.$router.push("/");
    }
  }
};
</script>
