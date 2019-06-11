<template>
  <div class="container">
    <!-- HEADER -->
    <b-row class="header">
      <b-col md="12">
        <a href="/">
          <img src="../../assets/images/logo.png" alt>
        </a>
      </b-col>
    </b-row>

    <!-- CONTEUDO -->
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
                <b-button
                  @click.prevent="loginUser()"
                  type="submit"
                  size="sm"
                  variant="primary"
                >Entrar</b-button>
              </Login>
            </b-tab>
            <b-tab title="Cadastrar Candidato">
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
            </b-tab>
          </b-tabs>
        </div>
      </b-col>
    </b-row>
    <notifications group="foo" position="bottom center"/>
  </div>
</template>

<script>
import Login from "../forms/Login";
import RegisterHunter from "../forms/RegisterHunter";
import RegisterCandidate from "../forms/RegisterCandidate";
export default {
  name: "PageInitial",
  components: {
    Login,
    RegisterHunter,
    RegisterCandidate
  },
  methods: {
    singUpCandidate() {
      this.$store.dispatch("singUpCandidate", this.$store.state.auth.register);
    },
    singUpHunter() {
      this.$store.dispatch(
        "singUpHunter",
        this.$store.state.auth.registerHunter
      );
    },
    loginUser() {
      this.$store.dispatch("loginUser", this.$store.state.auth.logar);
    }
  }
};
</script>

<style>
.container {
  max-width: 100% !important;
  width: 100% !important;
  padding: 0 !important;
  margin: 0 !important;
}

.header {
  max-width: 100% !important;
  width: 100% !important;
  margin: 0 !important;
  padding: 0 !important;
  background-color: #fff !important;
  position: relative !important;
  box-shadow: 1px 0px 5px rgba(77, 77, 77, 0.2) !important;
  -webkit-box-shadow: 1px 0px 5px rgba(77, 77, 77, 0.2) !important;
  -moz-box-shadow: 1px 0px 5px rgba(77, 77, 77, 0.2) !important;
}

.header div {
  max-width: 1000px !important;
  margin: 0 auto !important;
  padding: 10px 0px !important;
}

.banner {
  position: relative !important;
  height: 500px !important;
  background: url("../../assets/images/main-bg.jpg") repeat !important;
}

.banner .title {
  position: relative !important;
}
.banner .title-sec {
  position: absolute !important;
  top: 40% !important;
  left: 15% !important;
  font-size: 38px !important;
  font-weight: 600 !important;
  color: #333333 !important;
  font-family: "Montserrat", sans-serif !important;
}

.banner .auth {
  position: relative !important;
}

.banner .auth .auth-sec {
  position: absolute !important;
  width: 410px !important;
  top: 50px !important;
  right: 30% !important;
  border-radius: 0 0 6px 6px !important;
}

.banner .auth .auth-sec .tabs li:nth-child(1) {
  line-height: 46px !important;
}

.banner .auth .auth-sec .tabs ul {
  padding: 0 !important;
  width: 100% !important;
  margin-top: -16px !important;
}

.banner .auth .auth-sec .tabs li {
  float: left !important;
  list-style: none !important;
  width: 33.33% !important;
  cursor: pointer !important;
  height: 54px !important;
}

.banner .auth .auth-sec .tabs li a {
  border: none !important;
  padding: 4px 10px !important;
  color: #fff !important;
  font-size: 15px !important;
  width: 100% !important;
  background: rgba(0, 0, 0, 0.8) !important;
  text-align: center !important;
  border-radius: 0px !important;
  height: 53px !important;
}

.banner .auth .auth-sec .tabs li a.active {
  background: #0099ff !important;
  padding: 4px 10px !important;
}

.banner .auth .auth-sec .tab-content {
  padding: 20px !important;
  background: rgba(0, 0, 0, 0.8) !important;
  color: #fff !important;
  border: none !important;
}
.banner .auth .auth-sec .tab-content form input {
  background-color: #424242 !important;
  border-radius: 30px !important;
  border: none !important;
  height: 40px !important;
  font-size: 14px !important;
  padding: 0 30px !important;
  color: #fff !important;
}
.banner .auth .auth-sec .tab-content form button {
  border: none !important;
  background: #0099ff !important;
  border-radius: 30px !important;
  padding: 8px 30px !important;
  color: #fff !important;
  float: left !important;
  font-size: 14px !important;
}

.notification-title {
  font-size: 18px !important;
}

.notification-content {
  font-size: 16px !important;
}
</style>

