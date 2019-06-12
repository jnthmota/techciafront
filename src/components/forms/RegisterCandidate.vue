<template>
  <form>
    <b-form-group>
      <b-form-input v-model="name" type="text" id="name" placeholder="Digite seu nome"></b-form-input>
    </b-form-group>
    <b-form-group>
      <b-form-input v-model="email" type="text" id="email" placeholder="Digite seu email"></b-form-input>
    </b-form-group>
    <b-form-group>
      <b-form-input v-model="document" type="text" id="document" placeholder="Digite seu CPF"></b-form-input>
    </b-form-group>
    <b-form-group>
      <b-form-input v-model="phone" type="text" id="phone" placeholder="Digite seu celular"></b-form-input>
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
export default {
  // computed: {
  //   ...mapFields({
  //     fields: ["name", "email", "password", "document", "phone"],
  //     base: 'register',
  //     mutation: "UPDATE_REGISTER",
  //     store: "auth"
  //   })
  // },
};
</script>
