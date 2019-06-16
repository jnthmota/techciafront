<template>
  <div class="FormExperience">
    <form>
      <b-row>
        <b-col md="6">
          <b-form-group label="Carreira de interesse:" label-for="github">
            <b-form-select
              :class="{ 'is-invalid': submitted && $v.interestCareer.$error }"
              v-model="interestCareer"
              id="interestCareer"
              :plain="true"
              :options="arrCarrer"
              value="Selecione um nivel"
            ></b-form-select>
            <div v-if="submitted && $v.interestCareer.$error" class="invalid-feedback">
              <span v-if="!$v.interestCareer.required">*Campo obrigatório</span>
            </div>
          </b-form-group>
        </b-col>
        <b-col md="6">
          <b-form-group label="Nivel:" label-for="level">
            <b-form-select
              :class="{ 'is-invalid': submitted && $v.level.$error }"
              v-model="level"
              id="level"
              :plain="true"
              :options="levelArr"
              value="Selecione um nivel"
            ></b-form-select>
            <div v-if="submitted && $v.level.$error" class="invalid-feedback">
              <span v-if="!$v.level.required">*Campo obrigatório</span>
            </div>
          </b-form-group>
        </b-col>
      </b-row>
      <b-row>
        <b-col md="6">
          <b-form-group label="Tipo de Oferta:" label-for="offer">
            <multiselect
              :class="{ 'is-invalid': submitted && $v.level.$error }"
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
              :class="{ 'is-invalid': submitted && $v.level.$error }"
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
          <b-form-group label="Pretenção Salarial:" label-for="salary">
            <b-form-input v-model="salaryPretension" type="text" id="salary" placeholder="R$ 2.000"></b-form-input>
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
      levelArr: [
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
      level: "estagio",
      interestCareer: "Desenvolvimento BackEnd",
      salaryPretension: 2000,
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
    interestCareer: { required },
    salaryPretension: { required },
    workType: { required },
    offerType: { required },
    level: { required }
  }
};
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
