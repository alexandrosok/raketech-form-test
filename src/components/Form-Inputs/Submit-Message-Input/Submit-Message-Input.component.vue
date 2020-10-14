<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="10">
        <v-text-field
          v-model="SubmitMessage"
          label="Submit Message"
        ></v-text-field>
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
    import './Submit-Message-Input.style.scss';

    export default {
        name: 'App-Submit-Message-Input',
        data: () => ({
            disabled: true,
            SubmitMessage: ''
        }),
        computed: {
            isDisabled() {
                return this.SubmitMessage.length <= 1;
            }
        }
    }
</script>
