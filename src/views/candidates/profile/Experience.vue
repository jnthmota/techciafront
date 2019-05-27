
<template>
  <b-col md="9">
    <b-card header="Experiências" border-variant="warning">
      <form class="formExperience">
        <div class="experience">
          <b-row>
            <b-col md="6">
              <b-form-group>
                <label for="company">Empresa</label>
                <b-form-input type="text" id="company" placeholder="Ex: Microsoft"></b-form-input>
              </b-form-group>
            </b-col>
            <b-col md="6">
              <b-form-group>
                <label for="office">Cargo</label>
                <b-form-input type="text" id="office" placeholder="Ex: Desenvolvedor de backend"></b-form-input>
              </b-form-group>
            </b-col>
          </b-row>
          <b-row>
            <b-col md="12">
              <b-form-group label="Descrição" label-for="description">
                <b-form-input id="description" :textarea="true" :rows="9" placeholder="Breve descrição sobre o seu trabalho"></b-form-input>
              </b-form-group>
            </b-col>
          </b-row>
          <b-row>
            <b-col md="6">
              <b-form-group label="Data Inicial" label-for="description">
                <b-row>
                  <b-col md="7">
                    <b-form-select
                      id="monthStartDate"
                      :plain="true"
                      :options="months"
                      value="Please select"
                    ></b-form-select>
                  </b-col>
                  <b-col md="5">
                    <b-form-select
                      id="monthStartDate"
                      :plain="true"
                      :options="years"
                      value="Please select"
                    ></b-form-select>
                  </b-col>
                </b-row>
              </b-form-group>
            </b-col>
            <b-col md="6">
              <b-form-group label="Data Final" label-for="endDate">
                <b-row>
                  <b-col md="7">
                    <b-form-select
                      id="monthEndDate"
                      :plain="true"
                      :options="months"
                      value="Please select"
                    ></b-form-select>
                  </b-col>
                  <b-col md="5">
                    <b-form-select
                      id="yearEndDate"
                      :plain="true"
                      :options="years"
                      value="Please select"
                    ></b-form-select>
                  </b-col>
                </b-row>
              </b-form-group>
            </b-col>
          </b-row>
        </div>
      </form>
      <b-row>
        <b-col md="12">
          <b-button @click="addExperience()" type="button" size="sm" variant="primary">Adicionar Experiência</b-button>
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
const months = [
  "Janeiro",
  "Fevereiro",
  "Março",
  "Abril",
  "Maio",
  "Junho",
  "Julho",
  "Agosto",
  "Setembro",
  "Outubro",
  "Novembro",
  "Dezembro"
];

const years = [];
const currentDate = new Date();
const formExperience = document.querySelector(".formExperience");
const experience = document.querySelector(".experience");

for (var year = currentDate.getFullYear(); year >= 1980; year--) {
  years.push(year);
}

export default {
  name: "Experience",
  data() {
    return {
      months: months,
      years: years,
      formExperience: formExperience,
      experience: experience
    };
  },
  methods: {
      addExperience: function (){
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