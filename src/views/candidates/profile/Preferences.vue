
<template>
  <b-col md="9">
    <b-card header="Preferências" border-variant="warning">
      <preferences>
        <b-button type="submit" size="sm" variant="primary">Salvar e continuar</b-button>
      </preferences>
    </b-card>
  </b-col>
</template>
<script>
import preferences from "../../forms/Preferences";
const currentDate = new Date();

export default {
  name: "Preferences",
  components: {
    preferences
  },
  data() {
    return {};
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