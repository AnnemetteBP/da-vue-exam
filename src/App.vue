<template>
  <v-app v-bind:dark=dark>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Rubba Duck</span>
        <span class="font-weight-light">Webshop</span>
      </v-toolbar-title>
      <v-btn v-bind:flat=dark class="ml-5" v-on:click="activeView = 'Home'">Home</v-btn>
      <v-btn v-bind:flat=dark class="ml-4" v-on:click="activeView = 'Shop'">Shop</v-btn>
      <v-btn v-bind:flat=dark class="ml-4" v-on:click="activeView = 'About'">About</v-btn>

      <v-tooltip right>
        <template v-slot:activator="{ on }">
          <v-btn v-bind:color="dark === true ? 'secondary' : 'primary'" class="ml-4" v-on:click="darkTheme()" v-on="on">{{dark === true ? 'LightTheme' : 'DarkTheme'}}</v-btn>
        </template>
        <span>Change theme</span>
      </v-tooltip>

      <v-spacer></v-spacer>
      <v-menu
              v-bind:close-on-content-click=false
      >
        <template v-slot:activator="{ on }">
          <v-btn
            color="white"
            v-bind:dark=dark
            v-on="on"
            v-bind:flat=true
          >
            <ShoppingCart v-bind:shopCartCounter="shopCartCount"></ShoppingCart>
          </v-btn>
        </template>
        <v-list>
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
            <v-list-tile>
              <v-list-tile-title>
                <v-layout row wrap justify-space-between>
                  <v-flex>
                    Total cost
                  </v-flex>
                  <v-flex>
                    $ {{totalCost}}
                  </v-flex>
                </v-layout>
              </v-list-tile-title>
            </v-list-tile>
            <v-list-tile>
              <v-btn v-bind:block=true>Continue to checkout</v-btn>
            </v-list-tile>
            <v-list-tile>
              <v-btn v-bind:block=true>Continue shopping</v-btn>
            </v-list-tile>
          </v-flex>
        </v-list>
      </v-menu>
    </v-toolbar>

    <v-content>
      <AlertComponent v-bind:alertMessage="alertMessage"></AlertComponent>
      <Home v-if="activeView==='Home'" v-bind:shopCartCounter="shopCartCount" v-on:increment="increment($event)" v-bind:items="items"/>
      <Shop v-if="activeView==='Shop'" v-bind:shopCartCounter="shopCartCount" v-on:increment="increment($event)" v-on:decrement="decrement($event)" v-bind:items="items"/>
      <About v-if="activeView==='About'"/>
    </v-content>

    <v-footer height="auto">
      <v-card flat tile class="text-xs-center">
        <v-card-text>
          <v-btn
            v-for="icon in icons"
            :key="icon"
            class="mx-3"
            icon
          >
            <v-icon size="24px">{{ icon }}</v-icon>
          </v-btn>
        </v-card-text>

        <v-card-text class="pt-0">
          Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum. Praesent ut risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim a sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum tempor vel ut orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
        </v-card-text>

        <v-divider></v-divider>

        <v-card-text>
          &copy;2019 — <strong>Annemette from da div block</strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </v-app>
</template>

<script>
import Home from './views/Home'
import About from './views/About'
import Shop from './views/Shop'
import ShoppingCart from './components/ShoppingCart'
import AlertComponent from './components/AlertComponent'

export default {
  name: 'App',
  components: {
    Home,
    About,
    Shop,
    ShoppingCart,
    AlertComponent
  },
  data: () => ({
    icons: [
      'fab fa-facebook',
      'fab fa-twitter',
      'fab fa-google-plus',
      'fab fa-linkedin',
      'fab fa-instagram'
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
    items: [
      {
        src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
        name: 'Product 1',
        description: 'Description lorem ipsum',
        prize: 5
      },
      {
        src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
        name: 'Product 2',
        description: 'Description lorem ipsum',
        prize: 5
      },
      {
        src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
        name: 'Product 3',
        description: 'Description lorem ipsum',
        prize: 5
      },
      {
        src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
        name: 'Product 4',
        description: 'Description lorem ipsum',
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
