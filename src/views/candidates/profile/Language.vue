<template>
  <b-col md="9">
    <b-card header="Formação acadêmica" border-variant="warning">
      <div
        v-for="(language, index) in $store.state.curriculum.curriculum.languages"
        :key="index"
      >
        <language :languages="language"/>
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

      <hr>

      <b-row>
        <b-col md="12 text-right">
          <b-button
            @click.prevent="updateSchooling()"
            type="submit"
            size="sm"
            variant="primary"
          >Salvar e continuar</b-button>
        </b-col>
      </b-row>
    </b-card>
  </b-col>
</template>
<script>
import language from "../../forms/Language";
export default {
  name: "Language",
  data() {
    return {};
  },
  components: {
    language
  },
  methods: {
    addLanguage: function() {
      this.$store.dispatch(
        "pushLanguage",
        this.$store.state.curriculum.curriculum
      );
    },
    updateSchooling() {
      this.$store.dispatch(
        "updateCurriculum",
        this.$store.state.curriculum.curriculum
      );
    }
  }
};
</script>
