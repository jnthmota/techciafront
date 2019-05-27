
<template>
  <b-col md="9">
    <b-card header="Perfis" border-variant="warning">
      <form class="formExperience">
        <div class="experience">
          <b-row>
            <b-col md="12">
              <b-form-group label="Github:" label-for="github">
                <b-form-input type="text" id="github" placeholder="https://github.com/username"></b-form-input>
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
  name: "Profiles",
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