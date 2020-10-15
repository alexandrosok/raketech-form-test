<template>
  <v-overlay absolute :value="overlay">
    <v-progress-circular
      :size="50"
      color="primary"
      indeterminate
    ></v-progress-circular>
  </v-overlay>
</template>

<script>
    export default {
        name: 'AppOverlay',
        props: {
            overlay: false,
        },
        data: () => ({})
    }
</script>
