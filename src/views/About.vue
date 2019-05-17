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
      <BlogComponent v-show="active === 'Blog'"></BlogComponent>
    </v-tab-item>
    <v-tab-item>
      <AboutTheProjectComponent v-show="active === 'About the project'"></AboutTheProjectComponent>
    </v-tab-item>
  </v-tabs>
</template>

<script>
  import AboutComponent from '../components/AboutComponent'
  import BlogComponent from '../components/BlogComponent'
  import AboutTheProjectComponent from '../components/AboutTheProjectComponent'
export default {
  name: 'About',
  components: {
    AboutComponent,
    BlogComponent,
    AboutTheProjectComponent
  },
  data: () => ({
    tabs: [
      'Made with Vue',
      'Blog',
      'About the project'
    ],
    active: 'Made with Vue'
  }),
  methods:{
    switchTab: function (tabName) {
      switch(tabName) {
        case 'Blog' :
          this.active = 'Blog';
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
