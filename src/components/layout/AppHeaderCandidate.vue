<template>
  <!-- HEADER -->
  <b-row class="header">
    <b-col lg="6" md="6" sm="6">
      <ul>
        <li>
          <router-link to="/candidate/vacancys">
            <img class="logo" src="@/assets/images/logo.png" alt>
          </router-link>
        </li>
      </ul>
    </b-col>
    <b-col class="text-right" lg="6" md="6" sm="6">
      <ul class="menu">
        <li>
          <b-link  to="/candidate/vacancys">Vagas</b-link>
        </li>
        <li>
          <b-link  to="/candidate/view-profile">Meu Perfil</b-link>
        </li>
        <li>
          <b-link  to="/candidate/edit-profile">Editar Perfil</b-link>
        </li>
        <li>
          <b-link  @click.prevent="logout()">Sair</b-link>
        </li>
      </ul>
    </b-col>
  </b-row>
</template>

<script>
export default {
  name: "AppHeaderCandidate",
  methods: {
    logout(){
      window.localStorage.clear();
      this.$router.push('/');
    }
  }
};
</script>
