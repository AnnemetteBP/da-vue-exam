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
  data: () => ({
    shopCartCounter: 0,
    items: [
      {
        src: 'http://static1.squarespace.com/static/59698a7d29687fd47a2a7c52/5a4a93c2c83025f844a75e02/5995a965d482e90a1ff1dae2/1518711348277/500_duckinator.jpg',
        name: 'Quack Duck',
        description: 'A badass rubber duck from the Izznogood Collection',
        prize: 5
      },
      {
        src: 'https://www.badeendwinkel.nl/1650-large_default/rubber-duck-kiss-pink-ot.jpg',
        name: 'Naughty Duck',
        description: 'A romantic rubber duck from the Valentines Collection',
        prize: 20
      },
      {
        src: 'https://images-na.ssl-images-amazon.com/images/I/41mNq6dA7bL._SY355_.jpg',
        name: 'Unicorn Duck',
        description: 'Another rubber creature from the Fairytale Collection',
        prize: 8
      },
      {
        src: 'https://www.amsterdamduckstore.com/wp-content/uploads/2018/01/Yoga-rubber-duck-Amsterdam-Duck-Store.jpg',
        name: 'Zen Duck',
        description: 'A rubber duck from the tranquil Lotus Collection',
        prize: 5
      }
    ]
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
