<template>
  <div>
    <b-card header="Idiomas" border-variant="warning">
      <form>
        <div v-for="(language, index) in languages" v-bind:key="index" class="language">
          <b-row>
            <b-col md="12" class="text-right">
              <i @click="deleteLanguage(index)" class="cui-trash icons font-2xl d-block mt-4"></i>
            </b-col>
          </b-row>
          <b-row>
            <b-col md="6">
              <b-form-group>
                <label for="language">Idioma</label>
                <b-form-input
                  :class="{ 'is-invalid': submitted && $v.languages.$each[index].language.$error }"
                  v-model="language.language"
                  type="text"
                  id="language"
                  placeholder="Ex: Inglês"
                ></b-form-input>
                <div
                  v-if="submitted && $v.languages.$each[index].language.$error"
                  class="invalid-feedback"
                >
                  <span v-if="!$v.languages.$each[index].language.$required">O Idioma é obrigatório</span>
                </div>
              </b-form-group>
            </b-col>
            <b-col md="6">
              <b-form-group>
                <label for="readingLevel">Leitura</label>
                <b-form-select
                  :class="{ 'is-invalid': submitted && $v.languages.$each[index].readingLevel.$error }"
                  v-model="language.readingLevel"
                  id="readingLevel"
                  :plain="true"
                  :options="level"
                  value="Selecione um nivel"
                ></b-form-select>
                <div
                  v-if="submitted && $v.languages.$each[index].readingLevel.$error"
                  class="invalid-feedback"
                >
                  <span
                    v-if="!$v.languages.$each[index].readingLevel.$required"
                  >O nivel de leitura é obrigatório</span>
                </div>
              </b-form-group>
            </b-col>
          </b-row>
          <b-row>
            <b-col md="6">
              <b-form-group label="Escrita" label-for="writtenLevel">
                <b-form-select
                  v-model="language.writtenLevel"
                  :class="{ 'is-invalid': submitted && $v.languages.$each[index].writtenLevel.$error }"
                  id="writtenLevel"
                  :plain="true"
                  :options="level"
                  value="Selecione um nivel"
                ></b-form-select>
                <div
                  v-if="submitted && $v.languages.$each[index].writtenLevel.$error"
                  class="invalid-feedback"
                >
                  <span
                    v-if="!$v.languages.$each[index].writtenLevel.$required"
                  >O nivel de escrita é obrigatório</span>
                </div>
              </b-form-group>
            </b-col>
            <b-col md="6">
              <b-form-group label="Conversação" label-for="conversationLevel">
                <b-form-select
                  v-model="language.conversationLevel"
                  :class="{ 'is-invalid': submitted && $v.languages.$each[index].conversationLevel.$error }"
                  id="conversationLevel"
                  :plain="true"
                  :options="level"
                  value="Selecione um idioma"
                ></b-form-select>
                <div
                  v-if="submitted && $v.languages.$each[index].conversationLevel.$error"
                  class="invalid-feedback"
                >
                  <span
                    v-if="!$v.languages.$each[index].conversationLevel.$required"
                  >O nivel de conversação é obrigatório</span>
                </div>
              </b-form-group>
            </b-col>
          </b-row>
        </div>
        <b-row>
          <b-col md="12">
            <b-button
              @click="addLanguage()"
              type="button"
              size="sm"
              variant="primary"
            >Adicionar Idioma</b-button>
          </b-col>
        </b-row>
        <b-row>
          <b-col md="12 text-right">
            <b-button
              @click.prevent="updateLanguage()"
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
      languages: [],
      submitted: false,
      level: ["Básico", "Intermediário", "Avançado"],
      ptBR: ptBR
    };
  },
  components: {
    Datepicker
  },
  methods: {
    addLanguage: function() {
      this.languages.push({
        writtenLevel: "",
        readingLevel: "",
        conversationLevel: "",
        language: ""
      });
    },
    async updateLanguage() {
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
          languages: this.languages
        });
        await this.$store.dispatch(
          "updateCurriculum",
          this.$store.getters.curriculum
        );
        await notification.success("Dados Atualizados");
        await this.$router.push("/candidate/candidate-update/profile");
      }
    },
    deleteLanguage(index) {
      this.languages.splice(index, 1);
    }
  },
  beforeMount() {
    this.languages = this.$store.getters.curriculum.languages;
  },
  validations: {
    languages: {
      $each: {
        writtenLevel: { required },
        readingLevel: { required },
        conversationLevel: { required },
        language: { required }
      }
    }
  }
};
</script>
