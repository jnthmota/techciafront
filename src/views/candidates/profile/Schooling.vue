
<template>
  <b-col md="9">
    <b-card header="Formação acadêmica" border-variant="warning">
      <div
        v-for="(schooling, index) in $store.state.curriculum.curriculum.education"
        :key="index"
      >
        <schooling :schooling="schooling"/>
      </div>
      <b-row>
        <b-col md="12">
          <b-button
            @click="addSchooling()"
            type="button"
            size="sm"
            variant="primary"
          >Adicionar Formação</b-button>
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
import schooling from "../../forms/Schooling";
export default {
  name: "Schooling",
  data() {
    return {};
  },
  components: {
    schooling
  },
  methods: {
    addSchooling: function() {
      this.$store.dispatch(
        "pushSchooling",
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

<style>
input,
select {
  border-radius: 0px !important;
  width: 100% !important;
  height: 50px !important;
}

select {
  height: 40px !important;
}

hr {
  margin: 50px 0 !important;
}

.experience {
  border-left: 5px solid #f1f2f4 !important;
  padding: 20px;
  margin-bottom: 20px;
}

label {
  font-weight: 600;
}

button {
  height: 40px !important;
  border-radius: 0px !important;
  background-color: #526173 !important;
  font-size: 14px !important;
}
</style>