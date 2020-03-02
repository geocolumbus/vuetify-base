<template>
  <v-card
    :outlined="outlined"
    v-bind="$attrs"
    v-on="{
      ...$listeners,
      click: onClick
    }"
  >
    <slot />
    <!-- <base-card-title></base-card-title> -->

    <!-- <v-card-text>
      <slot />
    </v-card-text> -->

    <base-card-actions
      :cancelText="cancelText"
      :submitText="submitText"
    />
  </v-card>
</template>

<script>
  export default {
    name: 'Card',

    props: {
      cancelText: {
        type: String,
        default: 'Cancel',
      },
      submitText: {
        type: String,
        default: 'Submit',
      },
      outlined: {
        type: Boolean,
        default: true,
      },
    },

    data: () => ({
      text: 'Lorem ipsum',
    }),

    methods: {
      onClick () {
        //
      },
    },
  }
</script>
