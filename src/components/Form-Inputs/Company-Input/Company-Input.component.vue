<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="10">
        <v-textarea label="Company Details"/>
      </v-col>
      <v-col cols="2">
        <v-btn>
          Save
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
    export default {
        name: 'App-Company-Input',

        data: () => ({})
    }
</script>
