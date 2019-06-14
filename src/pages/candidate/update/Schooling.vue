<template>
  <div>
    <b-card header="Escolaridade" border-variant="warning">
      <form>
        <div v-for="(education, index) in educations" v-bind:key="index" class="education">
          <b-row>
            <b-col md="12" class="text-right">
              <i @click="deleteEducation(index)" class="cui-trash icons font-2xl d-block mt-4"></i>
            </b-col>
          </b-row>
          <b-row>
            <b-col md="4">
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
                  <span
                    v-if="!$v.educations.$each[index].institution.$required"
                  >A Universidade é obrigatória</span>
                </div>
              </b-form-group>
            </b-col>
            <b-col md="4">
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
                  >O Grau de Escolaridade é obrigatório</span>
                </div>
              </b-form-group>
            </b-col>
            <b-col md="4">
              <b-form-group label="Curso" label-for="course">
                <b-form-input
                  id="course"
                  :textarea="true"
                  v-model="education.course"
                  :rows="9"
                  placeholder="Ex: Ciências da Computação"
                ></b-form-input>
                <div
                  v-if="submitted && $v.educations.$each[index].course.$error"
                  class="invalid-feedback"
                >
                  <span
                    v-if="!$v.educations.$each[index].course.$required"
                  >O Curso é obrigatório</span>
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
                  <span v-if="!$v.educations.$each[index].state.$required">O Estado é obrigatório</span>
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
                  <span v-if="!$v.educations.$each[index].city.$required">A Cidade é obrigatória</span>
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
                  <span
                    v-if="!$v.educations.$each[index].initialDate.$required"
                  >A Data é obrigatória</span>
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
                  <span v-if="!$v.educations.$each[index].finalDate.$required">A Data é obrigatória</span>
                </div>
              </b-form-group>
            </b-col>
          </b-row>
        </div>
        <b-row>
          <b-col md="12">
            <b-button
              @click="addEducation()"
              type="button"
              size="sm"
              variant="primary"
            >Adicionar Escolaridade</b-button>
          </b-col>
        </b-row>
        <b-row>
          <b-col md="12 text-right">
            <b-button
              @click.prevent="updateEducation()"
              type="submit"
              size="sm"
              variant="primary"
            >Salvar e continuar</b-button>
          </b-col>
        </b-row>
      </form>
    </b-card>
  </div>
</template>
<script>
import Datepicker from "vuejs-datepicker";
import { ptBR } from "vuejs-datepicker/dist/locale";
import { required } from "vuelidate/lib/validators";
import MaskedInput from "vue-text-mask";
import { notification } from "@/stores/notification";
export default {
  name: "Schooling",
  data() {
    return {
      educations: [],
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
    async updateEducation() {
      this.submitted = true;
      this.$v.$touch();
      if (this.$v.$invalid) {
        notification.error(
          "Atualizar Dados",
          "Preencha os campos corretamente"
        );
        return;
      } else {
        await this.educations.forEach(res => {
          res.initialDate = new Date(res.initialDate).toISOString();
          res.finalDate = new Date(res.finalDate).toISOString();
        });
        await this.$store.commit("setCurriculum", {
          education: this.educations
        });
        await this.$store.dispatch("updateCurriculum", this.$store.getters.curriculum);
        await notification.success("Dados Atualizados");
        await this.$router.push("/candidate/candidate-update/schooling");
      }
    },
    deleteEducation(index) {
      this.educations.splice(index, 1);
    }
  },
  beforeMount() {
    this.educations = this.$store.getters.curriculum.education;
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
