<template>
  <div>
    <b-card header="Habilidades" border-variant="warning">
      <form>
        <div v-for="(skill, index) in skills" v-bind:key="index" class="skill">
          <b-row>
            <b-col md="10"></b-col>
            <b-col md="2" class="text-right">
              <i @click="deleteSkill(index)" class="cui-trash icons font-2xl d-block mt-4"></i>
            </b-col>
          </b-row>
          <b-row>
            <b-col md="4">
              <b-form-group>
                <label for="name">Nome da habilidade</label>
                <b-form-select
                  :class="{ 'is-invalid': submitted && $v.skills.$each[index].name.$error }"
                  v-model="skill.name"
                  id="name"
                  :plain="true"
                  :options="skillArr"
                  value="Selecione um site"
                ></b-form-select>
                <div
                  v-if="submitted && $v.skills.$each[index].name.$error"
                  class="invalid-feedback"
                >
                  <span v-if="!$v.skills.$each[index].name.$required">O campo é obrigatório</span>
                </div>
              </b-form-group>
            </b-col>
            <b-col md="3">
              <b-form-group>
                <label for="skill">Tempo de Experiência (Anos)</label>
                <b-form-input
                  :class="{ 'is-invalid': submitted && $v.skills.$each[index].yearExperience.$error }"
                  v-model="skill.yearExperience"
                  type="text"
                  id="skill"
                  placeholder="Ex: 3"
                ></b-form-input>
                <div
                  v-if="submitted && $v.skills.$each[index].yearExperience.$error"
                  class="invalid-feedback"
                >
                  <span
                    v-if="!$v.skills.$each[index].yearExperience.$required"
                  >O campo é obrigatório</span>
                </div>
              </b-form-group>
            </b-col>
          </b-row>
        </div>
        <b-row>
          <b-col md="12">
            <b-button
              @click="addSkill()"
              type="button"
              size="sm"
              variant="primary"
            >Adicionar Habilidade</b-button>
          </b-col>
        </b-row>
        <b-row>
          <b-col md="12 text-right">
            <b-button
              @click.prevent="updateSkill()"
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
      skills: [],
      submitted: false,
      skillArr: [
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
      ptBR: ptBR
    };
  },
  components: {
    Datepicker
  },
  methods: {
    addSkill: function() {
      this.skills.push({
        writtenLevel: "",
        readingLevel: "",
        conversationLevel: "",
        skill: ""
      });
    },
    async updateSkill() {
      this.submitted = true;
      this.$v.$touch();
      console.log(this.$v);
      if (this.$v.$invalid) {
        notification.error(
          "Atualizar Dados",
          "Preencha os campos corretamente"
        );
        return;
      } else {
        await this.$store.commit("setCurriculum", {
          programmingLanguages: this.skills
        });
        await this.$store.dispatch(
          "updateCurriculum",
          this.$store.getters.curriculum
        );
        await notification.success("Dados Atualizados");
      }
    },
    deleteSkill(index) {
      this.skills.splice(index, 1);
    }
  },
  beforeMount() {
    this.skills = this.$store.getters.curriculum.programmingLanguages;
  },
  validations: {
    skills: {
      $each: {
        name: { required },
        yearExperience: { required }
      }
    }
  }
};
</script>
