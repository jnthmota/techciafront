<template>
  <div class="AppRegisterCompany">
    <b-row>
      <b-col md="4"></b-col>
      <b-col class="registerCandidate" md="4">
        <div>
          <h1 class="text-center">Registrar Empresa</h1>
          <div class="form">
            <AppRegisterCompany/>
          </div>
        </div>
      </b-col>
      <b-col md="4"></b-col>
    </b-row>
  </div>
</template>
<script>
import AppRegisterCompany from "@/components/forms/RegisterCompany";
export default {
  name: "AppRegisterCandidato",
  components: {
    AppRegisterCompany
  }
};
</script>