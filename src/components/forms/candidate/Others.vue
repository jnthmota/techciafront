<template>
  <div class="FormOthers">
    <form>
      <div class="profiles">
        <b-row>
          <b-col md="12" class="text-left">
            <h4>Perfils:</h4>
          </b-col>
        </b-row>
        <div v-for="(profile, index) in socialProfiles" v-bind:key="index" class="profile">
          <b-row>
            <b-col md="4">
              <b-form-group>
                <label for="name">Nome do site</label>
                <b-form-select
                  :class="{ 'is-invalid': submitted && $v.socialProfiles.$each[index].name.$error }"
                  v-model="socialProfiles[index].name"
                  id="name"
                  :plain="true"
                  :options="site"
                  value="Selecione um site"
                ></b-form-select>
                <div
                  v-if="submitted && $v.socialProfiles.$each[index].name.$error"
                  class="invalid-feedback"
                >
                  <span v-if="!$v.socialProfiles.$each[index].name.$required">*Campo obrigatório</span>
                </div>
              </b-form-group>
            </b-col>
            <b-col md="7">
              <b-form-group>
                <label for="profile">URL</label>
                <b-form-input
                  :class="{ 'is-invalid': submitted && $v.socialProfiles.$each[index].url.$error }"
                  v-model="socialProfiles[index].url"
                  type="text"
                  id="profile"
                  placeholder="Ex: https://github.com/matheusmbs"
                ></b-form-input>
                <div
                  v-if="submitted && $v.socialProfiles.$each[index].url.$error"
                  class="invalid-feedback"
                >
                  <span v-if="!$v.socialProfiles.$each[index].url.$required">*Campo obrigatório</span>
                </div>
              </b-form-group>
            </b-col>
            <b-col md="1" class="text-left">
              <i @click="deleteProfile(index)" class="cui-trash icons font-2xl d-block mt-4"></i>
            </b-col>
          </b-row>
        </div>
        <b-row>
          <b-col md="12">
            <span @click.prevent="addProfile()" class="addExperience">
              <i class="fa fa-plus" aria-hidden="true"></i> Adicionar Perfil
            </span>
          </b-col>
        </b-row>
      </div>

      <b-row class="certificate-skills">
        <b-col md="6" class="col-certificate-skills">
          <!-- Certificações -->
          <div class="certificates">
            <b-row>
              <b-col md="6" class="text-left">
                <h4>Certificações:</h4>
              </b-col>
            </b-row>
            <div
              v-for="(certificate, index) in certificates"
              v-bind:key="index"
              class="certificate"
            >
              <b-row>
                <b-col md="10">
                  <b-form-group>
                    <label for="name">Nome da Certificação</label>
                    <b-form-input
                      :class="{ 'is-invalid': submitted && $v.certificates.$each[index].$error }"
                      v-model="certificates[index]"
                      type="text"
                      id="certificate"
                      placeholder="Ex: Java"
                    ></b-form-input>
                    <div v-if="submitted && $v.certificates.$each[index].$error" class="invalid-feedback">
                      <span v-if="!$v.certificates.$each[index].$required">*Campo obrigatório</span>
                    </div>
                  </b-form-group>
                </b-col>
                <b-col md="2" class="text-left">
                  <i
                    @click="deleteCertificate(index)"
                    class="cui-trash icons font-2xl d-block mt-4"
                  ></i>
                </b-col>
              </b-row>
            </div>
            <b-row>
              <b-col md="12">
                <span @click.prevent="addCertificate()" class="addExperience">
                  <i class="fa fa-plus" aria-hidden="true"></i> Adicionar Certificação
                </span>
              </b-col>
            </b-row>
          </div>
        </b-col>
        <b-col md="6" class="col-certificate-skills">
          <!-- Certificações -->
          <div class="certificates">
            <b-row>
              <b-col md="6" class="text-left">
                <h4>Conhecimentos:</h4>
              </b-col>
            </b-row>
            <div v-for="(skill, index) in skills" v-bind:key="index" class="certificate">
              <b-row>
                <b-col md="10">
                  <b-form-group>
                    <label for="name">Nome do conhecimento</label>
                    <b-form-input
                      :class="{ 'is-invalid': submitted && $v.skills.$each[index].$error }"
                      v-model="skills[index]"
                      type="text"
                      id="skill"
                      placeholder="Ex: Spring-boot"
                    ></b-form-input>
                    <div v-if="submitted && $v.skills.$each[index].$error" class="invalid-feedback">
                      <span v-if="!$v.skills.$each[index].$required">*Campo obrigatório</span>
                    </div>
                  </b-form-group>
                </b-col>
                <b-col md="2" class="text-left">
                  <i @click="deleteSkill(index)" class="cui-trash icons font-2xl d-block mt-4"></i>
                </b-col>
              </b-row>
            </div>
            <b-row>
              <b-col md="12">
                <span @click.prevent="addSkill()" class="addExperience">
                  <i class="fa fa-plus" aria-hidden="true"></i> Adicionar Habilidade
                </span>
              </b-col>
            </b-row>
          </div>
        </b-col>
      </b-row>
    </form>
  </div>
</template>
<script>
import Datepicker from "vuejs-datepicker";
import { ptBR } from "vuejs-datepicker/dist/locale";
import { required } from "vuelidate/lib/validators";
import MaskedInput from "vue-text-mask";
import { notification } from "@/configs/notification";
export default {
  name: "Schooling",
  data() {
    return {
      submitted: false,
      site: ["Github", "Linkedin", "Facebook"],

      socialProfiles: [
        {
          name: "Github",
          url: "https://github.com/matheusmbs"
        },
        {
          name: "Facebook",
          url: "https://www.facebook.com/matheus.moura.1029"
        },
        {
          name: "Linkedin",
          url:
            "https://www.linkedin.com/in/matheus-moura-borges-silva-791118163/"
        }
      ],
      certificates: ["Java", "SQL"],
      skills: ["Spring-Bot", "Express", "Laravel"],
      ptBR: ptBR
    };
  },
  components: {
    Datepicker
  },
  methods: {
    addProfile: function() {
      this.socialProfiles.push({
        name: "",
        url: ""
      });
    },
    deleteProfile(index) {
      this.socialProfiles.splice(index, 1);
    },
    addCertificate: function() {
      this.certificates.push("");
    },
    deleteCertificate(index) {
      this.certificates.splice(index, 1);
    },
    addSkill: function() {
      this.skills.push("");
    },
    deleteSkill(index) {
      this.skills.splice(index, 1);
    },
    submit() {
      this.submitted = true;
      this.$v.$touch();

      if (this.$v.$invalid) {
        notification.error(
          "Atualizar Dados",
          "Preencha os campos corretamente"
        );
        return false;
      } else {
        // Ação Final aqui
        return true;
      }
    }
  },
  validations: {
    socialProfiles: {
      $each: {
        name: { required },
        url: { required }
      }
    },
    certificates: {
      $each: {
        required
      }
    },
    skills: {
      $each: {
        required
      }
    }
  }
};
</script>
