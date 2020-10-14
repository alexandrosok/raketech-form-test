<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="10">
        <v-textarea v-model="AboutContent" label="About Us"/>
      </v-col>
      <v-col cols="2">
        <v-btn :disabled="isDisabled">
          Save
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
    import './About-Input.style.scss';

    export default {
        name: 'App-About-Input',

        data: () => ({
            AboutContent: ''
        }),
        computed: {
            isDisabled() {
                return this.AboutContent.length <= 1;
            }
        }
    }
</script>
