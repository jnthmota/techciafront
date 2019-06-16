<template>
  <form @submit.prevent="registerCompany">
    <b-form-group>
      <label for="email">
        <b>Email:</b>
      </label>
      <b-form-input
        :class="{ 'is-invalid':submitted && $v.email.$error }"
        v-model="email"
        type="text"
        id="email"
        placeholder="Digite seu email"
      ></b-form-input>
      <div v-if="submitted && $v.email.$error" class="invalid-feedback">
        <span v-if="!$v.email.required">*Campo obrigatório</span>
        <span v-if="!$v.email.email">*Email inválido</span>
      </div>
    </b-form-group>
    <b-form-group>
      <label for="name">
        <b>Razão Social:</b>
      </label>
      <b-form-input
        :class="{ 'is-invalid':submitted && $v.name.$error }"
        v-model="name"
        type="text"
        id="name"
        placeholder="Digite a Razão Social"
      ></b-form-input>
      <div v-if="submitted && $v.name.$error" class="invalid-feedback">
        <span v-if="!$v.name.required">*Campo obrigatório</span>
      </div>
    </b-form-group>
    <b-form-group>
      <label for="document">
        <b>CNPJ:</b>
      </label>
      <masked-input
        :mask="[/[0-9]/, /\d/, '.', /\d/, /\d/, /\d/,'.', /\d/, /\d/, /\d/, '/', /\d/,/\d/, /\d/,/\d/, '-', /\d/,/\d/]"
        :class="{ 'is-invalid':submitted && $v.document.$error }"
        v-model="document"
        type="text"
        id="document"
        placeholder="Digite seu CNPJ"
      ></masked-input>
      <div v-if="submitted && $v.document.$error" class="invalid-feedback">
        <span v-if="!$v.document.required">*Campo obrigatório</span>
      </div>
    </b-form-group>
    <b-form-group>
      <label for="phone">
        <b>Celular:</b>
      </label>
      <masked-input
        :mask="['(', /[0-9]/, /\d/, ')', /\d/, /\d/, /\d/,/\d/,/\d/, '-', /\d/, /\d/, /\d/, /\d/]"
        :class="{ 'is-invalid':submitted && $v.phone.$error }"
        v-model="phone"
        type="text"
        id="phone"
        placeholder="Digite seu celular"
      ></masked-input>
      <div v-if="submitted && $v.phone.$error" class="invalid-feedback">
        <span v-if="!$v.phone.required">*Campo obrigatório</span>
      </div>
    </b-form-group>
    <b-form-group>
      <label for="password">
        <b>Senha:</b>
      </label>
      <b-form-input
        :class="{ 'is-invalid':submitted && $v.password.$error }"
        v-model="password"
        type="password"
        id="password"
        placeholder="Digite sua senha"
      ></b-form-input>
      <div v-if="submitted && $v.password.$error" class="invalid-feedback">
        <span v-if="!$v.password.required">*Campo obrigatório</span>
      </div>
    </b-form-group>
    <b-form-group>
      <b-button type="submit" size="sm" variant="primary" class="btn-primary">Cadastrar</b-button>
    </b-form-group>
  </form>
</template>

<script>
import { required, email } from "vuelidate/lib/validators";
import { notification } from "@/configs/";
import Datepicker from "vuejs-datepicker";
import { ptBR } from "vuejs-datepicker/dist/locale";
import MaskedInput from "vue-text-mask";
export default {
  name: "AppRegisterCompany",
  data() {
    return {
      email: "",
      name: "",
      password: "",
      document: "",
      phone: "",
      ptBR: ptBR,
      submitted: false
    };
  },
  components: {
    MaskedInput
  },
  methods: {
    registerCompany() {
      this.submitted = true;
      this.$v.$touch();
      if (this.$v.$invalid) {
        notification.error("Cadastro", "Preencha os campos corretamente");
      } else {
        const { dispatch } = this.$store;
        const { email, name, password, document, phone } = this;
        const payload = { email, name, password, document, phone };
        dispatch("authentication/signupCompany", payload);
      }
    }
  },
  validations: {
    email: { required, email },
    name: { required },
    password: { required },
    document: { required },
    phone: { required }
  }
};
</script>
