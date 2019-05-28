<template>
  <v-hover>
    <v-card
      slot-scope="{ hover }"
      class="my-3 mx-auto"
      max-width="600"
    >
      <v-img
        :src="imageUrl"
        :contain="true"
        :aspect-ratio="16/9"
      >
        <v-expand-transition>
          <div
            v-if="hover"
            class="d-flex transition-fast-in-fast-out v-card--reveal display-3"
            style="height: 100%;"
          >
            <v-container grid-list-md text-xs-center :align-content-center="true">
              <v-layout row wrap  v-bind:align-center=true>
                <v-flex xs6 class="headline">{{productName}}</v-flex>
                <v-flex xs6 class="headline">$ {{prize}}</v-flex>
                <v-flex xs12 class="subheading">{{description}}</v-flex>
              </v-layout>
            </v-container>
          </div>
        </v-expand-transition>
      </v-img>
      <v-card-text
        class="pt-4"
        style="position: relative;"
      >
        <div class="title">{{productName}}</div>
        <div>{{description}}</div>
        <div>Prize: $ {{prize}}</div>
        <v-container grid-list-md text-xs-center :align-content-center="true">
          <v-layout row wrap v-bind:align-center=true>
            <v-flex xs4>
              <v-btn
                v-bind:flat=true
                v-bind:block=true
                v-on:click="removeCounter()"
              >
                <v-icon>remove</v-icon>
              </v-btn>
            </v-flex>
            <v-flex xs4>
              {{counter}}
            </v-flex>
            <v-flex xs4>
              <v-btn
                v-bind:flat=true
                v-bind:block=true
                v-on:click="addCounter()"
              >
                <v-icon>add</v-icon>
              </v-btn>
            </v-flex>
            <v-flex xs1>
              <v-btn
                absolute
                color="blue"
                class="white--text"
                fab
                large
                right
                top
                v-on:click="addToCart()"
              >
                <v-icon v-bind:large=true>shopping_cart</v-icon>
              </v-btn>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card-text>
      <v-divider light></v-divider>
      <v-card-actions class="pa-3">
        Rating: {{rating}}
        <v-spacer></v-spacer>
        <div>
          <v-layout v-bind:align-center=true>
            <v-flex>Rate:</v-flex>
            <v-flex><v-rating v-model="rating"></v-rating></v-flex>
          </v-layout>
        </div>
      </v-card-actions>
    </v-card>
  </v-hover>
</template>

<script>
export default {
  name: 'Product',
  props: [
    'productName',
    'description',
    'prize',
    'imageUrl'
  ],
  data: function(){
    return {
      counter: 0,
      rating: 0
    }
  },
  methods: {
    addCounter: function(){
      this.counter++;
    },
    removeCounter: function(){
      if(this.counter > 0){
        this.counter--;
      }
    },
    addToCart: function () {
      if (this.counter > 0) {
        this.$emit('increment', { product: this, count: this.counter});
      }
    }
  }
}
</script>

<style>
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: .9;
  position: absolute;
  width: 100%;
  background: rgba(11, 11, 11, 0.3)
}

</style>
