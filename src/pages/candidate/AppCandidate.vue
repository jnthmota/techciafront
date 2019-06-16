<template>
  <div class="candidate">
    <AppHeaderCandidate/>
    <router-view></router-view>
  </div>
</template>
<script>
import AppHeaderCandidate from "@/components/layout/AppHeaderCandidate";
export default {
  components: {
    AppHeaderCandidate
  },
  name: "AppCandidate"
};
</script>
