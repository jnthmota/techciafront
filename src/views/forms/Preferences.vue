<template>
  <form class="formExperience">
    <div class="experience">
      <b-row>
        <b-col md="12">
          <b-form-group label="Carreira de interesse:" label-for="github">
            <b-form-input
              v-model="interestCareer"
              type="text"
              id="github"
              placeholder="Ex: Desenvolvedor Back-End"
            ></b-form-input>
          </b-form-group>
        </b-col>
      </b-row>
      <b-row>
        <b-col md="6">
          <b-form-group label="Pretenção Salarial:" label-for="salary">
            <b-form-input v-model="salaryPretension" type="text" id="salary" placeholder="R$ 2.000"></b-form-input>
          </b-form-group>
        </b-col>
        <b-col md="6">
          <b-form-group label="Tipo de Oferta:" label-for="offer">
            <b-form-select
              v-model="offerType[0]"
              id="offer"
              :plain="true"
              :options="offer"
              value="Selecione uma oferta"
            ></b-form-select>
          </b-form-group>
        </b-col>
      </b-row>
      <b-row>
        <b-col md="6">
          <b-form-group label="Tipo de Trabalho:" label-for="workType">
            <b-form-select
              v-model="workType[0]"
              id="workType"
              :plain="true"
              :options="work"
              value="Selecione um tipo de trabalho"
            ></b-form-select>
          </b-form-group>
        </b-col>
      </b-row>
      <br>
      <b-row>
        <b-col md="6">
          <b-form-group label="Cidade:" label-for="city">
            <b-form-input
              v-model="citiesForWork[0].city"
              type="text"
              id="city"
              placeholder="Ex: São Paulo"
            ></b-form-input>
          </b-form-group>
        </b-col>
        <b-col md="6">
          <b-form-group label="Estado:" label-for="state">
            <b-form-input
              v-model="citiesForWork[0].state"
              type="text"
              id="state"
              placeholder="Ex: São Paulo"
            ></b-form-input>
          </b-form-group>
        </b-col>
      </b-row>
    </div>
    <hr>
    <b-row>
      <b-col md="12 text-right">
        <slot></slot>
      </b-col>
    </b-row>
  </form>
</template>
<script>
import { mapFields } from "../../helpers/helpers";
export default {
  computed: {
    ...mapFields({
      fields: [
        "interestCareer",
        "salaryPretension",
        "citiesForWork",
        "workType",
        "offerType"
      ],
      base: "curriculum",
      mutation: "UPDATE_CURRICULUM",
      store: "curriculum"
    })
  },
  data() {
    return {
      offer: ["CLT", "PJ"],
      work: ["Presencial", "Remoto"]
    };
  }
};
</script>

