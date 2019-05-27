
<template>
  <b-col md="12">
    <b-card header="Vaga" border-variant="warning">
      <form class="formExperience">
        <div class="experience">
          <b-row>
            <b-col md="4">
              <b-form-group>
                <label for="office">Cargo</label>
                <b-form-input type="text" id="office" placeholder="Ex: Desenvolvedor de backend"></b-form-input>
              </b-form-group>
            </b-col>
            <b-col md="4">
              <b-form-group label="Tipo de Oferta:" label-for="offer">
                <b-form-checkbox-group id="basicInlineCustomCheckboxes">
                  <div class="custom-control custom-checkbox custom-control-inline">
                    <input type="checkbox" class="custom-control-input" id="clt" value="1">
                    <label class="custom-control-label" for="clt">CLT</label>
                  </div>
                  <div class="custom-control custom-checkbox custom-control-inline">
                    <input type="checkbox" class="custom-control-input" id="pj" value="2" checked>
                    <label class="custom-control-label" for="pj">PJ</label>
                  </div>
                  <div class="custom-control custom-checkbox custom-control-inline">
                    <input type="checkbox" class="custom-control-input" id="internship" value="3">
                    <label class="custom-control-label" for="internship">Estágio</label>
                  </div>
                </b-form-checkbox-group>
              </b-form-group>
            </b-col>
            <b-col md="4">
              <b-form-group label="Tipo de Trabalho:" label-for="offer">
                <b-form-checkbox-group id="basicInlineCustomCheckboxes">
                  <div class="custom-control custom-checkbox custom-control-inline">
                    <input
                      checked
                      type="checkbox"
                      class="custom-control-input"
                      id="remote"
                      value="1"
                    >
                    <label class="custom-control-label" for="remote">Remoto</label>
                  </div>
                  <div class="custom-control custom-checkbox custom-control-inline">
                    <input type="checkbox" class="custom-control-input" id="presential" value="3">
                    <label class="custom-control-label" for="presential">Remoto ou Presencial</label>
                  </div>
                </b-form-checkbox-group>
              </b-form-group>
            </b-col>
          </b-row>
          <b-row>
            <b-col md="4">
              <b>Escolaridade</b>
            </b-col>
          </b-row>
          <b-row>
            <b-col md="4">
              <b-form-group label="Nível" label-for="level">
                <b-form-select id="endDate" :plain="true" :options="level" value="Selecione um ano"></b-form-select>
              </b-form-group>
            </b-col>
            <b-col md="4">
              <b-form-group label="Curso" label-for="course">
                <b-form-input type="text" id="course" placeholder="Ex: Ciência da Computação"></b-form-input>
              </b-form-group>
            </b-col>
          </b-row>
          <b-row>
            <b-col md="12">
              <b-form-group label="Descrição da Vaga" label-for="description">
                <b-form-input
                  id="description"
                  :textarea="true"
                  :rows="9"
                  placeholder="Breve descrição sobre o seu trabalho"
                ></b-form-input>
              </b-form-group>
            </b-col>
          </b-row>
        </div>
      </form>

      <hr>

      <b-row>
        <b-col md="12 text-right">
          <b-button type="submit" size="sm" variant="primary">Salvar</b-button>
        </b-col>
      </b-row>
    </b-card>
  </b-col>
</template>
<script>
const formExperience = document.querySelector(".formExperience");
const experience = document.querySelector(".experience");
const level = [
  "Cursando",
  "Doutorado",
  "Ensino Fundamental",
  "Ensino Médio",
  "Ensino Técnico",
  "Especialização",
  "Extensão",
  "Intercâmbio",
  "Licenciatura",
  "Mestrado",
  "Outro",
  "Pós-Graduação",
  "Tecnólogo",
  "Treinamento",
  "Técnico"
];

export default {
  name: "VacancyForm",
  data() {
    return {
      level: level,
      formExperience: formExperience,
      experience: experience
    };
  },
  methods: {
    addExperience: function() {
      forms.push("teste");
    }
  }
};
</script>

<style>
input,
select {
  border-radius: 0px !important;
  width: 100% !important;
  height: 50px !important;
}

select {
  height: 40px !important;
}

hr {
  margin: 50px 0 !important;
}

.experience {
  border-left: 5px solid #f1f2f4 !important;
  padding: 20px;
  margin-bottom: 20px;
}

label {
  font-weight: 600;
}
</style>