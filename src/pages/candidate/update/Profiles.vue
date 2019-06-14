<template>
  <div>
    <b-card header="Perfis e Certificações" border-variant="warning">
      <form>
        <div v-for="(profile, index) in profiles" v-bind:key="index" class="profile">
          <b-row>
            <b-col md="12" class="text-right">
              <i @click="deleteProfile(index)" class="cui-trash icons font-2xl d-block mt-4"></i>
            </b-col>
          </b-row>
          <b-row>
            <b-col md="6">
              <b-form-group>
                <label for="name">Nome do site</label>
                <b-form-select
                  :class="{ 'is-invalid': submitted && $v.profiles.$each[index].name.$error }"
                  v-model="profile.name"
                  id="name"
                  :plain="true"
                  :options="site"
                  value="Selecione um site"
                ></b-form-select>
                <div
                  v-if="submitted && $v.profiles.$each[index].name.$error"
                  class="invalid-feedback"
                >
                  <span
                    v-if="!$v.profiles.$each[index].name.$required"
                  >O nome do site é obrigatório</span>
                </div>
              </b-form-group>
            </b-col>
            <b-col md="6">
              <b-form-group>
                <label for="profile">URL</label>
                <b-form-input
                  :class="{ 'is-invalid': submitted && $v.profiles.$each[index].url.$error }"
                  v-model="profile.url"
                  type="text"
                  id="profile"
                  placeholder="Ex: https://github.com/matheusmbs"
                ></b-form-input>
                <div
                  v-if="submitted && $v.profiles.$each[index].url.$error"
                  class="invalid-feedback"
                >
                  <span v-if="!$v.profiles.$each[index].url.$required">O url é obrigatório</span>
                </div>
              </b-form-group>
            </b-col>
          </b-row>
        </div>
        <b-row>
          <b-col md="12">
            <b-button
              @click="addProfile()"
              type="button"
              size="sm"
              variant="primary"
            >Adicionar Perfil</b-button>
          </b-col>
        </b-row>
        <b-row>
          <b-col md="12 text-right">
            <b-button
              @click.prevent="updateProfile()"
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
  name: "Schooling",
  data() {
    return {
      profiles: [],
      submitted: false,
      site: ["github", "linkedin", "facebook"],
      ptBR: ptBR
    };
  },
  components: {
    Datepicker
  },
  methods: {
    addProfile: function() {
      this.profiles.push({
        name: '',
        url: '',
      });
    },
    async updateProfile() {
      this.submitted = true;
      this.$v.$touch();
      console.log(this.$v);
      if (this.$v.$invalid) {
        notification.error(
          "Atualizar Dados",
          "Preencha os campos corretamente"
        );
        return;
      } else {
        await this.$store.commit("setCurriculum", {
          socialProfiles: this.profiles
        });
        await this.$store.dispatch(
          "updateCurriculum",
          this.$store.getters.curriculum
        );
        await notification.success("Dados Atualizados");
        await this.$router.push("/candidate/candidate-update/preferences");
      }
    },
    deleteProfile(index) {
      this.profiles.splice(index, 1);
    }
  },
  beforeMount() {
    this.profiles = this.$store.getters.curriculum.socialProfiles;
  },
  validations: {
    profiles: {
      $each: {
        name: { required },
        url: { required }
      }
    }
  }
};
</script>
