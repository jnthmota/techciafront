<template>
  <div>
    <b-card header="Perfis e Certificações" border-variant="warning">
      <form>
        <b-row>
          <b-col md="6">
            <b-form-group label="Carreira de interesse:" label-for="github">
              <multiselect
                selectLabel="Clique para selecionar"
                deselectLabel="Clique para retirar"
                v-model="interestCareer"
                :options="carrer"
              ></multiselect>
              <div v-if="submitted && $v.interestCareer.$error" class="invalid-feedback">
                <span v-if="!$v.interestCareer.required">*Campo obrigatório</span>
              </div>
            </b-form-group>
          </b-col>
          <b-col md="6">
            <b-form-group label="Nivel:" label-for="level">
              <multiselect
                selectLabel="Clique para selecionar"
                deselectLabel="Clique para retirar"
                v-model="level"
                id="level"
                :plain="true"
                :options="levelArr"
                value="Selecione uma nível"
              ></multiselect>
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
                selectLabel="Clique para selecionar"
                deselectLabel="Clique para retirar"
                :multiple="true"
                v-model="offerType"
                id="offer"
                :plain="true"
                :options="offer"
                value="Selecione uma oferta"
              ></multiselect>
              <div v-if="submitted && $v.offerType.$error" class="invalid-feedback">
                <span v-if="!$v.offerType.required">*Campo obrigatório</span>
              </div>
            </b-form-group>
          </b-col>

          <b-col md="6">
            <b-form-group label="Tipo de Trabalho:" label-for="workType">
              <multiselect
                v-model="workType"
                selectLabel="Clique para selecionar"
                deselectLabel="Clique para retirar"
                :multiple="true"
                id="workType"
                :plain="true"
                :options="work"
                value="Selecione um tipo de trabalho"
              ></multiselect>
              <div v-if="submitted && $v.workType.$error" class="invalid-feedback">
                <span v-if="!$v.workType.required">*Campo obrigatório</span>
              </div>
            </b-form-group>
          </b-col>
        </b-row>
        <br>
        <!-- <b-row>
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
        </b-row>-->
        <b-row>
          <b-col md="6">
            <b-form-group label="Pretenção Salarial:" label-for="salary">
              <b-form-input
                v-model="salaryPretension"
                type="text"
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
        <b-form-group class="text-right">
          <b-button
            @click.prevent="updatePreferences()"
            type="submit"
            size="sm"
            variant="primary"
          >Salvar e continuar</b-button>
        </b-form-group>
      </form>
    </b-card>
  </div>
</template>
<script>
import { required, email } from "vuelidate/lib/validators";
import MaskedInput from "vue-text-mask";
import { mapFields } from "@/configs/helpers";
import { notification } from "@/stores/notification";
import Multiselect from "vue-multiselect";
export default {
  computed: {
    ...mapFields({
      fields: [
        "interestCareer",
        "salaryPretension",
        "workType",
        "offerType",
        "level"
      ],
      base: "curriculum",
      mutation: "setCurriculum"
    })
  },
  data() {
    return {
      carrer: [
        "Desenvolvimento BackEnd",
        "Desenvolvimento FrontEnd",
        "Analista de Sistema",
        "Coodenador de projetos",
        "Segurança da informação",
        "HelpDesk"
      ],
      offer: ["CLT", "PJ"],
      work: ["Presencial", "Remoto"],
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
      submitted: false
    };
  },
  components: {
    Multiselect
  },
  methods: {
    async updatePreferences() {
      this.submitted = true;

      // stop here if form is invalid
      this.$v.$touch();
      if (this.$v.$invalid) {
        notification.error(
          "Atualizar dados",
          "Preencha os Campos corretamente"
        );
        return;
      } else {
/*         this.$store.commit("setCurriculum", {
          citiesForWork: [
            {
              city: this.$store.getters.address.city,
              state: this.$store.getters.address.state
            }
          ]
        }); */
        let response = await this.$store.dispatch(
          "updateCurriculum",
          this.$store.getters.curriculum
        );
        if (response) {
          await notification.success("Dados Atualizado");
          await this.$router.push("/candidate/candidate-update/skills");
        }
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
