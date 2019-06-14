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
      <b-form-input v-model="document" type="text" id="document" placeholder="Digite seu CNPJ"></b-form-input>
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
import { mapFields } from "@/configs/helpers";
export default {
  computed: {
    ...mapFields({
      fields: ["name", "email", "password", "document"],
      base: "registerHunter",
      mutation: "UPDATE_REGISTERHUNTER",
      store: "auth"
    })
  }
};
</script>