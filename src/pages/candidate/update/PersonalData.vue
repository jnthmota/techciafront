<template>
  <div>
    <b-card header="Dados Pessoais" border-variant="warning">
      <personalData>
        
      </personalData>
    </b-card>
  </div>
</template>
<script>
import personalData from '@/components/forms/PersonalData'
export default {
  name: "PersonalData",
  components: {
      personalData
  }
};
</script>
