<template>
  <v-card-actions>
    <base-btn color="grey">
      <span v-text="cancelText" />
    </base-btn>

    <!-- <v-spacer />  -->

    <base-btn>Submit</base-btn>
  </v-card-actions>
</template>

<script>
  export default {
    name: 'CardActions',

    props: {
      cancelText: {
        type: String,
        default: 'Cancel',
      },
    },
  }
</script>
