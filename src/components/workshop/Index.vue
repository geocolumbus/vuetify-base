<template>
  <v-app>
    <workshop-app-bar />

    <workshop-drawer />

    <workshop-view />
  </v-app>
</template>

<script>
  export default {
    name: 'WorkshopLayout',

    components: {
      WorkshopAppBar: () => import('./AppBar'),
      WorkshopDrawer: () => import('./Drawer'),
      WorkshopView: () => import('./View'),
    },
  }
</script>
