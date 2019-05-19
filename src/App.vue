<template>
  <v-app v-bind:dark=dark>
    <v-toolbar app>
      <v-avatar
        color="grey lighten-4"
      >
        <img src="https://cdn11.bigcommerce.com/s-nf2x4/images/stencil/1280x1280/products/396/2626/donut__10766.1506615153.jpg?c=2&imbypass=on" alt="avatar">
      </v-avatar>
      <v-toolbar-title class="headline text-uppercase" v-on:click="activeView = 'Home'">
        <span>Rubba Duck</span>
        <span class="font-weight-light"> Vueshop</span>
      </v-toolbar-title>
      <v-btn v-bind:flat=dark class="ml-5" v-on:click="activeView = 'Home'">Home</v-btn>
      <v-btn v-bind:flat=dark class="ml-4" v-on:click="activeView = 'Shop'">Shop</v-btn>
      <v-btn v-bind:flat=dark class="ml-4" v-on:click="activeView = 'About'">About</v-btn>

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
          <ShoppingCart v-bind:shopCartCounter="shopCartCount"></ShoppingCart>
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
                        :items="shoppingCartList"
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
                    $ {{totalCost}}
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

    <v-content>
      <AlertComponent v-bind:alertMessage="alertMessage" v-bind:snackbar="snackbar"></AlertComponent>
      <Home v-if="activeView==='Home'" v-bind:shopCartCounter="shopCartCount" v-on:increment="increment($event)" v-bind:items="items"/>
      <Shop v-if="activeView==='Shop'" v-bind:shopCartCounter="shopCartCount" v-on:increment="increment($event)" v-on:decrement="decrement($event)" v-bind:items="items"/>
      <About v-if="activeView==='About'"/>
      <CheckoutComponent v-if="activeView==='Checkout'"></CheckoutComponent>
    </v-content>

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
            &copy;2019 — <strong>Rubba Duck Vueshop</strong>
          </v-card-text>
        </v-card>
      </v-footer>
    </v-flex>
  </v-layout>
</v-container>
  </v-app>
</template>

<script>
import Home from './views/Home'
import About from './views/About'
import Shop from './views/Shop'
import ShoppingCart from './components/ShoppingCart'
import AlertComponent from './components/AlertComponent'
import CheckoutComponent from './components/CheckoutComponent'

export default {
  name: 'App',
  components: {
    Home,
    About,
    Shop,
    ShoppingCart,
    AlertComponent,
    CheckoutComponent
  },//App State Next
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
    snackbar: false,
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
    darkTheme: function () {
      this.dark = !this.dark;
      if (this.dark) {
        this.alertMessage = 'You have chosen the dark theme.';
      } else {
        this.alertMessage = 'You have chosen the light theme.';
      }
    },
    increment: function(event){
      if (event.count === 'undefined') {
        this.shopCartCount++;
        let found = false;
        for (let i = 0; i < this.shoppingCartList.length; i++) {
          if (this.shoppingCartList[i].name === event.name) {
            this.shoppingCartList[i].count++;
            this.shoppingCartList[i].prize = this.shoppingCartList[i].prize + event.prize;
            found = true;
          }
        }
        if (found === false) {
          this.shoppingCartList.push({
            name: event.name,
            prize: event.prize,
            count: 1
          });
        }
        this.totalCost = this.totalCost + event.prize;
      } else {
        this.shopCartCount = this.shopCartCount + event.count;
        let found = false;
        for (let i = 0; i < this.shoppingCartList.length; i++) {
          if (this.shoppingCartList[i].name === event.item.name) {
            this.shoppingCartList[i].count = this.shoppingCartList[i].count + event.count;
            this.shoppingCartList[i].prize = this.shoppingCartList[i].prize + event.item.prize * event.count;
            found = true;
          }
        }
        if (found === false) {
          this.shoppingCartList.push({
            name: event.item.name,
            prize: event.item.prize * event.count,
            count: event.count
          });
        }
        this.totalCost = this.totalCost + event.item.prize * event.count;
      }
    },
    decrement: function (event) {
      if (this.shopCartCount > 0) {
        this.shopCartCount--;
        for (let i = 0; i < this.shoppingCartList.length; i++) {
          if (this.shoppingCartList[i].name === event.name) {
            this.shoppingCartList[i].count--;
            this.shoppingCartList[i].prize = this.shoppingCartList[i].prize - event.prize;
            this.totalCost = this.totalCost - event.prize / event.count;
            break;
          }
        }
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
  }
}
</script>
<style>
.footer-card{
  width: 100%;
}
</style>
