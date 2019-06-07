<template>
  <b-row class="profile">
    <b-col md="2">
      <ul>
        <li>
          <router-link to="/candidates/personalData">Dados Pessoais</router-link>
        </li>
        <li>
          <router-link to="/candidates/experience" active-class="active">Experiências</router-link>
        </li>
        <li>
          <router-link to="/candidates/schooling" active-class="active">Escolaridade</router-link>
        </li>
        <li>
          <router-link to="/candidates/profiles" active-class="active">Perfis</router-link>
        </li>
        <li>
          <router-link to="/candidates/preferences" active-class="active">Preferências</router-link>
        </li>
        <li>
          <router-link to="/candidates/skills" active-class="active">Habilidades</router-link>
        </li>
      </ul>
    </b-col>
    <b-col md="10">
      <router-view></router-view>
    </b-col>
    <notifications group="foo" position="bottom center"/>
  </b-row>
</template>

<script>
export default {
  computed: {
    async getUser() {
      await this.$store.dispatch("getUser");
    }
  },

  name: "DefaultProfile"
};
</script>

<style>
.profile li {
  list-style: none;
  padding: 5px 0;
  text-align: right;
}

.profile li a {
  font-size: 14px;
  font-weight: 500;
  color: #7e8996;
  display: block;
  padding: 10px 5px;
}

.profile a.active {
  border-right: 3px solid #ff9900;
  font-weight: 800;
  color: #000;
}

.notification-title {
  font-size: 18px;
}

.notification-content {
  font-size: 16px;
}
</style>
