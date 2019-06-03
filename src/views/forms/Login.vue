<template>
  <form @submit.prevent="handleSubmit">
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
    <b-form-group class="text-center">
      <b-button type="submit" size="sm" variant="primary">Entrar</b-button>
    </b-form-group>
  </form>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      user: {
        email: null,
        password: null
      },
      errors: [],
      submitted: true
    };
  },
  computed: {
    loggingIn() {
      return this.$store.state.authentication.status.loggingIn;
    }
  },
  created() {
    // reset login status
    this.$store.dispatch("authentication/logout");
  },
  methods: {
    handleSubmit(e) {
      const { email, password } = this.user;
      const { dispatch } = this.$store;
      this.errors = [];

      if (!this.user.email) {
        this.errors.push("O email é obrigatória.");
        this.submitted = false;
      } else if (!this.validEmail(this.user.email)) {
        this.errors.push("Utilize um email válido.");
      }

      if (!this.user.password) {
        this.errors.push("A senha é obrigatória.");
        this.submitted = false;
      }

      if (this.submitted) {
        dispatch("authentication/login", { email, password });
      } else {
        let message = "";
        for (let error in this.errors) {
          message += this.errors[error] + "<br/>";
        }

        this.$notify({
          group: "foo",
          type: "error",
          title: "Realizar Login",
          text: message,
          duration: 3000
        });
        return 0;
      }
    },
    validEmail(email) {
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    }
  }
};
</script>