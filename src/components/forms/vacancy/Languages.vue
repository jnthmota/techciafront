<template>
  <div class="FormLanguage">
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
                <span v-if="!$v.languages.$each[index].language.$required">*Campo obrigatório</span>
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
                <span v-if="!$v.languages.$each[index].readingLevel.$required">*Campo obrigatório</span>
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
                <span v-if="!$v.languages.$each[index].writtenLevel.$required">*Campo obrigatório</span>
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
                >*Campo obrigatório</span>
              </div>
            </b-form-group>
          </b-col>
        </b-row>
      </div>
      <b-row>
        <b-col md="12">
          <span @click.prevent="addLanguage()" class="addExperience">
            <i class="fa fa-plus" aria-hidden="true"></i> Adicionar Idioma
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
      languages: [
        {
          writtenLevel: "Básico",
          readingLevel: "Básico",
          conversationLevel: "Básico",
          _id: "5d03d68e8bf3fa0017fc98b3",
          language: "Inglês"
        },
        {
          writtenLevel: "Básico",
          readingLevel: "Básico",
          conversationLevel: "Básico",
          _id: "5d03d68e8bf3fa0017fc98b3",
          language: "Russo"
        }
      ],
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
    submit() {
      this.submitted = true;
      this.$v.$touch();
      console.log(this.$v);
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
    deleteLanguage(index) {
      this.languages.splice(index, 1);
    }
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
