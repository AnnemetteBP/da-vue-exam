<template>
  <v-tabs
    fixed-tabs
  >
    <v-tab
      v-for="tabName in tabs"
      :key="tabName"
      ripple
      v-on:click="switchTab(tabName)"
    >
      {{tabName}}
    </v-tab>
    <v-tab-item>
      <AboutComponent v-show="active === 'Made with Vue'"></AboutComponent>
    </v-tab-item>
    <v-tab-item>
      <AllActions v-show="active === 'All actions'"></AllActions>
    </v-tab-item>
    <v-tab-item>
      <AboutTheProjectComponent v-show="active === 'About the project'"></AboutTheProjectComponent>
    </v-tab-item>
  </v-tabs>
</template>

<script>
  import AboutComponent from '../components/AboutComponent'
  import AllActions from '../components/AllActions'
  import AboutTheProjectComponent from '../components/AboutTheProjectComponent'
export default {
  name: 'About',
  components: {
    AboutComponent,
    AllActions,
    AboutTheProjectComponent
  },
  data: () => ({
    tabs: [
      'Made with Vue',
      'All actions',
      'About the project'
    ],
    active: 'Made with Vue'
  }),
  methods:{
    switchTab: function (tabName) {
      switch(tabName) {
        case 'All actions' :
          this.active = 'All actions';
          break;
        case 'About the project' :
          this.active = 'About the project';
          break;
        default :
          this.active = 'Made with Vue';
          break;
      }
    }
  }
}
</script>
