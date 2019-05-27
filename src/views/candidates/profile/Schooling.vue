
<template>
  <b-col md="9">
    <b-card header="Formação acadêmica" border-variant="warning">
      <form class="formExperience">
        <div class="experience">
          <b-row>
            <b-col md="12">
              <b-form-group label="Instituição" label-for="institution">
                <b-form-input type="text" id="institution" placeholder="Universidade de Massachusetts"></b-form-input>
              </b-form-group>
            </b-col>
          </b-row>
          <b-row>
            <b-col md="12">
              <b-form-group label="Curso" label-for="course">
                <b-form-input id="course" placeholder="Ciência da Computação"></b-form-input>
              </b-form-group>
            </b-col>
          </b-row>
          <b-row>
            <b-col md="4">
              <b-form-group label="Nível" label-for="level">
                <b-form-select id="endDate" :plain="true" :options="level" value="Selecione um ano"></b-form-select>
              </b-form-group>
            </b-col>
            <b-col md="3">
              <b-form-group label="Ano de conclusão" label-for="endDate">
                <b-form-select id="endDate" :plain="true" :options="years" value="Selecione um ano"></b-form-select>
              </b-form-group>
            </b-col>
          </b-row>
        </div>
      </form>
      <b-row>
        <b-col md="12">
          <b-button
            @click="addExperience()"
            type="button"
            size="sm"
            variant="primary"
          >Adicionar Formação</b-button>
        </b-col>
      </b-row>

      <hr>

      <b-row>
        <b-col md="12 text-right">
          <b-button type="submit" size="sm" variant="primary">Salvar e continuar</b-button>
        </b-col>
      </b-row>
    </b-card>
  </b-col>
</template>
<script>
const level = [
  "Cursando",
  "Doutorado",
  "Ensino Fundamental",
  "Ensino Médio",
  "Ensino Técnico",
  "Especialização",
  "Extensão",
  "Intercâmbio",
  "Licenciatura",
  "Mestrado",
  "Outro",
  "Pós-Graduação",
  "Tecnólogo",
  "Treinamento",
  "Técnico"
];

const years = [];
const currentDate = new Date();
const formExperience = document.querySelector(".formExperience");
const experience = document.querySelector(".experience");

for (var year = currentDate.getFullYear(); year >= 1980; year--) {
  years.push(year);
}

export default {
  name: "Schooling",
  data() {
    return {
      level: level,
      years: years
    };
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