<template>
  <div class="FormEducation">
    <form>
      <div v-for="(education, index) in educations" v-bind:key="index" class="education">
        <b-row>
          <b-col md="12" class="text-right">
            <i @click="deleteEducation(index)" class="cui-trash icons font-2xl d-block mt-4"></i>
          </b-col>
        </b-row>
        <b-row>
          <b-col md="12">
            <b-form-group>
              <label for="institution">Universidade</label>
              <b-form-input
                :class="{ 'is-invalid': submitted && $v.educations.$each[index].institution.$error }"
                v-model="education.institution"
                type="text"
                id="education"
                placeholder="Ex: Universidade de São Paulo"
              ></b-form-input>
              <div
                v-if="submitted && $v.educations.$each[index].institution.$error"
                class="invalid-feedback"
              >
                <span v-if="!$v.educations.$each[index].institution.$required">*Campo obrigatório</span>
              </div>
            </b-form-group>
          </b-col>
        </b-row>
        <b-row>
          <b-col md="6">
            <b-form-group>
              <label for="degreeSchooling">Grau de Escolaridade</label>
              <b-form-input
                :class="{ 'is-invalid': submitted && $v.educations.$each[index].degreeSchooling.$error }"
                v-model="education.degreeSchooling"
                type="text"
                id="degreeSchooling"
                placeholder="Ex: Graduação"
              ></b-form-input>
              <div
                v-if="submitted && $v.educations.$each[index].degreeSchooling.$error"
                class="invalid-feedback"
              >
                <span
                  v-if="!$v.educations.$each[index].degreeSchooling.$required"
                >*Campo obrigatório</span>
              </div>
            </b-form-group>
          </b-col>
          <b-col md="6">
            <b-form-group label="Curso" label-for="course">
              <b-form-input
                id="course"
                :class="{ 'is-invalid': submitted && $v.educations.$each[index].course.$error }"
                :textarea="true"
                v-model="education.course"
                :rows="9"
                placeholder="Ex: Ciências da Computação"
              ></b-form-input>
              <div
                v-if="submitted && $v.educations.$each[index].course.$error"
                class="invalid-feedback"
              >
                <span v-if="!$v.educations.$each[index].course.$required">*Campo obrigatório</span>
              </div>
            </b-form-group>
          </b-col>
        </b-row>
        <b-row>
          <b-col md="6">
            <b-form-group>
              <label for="state">Estado</label>
              <b-form-input
                :class="{ 'is-invalid': submitted && $v.educations.$each[index].state.$error }"
                v-model="education.state"
                type="text"
                id="state"
                placeholder="Ex: São Paulo"
              ></b-form-input>
              <div
                v-if="submitted && $v.educations.$each[index].state.$error"
                class="invalid-feedback"
              >
                <span v-if="!$v.educations.$each[index].state.$required">*Campo obrigatório</span>
              </div>
            </b-form-group>
          </b-col>
          <b-col md="6">
            <b-form-group>
              <label for="city">Cidade</label>
              <b-form-input
                :class="{ 'is-invalid': submitted && $v.educations.$each[index].city.$error }"
                v-model="education.city"
                type="text"
                id="São Paulo"
                placeholder="Ex: São Paulo"
              ></b-form-input>
              <div
                v-if="submitted && $v.educations.$each[index].city.$error"
                class="invalid-feedback"
              >
                <span v-if="!$v.educations.$each[index].city.$required">*Campo obrigatório</span>
              </div>
            </b-form-group>
          </b-col>
        </b-row>
        <b-row>
          <b-col md="6">
            <b-form-group label="Data Inicial" label-for="initialDate">
              <datepicker
                :class="{ 'is-invalid': submitted && $v.educations.$each[index].initialDate.$error }"
                id="initialDate"
                minimum-view="month"
                :language="ptBR"
                format="MMMM yyyy"
                v-model="education.initialDate"
              ></datepicker>
              <div
                v-if="submitted && $v.educations.$each[index].initialDate.$error"
                class="invalid-feedback"
              >
                <span v-if="!$v.educations.$each[index].initialDate.$required">*Campo obrigatório</span>
              </div>
            </b-form-group>
          </b-col>
          <b-col md="6">
            <b-form-group label="Data Final" label-for="finalDate">
              <datepicker
                :class="{ 'is-invalid': submitted && $v.educations.$each[index].finalDate.$error }"
                id="finalDate"
                minimum-view="month"
                :language="ptBR"
                format="MMMM yyyy"
                v-model="education.finalDate"
              ></datepicker>
              <div
                v-if="submitted && $v.educations.$each[index].finalDate.$error"
                class="invalid-feedback"
              >
                <span v-if="!$v.educations.$each[index].finalDate.$required">*Campo obrigatório</span>
              </div>
            </b-form-group>
          </b-col>
        </b-row>
      </div>
      <b-row>
        <b-col md="12">
          <span @click.prevent="addEducation()" class="addExperience">
            <i class="fa fa-plus" aria-hidden="true"></i> Adicionar Escolaridade
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
  name: "Schooling",
  data() {
    return {
      educations: [
        {
          institution: "Universidade São Judas",
          degreeSchooling: "Graduação",
          course: "Ciências da Computação",
          city: "São Paulo",
          state: "São Paulo",
          initialDate: "2019-01-01T08:24:00.000Z",
          finalDate: "2019-02-01T08:24:00.000Z"
        },
        {
          institution: "Universidade São Judas",
          degreeSchooling: "Graduação",
          course: "Ciências da Computação",
          city: "São Paulo",
          state: "São Paulo",
          initialDate: "2019-01-01T08:24:00.000Z",
          finalDate: "2019-02-01T08:24:00.000Z"
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
    addEducation: function() {
      this.educations.push({
        institution: "",
        degreeSchooling: "",
        course: "",
        city: "",
        state: "",
        initialDate: "",
        finalDate: ""
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
        //Ação Aqui
        return true;
      }
    },
    deleteEducation(index) {
      this.educations.splice(index, 1);
    }
  },
  validations: {
    educations: {
      $each: {
        institution: { required },
        degreeSchooling: { required },
        course: { required },
        city: { required },
        state: { required },
        initialDate: { required },
        finalDate: { required }
      }
    }
  }
};
</script>
