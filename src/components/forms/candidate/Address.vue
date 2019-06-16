<template>
  <div class="FormAddress">
    <form>
      <b-row>
        <b-col m="12">
          <b-form-group>
            <label for="name">CEP</label>
            <masked-input
              :class="{ 'is-invalid': submitted && $v.address.postalCode.$error }"
              :mask="[/[0-9]/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/]"
              v-model="address.postalCode"
              type="text"
              id="postalCode"
              placeholder="Ex: 04904-200"
            ></masked-input>
            <div v-if="submitted && $v.address.postalCode.$error" class="invalid-feedback">
              <span v-if="!$v.address.postalCode.minLength">*Campo obrigatório</span>
            </div>
          </b-form-group>
        </b-col>
      </b-row>

      <b-row>
        <b-col m="8">
          <b-form-group>
            <label for="street">Rua / AV</label>
            <b-form-input
              v-model="address.street"
              type="text"
              id="street"
              placeholder="Ex: Av Paulista"
              :class="{ 'is-invalid':submitted && $v.address.street.$error }"
            ></b-form-input>
            <div v-if="submitted && $v.address.street.$error" class="invalid-feedback">
              <span v-if="!$v.address.street.required">*Campo obrigatório</span>
            </div>
          </b-form-group>
        </b-col>
        <b-col m="4">
          <b-form-group>
            <label for="number">Número</label>
            <b-form-input
              v-model="address.number"
              type="text"
              id="number"
              placeholder="Ex: 869"
              :class="{ 'is-invalid':submitted && $v.address.number.$error }"
            ></b-form-input>
            <div v-if="submitted && $v.address.number.$error" class="invalid-feedback">
              <span v-if="!$v.address.number.required">*Campo obrigatório</span>
            </div>
          </b-form-group>
        </b-col>
      </b-row>
      <b-row>
        <b-col m="6">
          <b-form-group>
            <label for="city">Cidade</label>
            <b-form-input
              v-model="address.city"
              type="text"
              id="city"
              placeholder="Ex: São Paulo"
              :class="{ 'is-invalid':submitted && $v.address.city.$error }"
            ></b-form-input>
            <div v-if="submitted && $v.address.city.$error" class="invalid-feedback">
              <span v-if="!$v.address.city.required">*Campo obrigatório</span>
            </div>
          </b-form-group>
        </b-col>
        <b-col m="6">
          <b-form-group>
            <label for="state">Estado</label>
            <b-form-input
              v-model="address.state"
              type="text"
              id="state"
              placeholder="Ex: São Paulo"
              :class="{ 'is-invalid':submitted && $v.address.state.$error }"
            ></b-form-input>
            <div v-if="submitted && $v.address.state.$error" class="invalid-feedback">
              <span v-if="!$v.address.state.required">*Campo obrigatório</span>
            </div>
          </b-form-group>
        </b-col>
      </b-row>
      <hr>
    </form>
  </div>
</template>
<script>
import { required, email, minLength } from "vuelidate/lib/validators";
import MaskedInput from "vue-text-mask";
import { mapFields } from "@/configs/helpers";
import { notification } from "@/configs/notification";
export default {
  name: "Address",
  data() {
    return {
      address: {
        street: "Rua Anhanduí Mirim",
        number: "869",
        city: "São Paulo",
        state: "São Paulo",
        postalCode: "04904200"
      },
      submitted: false
    };
  },
  methods: {
    submit() {
      this.submitted = true;

      // stop here if form is invalid
      this.$v.$touch();
      if (this.$v.$invalid) {
        notification.error(
          "Atualizar Endereço",
          "Preencha os campos corretamente"
        );
        return false;
      } else {
        //Ação Aqui
        return true;
      }
    }
  },
  components: {
    MaskedInput
  },
  validations: {
    address: {
      street: {
        required
      },
      number: {
        required
      },
      city: {
        required
      },
      state: {
        required
      },
      postalCode: {
        required
      }
    }
  }
};
</script>
