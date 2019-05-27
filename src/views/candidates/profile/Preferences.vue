
<template>
  <b-col md="9">
    <b-card header="Preferências" border-variant="warning">
      <form class="formExperience">
        <div class="experience">
          <b-row>
            <b-col md="12">
              <b-form-group label="Carreira de interesse:" label-for="github">
                <b-form-input type="text" id="github" placeholder="Ex: Desenvolvedor Back-End"></b-form-input>
              </b-form-group>
            </b-col>
          </b-row>
          <b-row>
            <b-col md="6">
              <b-form-group label="Pretenção Salarial:" label-for="salary">
                <b-form-input type="text" id="salary" placeholder="R$ 2.000"></b-form-input>
              </b-form-group>
            </b-col>
            <b-col md="6">
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
                <b-form-input type="text" id="city" placeholder="Ex: São Paulo"></b-form-input>
              </b-form-group>
            </b-col>
            <b-col md="6">
              <b-form-group label="Estado:" label-for="state">
                <b-form-input type="text" id="state" placeholder="Ex: São Paulo"></b-form-input>
              </b-form-group>
            </b-col>
          </b-row>
        </div>
        <hr>
        <b-row>
          <b-col md="12 text-right">
            <b-button type="submit" size="sm" variant="primary">Salvar e continuar</b-button>
          </b-col>
        </b-row>
      </form>
    </b-card>
  </b-col>
</template>
<script>
const currentDate = new Date();
const formExperience = document.querySelector(".formExperience");
const experience = document.querySelector(".experience");

export default {
  name: "Preferences"
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

button {
  height: 40px !important;
  border-radius: 0px !important;
  background-color: #526173 !important;
  font-size: 14px !important;
}
</style>