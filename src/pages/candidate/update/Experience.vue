<template>
  <div>
    <b-card header="Experiencia" border-variant="warning">
      <form>
        <div v-for="(experience, index) in experiences" v-bind:key="index" class="experience">
          <b-row>
            <b-col md="12" class="text-right">
              <i @click="deleteExperience(index)" class="cui-trash icons font-2xl d-block mt-4"></i>
            </b-col>
          </b-row>
          <b-row>
            <b-col md="6">
              <b-form-group>
                <label for="company">Empresa</label>
                <b-form-input
                  :class="{ 'is-invalid': submitted && $v.experiences.$each[index].company.$error }"
                  v-model="experience.company"
                  type="text"
                  id="company"
                  placeholder="Ex: Microsoft"
                ></b-form-input>
                <div
                  v-if="submitted && $v.experiences.$each[index].company.$error"
                  class="invalid-feedback"
                >
                  <span
                    v-if="!$v.experiences.$each[index].company.$required"
                  >A empresa é obrigatória</span>
                </div>
              </b-form-group>
            </b-col>
            <b-col md="6">
              <b-form-group>
                <label for="office">Cargo</label>
                <b-form-input
                  :class="{ 'is-invalid': submitted && $v.experiences.$each[index].position.$error }"
                  v-model="experience.position"
                  type="text"
                  id="office"
                  placeholder="Ex: Desenvolvedor de backend"
                ></b-form-input>
                <div
                  v-if="submitted && $v.experiences.$each[index].position.$error"
                  class="invalid-feedback"
                >
                  <span v-if="!$v.experiences.$each[index].position.$required">O Cargo é obrigatório</span>
                </div>
              </b-form-group>
            </b-col>
          </b-row>
          <b-row>
            <b-col md="6">
              <b-form-group>
                <label for="state">Estado</label>
                <b-form-input
                  :class="{ 'is-invalid': submitted && $v.experiences.$each[index].state.$error }"
                  v-model="experience.state"
                  type="text"
                  id="state"
                  placeholder="Ex: São Paulo"
                ></b-form-input>
                <div
                  v-if="submitted && $v.experiences.$each[index].state.$error"
                  class="invalid-feedback"
                >
                  <span v-if="!$v.experiences.$each[index].state.$required">O Estado é obrigatório</span>
                </div>
              </b-form-group>
            </b-col>
            <b-col md="6">
              <b-form-group>
                <label for="city">Cidade</label>
                <b-form-input
                  :class="{ 'is-invalid': submitted && $v.experiences.$each[index].city.$error }"
                  v-model="experience.city"
                  type="text"
                  id="São Paulo"
                  placeholder="Ex: São Paulo"
                ></b-form-input>
                <div
                  v-if="submitted && $v.experiences.$each[index].city.$error"
                  class="invalid-feedback"
                >
                  <span v-if="!$v.experiences.$each[index].city.$required">A Cidade é obrigatória</span>
                </div>
              </b-form-group>
            </b-col>
          </b-row>
          <b-row>
            <b-col md="12">
              <b-form-group label="Descrição" label-for="description">
                <b-form-input
                  id="description"
                  :textarea="true"
                  v-model="experience.description"
                  :rows="9"
                  placeholder="Breve descrição sobre o seu trabalho"
                ></b-form-input>
              </b-form-group>
            </b-col>
          </b-row>
          <b-row>
            <b-col md="6">
              <b-form-group label="Data Inicial" label-for="initialDate">
                <datepicker
                  :class="{ 'is-invalid': submitted && $v.experiences.$each[index].initialDate.$error }"
                  id="initialDate"
                  minimum-view="month"
                  :language="ptBR"
                  format="MMMM yyyy"
                  v-model="experience.initialDate"
                ></datepicker>
                <div
                  v-if="submitted && $v.experiences.$each[index].initialDate.$error"
                  class="invalid-feedback"
                >
                  <span
                    v-if="!$v.experiences.$each[index].initialDate.$required"
                  >A Data é obrigatória</span>
                </div>
              </b-form-group>
            </b-col>
            <b-col md="6">
              <b-form-group label="Data Final" label-for="finalDate">
                <datepicker
                  :class="{ 'is-invalid': submitted && $v.experiences.$each[index].finalDate.$error }"
                  id="finalDate"
                  minimum-view="month"
                  :language="ptBR"
                  format="MMMM yyyy"
                  v-model="experience.finalDate"
                ></datepicker>
                <div
                  v-if="submitted && $v.experiences.$each[index].finalDate.$error"
                  class="invalid-feedback"
                >
                  <span v-if="!$v.experiences.$each[index].finalDate.$required">A Data é obrigatória</span>
                </div>
              </b-form-group>
            </b-col>
          </b-row>
        </div>
        <b-row>
          <b-col md="12">
            <b-button
              @click="addExperience()"
              type="button"
              size="sm"
              variant="primary"
            >Adicionar Experiência</b-button>
          </b-col>
        </b-row>
        <b-row>
          <b-col md="12 text-right">
            <b-button
              @click.prevent="updateExperience()"
              type="submit"
              size="sm"
              variant="primary"
            >Salvar e continuar</b-button>
          </b-col>
        </b-row>
      </form>
    </b-card>
  </div>
</template>
<script>
import Datepicker from "vuejs-datepicker";
import { ptBR } from "vuejs-datepicker/dist/locale";
import { required } from "vuelidate/lib/validators";
import MaskedInput from "vue-text-mask";
import { notification } from "@/stores/notification";
export default {
  name: "ProfessionalExperience",
  data() {
    return {
      experiences: [],
      submitted: false,
      ptBR: ptBR
    };
  },
  components: {
    Datepicker
  },
  methods: {
    addExperience: function() {
      this.experiences.push({
        initialDate: "",
        finalDate: "",
        city: "",
        state: "",
        company: "",
        position: "",
        description: ""
      });
    },
    async updateExperience() {
      this.submitted = true;
      this.$v.$touch();
      console.log(this.$v.experiences);
      if (this.$v.$invalid) {
        notification.error(
          "Atualizar Dados",
          "Preencha os campos corretamente"
        );
        return;
      } else {
        await this.experiences.forEach(res => {
          res.initialDate = new Date(res.initialDate).toISOString();
          res.finalDate = new Date(res.finalDate).toISOString();
        });
        await this.$store.commit("setCurriculum", {
          professionalExperience: this.experiences
        });
        await this.$store.dispatch("updateCurriculum", this.$store.getters.curriculum);
        await notification.success("Dados Atualizados");
        await this.$router.push("/candidate/candidate-update/schooling");
      }
    },
    deleteExperience(index) {
      this.experiences.splice(index, 1);
    }
  },
  beforeMount() {
    this.experiences = this.$store.getters.curriculum.professionalExperience;
  },
  validations: {
    experiences: {
      $each: {
        initialDate: { required },
        finalDate: { required },
        city: { required },
        state: { required },
        company: { required },
        position: { required },
        description: { required }
      }
    }
  }
};
</script>
