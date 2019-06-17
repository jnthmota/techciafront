<template>
  <div id="teste" class="AppFormVacancy">
    <b-row class="banner-form-vacancy">
      <b-col md="12">
        <h1 class="text-center">A melhor forma de encontrar o candidato certo.</h1>
      </b-col>
    </b-row>

    <b-row class="form-wizard">
      <b-col class="text-center" md="12">
        <form-wizard
          title
          subtitle
          nextButtonText="Avançar"
          backButtonText="Voltar"
          finishButtonText="Salvar"
        >
          <tab-content :before-change="() => validate('formVacancyData')" title="Dados da Vaga">
            <FormVacancyData ref="formVacancyData"></FormVacancyData>
          </tab-content>
          <tab-content :before-change="() => validate('formSkill')" title="Habilidades">
            <FormSkill ref="formSkill"></FormSkill>
          </tab-content>
          <tab-content :before-change="() => validate('formEducation')" title="Escolaridade">
            <FormEducation ref="formEducation"></FormEducation>
          </tab-content>
          <tab-content :before-change="() => validate('formLanguages')" title="Idiomas">
            <FormLanguages ref="formLanguages"></FormLanguages>
          </tab-content>
        </form-wizard>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { FormWizard, TabContent } from "vue-form-wizard";
import FormVacancyData from "@/components/forms/vacancy/VacancyData.vue";
import FormEducation from "@/components/forms/vacancy/Education.vue";
import FormLanguages from "@/components/forms/vacancy/Languages.vue";
import FormSkill from "@/components/forms/vacancy/Skill.vue";
export default {
  name: "AppFormVacancy",
  data() {
    return {
      activeTabIndex: 0
    };
  },
  components: {
    FormWizard,
    TabContent,
    FormVacancyData,
    FormEducation,
    FormLanguages,
    FormSkill
  },
  methods: {
    validate(ref) {
      return this.$refs[ref].submit();
    }
  }
};
</script>

<style>
</style>
