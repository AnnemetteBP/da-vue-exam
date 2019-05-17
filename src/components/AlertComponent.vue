<template>
  <div>
    <v-alert
      :value="true"
      type="info"
      v-if="alertMessage.length"
      dismissible
    >
    {{alertMessage}}
    </v-alert>
  </div>
</template>

<script>
export default {
  name: "AlertComponent",
  props: [
    'alertMessage'
  ]
}
</script>

<style scoped>

</style>
