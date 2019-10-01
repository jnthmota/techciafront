<template>
  <div class="AppRegisterCandidato">
    <b-row>
      <b-col md="6"></b-col>
      <b-col class="registerCandidate" md="5">
        <div>
          <div class="form">
            <AppRegisterCandidate/>
          </div>
        </div>
      </b-col>
      <b-col md="6"></b-col>
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