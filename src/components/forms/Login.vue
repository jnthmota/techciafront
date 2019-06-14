<template>
  <form @submit.prevent="handleSubmit">
    <b-form-group>
      <b-form-input v-model="email" type="text" id="email" placeholder="Digite seu email"></b-form-input>
    </b-form-group>
    <b-form-group>
      <b-form-input
        v-model="password"
        type="password"
        id="password"
        placeholder="Digite sua senha"
      ></b-form-input>
    </b-form-group>
    <b-form-group class="text-center">
      <slot></slot>
    </b-form-group>
  </form>
</template>

<script>
import { mapFields } from "@/configs/helpers.js";
export default {
  computed: {
    ...mapFields({
      fields: ["email", "password"],
      base: 'login',
      mutation: "setLogin"
    })
  },
};
</script>