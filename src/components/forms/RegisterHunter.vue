<template>
  <form>
    <b-form-group>
      <b-form-input v-model="name" type="text" id="name" placeholder="Digite o nome da sua empresa"></b-form-input>
    </b-form-group>
    <b-form-group>
      <b-form-input
        v-model="email"
        type="text"
        id="email"
        placeholder="Digite o seu email corporativo"
      ></b-form-input>
    </b-form-group>
    <b-form-group>
      <masked-input
        :mask="[/[1-9]/, /\d/, '.', /\d/, /\d/, /\d/,'.', /\d/, /\d/, /\d/, '/', /\d/,/\d/, /\d/,/\d/, '-', /\d/,/\d/]"
        v-model="document"
        type="text"
        id="document"
        placeholder="Digite seu CNPJ"
      ></masked-input>
    </b-form-group>
    <b-form-group>
      <masked-input
        :mask="['(', /[1-9]/, /\d/, ')', /\d/, /\d/, /\d/,/\d/,/\d/, '-', /\d/, /\d/, /\d/, /\d/]"
        v-model="phone"
        type="text"
        id="phone"
        placeholder="Digite seu Telefone"
      ></masked-input>
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
import { mapFields } from "@/configs/helpers.js";
import MaskedInput from "vue-text-mask";
export default {
  computed: {
    ...mapFields({
      fields: ["name", "email", "password", "document", "phone"],
      base: "registerHunter",
      mutation: "setRegisterHunter"
    })
  },
  components: {
    MaskedInput
  }
};
</script>