<template>
  <div class="overlay-component" :value="overlay">
    <v-progress-circular
      :size="50"
      color="primary"
      indeterminate
    ></v-progress-circular>
  </div>
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
<style>
  .overlay-component {
  }
</style>
