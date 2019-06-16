<template>
  <form @submit.prevent="login">
    <b-form-group>
      <label for="email"><b>Email:</b></label>
      <b-form-input :class="{ 'is-invalid':submitted && $v.email.$error }" v-model="email" type="text" id="email" placeholder="Digite seu email"></b-form-input>
      <div v-if="submitted && $v.email.$error" class="invalid-feedback">
        <span v-if="!$v.email.required">*Campo obrigatório</span>
        <span v-if="!$v.email.email">*Email inválido</span>
      </div>
    </b-form-group>
    <b-form-group>
      <label for="password"><b>Senha:</b></label>
      <b-form-input :class="{ 'is-invalid':submitted && $v.password.$error }" v-model="password" type="password" id="password" placeholder="Digite sua senha"></b-form-input>
      <div v-if="submitted && $v.password.$error" class="invalid-feedback">
        <span v-if="!$v.password.required">*Campo obrigatório</span>
      </div>
    </b-form-group>
    <b-form-group>
      <b-button type="submit" size="sm" variant="primary" class="btn-primary">Entrar</b-button>
    </b-form-group>
  </form>
</template>

<script>
import { required, email } from "vuelidate/lib/validators";
import {notification} from "@/configs/notification"
export default {
  name: "AppFormLogin",
  data() {
    return {
      email: '',
      password: '',
      submitted: false
    };
  },
  methods: {
    login() {
      this.submitted = true;
      this.$v.$touch();
      if (this.$v.$invalid) {
         notification.error("Login", "Preencha os campos corretamente");
      }else{
        const { dispatch } = this.$store;
        const { email, password } = this;
        dispatch("authentication/login", { email, password });
      }
    }
  },
  validations: {
    email: { required, email },
    password: { required }
  }
};
</script>
