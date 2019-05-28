<template>
  <v-app v-bind:dark=dark>
    <v-toolbar app>
      <v-avatar
        color="grey lighten-4"
      >
        <img src="https://cdn11.bigcommerce.com/s-nf2x4/images/stencil/1280x1280/products/396/2626/donut__10766.1506615153.jpg?c=2&imbypass=on" alt="avatar">
      </v-avatar>
      <v-toolbar-title class="headline text-uppercase">
        <router-link to="/" class="v-btn" style="font-size: larger">
        <span>Rubba Duck </span>
        <span class="font-weight-light" style="color: deeppink"> Vueshop</span>
        </router-link>
      </v-toolbar-title>
      <!--
      <v-btn v-bind:flat=dark class="ml-5" v-on:click="activeView = 'Home'">Home</v-btn>
      <v-btn v-bind:flat=dark class="ml-4" v-on:click="activeView = 'Shop'">Shop</v-btn>
      <v-btn v-bind:flat=dark class="ml-4" v-on:click="activeView = 'About'">About</v-btn>-->
      <router-link to="/" class="v-btn">Home</router-link>
      <router-link to="/shop" class="v-btn">Shop</router-link>
      <router-link v-bind:to="{name:'about'}" class="v-btn">About</router-link>

      <v-tooltip right>
        <template v-slot:activator="{ on }">
          <v-btn v-bind:color="dark === true ? 'secondary' : 'primary'" class="ml-4" v-on:click="darkTheme()" @click="snackbar = true" v-on="on">{{dark === true ? 'LightTheme' : 'DarkTheme'}}</v-btn>
        </template>
        <span>Change theme</span>
      </v-tooltip>

      <v-spacer></v-spacer>
      <v-layout row justify-center>
        <v-btn
          @click.stop="dialog = true"
          v-bind:flat=true
          v-bind:dark=dark
          color="white"
        >
          <v-badge left>
            <template v-slot:badge>
              <span >{{cartCount}}</span>
            </template>
            <v-icon v-bind:large=true color="grey lighten-1">shopping_cart</v-icon>
          </v-badge>
        </v-btn>

        <v-dialog
          v-model="dialog"
          max-width="800"
        >
          <v-card>
            <v-card-title class="headline">Shopping Cart</v-card-title>

            <v-card-text>
              <v-container>
                <v-layout>
                  <v-flex>
                    <template>
                      <v-data-table
                        :headers="headers"
                        :items="increment"
                        v-bind:hide-actions=true
                      >
                        <template v-slot:items="props">
                          <td>{{ props.item.name }}</td>
                          <td>
                    <span>
                      <v-btn
                        v-bind:icon=true
                        v-bind:flat=true
                        v-bind:left=true
                        v-on:click="decrementShoppingCart(props)"
                      >
                        <v-icon dark>remove</v-icon>
                      </v-btn>
                      {{ props.item.count }}
                      <v-btn
                        v-bind:icon=true
                        v-bind:flat=true
                        v-bind:right=true
                        v-on:click="incrementShoppingCart(props)"
                      >
                        <v-icon dark>add</v-icon>
                      </v-btn>
                    </span>
                          </td>
                          <td class="text-xs-right">{{ props.item.prize }}</td>
                          <td class="text-xs-right">
                            <v-btn
                              v-on:click="removeFromCart(props)"
                            >
                              X
                            </v-btn>
                          </td>
                        </template>
                      </v-data-table>
                    </template>
                  </v-flex>
                </v-layout>
                <v-layout row wrap align-center>
                  <v-flex>
                    Total cost
                  </v-flex>
                  <v-flex>
                    $ {{cartTotalCost}}
                  </v-flex>
                </v-layout>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-container>
                <v-layout row wrap align-content-center>
                  <v-flex>
                    <v-spacer></v-spacer>
                  </v-flex>

                  <v-flex xs12>
                    <v-btn
                      flat="flat"
                      @click="dialog = false; activeView='Checkout';"
                      v-bind:block="true"
                      :to="{name: 'check-out'}"
                    >
                      Continue to checkout
                    </v-btn>
                  </v-flex>

                  <v-flex xs12>
                    <v-btn
                      flat="flat"
                      @click="dialog = false"
                      v-bind:block="true"
                    >
                      Continue shopping
                    </v-btn>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-layout>
    </v-toolbar>
    <!--
    <v-content>
      <Home v-if="activeView==='Home'" v-bind:shopCartCounter="shopCartCount" v-on:increment="increment($event)" v-bind:items="items"/>
      <Shop v-if="activeView==='Shop'" v-bind:shopCartCounter="shopCartCount" v-on:increment="increment($event)" v-on:decrement="decrement($event)" v-bind:items="items"/>
      <About v-if="activeView==='About'"/>
      <CheckoutComponent v-if="activeView==='Checkout'"></CheckoutComponent>
    </v-content>-->
    <AlertComponent v-bind:alertMessage="alertMessage" v-bind:snackbar="snackbar"></AlertComponent>
    <div class="mt-5 pt-2">
      <router-view v-on:increment="increment = $event"></router-view>
    </div>
    <v-container
      text-xs-center
      fluid
    >
      <v-layout row>
        <v-flex xs12>
          <v-footer height="auto" width="auto">
            <v-card
              class="text-xs-center ma-0 footer-card"
              flat
            >
              <v-card-text>
                <v-btn
                  v-for="icon in icons"
                  :key="icon"
                >
                  <v-icon size="24px">{{ icon }}</v-icon>
                </v-btn>
              </v-card-text>

              <v-card-text class="pt-0">
                A completely fake Webshop.
              </v-card-text>

              <v-divider></v-divider>

              <v-card-text>
                &copy;2019 — <router-link to="/" class="v-btn"><span>Rubba Duck Vueshop</span></router-link>
              </v-card-text>
            </v-card>
          </v-footer>
        </v-flex>
      </v-layout>
    </v-container>
  </v-app>
