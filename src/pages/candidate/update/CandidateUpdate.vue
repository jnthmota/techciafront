<template>
  <b-row class="updateCandidate">
    <b-col md="2">
      <ul>
        <li>
          <router-link to="/candidate/candidate-update/personalData">Dados Pessoais</router-link>
        </li>
        <li>
          <router-link
            to="/candidate/candidate-update/experience"
            active-class="active"
          >Experiências</router-link>
        </li>
        <li>
          <router-link to="/candidate/candidate-update/schooling" active-class="active">Escolaridade</router-link>
        </li>
        <li>
          <router-link to="/candidate/candidate-update/language" active-class="active">Idiomas</router-link>
        </li>
        <li>
          <router-link to="/candidate/candidate-update/profiles" active-class="active">Perfis</router-link>
        </li>
        <li>
          <router-link
            to="/candidate/candidate-update/preferences"
            active-class="active"
          >Preferências</router-link>
        </li>
        <li>
          <router-link to="/candidate/candidate-update/skill" active-class="active">Habilidades</router-link>
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
  name: "CandidateUpdate"
};
</script>
