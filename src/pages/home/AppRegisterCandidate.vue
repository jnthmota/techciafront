<template>
  <div class="AppRegisterCandidato">
    <b-row>
      <b-col md="4"></b-col>
      <b-col class="registerCandidate" md="4">
        <div>
          <h1 class="text-center">Registrar Candidato</h1>
          <div class="form">
            <AppRegisterCandidate/>
          </div>
        </div>
      </b-col>
      <b-col md="4"></b-col>
    </b-row>
  </div>
</template>
<script>
import AppRegisterCandidate from "@/components/forms/RegisterCandidate";
export default {
  name: "AppRegisterCandidato",
  components: {
    AppRegisterCandidate
  }
};
</script>