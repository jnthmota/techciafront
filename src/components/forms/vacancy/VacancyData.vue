<template>
  <div class="FormExperience">
    <form>
      <b-row>
        <b-col md="6">
          <b-form-group label="Carreira de interesse:" label-for="github">
            <b-form-select
              :class="{ 'is-invalid': submitted && $v.position.$error }"
              v-model="position"
              id="position"
              :plain="true"
              :options="arrCarrer"
              value="Selecione um nivel"
            ></b-form-select>
            <div v-if="submitted && $v.position.$error" class="invalid-feedback">
              <span v-if="!$v.position.required">*Campo obrigatório</span>
            </div>
          </b-form-group>
        </b-col>
        <b-col md="6">
          <b-form-group label="Nivel:" label-for="minLevel">
            <b-form-select
              :class="{ 'is-invalid': submitted && $v.minLevel.$error }"
              v-model="minLevel"
              id="minLevel"
              :plain="true"
              :options="minLevelArr"
              value="Selecione um nivel"
            ></b-form-select>
            <div v-if="submitted && $v.minLevel.$error" class="invalid-feedback">
              <span v-if="!$v.minLevel.required">*Campo obrigatório</span>
            </div>
          </b-form-group>
        </b-col>
      </b-row>
      <b-row>
        <b-col md="6">
          <b-form-group label="Tipo de Oferta:" label-for="offer">
            <multiselect
              :class="{ 'is-invalid': submitted && $v.offerType.$error }"
              selectLabel="Clique para selecionar"
              deselectLabel="Clique para retirar"
              :multiple="true"
              v-model="offerType"
              id="offer"
              :plain="true"
              :options="arrOffer"
              placeholder="Selecione uma oferta"
            ></multiselect>
            <div v-if="submitted && $v.offerType.$error" class="invalid-feedback">
              <span v-if="!$v.offerType.required">*Campo obrigatório</span>
            </div>
          </b-form-group>
        </b-col>

        <b-col md="6">
          <b-form-group label="Tipo de Trabalho:" label-for="workType">
            <multiselect
              :class="{ 'is-invalid': submitted && $v.workType.$error }"
              selectLabel="Clique para selecionar"
              deselectLabel="Clique para retirar"
              :multiple="true"
              v-model="workType"
              id="offer"
              :plain="true"
              :options="arrWork"
              placeholder="Selecione uma tipo de trabalho"
            ></multiselect>
            <div v-if="submitted && $v.workType.$error" class="invalid-feedback">
              <span v-if="!$v.workType.required">*Campo obrigatório</span>
            </div>
          </b-form-group>
        </b-col>
      </b-row>
      <br>
      <b-row>
        <b-col md="6">
          <b-form-group label="Cidade:" label-for="city">
            <b-form-input
              :class="{ 'is-invalid': submitted && $v.citiesForWork.$each[0].city.$error }"
              v-model="citiesForWork[0].city"
              type="text"
              id="city"
              placeholder="Ex: São Paulo"
            ></b-form-input>
            <div v-if="submitted && $v.citiesForWork.$each[0].city.$error" class="invalid-feedback">
              <span v-if="!$v.citiesForWork.$each[0].city.required">*Campo obrigatório</span>
            </div>
          </b-form-group>
        </b-col>
        <b-col md="6">
          <b-form-group label="Estado:" label-for="state">
            <b-form-input
              :class="{ 'is-invalid': submitted && $v.citiesForWork.$each[0].state.$error }"
              v-model="citiesForWork.state"
              type="text"
              id="state"
              placeholder="Ex: São Paulo"
            ></b-form-input>
            <div v-if="submitted && $v.citiesForWork.$each[0].state.$error" class="invalid-feedback">
              <span v-if="!$v.citiesForWork.$each[0].state.required">*Campo obrigatório</span>
            </div>
          </b-form-group>
        </b-col>
      </b-row>
      <b-row>
        <b-col md="6">
          <b-form-group label="Pretenção Salarial:" label-for="salary">
            <b-form-input
              :class="{ 'is-invalid': submitted && $v.salaryPretension.$error }"
              v-model="salaryPretension"
              type="number"
              id="salary"
              placeholder="R$ 2.000"
            ></b-form-input>
            <div v-if="submitted && $v.salaryPretension.$error" class="invalid-feedback">
              <span v-if="!$v.salaryPretension.required">*Campo obrigatório</span>
            </div>
          </b-form-group>
        </b-col>
      </b-row>
      <hr>
    </form>
  </div>
</template>
<script>
import { required, email } from "vuelidate/lib/validators";
import MaskedInput from "vue-text-mask";
import { mapFields } from "@/configs/helpers";
import { notification } from "@/configs/notification";
import Multiselect from "vue-multiselect";
export default {
  data() {
    return {
      // Array dos selects
      arrCarrer: [
        "Desenvolvimento BackEnd",
        "Desenvolvimento FrontEnd",
        "Analista de Sistema",
        "Coodenador de projetos",
        "Segurança da informação",
        "HelpDesk"
      ],
      arrOffer: ["CLT", "PJ"],
      arrWork: ["Presencial", "Remoto"],
      minLevelArr: [
        "estagio",
        "traineer",
        "junior",
        "pleno",
        "senior",
        "coordenador",
        "especialista",
        "executivo"
      ],

      //   Dados
      offerType: ["PJ", "CLT"],
      workType: ["Presencial"],
      minLevel: "estagio",
      position: "Desenvolvimento BackEnd",
      salaryPretension: 0,
      citiesForWork: [
        {
          city: "São Paulo",
          state: "São Paulo"
        }
      ],
      submitted: false
    };
  },
  components: {
    Multiselect
  },
  methods: {
    submit() {
      this.submitted = true;

      // stop here if form is invalid
      this.$v.$touch();
      if (this.$v.$invalid) {
        notification.error(
          "Atualizar dados",
          "Preencha os Campos corretamente"
        );
        return false;
      } else {
        //Ação aquii

        return true;
      }
    }
  },
  validations: {
    position: { required },
    salaryPretension: { required },
    workType: { required },
    offerType: { required },
    minLevel: { required },
    citiesForWork: {
      $each: {
        city: { required },
        state: { required }
      }
    }
  }
};
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
