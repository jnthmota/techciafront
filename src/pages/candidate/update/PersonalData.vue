<template>
  <div>
    <b-card header="Dados Pessoais" border-variant="warning">
      <personaldata>
        <b-button
          @click.prevent="updateUser()"
          type="submit"
          size="sm"
          variant="primary"
        >Salvar e continuar</b-button>
      </personaldata>
    </b-card>
  </div>
</template>
<script>
import personaldata from '@/components/forms/PersonalData'
export default {
  name: "PersonalData",
  component: {
      personaldata
  }
};
</script>
