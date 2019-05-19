<template>
  <div>
    <v-stepper v-model="e6" vertical>
      <v-stepper-step :complete="e6 > 1" step="1">
        Confirm Personal Information
        <small>Please fill out all the required information to complete check out</small>
      </v-stepper-step>

      <v-stepper-content step="1">
        <v-card color="grey lighten-1" class="mb-5" height="200px">
          <p>Please enter and confirm personal information to continue</p>
        </v-card>
        <v-btn color="primary" @click="e6 = 2">Continue</v-btn>
        <v-btn flat>Cancel</v-btn>
      </v-stepper-content>

      <v-stepper-step :complete="e6 > 2" step="2">Confirm Delivery Specifications</v-stepper-step>

      <v-stepper-content step="2">
        <v-card color="grey lighten-1" class="mb-5" height="200px">
          <p>Please enter valid delivery data, confirm and continue</p>
        </v-card>
        <v-btn color="primary" @click="e6 = 3">Continue</v-btn>
        <v-btn flat>Cancel</v-btn>
      </v-stepper-content>

      <v-stepper-step :complete="e6 > 3" step="3">Terms & Conditions</v-stepper-step>

      <v-stepper-content step="3">
        <v-card color="grey lighten-1" class="mb-5" height="200px">
          <p>Please agree and confirm terms and conditions for trade</p>
        </v-card>
        <v-btn color="primary" @click="e6 = 4">Continue</v-btn>
        <v-btn flat>Cancel</v-btn>
      </v-stepper-content>

      <v-stepper-step step="4">Pay & Confirm Order</v-stepper-step>
      <v-stepper-content step="4">
        <v-card color="grey lighten-1" class="mb-5" height="200px"></v-card>
        <v-btn color="primary" @click="e6 = 1">Continue</v-btn>
        <v-btn flat>Cancel</v-btn>
      </v-stepper-content>
    </v-stepper>
  </div>
</template>

<script>
export default {
  name: "CheckoutComponent",
  data () {
    return {
      e6: 1
    }
  }
}
</script>

<style scoped>

</style>
