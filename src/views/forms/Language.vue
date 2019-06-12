<template>
  <form>
    <b-row>
      <b-col md="6">
        <b-form-group label="Idioma" label-for="language">
          <b-form-input
            v-model="languages.language"
            type="text"
            id="language"
            placeholder="Ex: Inglês"
          ></b-form-input>
        </b-form-group>
      </b-col>
      <b-col md="6">
        <b-form-group label="Escrita" label-for="writtenLevel">
          <b-form-select
            v-model="languages.writtenLevel"
            id="writtenLevel"
            :plain="true"
            :options="level"
            value="Selecione um nivel"
          ></b-form-select>
        </b-form-group>
      </b-col>
    </b-row>
    <b-row>
      <b-col md="6">
        <b-form-group label="Leitura" label-for="readingLevel">
          <b-form-select
            v-model="languages.readingLevel"
            id="readingLevel"
            :plain="true"
            :options="level"
            value="Selecione um nivel"
          ></b-form-select>
        </b-form-group>
      </b-col>
      <b-col md="6">
        <b-form-group label="Conversação" label-for="conversationLevel">
          <b-form-select
            v-model="languages.conversationLevel"
            id="conversationLevel"
            :plain="true"
            :options="level"
            value="Selecione um idioma"
          ></b-form-select>
        </b-form-group>
      </b-col>
    </b-row>
  </form>
</template>
<script>
export default {
  props: {
    languages: {
      language: "",
      writtenLevel: "",
      readingLevel: "",
      conversationLevel: ""
    }
  },
  data() {
    return {
      level: ["Básico", "Intermediário", "Avançado"]
    };
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
