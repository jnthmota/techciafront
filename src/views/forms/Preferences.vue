<template>
  <form class="formExperience">
    <div class="experience">
      <b-row>
        <b-col md="12">
          <b-form-group label="Carreira de interesse:" label-for="github">
            <b-form-input v-model="interestCareer" type="text" id="github" placeholder="Ex: Desenvolvedor Back-End"></b-form-input>
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
            <b-form-checkbox-group id="basicInlineCustomCheckboxes">
              <div class="custom-control custom-checkbox custom-control-inline">
                <input type="checkbox" class="custom-control-input" id="clt" value="CLT">
                <label class="custom-control-label" for="clt">CLT</label>
              </div>
              <div class="custom-control custom-checkbox custom-control-inline">
                <input type="checkbox" class="custom-control-input" id="pj" value="PJ" checked>
                <label class="custom-control-label" for="pj">PJ</label>
              </div>
            </b-form-checkbox-group>
          </b-form-group>
        </b-col>
      </b-row>
      <b-row>
        <b-col md="12">
          <b-form-checkbox-group id="basicInlineCustomCheckboxes">
            <div class="custom-control custom-checkbox custom-control-inline">
              <input type="checkbox" class="custom-control-input" id="remote" value="1">
              <label class="custom-control-label" for="remote">Remoto</label>
            </div>
            <div class="custom-control custom-checkbox custom-control-inline">
              <input type="checkbox" class="custom-control-input" id="presential" value="3">
              <label class="custom-control-label" for="presential">Remoto ou Presencial</label>
            </div>
          </b-form-checkbox-group>
        </b-col>
      </b-row>
      <br>
      <b-row>
        <b-col md="6">
          <b-form-group label="Cidade:" label-for="city">
            <b-form-input v-model="citiesForWork[0].city" type="text" id="city" placeholder="Ex: São Paulo"></b-form-input>
          </b-form-group>
        </b-col>
        <b-col md="6">
          <b-form-group label="Estado:" label-for="state">
            <b-form-input v-model="citiesForWork[0].state" type="text" id="state" placeholder="Ex: São Paulo"></b-form-input>
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
      fields: ["interestCareer", "salaryPretension", "citiesForWork"],
      base: "curriculum",
      mutation: "UPDATE_CURRICULUM",
      store: "curriculum"
    })
  }
};
</script>

