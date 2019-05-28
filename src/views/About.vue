<template>
  <div class="text-xs-center pt-3">
      <router-link
        v-bind:to="{name:tab.routeName}"
        v-for="tab in tabs"
        :key="tab.route"
        class="v-btn"
      >
        {{tab.name}}
      </router-link>
      <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'About',
  data: () => ({
    tabs: [
      {
        name: 'Made with Vue',
        route: '/',
        routeName: 'about'
      },
      {
        name: 'All actions',
        route: '/all-actions',
        routeName:'actions'
      },
      {
        name: 'About the project',
        route: '/about-the-project',
        routeName: 'project'
      }
    ]
  })
}
</script>
