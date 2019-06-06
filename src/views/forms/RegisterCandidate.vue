<template>
  <form>
    <b-form-group>
      <b-form-input v-model="name" type="text" id="name" placeholder="Digite seu nome"></b-form-input>
    </b-form-group>
    <b-form-group>
      <b-form-input v-model="email" type="text" id="email" placeholder="Digite seu email"></b-form-input>
    </b-form-group>
    <b-form-group>
      <b-form-input v-model="password" type="password" id="password" placeholder="Digite sua senha"></b-form-input>
    </b-form-group>
    <b-form-group class="text-center">
      <slot></slot>
    </b-form-group>
  </form>
</template>

<script>
import { mapFields } from "../../helpers/helpers.js";
export default {
  computed: {
    ...mapFields({
      fields: ["name", "email", "password"],
      base: 'register',
      mutation: "UPDATE_REGISTER",
      store: "auth"
    })
  },
  // name: "RegisterCandidate",
  // data() {
  //   return {
  //     name: null,
  //     email: null,
  //     password: null,
  //     role: "candidate",
  //     confirmPassword: null,
  //     submitted: true,
  //     errors: []
  //   };
  // }
  // methods: {
  //   handleSubmit() {
  //     this.errors = [];

  //     if (!this.user.name) {
  //       this.errors.push("O nome é obrigatório.");
  //       this.submitted = false;
  //     }
  //     if (!this.user.email) {
  //       this.errors.push("O email é obrigatória.");
  //       this.submitted = false;
  //     } else if (!this.validEmail(this.user.email)) {
  //       this.errors.push("Utilize um email válido.");
  //     }

  //     if (!this.user.password) {
  //       this.errors.push("A senha é obrigatória.");
  //       this.submitted = false;
  //     }

  //     if (this.submitted) {
  //       this.$store.dispatch("authentication/register", this.user);
  //     } else {
  //       let message = "";
  //       for (let error in this.errors) {
  //         message += this.errors[error] + "<br/>";
  //       }

  //       this.$notify({
  //         group: "foo",
  //         type: "error",
  //         title: "Registrar Candidato",
  //         text: message,
  //         duration: 5000
  //       });
  //       return 0;
  //     }
  //   },
  //   validEmail(email) {
  //     var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  //     return re.test(email);
  //   }
  // }
};
</script>
