<template>
  <div class="form register-candidate">
    <form v-on:submit="handleSubmit()">
      <b-form-group>
        <b-form-input v-model="user.name" type="text" id="name" placeholder="Digite seu nome"></b-form-input>
      </b-form-group>
      <b-form-group>
        <b-form-input v-model="user.email" type="text" id="email" placeholder="Digite seu email"></b-form-input>
      </b-form-group>
      <b-form-group>
        <b-form-input
          v-model="user.password"
          type="text"
          id="password"
          placeholder="Digite sua senha"
        ></b-form-input>
      </b-form-group>
      <b-form-group>
        <b-form-input
          v-model="confirmPassword"
          type="text"
          id="password-confirm"
          placeholder="Confirme a sua senha"
        ></b-form-input>
      </b-form-group>
      <b-form-group class="text-center">
        <b-button type="submit" size="sm" variant="primary">Cadastrar</b-button>
      </b-form-group>
    </form>
  </div>
</template>

<script>
// import { userService } from "../../services/user.service";
export default {
  name: "RegisterCandidate",
  data() {
    return {
      user: {
        name: null,
        email: null,
        password: null,
        role: "candidate"
      },
      confirmPassword: null,
      submitted: true,
      errors: []
    };
  },
  methods: {
    handleSubmit() {
      this.errors = [];

      if (!this.user.name) {
        this.errors.push("O nome é obrigatório.");
        this.submitted = false;
      }
      if (!this.user.email) {
        this.errors.push("O email é obrigatória.");
        this.submitted = false;
      } else if (!this.validEmail(this.user.email)) {
        this.errors.push("Utilize um e-mail válido.");
      }

      if (!this.user.password) {
        this.errors.push("O password é obrigatória.");
        this.submitted = false;
      }

      if (this.user.password === this.confirmPassword) {
        this.errors.push("As senhas não conferem.");
        this.submitted = false;
      }

      if (this.submitted) {
        this.$store.dispatch("authentication/register", this.user);
      } else {
        alert("Preencha os campos corretamente")
      }
    },
    validEmail(email) {
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    }
  }
};
</script>