
<template>
  <b-col md="9">
    <b-card header="Dados Pessoais" border-variant="warning">
      <form class="formExperience">
        <div class="experience">
          <b-form-group>
            <label for="email">Nome Completo</label>
            <b-form-input type="text" id="email" placeholder="Ex: Bill Gates"></b-form-input>
          </b-form-group>
          <b-form-group>
            <label for="email">Email</label>
            <b-form-input type="email" id="email" placeholder="Ex: bill.gates@microsoft.com"></b-form-input>
          </b-form-group>
          <b-form-group>
            <label for="phone">Celular</label>
            <b-form-input type="text" id="phone" placeholder="ex: (11) 94805-3050"></b-form-input>
          </b-form-group>
        </div>

        <hr>
        <b-form-group class="text-right">
          <b-button type="submit" size="sm" variant="primary">Salvar e continuar</b-button>
        </b-form-group>
      </form>
    </b-card>
  </b-col>
</template>
<script>
export default {
  name: "PersonalData"
};
</script>

<style>
input {
  border-radius: 0px !important;
  width: 100% !important;
  height: 50px !important;
}

label {
  font-weight: 600;
}

hr {
  margin: 50px 0 !important;
}

button {
  height: 50px !important;
  border-radius: 0px !important;
  background-color: #526173 !important;
  font-size: 14px !important;
}
</style>