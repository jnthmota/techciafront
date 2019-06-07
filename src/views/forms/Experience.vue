<template>
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
            <b-form-input
              id="description"
              :textarea="true"
              :rows="9"
              placeholder="Breve descrição sobre o seu trabalho"
            ></b-form-input>
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
    <slot></slot>
  </form>
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
  data() {
    return {
      months: months,
      years: years,
      formExperience: formExperience,
      experience: experience
    };
  }
};
</script>
