<template>
  <div class="AppHome container">
      <!-- Header -->
    <AppHeaderHome/>
    <router-view></router-view>
  </div>
</template>

<script>
import AppHeaderHome from "@/components/layout/AppHeaderHome";
export default {
  components: {
    AppHeaderHome
  }
};
</script>
