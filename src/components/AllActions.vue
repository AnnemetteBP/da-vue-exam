<template>
  <v-timeline>
    <v-timeline-item
      color="blue-grey lighten-2"
      fill-dot
      right
    >
      <v-card>
        <v-card-title class="blue-grey lighten-2">
          <v-icon
            dark
            size="42"
            class="mr-3"
          >
            mdi-magnify
          </v-icon>
          <h2 class="display-1 white--text font-weight-light">Toggle Item Amount</h2>
        </v-card-title>
        <v-container>
          <v-layout>
            <v-flex xs10>
              Choose the amount of item to be added to shopping cart, by clicking the add and subtract icons.
            </v-flex>
            <v-flex xs2>
              <v-icon size="64">mdi-calendar-text</v-icon>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
    </v-timeline-item>

    <v-timeline-item
      color="light-blue lighten-1"
      fill-dot
      left
      small
    >
      <v-card>
        <v-card-title class="light-blue lighten-1 justify-end">
          <h2 class="display-1 mr-3 white--text font-weight-light">Add to Cart</h2>
          <v-icon
            dark
            size="42"
          >mdi-home-outline</v-icon>
        </v-card-title>
        <v-container>
          <v-layout>
            <v-flex xs10>
              After selecting the wanted item amount - click the cart button and add the item/s to shopping cart.
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
    </v-timeline-item>

    <v-timeline-item
      color="indigo lighten-1"
      fill-dot
      right
    >
      <v-card>
        <v-card-title class="indigo lighten-1">
          <v-icon
            class="mr-3"
            dark
            size="42"
          >
            mdi-email-outline
          </v-icon>
          <h2 class="display-1 white--text font-weight-light">Shopping Cart</h2>
        </v-card-title>
        <v-container>
          <v-layout>
            <v-flex xs10>
              Click on the shopping cart badge (with item counter) to open the shopping cart. If any item/s has been added they will appear in the cart with relevant data related to the item/s. The items in the cart can be toggled and removed. To exit the shopping cart - press either continue shopping (to close cart) or proceed to check out. Proceed to check out will redirect you to order confirmation (Not finished).
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
    </v-timeline-item>

    <v-timeline-item
      color="blue lighten-1"
      fill-dot
      left
      small
    >
      <v-card>
        <v-card-title class="blue lighten-1 justify-end">
          <h2 class="display-1 mr-3 white--text font-weight-light">Change Theme</h2>
          <v-icon
            dark
            size="42"
          >
            mdi-account-multiple-outline
          </v-icon>
        </v-card-title>
        <v-container>
          <v-layout>
            <v-flex xs2>
              <v-icon size="64">mdi-server-network</v-icon>
            </v-flex>
            <v-flex xs10>
              Click the change theme button in the top toolbar to switch betweem a Light - and a Dark theme. A tooltip will appear, whenever the button is hovered and when button has been pressed an Alert Snackbar will appear in the top of the site.
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
    </v-timeline-item>

    <v-timeline-item
      color="blue-grey lighten-1"
      fill-dot
      right
    >
      <v-card>
        <v-card-title class="blue-grey lighten-1">
          <v-icon
            class="mr-3"
            dark
            size="42"
          >
            mdi-phone-in-talk
          </v-icon>
          <h2 class="display-1 white--text font-weight-light">SPA Routing</h2>
        </v-card-title>
        <v-container>
          <v-layout>
            <v-flex>
              To create this Vue SPA, Vue Router has been installed as a dependency. Routes and views has been defined in router.js.
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
    </v-timeline-item>
  </v-timeline>
</template>

<script>
export default {
  name: 'AllActions',
  data: () => ({
    events: [],
    input: null,
    nonce: 0
  }),
}
</script>

<style scoped>

</style>
