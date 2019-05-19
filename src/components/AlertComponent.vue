<template>
  <div v-if="confirmed === false">
    <v-snackbar
      v-model="snackbar"
      :bottom="y === 'bottom'"
      :left="x === 'left'"
      :multi-line="mode === 'multi-line'"
      :right="x === 'right'"
      :timeout="timeout"
      :top="y === 'top'"
      :vertical="mode === 'vertical'"
    >
      {{ alertMessage }}
      <v-btn
        color="blue"
        flat
        @click="confirmed = true;"
      >
        Do not show again
      </v-btn>
    </v-snackbar>
  </div>
</template>

<script>
export default {
  name: "AlertComponent",
  props: [
    'alertMessage',
    'snackbar'
  ],
  data () {
    return {
      confirmed: false,
      y: 'top',
      x: null,
      mode: '',
      timeout: 6000,
    }
  }
}
</script>

<style scoped>

</style>
