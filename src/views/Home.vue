<template>
  <div>
    <v-layout text-xs-center>
      <v-flex my-4>
        <h1 class="display-2 font-weight-bold mb-3">
          Welcome to Rubba Duck Webshop - 2.0
        </h1>
        <p class="subheading font-weight-regular">
          A small Vue application for my 2nd semester Device Applications Project.
          <br>Download full source code for this project from my repository on GitHub.
          <a href="https://github.com/AnnemetteBP/da-vue" target="_blank">Link to source code on GitHub</a>
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
    increment: function (event, product){
      this.shopCartCounter = this.shopCartCounter + event;
      this.$emit('increment', {
        item: product,
        count: event
      });
    }
  }
}
</script>
