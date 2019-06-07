<template>
    <form class="formExperience">
        <div class="experience">
          <b-row>
            <b-col md="12">
              <b-form-group label="Github:" label-for="github">
                <b-form-input  type="text" id="github" placeholder="https://github.com/username"></b-form-input>
              </b-form-group>
            </b-col>
          </b-row>
        </div>
        <hr>
        <b-row>
          <b-col md="12 text-right">
              <slot></slot>
          </b-col>
        </b-row>
      </form>
</template>
<script>
import { mapFields } from "../../helpers/helpers.js";
export default {
  computed: {
    url: {
      get(){
        return this.$store.state.curriculum.curriculum.socialProfiles[0].url;
      },
      set(){
        this.$store.commit("UPDATE_CURRICULUM", this.$store.state.curriculum.curriculum)
      }
    }
  }
}
</script>
