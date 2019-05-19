<template>
  <v-layout row>
    <v-flex xs12 sm6 offset-sm3 my-4>
      <v-card>
        <v-img
          src="https://miro.medium.com/fit/c/1838/551/1*dA0K8ZQ4yQn1Ld4JQBG4ug.png"
          height="300px"
        >
        </v-img>

        <v-card-title primary-title>
          <div>
            <div class="headline">SPA APP - Made with Vue.js & Vuetify</div>
            <span class="grey--text">A small front-end application - DA course</span>
          </div>
        </v-card-title>

        <v-card-actions>
          <v-btn flat><a href="https://vuejs.org/" target="_blank">Learn more about Vue.js</a></v-btn>
          <v-btn flat><a href="https://vuetifyjs.com/en/" target="_blank">Learn more about Vuetify</a></v-btn>
          <v-spacer></v-spacer>
          <v-btn icon @click="show = !show">
            <v-icon>{{ show ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
          </v-btn>
        </v-card-actions>

        <v-slide-y-transition>
          <v-card-text v-show="show">
            This small frontend application has been made with Vue js and Vuetify. The application is a SPA for a rubber duck webshop. For this app, I have used the Vuetify UI component library to quickly integrate pre-styled components.  <a href="https://github.com/AnnemetteBP/da-vue" target="_blank">Link to source code on GitHub</a>
          </v-card-text>
        </v-slide-y-transition>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: 'AboutComponent',
  data: () => ({
    show: false
  })
}
</script>

<style scoped>

</style>
