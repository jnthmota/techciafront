<template>
  <div class="AppLogin">
    <b-row>
      <b-col md="4"></b-col>
      <b-col class="login" md="4">
        <div>
          <h1 class="text-center">Login</h1>
          <div class="form">
            <AppFormLogin/>
          </div>
        </div>
      </b-col>
      <b-col md="4"></b-col>
    </b-row>
  </div>
</template>
<script>
import AppFormLogin from "@/components/forms/Login";
export default {
  name: "LoginApp",
  components: {
    AppFormLogin
  }
};
</script>
