<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="10">
        <v-text-field
          label="Form Title"
        ></v-text-field>
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
        name: 'App-Title-Input',

        data: () => ({})
    }
</script>
