
<template>
  <b-col md="9">
    <b-card header="Perfis" border-variant="warning">
      <div v-for="social in socials" :key="social">
        <profiles></profiles>
      </div>
      <b-button
        @click.prevent="updateProfile()"
        type="submit"
        size="sm"
        variant="primary"
      >Salvar e continuar</b-button>
    </b-card>
  </b-col>
</template>
<script>
import profiles from "../../forms/Profiles";
const currentDate = new Date();
const formExperience = document.querySelector(".formExperience");
const experience = document.querySelector(".experience");

export default {
  name: "Profiles",
  components: {
    profiles
  },
  data() {
    return {
      socials: this.$store.state.curriculum.curriculum.socialProfiles
    };
  },
  methods: {
    updateProfile() {
      // console.log(this.$store.state.curriculum.curriculum.socialProfiles);

      this.$store.dispatch("updateCurriculum", this.$store.state.curriculum.curriculum);
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