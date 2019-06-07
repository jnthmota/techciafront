
<template>
  <b-col md="9">
    <b-card header="Experiências" border-variant="warning">
      <experience>
        <b-row>
          <b-col md="12">
            <b-button
              @click="addExperience()"
              type="button"
              size="sm"
              variant="primary"
            >Adicionar Experiência</b-button>
          </b-col>
        </b-row>

        <hr>

        <b-row>
          <b-col md="12 text-right">
            <b-button type="submit" size="sm" variant="primary">Salvar e continuar</b-button>
          </b-col>
        </b-row>
      </experience>
    </b-card>
  </b-col>
</template>
<script>
import experience from "../../forms/Experience";
export default {
  name: "Experience",
  data() {
    return {};
  },
  components: {
    experience
  },
  methods: {
    addExperience: function() {
      forms.push("teste");
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