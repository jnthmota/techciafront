<template>
  <div class="candidate">
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: "Candidate",
  beforeMount(){
    this.$store.dispatch('getUser');
  }
};
</script>
