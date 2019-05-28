<template>
<div>
  <v-badge left>
    <template v-slot:badge>
      <span v-if="shopCartCounter > 0" >{{count}}</span>
    </template>
    <v-icon v-bind:large=true color="grey lighten-1">shopping_cart</v-icon>
  </v-badge>
</div>
</template>

<script>
export default {
  name: "ShoppingCart",
  props: ['shopCartCounter'],
  computed: {
    count: function(){
      return this.shopCartCounter;
    }
  }
}
</script>

<style scoped>

</style>
