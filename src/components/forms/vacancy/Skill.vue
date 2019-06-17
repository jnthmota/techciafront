<template>
  <div class="FormProgrammingLanguage">
    <form>
      <div v-for="(language, index) in programmingLanguages" v-bind:key="index" class="language">
        <b-row>
          <b-col md="4">
            <b-form-group>
              <label for="name">Linguagem</label>
              <b-form-select
                :class="{ 'is-invalid': submitted && $v.programmingLanguages.$each[index].name.$error }"
                v-model="programmingLanguages[index].name"
                id="readingLevel"
                :plain="true"
                :options="arrLanguages"
                value="Selecione um nivel"
              ></b-form-select>
              <div
                v-if="submitted && $v.programmingLanguages.$each[index].name.$error"
                class="invalid-feedback"
              >
                <span v-if="!$v.programmingLanguages.$each[index].name.$required">*Campo obrigatório</span>
              </div>
            </b-form-group>
          </b-col>
          <b-col md="4">
            <b-form-group>
              <label for="name">Tempo de Experiência</label>
              <b-form-input
                :class="{ 'is-invalid': submitted && $v.programmingLanguages.$each[index].yearExperience.$error }"
                v-model="programmingLanguages[index].yearExperience"
                type="number"
                id="language"
                placeholder="Ex: 3"
              ></b-form-input>
              <div
                v-if="submitted && $v.programmingLanguages.$each[index].yearExperience.$error"
                class="invalid-feedback"
              >
                <span
                  v-if="!$v.programmingLanguages.$each[index].yearExperience.$required"
                >*Campo obrigatório</span>
              </div>
            </b-form-group>
          </b-col>
          <b-col md="2" class="text-left">
            <i
              @click="deleteProgrammingLanguage(index)"
              class="cui-trash icons font-2xl d-block mt-4"
            ></i>
          </b-col>
        </b-row>
      </div>
      <b-row>
        <b-col md="12">
          <span @click.prevent="addProgrammingLanguage()" class="addExperience">
            <i class="fa fa-plus" aria-hidden="true"></i> Adicionar Linguagem
          </span>
        </b-col>
      </b-row>
    </form>
  </div>
</template>

<script>
import { required } from "vuelidate/lib/validators";
import { notification } from "@/configs/notification";
export default {
  name: "AppFormProgrammingLanguage",
  data() {
    return {
      arrLanguages: [
        "Java",
        "C",
        "C++",
        "Python",
        "C#",
        "JavaScript",
        "Visual Basic .NET",
        "R",
        "PHP",
        "MATLAB",
        "Swift",
        "Objective-C",
        "Assembly",
        "Perl",
        "Ruby",
        "Delphi / Object Pascal",
        "Go",
        "Scratch",
        "PL/SQL",
        "Visual Basic"
      ],

      programmingLanguages: [
        {
          name: "",
          yearExperience: 0
        }
      ],
      submitted: false
    };
  },
  methods: {
    addProgrammingLanguage: function() {
      this.programmingLanguages.push({
        name: "",
        yearExperience: 0
      });
    },
    deleteProgrammingLanguage(index) {
      this.programmingLanguages.splice(index, 1);
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
    }
  },
  validations: {
    programmingLanguages: {
      $each: {
        name: { required },
        yearExperience: { required }
      }
    }
  }
};
</script>
