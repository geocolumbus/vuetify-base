<template>
  <v-navigation-drawer
    app
    :mini-variant="mini"
    @click="mini != mini"
  >
    <v-list>
      <v-list-item
        :to="{
          name: 'Home'
        }"
        exact
      >
        <v-list-item-icon>
          <v-icon>mdi-vuetify</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>
            Home
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
  export default {
    name: 'WorkshopDrawer',

    data: () => ({
      mini: false,
    }),
  }
</script>
