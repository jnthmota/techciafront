<template>
  <form class="personalDataCandidate">
    <div class="Personal Data">
      <b-form-group>
        <label for="name">Nome Completo</label>
        <b-form-input v-model="name" type="text" id="name" placeholder="Ex: Bill Gates"></b-form-input>
      </b-form-group>
      <b-form-group>
        <label for="email">Email</label>
        <b-form-input
          v-model="email"
          type="email"
          id="email"
          placeholder="Ex: bill.gates@microsoft.com"
        ></b-form-input>
      </b-form-group>
      <b-form-group>
        <label for="document">CPF</label>
        <masked-input
          :mask="[/[1-9]/, /\d/, /\d/, '.', /\d/, /\d/, /\d/,'.', /\d/, /\d/, /\d/, '-', /\d/, /\d/]"
          v-model="document"
          type="text"
          id="document"
          placeholder="Digite seu CPF"
          disabled
        ></masked-input>
      </b-form-group>
      <b-form-group>
        <label for="phone">Celular</label>
        <masked-input
          :mask="['(', /[1-9]/, /\d/, ')', /\d/, /\d/, /\d/,/\d/,/\d/, '-', /\d/, /\d/, /\d/, /\d/]"
          v-model="phone"
          type="text"
          id="phone"
          placeholder="Digite seu Telfone"
        ></masked-input>
      </b-form-group>
    </div>

    <hr>
    <b-form-group class="text-right">
      <b-button
        @click.prevent="updateUser()"
        type="submit"
        size="sm"
        variant="primary"
      >Salvar e continuar</b-button>
    </b-form-group>
  </form>
</template>
<script>
import { required, minLength, between } from "vuelidate/lib/validators";
import MaskedInput from "vue-text-mask";
import { mapFields } from "@/configs/helpers";
export default {
  computed: {
    ...mapFields({
      fields: ["name", "email", "document", "phone"],
      base: "user",
      mutation: "setUser",
      store: "user"
    })
  },
  components: {
    MaskedInput
  },
  validations: {
    email: {
      required
    }
  }
};
</script>