</template>

<script>
import AlertComponent from './components/AlertComponent'

export default {
  name: 'App',
  components: {
    AlertComponent
  }, // App State Next
  data: () => ({
    icons: [
      'home',
      'present_to_all'
    ],
    activeView: 'Home',
    alertMessage: '',
    shopCartCount: 0,
    shoppingCartList: [],
    headers: [
      { text: 'Items', sortable: false },
      { text: 'Amount', sortable: false },
      { text: 'Cost', sortable: false },
      { text: 'Remove', sortable: false },
    ],
    totalCost: 0,
    dark: true,
    dialog: false,
    snackbar: false
  }),
  methods: {
    darkTheme: function () {
      this.dark = !this.dark;
      if (this.dark) {
        this.alertMessage = 'You have chosen the dark theme.';
      } else {
        this.alertMessage = 'You have chosen the light theme.';
      }
    },
    decrementShoppingCart: function (event) {
      if (this.shopCartCount > 0) {
        this.shopCartCount--;
        for (let i = 0; i < this.shoppingCartList.length; i++) {
          if (this.shoppingCartList[i].name === event.item.name) {
            let subtraction = this.shoppingCartList[i].prize / this.shoppingCartList[i].count;
            this.shoppingCartList[i].prize = this.shoppingCartList[i].prize - subtraction;
            this.totalCost = this.totalCost - subtraction;
            this.shoppingCartList[i].count--;
            if (this.shoppingCartList[i].count === 0) {
              this.removeFromCart(event);
            }
            break;
          }
        }
      }
    },
    incrementShoppingCart: function (event) {
      this.shopCartCount++;
      for (let i = 0; i < this.shoppingCartList.length; i++) {
        if (this.shoppingCartList[i].name === event.item.name) {
          let addition = this.shoppingCartList[i].prize / this.shoppingCartList[i].count;
          this.shoppingCartList[i].prize = this.shoppingCartList[i].prize + addition;
          this.totalCost = this.totalCost + addition;
          this.shoppingCartList[i].count++;
          break;
        }
      }
    },
    removeFromCart: function (event) {
      for (let i = 0; i < this.shoppingCartList.length; i++) {
        if (this.shoppingCartList[i].name === event.item.name) {
          if (this.shoppingCartList[i].count > 0) {
            this.totalCost = this.totalCost - this.shoppingCartList[i].prize;
            this.shopCartCount = this.shopCartCount - this.shoppingCartList[i].count;
          }
          this.shoppingCartList.splice(i,1);  //Removing the item from the shopping cart list
          break;
        }
      }
    }
  },
  computed: {
    increment: {
      get: function(){
        return this.shoppingCartList;
      },
      set: function(event){
        if (event.count === 'undefined') {
          this.shopCartCount++;
          let found = false;
          for (let i = 0; i < this.shoppingCartList.length; i++) {
            if (this.shoppingCartList[i].name === event.item.name) {
              this.shoppingCartList[i].count++;
              this.shoppingCartList[i].prize = this.shoppingCartList[i].prize + event.item.prize;
              found = true;
            }
          }
          if (found === false) {
            this.shoppingCartList.push({
              name: event.item.name,
              prize: event.item.prize,
              count: event.count.count
            });
          }
          this.totalCost = this.totalCost + event.item.prize;
        } else {
          this.shopCartCount = this.shopCartCount + event.count.count;
          let found = false;
          for (let i = 0; i < this.shoppingCartList.length; i++) {
            if (this.shoppingCartList[i].name === event.item.name) {
              this.shoppingCartList[i].count = this.shoppingCartList[i].count + event.count.count;
              this.shoppingCartList[i].prize = this.shoppingCartList[i].prize + event.item.prize * event.count.count;
              found = true;
            }
          }
          if (found === false) {
            this.shoppingCartList.push({
              name: event.item.name,
              prize: event.item.prize * event.count.count,
              count: event.count.count
            });
          }
          this.totalCost = this.totalCost + event.item.prize * event.count.count;
        }
      }
    },
    cartTotalCost: function(){
      return this.totalCost;
    },
    cartCount: function(){
      return this.shopCartCount;
    }
  }
}
</script>
<style>
.footer-card{
  bottom: 0;
  width: 100%;
  height: auto;
}
</style>
