<template>
  <div>
    <v-layout row>
      <v-flex xs12 sm10 offset-sm1 my-4>
        <v-card>
          <v-list two-line>
            <template v-for="(item, index) in items">
              <v-subheader
                v-if="item.header"
                :key="item.header"
              >
                {{ item.header }}
              </v-subheader>

              <v-divider
                v-else-if="item.divider"
                :key="index"
                :inset="item.inset"
              ></v-divider>

              <v-list-tile
                v-else
                :key="item.title"
                avatar
                @click=""
              >
                <v-list-tile-avatar>
                  <img :src="item.avatar">
                </v-list-tile-avatar>

                <v-list-tile-content>
                  <v-list-tile-title v-html="item.title"></v-list-tile-title>
                  <v-list-tile-sub-title v-html="item.subtitle"></v-list-tile-sub-title>
                </v-list-tile-content>
              </v-list-tile>
            </template>
          </v-list>
        </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
export default {
  name: 'AboutTheProjectComponent',
  data () {
    return {
      e6: 1,
      items: [
        { header: 'Frameworks & Resources used to build Rubba Duck Vueshop' },
        {
          avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC8GRBjf27VqRCcoUYGnYp-0nKDR56Tphug_VnUTCmDGI-rloF',
          title: 'Vue.js',
          subtitle: "<span class='text--primary'>Progressive JavaScript Framework</span> &mdash; CLI installed with npm & dependencies: EsLint, Babel, SCSS (Node), Vue Router (history mode) & Vuetify."
        },
        { divider: true, inset: true },
        {
          avatar: 'https://media.licdn.com/dms/image/C4E0BAQGiUu9RfWfztw/company-logo_200_200/0?e=2159024400&v=beta&t=z5L3AG89fKXmbLX8Zbv7WyLRkcfKSK5mHXhWbvroxJ4',
          title: 'Vuetify',
          subtitle: "<span class='text--primary'>Vue.js UI Component Library</span> &mdash; All App html elements displayed on the DOM, in this project - are made of Vuetify UI components."
        },
        { header: 'App Description' },
        {
          avatar: 'https://cdn11.bigcommerce.com/s-nf2x4/images/stencil/1280x1280/products/396/2626/donut__10766.1506615153.jpg?c=2&imbypass=on',
          title: 'About the App',
          subtitle: "<span class='text--primary'>Rubba Duck Vueshop</span> &mdash; A small front-end application. The original purpose was to integrate an API build for the backend course project this semester."
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>
