<template>
  <b-row class="vacancyCreate">
    <b-col md="2">
      <ul>
        <li>
          <router-link to="/vacancyCreate/schooling" active-class="active">Escolaridade</router-link>
        </li>
        <li>
          <router-link to="/vacancyCreate/language" active-class="active">Idiomas</router-link>
        </li>
        <li>
          <router-link to="/vacancyCreate/preferences" active-class="active">Preferências</router-link>
        </li>
        <li>
          <router-link to="/vacancyCreate/skills" active-class="active">Habilidades</router-link>
        </li>
      </ul>
    </b-col>
    <b-col md="9">
      <router-view></router-view>
    </b-col>
  </b-row>
</template>
<script>
export default {
  name: "VacancyCreate"
};
</script>
