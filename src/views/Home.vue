<template>
  <div>
    <v-layout text-xs-center>
      <v-flex my-4>
        <h1 class="display-2 font-weight-bold mb-3">
          Welcome to Rubba Duck Webshop
        </h1>
        <p class="subheading font-weight-regular">
          A Vue project for my 2nd semester Device Applications assignment.
          <br>Download full source code for this project from my repository on GitHub.
          <a href="https://community.vuetifyjs.com" target="_blank">Link to source code on GitHub</a>
        </p>
      </v-flex>
    </v-layout>

    <v-layout l4 s12>
      <v-flex>
        <v-carousel
        height="700"
        :cycle="false"
        >
          <v-carousel-item
            v-for="(item,i) in items"
            :key="i"
          >
            <Product
              v-on:increment="increment($event, item)"
              v-bind:prize="item.prize"
              v-bind:productName="item.name"
              v-bind:description="item.description"
              v-bind:shopCartCounter="shopCartCounter"
              v-bind:imageUrl="item.src"
            >
            </Product>
          </v-carousel-item>
        </v-carousel>
      </v-flex>
    </v-layout>
  </div>
</template>
<script>
import Product from '../components/Product'
export default {
  name: 'Home',
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
