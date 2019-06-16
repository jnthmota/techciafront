<template>
  <form @submit.prevent="registerCandidate">
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
        <b>Nome:</b>
      </label>
      <b-form-input
        :class="{ 'is-invalid':submitted && $v.name.$error }"
        v-model="name"
        type="text"
        id="name"
        placeholder="Digite seu CPF"
      ></b-form-input>
      <div v-if="submitted && $v.name.$error" class="invalid-feedback">
        <span v-if="!$v.name.required">*Campo obrigatório</span>
      </div>
    </b-form-group>
    <b-form-group>
      <label for="document">
        <b>CPF:</b>
      </label>
      <masked-input
        :mask="[/[0-9]/, /\d/, /\d/, '.', /\d/, /\d/, /\d/,'.', /\d/, /\d/, /\d/, '-', /\d/, /\d/]"
        :class="{ 'is-invalid':submitted && $v.document.$error }"
        v-model="document"
        type="text"
        id="document"
        placeholder="Digite seu CPF"
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
      <label for="dateBirth">
        <b>Data de Nascimento:</b>
      </label>
      <datepicker
        :class="{ 'is-invalid': submitted && $v.dateBirth.$error }"
        id="dateBirth"
        :language="ptBR"
        format="dd MMMM yyyy"
        v-model="dateBirth"
      ></datepicker>
      <div v-if="submitted && $v.dateBirth.$error" class="invalid-feedback">
        <span v-if="!$v.dateBirth.required">*Campo obrigatório</span>
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
import { notification } from "@/configs/notification";
import Datepicker from "vuejs-datepicker";
import { ptBR } from "vuejs-datepicker/dist/locale";
import MaskedInput from "vue-text-mask";
export default {
  name: "AppRegisterCandidate",
  data() {
    return {
      email: "",
      name: "",
      password: "",
      document: "",
      phone: "",
      dateBirth: "",
      ptBR: ptBR,
      submitted: false
    };
  },
  components: {
    Datepicker,
    MaskedInput
  },
  created() {
    // reset login status
    this.$store.dispatch("authentication/logout");
  },
  methods: {
    registerCandidate() {
      this.submitted = true;
      this.$v.$touch();
      if (this.$v.$invalid) {
        notification.error("Cadastro", "Preencha os campos corretamente");
      } else {
        const { dispatch } = this.$store;
        const { email, name, password, document, phone, dateBirth } = this;
        const payload = { email, name, password, document, phone, dateBirth };
        dispatch("authentication/signupCandidate", payload);
      }
    }
  },
  validations: {
    email: { required, email },
    name: { required },
    password: { required },
    document: { required },
    phone: { required },
    dateBirth: { required }
  }
};
</script>
