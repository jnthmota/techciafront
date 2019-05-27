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
          <div class="tabs">
            <ul class="ul-tabs">
              <li>
                <router-link to="login" active-class="active">Logar</router-link>
              </li>
              <li>
                <router-link to="register-candidate" active-class="active" class="register">Registrar Candidato</router-link>
              </li>
              <li>
                <router-link to="register-hunter" active-class="active" class="register">Registrar Empresa</router-link>
              </li>
            </ul>
          </div>
          <div class="content">
            <router-view></router-view>
          </div>
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: "Initial"
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

.banner .title{
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
  background: rgba(0, 0, 0, 0.8);
  border-radius: 0 0 6px 6px;
}

.banner .auth .auth-sec .tabs {
  height: 50px;
  width: 100%;
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
  height: 54px;
}

.banner .auth .auth-sec .tabs li a {
  border: none;
  padding: 15px 10px;
  color: #fff;
  font-size: 15px;
  padding: 15px 10px;
  width: 100%;
  display: block;
  text-align: center;
}

.banner .auth .auth-sec .tabs li a.register {
  padding: 5px 10px;
}

.banner .auth .auth-sec .tabs li a.active {
  background: #0099ff;
}

.banner .auth .auth-sec .content {
  padding: 40px;
}
.banner .auth .auth-sec .content .form input {
  background: #424242;
  border-radius: 30px;
  border: none;
  height: 40px;
  font-size: 14px;
  padding: 0 30px;
  color: #fff;
}
.banner .auth .auth-sec .content .form button {
  border: none;
  background: #0099ff;
  border-radius: 30px;
  padding: 8px 30px;
  color: #fff;
  float: left;
  font-size: 14px;
}
</style>
