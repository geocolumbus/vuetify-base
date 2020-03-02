<template>
  <v-container>
    <h1>Base Component</h1>
    <base-card
      submit-text="Send"
    >
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima voluptate quis velit distinctio perferendis
      temporibus eaque assumenda maiores explicabo eveniet, vero recusandae inventore enim porro ut praesentium debitis
      quos et!
    </base-card>

    <div class="my-12" />
    <h1>Regular Component</h1>
    <v-card outlined>
      <v-card-title>Title</v-card-title>

      <v-card-text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis deserunt, voluptatibus velit deleniti
        dignissimos sunt repellat qui odio sequi dolores corporis reiciendis, nesciunt modi ex eum optio autem facere
        sit.
      </v-card-text>

      <base-card-actions />
    </v-card>

    <!-- v-sheet -->
  </v-container>
</template>
