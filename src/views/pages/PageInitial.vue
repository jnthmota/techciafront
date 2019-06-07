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
                 <b-button @click.prevent="loginUser()" type="submit" size="sm" variant="primary">Entrar</b-button>
              </Login>
            </b-tab>
            <b-tab title="Cadastrar Candidato">
              <RegisterCandidate>
                <b-button @click.prevent="singUpCandidate()" type="submit" size="sm" variant="primary">Cadastrar</b-button>
              </RegisterCandidate>
            </b-tab>
            <b-tab title="Cadastrar Empresa">
              <RegisterHunter>
                <b-button @click.prevent="singUpHunter()"  type="submit" size="sm" variant="primary">Cadastrar</b-button>
              </RegisterHunter>
            </b-tab>
          </b-tabs>
        </div>
      </b-col>
    </b-row>

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
  methods:{
    singUpCandidate(){
      this.$store.dispatch("singUpCandidate", this.$store.state.auth.register);
    },
    singUpHunter(){
      this.$store.dispatch("singUpHunter", this.$store.state.auth.registerHunter);
    },
    loginUser(){
      this.$store.dispatch("loginUser", this.$store.state.auth.logar);
    }
  }
};
</script>

<style>
.container {
  max-width: 100%;
  width: 100%;
  padding: 0;
  margin: 0;
}

.header {
  max-width: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
  background-color: #fff;
  position: relative;
  box-shadow: 1px 0px 5px rgba(77, 77, 77, 0.2);
  -webkit-box-shadow: 1px 0px 5px rgba(77, 77, 77, 0.2);
  -moz-box-shadow: 1px 0px 5px rgba(77, 77, 77, 0.2);
}

.header div {
  max-width: 1000px;
  margin: 0 auto;
  padding: 10px 0px;
}

.banner {
  position: relative;
  height: 500px;
  background: url("../../assets/images/main-bg.jpg") repeat;
}

.banner .title {
  position: relative;
}
.banner .title-sec {
  position: absolute;
  top: 40%;
  left: 15%;
  font-size: 38px;
  font-weight: 600;
  color: #333333;
  font-family: "Montserrat", sans-serif;
}

.banner .auth {
  position: relative;
}

.banner .auth .auth-sec {
  position: absolute;
  width: 410px;
  top: 50px;
  right: 30%;
  border-radius: 0 0 6px 6px;
}

.banner .auth .auth-sec .tabs li:nth-child(1) {
  line-height: 46px;
}

.banner .auth .auth-sec .tabs ul {
  padding: 0;
  width: 100%;
  margin-top: -16px;
}

.banner .auth .auth-sec .tabs li {
  float: left;
  list-style: none;
  width: 33.33%;
  cursor: pointer;
  height: 54px !important;
}

.banner .auth .auth-sec .tabs li a {
  border: none;
  padding: 4px 10px;
  color: #fff;
  font-size: 15px;
  width: 100%;
  background: rgba(0, 0, 0, 0.8);
  text-align: center;
  border-radius: 0px;
  height: 53px;
}

.banner .auth .auth-sec .tabs li a.active {
  background: #0099ff;
  padding: 4px 10px;
}

.banner .auth .auth-sec .tab-content {
  padding: 20px;
  background: rgba(0, 0, 0, 0.8);
  color: #fff;
  border: none;
}
.banner .auth .auth-sec .tab-content form input {
  background-color: #424242;
  border-radius: 30px;
  border: none;
  height: 40px;
  font-size: 14px;
  padding: 0 30px;
  color: #fff;
}
.banner .auth .auth-sec .tab-content form button {
  border: none;
  background: #0099ff;
  border-radius: 30px;
  padding: 8px 30px;
  color: #fff;
  float: left;
  font-size: 14px;
}

.notification-title{
  font-size: 18px;
}

.notification-content{
  font-size: 16px;
}
</style>
