<template>
  <form>
    <b-row>
      <b-col md="6">
        <b-form-group label="Linguagem" label-for="programmingLanguages">
          <b-form-input
            v-model="programmingLanguages.name"
            type="text"
            id="programmingLanguages"
            placeholder="Ex: Java"
          ></b-form-input>
        </b-form-group>
      </b-col>
      <b-col md="5">
        <b-form-group label="Tempo de Experiência (Anos)" label-for="yearExperience">
          <b-form-input
            v-model="programmingLanguages.yearExperience"
            type="text"
            id="yearExperience"
            placeholder="Ex: 3"
          ></b-form-input>
        </b-form-group>
      </b-col>
      <b-col md="1">
          
      </b-col>
    </b-row>
  </form>
</template>
<script>
export default {
  props: {
    programmingLanguages: {
      name: "",
      yearExperience: 0
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

button {
  height: 40px !important;
  border-radius: 0px !important;
  background-color: #526173 !important;
  font-size: 14px !important;
}
</style>
