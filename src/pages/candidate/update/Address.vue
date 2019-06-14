<template>
  <div>
    <b-card header="Endereço" border-variant="warning">
      <form class="Address">
        <div class="Address">
          <b-row>
            <b-col m="12">
              <b-form-group>
                <label for="name">CEP</label>
                <masked-input
                  :class="{ 'is-invalid': submitted && $v.postalCode.$error }"
                  :mask="[/[0-9]/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/]"
                  v-model="postalCode"
                  type="text"
                  id="postalCode"
                  placeholder="Ex: 04904-200"
                ></masked-input>
                <div v-if="submitted && $v.postalCode.$error" class="invalid-feedback">
                  <span v-if="!$v.postalCode.minLength">O CEP é inválido</span>
                </div>
              </b-form-group>
            </b-col>
          </b-row>

          <b-row>
            <b-col m="8">
              <b-form-group>
                <label for="street">Rua / AV</label>
                <b-form-input
                  v-model="street"
                  type="street"
                  id="street"
                  placeholder="Ex: Av Paulista"
                  :class="{ 'is-invalid':submitted && $v.street.$error }"
                ></b-form-input>
                <div v-if="submitted && $v.street.$error" class="invalid-feedback">
                  <span v-if="!$v.street.required">A rua/av é obrigatória</span>
                </div>
              </b-form-group>
            </b-col>
            <b-col m="4">
              <b-form-group>
                <label for="number">Número</label>
                <b-form-input
                  v-model="number"
                  type="number"
                  id="number"
                  placeholder="Ex: 869"
                  :class="{ 'is-invalid':submitted && $v.number.$error }"
                ></b-form-input>
                <div v-if="submitted && $v.number.$error" class="invalid-feedback">
                  <span v-if="!$v.number.required">O número é obrigatório</span>
                </div>
              </b-form-group>
            </b-col>
          </b-row>
          <b-row>
            <b-col m="6">
              <b-form-group>
                <label for="city">Cidade</label>
                <b-form-input
                  v-model="city"
                  type="city"
                  id="city"
                  placeholder="Ex: São Paulo"
                  :class="{ 'is-invalid':submitted && $v.city.$error }"
                ></b-form-input>
                <div v-if="submitted && $v.city.$error" class="invalid-feedback">
                  <span v-if="!$v.city.required">A cidade é obrigatório</span>
                </div>
              </b-form-group>
            </b-col>
            <b-col m="6">
              <b-form-group>
                <label for="state">Estado</label>
                <b-form-input
                  v-model="state"
                  type="state"
                  id="state"
                  placeholder="Ex: São Paulo"
                  :class="{ 'is-invalid':submitted && $v.state.$error }"
                ></b-form-input>
                <div v-if="submitted && $v.state.$error" class="invalid-feedback">
                  <span v-if="!$v.state.required">O estado é obrigatório</span>
                </div>
              </b-form-group>
            </b-col>
          </b-row>
        </div>

        <hr>
        <b-form-group class="text-right">
          <b-button
            @click.prevent="updateAddress()"
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
import { required, email, minLength } from "vuelidate/lib/validators";
import MaskedInput from "vue-text-mask";
import { mapFields } from "@/configs/helpers";
import { notification } from "@/stores/notification";
export default {
  name: "PersonalData",
  computed: {
    ...mapFields({
      fields: ["street", "number", "city", "state", "postalCode"],
      base: "address",
      mutation: "setAddress"
    })
  },
  data() {
    return {
      submitted: false
    };
  },
  methods: {
    async updateAddress() {
      this.submitted = true;

      // stop here if form is invalid
      this.$v.$touch();
      if (this.$v.$invalid) {
        notification.error(
          "Atualizar Endereço",
          "Preencha os campos corretamente"
        );
        return;
      } else {
        this.$store.commit("setUser", { address: this.$store.getters.address });
        await this.$store.dispatch("updateUser", this.$store.getters.user);
        await notification.success("Endereço Atualizado");
        await this.$router.push("/candidate/candidate-update/experience");
      }
    }
  },
  components: {
    MaskedInput
  },
  validations: {
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
      required,
      minLength: minLength(9)
    }
  }
};
</script>
