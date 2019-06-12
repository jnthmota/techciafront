<template>
  <b-row class="banner">
    <b-col md="7" class="title text-center">
      <div class="title-sec">
        <h1>Portal de Empregos Techcia</h1>
      </div>
    </b-col>
    <b-col md="5" class="auth">
      <div class="auth-sec">
        <!-- TABS -->
        <b-tabs>
          <b-tab title="Login" active>
            <Login>
              <b-button @click.prevent="login()" type="submit" size="sm" variant="primary">Entrar</b-button>
            </Login>
          </b-tab>
          <!-- <b-tab title="Cadastrar Candidato">
            <RegisterCandidate>
              <b-button
                @click.prevent="singUpCandidate()"
                type="submit"
                size="sm"
                variant="primary"
              >Cadastrar</b-button>
            </RegisterCandidate>
          </b-tab>
          <b-tab title="Cadastrar Empresa">
            <RegisterHunter>
              <b-button
                @click.prevent="singUpHunter()"
                type="submit"
                size="sm"
                variant="primary"
              >Cadastrar</b-button>
            </RegisterHunter>
          </b-tab>-->
        </b-tabs>
      </div>
    </b-col>
  </b-row>
</template>
<script>
import Login from "@/components/forms/Login";
import RegisterHunter from "@/components/forms/RegisterHunter";
import RegisterCandidate from "@/components/forms/RegisterCandidate";
export default {
  name: "Home",
  components: {
    Login,
    RegisterHunter,
    RegisterCandidate
  },
  methods: {
    login() {
      this.$store.dispatch("login", this.$store.getters.login);
    }
  }
};
</script>

<style>
.banner {
  position: relative;
  height: 500px;
  background: url("../../assets/images/main-bg.jpg") repeat;
}
</style>