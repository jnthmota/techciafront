<template>
  <div class="FormPersonalData">
    <form class="personalDataCandidate">
      <b-row>
        <b-col md="12">
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
        </b-col>
      </b-row>
      <b-row>
        <b-col md="6">
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
        </b-col>
        <b-col md="6">
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
        </b-col>
      </b-row>
      <b-row>
        <b-col md="6">
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
        </b-col>
        <b-col md="6">
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
        </b-col>
      </b-row>

      <hr>
    </form>
  </div>
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
      name: "Matheus Moura Borges Silva",
      email: "matheusmbs@gmail.com",
      document: "44512923012",
      phone: "11948053052",
      dateBirth:
        "Fri Jun 07 2019 14:40:35 GMT+0000 (Coordinated Universal Time)",
      ptBR: ptBR,
      submitted: false
    };
  },
  components: {
    Datepicker,
    MaskedInput
  },
  methods: {
    submit() {
      this.submitted = true;
      this.$v.$touch();
      if (this.$v.$invalid) {
        notification.error("Cadastro", "Preencha os campos corretamente");
        return false;
      } else {
        // Ação Aqui
        return true;
      }
    }
  },
  validations: {
    email: { required, email },
    name: { required },
    document: { required },
    phone: { required },
    dateBirth: { required }
  }
};
</script>
