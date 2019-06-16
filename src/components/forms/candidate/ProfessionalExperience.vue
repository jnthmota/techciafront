<template>
  <div class="FormProfessionalExperience">
    <form>
      <div v-for="(experience, index) in experiences" v-bind:key="index" class="experience">
        <b-row>
          <b-col md="12" class="text-right">
            <i @click="deleteExperience(index)" class="cui-trash icons font-2xl d-block mt-4"></i>
          </b-col>
        </b-row>
        <b-row>
          <b-col md="6">
            <b-form-group>
              <label for="company">Empresa</label>
              <b-form-input
                :class="{ 'is-invalid': submitted && $v.experiences.$each[index].company.$error }"
                v-model="experience.company"
                type="text"
                id="company"
                placeholder="Ex: Microsoft"
              ></b-form-input>
              <div
                v-if="submitted && $v.experiences.$each[index].company.$error"
                class="invalid-feedback"
              >
                <span v-if="!$v.experiences.$each[index].company.$required">*Campo obrigatório</span>
              </div>
            </b-form-group>
          </b-col>
          <b-col md="6">
            <b-form-group>
              <label for="office">Cargo</label>
              <b-form-input
                :class="{ 'is-invalid': submitted && $v.experiences.$each[index].position.$error }"
                v-model="experience.position"
                type="text"
                id="office"
                placeholder="Ex: Desenvolvedor de backend"
              ></b-form-input>
              <div
                v-if="submitted && $v.experiences.$each[index].position.$error"
                class="invalid-feedback"
              >
                <span v-if="!$v.experiences.$each[index].position.$required">*Campo obrigatório</span>
              </div>
            </b-form-group>
          </b-col>
        </b-row>
        <b-row>
          <b-col md="6">
            <b-form-group>
              <label for="state">Estado</label>
              <b-form-input
                :class="{ 'is-invalid': submitted && $v.experiences.$each[index].state.$error }"
                v-model="experience.state"
                type="text"
                id="state"
                placeholder="Ex: São Paulo"
              ></b-form-input>
              <div
                v-if="submitted && $v.experiences.$each[index].state.$error"
                class="invalid-feedback"
              >
                <span v-if="!$v.experiences.$each[index].state.$required">*Campo obrigatório</span>
              </div>
            </b-form-group>
          </b-col>
          <b-col md="6">
            <b-form-group>
              <label for="city">Cidade</label>
              <b-form-input
                :class="{ 'is-invalid': submitted && $v.experiences.$each[index].city.$error }"
                v-model="experience.city"
                type="text"
                id="São Paulo"
                placeholder="Ex: São Paulo"
              ></b-form-input>
              <div
                v-if="submitted && $v.experiences.$each[index].city.$error"
                class="invalid-feedback"
              >
                <span v-if="!$v.experiences.$each[index].city.$required">*Campo obrigatório</span>
              </div>
            </b-form-group>
          </b-col>
        </b-row>
        <b-row>
          <b-col md="12">
            <b-form-group label="Descrição" label-for="description">
              <textarea
                :class="{ 'is-invalid': submitted && $v.experiences.$each[index].description.$error }"
                id="description"
                :textarea="true"
                v-model="experience.description"
                :rows="9"
                placeholder="Breve descrição sobre o seu trabalho"
              ></textarea>
              <div
                v-if="submitted && $v.experiences.$each[index].description.$error"
                class="invalid-feedback"
              >
                <span v-if="!$v.experiences.$each[index].description.$required">*Campo obrigatório</span>
              </div>
            </b-form-group>
          </b-col>
        </b-row>
        <b-row>
          <b-col md="6">
            <b-form-group label="Data Inicial" label-for="initialDate">
              <datepicker
                :class="{ 'is-invalid': submitted && $v.experiences.$each[index].initialDate.$error }"
                id="initialDate"
                minimum-view="month"
                :language="ptBR"
                format="MMMM yyyy"
                v-model="experience.initialDate"
              ></datepicker>
              <div
                v-if="submitted && $v.experiences.$each[index].initialDate.$error"
                class="invalid-feedback"
              >
                <span v-if="!$v.experiences.$each[index].initialDate.$required">*Campo obrigatório</span>
              </div>
            </b-form-group>
          </b-col>
          <b-col md="6">
            <b-form-group label="Data Final" label-for="finalDate">
              <datepicker
                :class="{ 'is-invalid': submitted && $v.experiences.$each[index].finalDate.$error }"
                id="finalDate"
                minimum-view="month"
                :language="ptBR"
                format="MMMM yyyy"
                v-model="experience.finalDate"
              ></datepicker>
              <div
                v-if="submitted && $v.experiences.$each[index].finalDate.$error"
                class="invalid-feedback"
              >
                <span v-if="!$v.experiences.$each[index].finalDate.$required">*Campo obrigatório</span>
              </div>
            </b-form-group>
          </b-col>
        </b-row>
      </div>
      <b-row>
        <b-col md="12">
          <span @click.prevent="addExperience()" class="addExperience">
            <i class="fa fa-plus" aria-hidden="true"></i> Adicionar Experiencia
          </span>
        </b-col>
      </b-row>
    </form>
  </div>
</template>
<script>
import Datepicker from "vuejs-datepicker";
import { ptBR } from "vuejs-datepicker/dist/locale";
import { required } from "vuelidate/lib/validators";
import MaskedInput from "vue-text-mask";
import { notification } from "@/configs/notification";
export default {
  name: "ProfessionalExperience",
  data() {
    return {
      experiences: [
        {
          initialDate: "2019-01-01T08:24:00.000Z",
          finalDate: "2019-02-01T08:24:00.000Z",
          city: "São Paulo",
          state: "São Paulo",
          company: "Frascomar",
          position: "Desenvolvedor Back End",
          description: "Realizava trabalho ..."
        },
        {
          initialDate: "2019-01-01T08:24:00.000Z",
          finalDate: "2019-02-01T08:24:00.000Z",
          city: "São Paulo",
          state: "São Paulo",
          company: "Frascomar",
          position: "Desenvolvedor Back End",
          description: "Realizava trabalho ..."
        }
      ],
      submitted: false,
      ptBR: ptBR
    };
  },
  components: {
    Datepicker
  },
  methods: {
    addExperience: function() {
      this.experiences.push({
        initialDate: "",
        finalDate: "",
        city: "",
        state: "",
        company: "",
        position: "",
        description: ""
      });
    },
    submit() {
      this.submitted = true;
      this.$v.$touch();
      if (this.$v.$invalid) {
        notification.error(
          "Atualizar Dados",
          "Preencha os campos corretamente"
        );
        return false;
      } else {
        return true;
      }
    },
    deleteExperience(index) {
      this.experiences.splice(index, 1);
    }
  },
  validations: {
    experiences: {
      $each: {
        initialDate: { required },
        finalDate: { required },
        city: { required },
        state: { required },
        company: { required },
        position: { required },
        description: { required }
      }
    }
  }
};
</script>
