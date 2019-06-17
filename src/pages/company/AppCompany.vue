<template>
  <div class="AppCompany">
    <AppHeaderCompany/>
    <router-view></router-view>
  </div>
</template>
<script>
import AppHeaderCompany from "@/components/layout/AppHeaderCompany";
export default {
  name: "CrazyTicket",
  components: {
    AppHeaderCompany
  }
};
</script>
