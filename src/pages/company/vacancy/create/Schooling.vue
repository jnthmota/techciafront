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
        degreeSchooling: { required },
        course: { required },
      }
    }
  }
};
</script>
