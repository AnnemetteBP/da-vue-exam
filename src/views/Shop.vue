<template>
    <v-layout>
      <v-flex xs12 sm6 offset-sm3>
          <Product
            v-on:increment="increment($event, item)"
            v-for="(item,i) in items"
            :key="i"
            v-bind:prize="item.prize"
            v-bind:productName="item.name"
            v-bind:description="item.description"
            v-bind:shopCartCounter="shopCartCounter"
            v-bind:imageUrl="item.src"
          >
          </Product>
      </v-flex>
    </v-layout>
</template>

<script>
import Product from '../components/Product'

export default {
  name : "Shop",
  components: {
    Product
  },
  props: [
    'items'
  ],
  data: () => ({
    shopCartCounter: 0
  }),
  methods: {
    increment : function(event, product){
      this.shopCartCounter = this.shopCartCounter + event;
      this.$emit('increment', {
        item: product,
        count: event
      });
    }
  }
}
</script>

<style>

</style>
