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
  name: "Education",
  data() {
    return {
      educations: [
        {
          degreeSchooling: "Graduação",
          course: "Ciências da Computação"
        }
      ],
      submitted: false
    };
  },
  components: {},
  methods: {
    addEducation: function() {
      this.educations.push({
        degreeSchooling: "",
        course: ""
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
        degreeSchooling: { required },
        course: { required }
      }
    }
  }
};
</script>
