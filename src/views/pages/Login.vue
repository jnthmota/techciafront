<template>
  <div class="form login">
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
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      user: {
        email: null,
        password: null
      }
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
      console.log('teste');
      const { email, password } = this.user;
      const { dispatch } = this.$store;
      if (email && password) {
        dispatch("authentication/login", { email, password });
      }
    }
  }
};
</script>