<template>
  <div>
    <b-card header="Dados Pessoais" border-variant="warning">
      <form class="personalDataCandidate">
        <div class="Personal Data">
          <b-form-group>
            <label for="name">Nome Completo</label>
            <b-form-input
              :class="{ 'is-invalid': submitted && $v.name.$error }"
              v-model="name"
              type="text"
              id="name"
              placeholder="Ex: Bill Gates"
            ></b-form-input>
            <div v-if="submitted && !$v.name.required" class="invalid-feedback">O nome é obrigatório</div>
          </b-form-group>
          <b-form-group>
            <label for="email">Email</label>
            <b-form-input
              v-model="email"
              type="email"
              id="email"
              placeholder="Ex: bill.gates@microsoft.com"
              :class="{ 'is-invalid':submitted && $v.email.$error }"
            ></b-form-input>
            <div v-if="submitted && $v.email.$error" class="invalid-feedback">
              <span v-if="!$v.email.required">O Email é obrigatório</span>
              <span v-if="!$v.email.email">O Email é inválido</span>
            </div>
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
              :mask="['(', /[0-9]/, /\d/, ')', /\d/, /\d/, /\d/,/\d/,/\d/, '-', /\d/, /\d/, /\d/, /\d/]"
              v-model="phone"
              type="text"
              id="phone"
              placeholder="Digite seu Telefone"
              :class="{ 'is-invalid': submitted && $v.phone.$error }"
            ></masked-input>
            <div v-if="submitted && $v.phone.$error" class="invalid-feedback">
              <span v-if="!$v.phone.required">O telefone é obrigatório</span>
            </div>
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
    </b-card>
  </div>
</template>
<script>
import { required, email } from "vuelidate/lib/validators";
import MaskedInput from "vue-text-mask";
import { mapFields } from "@/configs/helpers";
import { notification } from "@/stores/notification";
export default {
  name: "PersonalData",
  computed: {
    ...mapFields({
      fields: ["name", "email", "document", "phone"],
      base: "user",
      mutation: "setUser"
    })
  },
  data() {
    return {
      submitted: false
    };
  },
  methods: {
    async updateUser() {
      this.submitted = true;

      // stop here if form is invalid
      this.$v.$touch();
      if (this.$v.$invalid) {
        notification.error(
          "Atualizar Usuário",
          "Preencha os campos corretamente"
        );
        return;
      } else {
        let payload = this.$store.getters.user;
        let user = {
          name: payload.name,
          email: payload.email,
          phone: payload.phone,
          document: payload.document
        };
        let response = await this.$store.dispatch("updateUser", payload);
        if(response){
          await notification.success("Usuário Atualizado");
          await this.$router.push("/candidate/candidate-update/address");
        }
      }
    }
  },
  components: {
    MaskedInput
  },
  validations: {
    name: {
      required
    },
    email: {
      required,
      email
    },
    document: {
      required
    },
    phone: {
      required
    }
  }
};
</script>
