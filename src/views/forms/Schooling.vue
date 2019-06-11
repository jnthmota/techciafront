<template>
  <form>
    <div class="experience">
      <b-row>
        <b-col md="12">
          <b-form-group label="Instituição" label-for="institution">
            <b-form-input
              v-model="schooling.institution"
              type="text"
              id="institution"
              placeholder="Universidade de Massachusetts"
            ></b-form-input>
          </b-form-group>
        </b-col>
      </b-row>
      <b-row>
        <b-col md="12">
          <b-form-group label="Curso" label-for="course">
            <b-form-input
              v-model="schooling.course"
              id="course"
              placeholder="Ciência da Computação"
            ></b-form-input>
          </b-form-group>
        </b-col>
      </b-row>
      <b-row>
        <b-col md="6">
          <b-form-group>
            <label for="state">Estado</label>
            <b-form-input
              v-model="schooling.state"
              type="text"
              id="state"
              placeholder="Ex: São Paulo"
            ></b-form-input>
          </b-form-group>
        </b-col>
        <b-col md="6">
          <b-form-group>
            <label for="city">Cidade</label>
            <b-form-input
              v-model="schooling.city"
              type="text"
              id="São Paulo"
              placeholder="Ex: São Paulo"
            ></b-form-input>
          </b-form-group>
        </b-col>
      </b-row>
      <b-row>
        <b-col md="4">
          <b-form-group label="Nível" label-for="level">
            <b-form-select
              v-model="schooling.degreeSchooling"
              id="endDate"
              :plain="true"
              :options="level"
              value="Selecione um ano"
            ></b-form-select>
          </b-form-group>
        </b-col>
        <b-col md="3">
          <b-form-group label="Ano de conclusão" label-for="endDate">
            <b-form-select
              v-model="year"
              @change="changeDate($event)"
              id="endDate"
              :plain="true"
              :options="years"
              value="Selecione um ano"
            ></b-form-select>
          </b-form-group>
        </b-col>
      </b-row>
    </div>
  </form>
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
  "Graduação",
  "Pós-Graduação",
  "Tecnólogo",
  "Treinamento",
  "Técnico"
];

const years = [];
const currentDate = new Date();

for (var year = currentDate.getFullYear(); year >= 1980; year--) {
  years.push(year);
}

export default {
  name: "",
  data() {
    return {
      level: level,
      years: years,
      year: ""
    };
  },
  props: {
    schooling: {
      institution: "",
      degreeSchooling: "",
      course: "",
      city: "",
      state: "",
      initialDate: "",
      finalDate: ""
    }
  },
  beforeMount() {
    let endDate = new Date(this.schooling.finalDate);
    this.year = endDate.getFullYear();
  },
  methods:{
    changeDate(e) {
      let dateInit = new Date(this.year - 4, "01", "01");
      let dateEnd = new Date(this.year, "11", "01");
      this.schooling.initialDate = dateInit.toISOString();
      this.schooling.finalDate = dateEnd.toISOString();
    }
  }
};
</script>
