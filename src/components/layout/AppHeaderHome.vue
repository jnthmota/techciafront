<template>
  <!-- HEADER -->
  <b-row class="header">
    <b-col lg="6" md="6" sm="12" xs="12">
      <router-link to="/home/">
        <img class="logo" src="@/assets/images/logo.png" alt>
      </router-link>
    </b-col >
    <b-col class="text-right menu" lg="6" md="6" sm="12" xs="12">
      <b-link to="/home/">Home</b-link>
      <b-link to="/home/login">Login</b-link>
      <b-link to="/home/registerCandidate">Cadastrar Candidato</b-link>
      <b-link to="/home/registerCompany">Cadastrar Empresa</b-link>
    </b-col>
  </b-row>
</template>
<script>
import { HeaderDropdown as AppHeaderDropdown } from "@coreui/vue";
export default {
  name: "Header",
};
</script>
