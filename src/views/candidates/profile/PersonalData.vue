
<template>
  <b-col  md="9">
    <b-card header="Dados Pessoais" border-variant="warning">
      <personaldata>
        <b-button @click.prevent="updateUser()" type="submit" size="sm" variant="primary">Salvar e continuar</b-button>
      </personaldata>
    </b-card>
  </b-col>
</template>
<script>
import personaldata from "../../forms/PersonalData";
export default {
  name: "PersonalData",
  components: {
    personaldata
  },
  methods:{
    updateUser(){
      this.$store.dispatch("updateUser", this.$store.state.user.user);
    }
  }
};
</script>

<style>
input {
  border-radius: 0px !important;
  width: 100% !important;
  height: 50px !important;
}

label {
  font-weight: 600;
}

hr {
  margin: 50px 0 !important;
}

button {
  height: 50px !important;
  border-radius: 0px !important;
  background-color: #526173 !important;
  font-size: 14px !important;
}
</style>