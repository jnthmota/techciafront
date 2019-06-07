<template>
  <form v-if="$store.state.auth.login">
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
        <b-form-input
          v-model="document"
          type="document"
          id="document"
          disabled
          placeholder="Ex: 46958999819"
        ></b-form-input>
      </b-form-group>
      <b-form-group>
        <label for="phone">Celular</label>
        <b-form-input v-model="phone" type="text" id="phone" placeholder="ex: (11) 94805-3050"></b-form-input>
      </b-form-group>
    </div>

    <hr>
    <b-form-group class="text-right">
      <slot></slot>
    </b-form-group>
  </form>
</template>
<script>
import { mapFields } from "../../helpers/helpers";
export default {
  computed: {
    ...mapFields({
      fields: ["name", "email", "document", "phone"],
      base: "user",
      mutation: "UPDATE_USER",
      store: "user"
    })
  }
};
</script>

