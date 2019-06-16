<template>
  <div id="teste" class="AppEditProfile">
    <b-row class="banner-edit-profile">
      <b-col md="12">
        <h1 class="text-center">Editar Perfil</h1>
      </b-col>
    </b-row>

    <b-row class="form-wizard">
      <b-col class="text-center" md="12">
        <form-wizard title subtitle nextButtonText="Avançar" backButtonText="Voltar" finishButtonText="Salvar">
          <tab-content :before-change="() => validate('formPersonalData')" title="Dados Pessoais">
            <FormPersonalData ref="formPersonalData"></FormPersonalData>
          </tab-content>
          <tab-content title="Endereço" :before-change="() => validate('formAddress')">
            <FormAddress ref="formAddress"></FormAddress>
          </tab-content>
          <tab-content
            :before-change="() => validate('formProfessionalExperience')"
            title="Experiência Profissional"
          >
            <FormProfessionalExperience ref="formProfessionalExperience"></FormProfessionalExperience>
          </tab-content>
          <tab-content :before-change="() => validate('formEducation')" title="Escolaridade">
            <FormEducation ref="formEducation"></FormEducation>
          </tab-content>
          <tab-content :before-change="() => validate('formPreferences')" title="Preferências">
            <FormPreferences ref="formPreferences"></FormPreferences>
          </tab-content>
          <tab-content :before-change="() => validate('formLanguages')" title="Idiomas">
            <FormLanguages ref="formLanguages"></FormLanguages>
          </tab-content>
          <tab-content :before-change="() => validate('formOthers')" title="Conhecimentos, Certificações e Perfis">
            <FormOthers ref="formOthers"></FormOthers>
          </tab-content>
        </form-wizard>
      </b-col>
    </b-row>
  </div>
</template>
<script>
import { FormWizard, TabContent } from "vue-form-wizard";
import FormPersonalData from "@/components/forms/candidate/PersonalData.vue";
import FormAddress from "@/components/forms/candidate/Address.vue";
import FormProfessionalExperience from "@/components/forms/candidate/ProfessionalExperience.vue";
import FormEducation from "@/components/forms/candidate/Education.vue";
import FormLanguages from "@/components/forms/candidate/Languages.vue";
import FormPreferences from "@/components/forms/candidate/Preferences.vue";
import FormOthers from "@/components/forms/candidate/Others.vue";
import "vue-form-wizard/dist/vue-form-wizard.min.css";
export default {
  name: "AppEditProfile",
  data() {
    return {
      activeTabIndex: 0
    };
  },
  components: {
    FormWizard,
    TabContent,
    FormPersonalData,
    FormAddress,
    FormProfessionalExperience,
    FormEducation,
    FormLanguages,
    FormPreferences,
    FormOthers
  },
  methods: {
    validate(ref) {
      return this.$refs[ref].submit();
    }
  }
};
</script>
