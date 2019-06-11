<template>
  <b-col md="9">
    <b-card header="Formação acadêmica" border-variant="warning">
      <div
        v-for="(skill, index) in $store.state.curriculum.curriculum.programmingLanguages"
        :key="index"
      >
        <skills :programmingLanguages="skill"/>
      </div>
      <b-row>
        <b-col md="12">
          <b-button
            @click="addSkill()"
            type="button"
            size="sm"
            variant="primary"
          >Adicionar Linguagem</b-button>
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
import skills from "../../forms/Skills";
export default {
  name: "Schooling",
  data() {
    return {};
  },
  components: {
    skills
  },
  methods: {
    addSkill: function() {
      this.$store.dispatch(
        "pushProgrammingLanguages",
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
