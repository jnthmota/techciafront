<template>
  <form class="formExperience">
    <div class="experience">
      <b-row>
        <b-col md="6">
          <b-form-group>
            <label for="company">Empresa</label>
            <b-form-input
              v-model="professionalExperience.company"
              type="text"
              id="company"
              placeholder="Ex: Microsoft"
            ></b-form-input>
          </b-form-group>
        </b-col>
        <b-col md="6">
          <b-form-group>
            <label for="office">Cargo</label>
            <b-form-input
              v-model="professionalExperience.position"
              type="text"
              id="office"
              placeholder="Ex: Desenvolvedor de backend"
            ></b-form-input>
          </b-form-group>
        </b-col>
      </b-row>
      <b-row>
        <b-col md="6">
          <b-form-group>
            <label for="state">Estado</label>
            <b-form-input
              v-model="professionalExperience.state"
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
              v-model="professionalExperience.city"
              type="text"
              id="São Paulo"
              placeholder="Ex: São Paulo"
            ></b-form-input>
          </b-form-group>
        </b-col>
      </b-row>
      <b-row>
        <b-col md="12">
          <b-form-group label="Descrição" label-for="description">
            <b-form-input
              id="description"
              :textarea="true"
              v-model="professionalExperience.description"
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
                  @change="changeDate($event)"
                  v-model="monthInit"
                  id="monthStartDate"
                  :plain="true"
                  :options="months"
                ></b-form-select>
              </b-col>
              <b-col md="5">
                <b-form-select
                  v-model="yearInit"
                  @change="changeDate($event)"
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
                  @change="changeDate($event)"
                  v-model="monthEnd"
                  :plain="true"
                  :options="months"
                  value="Please select"
                ></b-form-select>
              </b-col>
              <b-col md="5">
                <b-form-select
                  v-model="yearEnd"
                  @change="changeDate($event)"
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
import { mapFields } from "@/configs/helpers";
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

for (var year = currentDate.getFullYear(); year >= 1980; year--) {
  years.push(year);
}
export default {
  props: {
    professionalExperience: {
      type: Object,
      _id: String,
      initialDate: String,
      finalDate: String,
      city: String,
      state: String,
      company: String,
      position: String,
      description: String
    }
  },
  beforeMount() {
    let initDate = new Date(this.professionalExperience.initialDate);
    let endDate = new Date(this.professionalExperience.finalDate);
    this.monthInit = this.months[initDate.getMonth()];
    this.monthEnd = this.months[endDate.getMonth()];
    this.yearInit = initDate.getFullYear();
    this.yearEnd = endDate.getFullYear();
  },
  data() {
    return {
      months: months,
      years: years,
      monthInit: "",
      monthEnd: "",
      yearInit: "",
      yearEnd: ""
    };
  },
  methods: {
    changeDate(e){
      let  initMonth = this.months.indexOf(this.monthInit);
      let  endMonth = this.months.indexOf(this.monthEnd);

      let dateInit =  new Date(this.yearInit, initMonth, "01");
      let dateEnd = new Date(this.yearEnd, endMonth, "01");

      this.professionalExperience.initialDate = dateInit.toISOString();
      this.professionalExperience.finalDate =  dateEnd.toISOString();
    }
  }
};
</script>
