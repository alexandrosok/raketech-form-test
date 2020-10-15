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
        <v-btn @click="CallSetSubmitMessage()" :disabled="isDisabled">
          Save
        </v-btn>
      </v-col>
    </v-row>
    <v-overlay fixed :value="overlay">
      <v-progress-circular
        :size="50"
        color="primary"
        indeterminate
      ></v-progress-circular>
    </v-overlay>
  </v-container>
</template>

<script>
    import './Submit-Message-Input.style.scss';
    import FormHttpService from "../../../Services/Form.service";

    export default {
        name: 'App-Submit-Message-Input',
        data: () => ({
            FormHttpService,
            disabled: true,
            SubmitMessage: '',
            overlay: false,
        }),
        computed: {
            isDisabled() {
                return this.SubmitMessage.length <= 1;
            }
        },
        beforeMount() {
            this.FormHttpService = new FormHttpService(this.$http);
            this.FormHttpService.GetSubmitMessage().then(response => this.SubmitMessage = response.submitMessage);
        },
        methods: {
            CallSetSubmitMessage() {
                this.overlay = true;
                this.FormHttpService.SetSubmitMessage(this.SubmitMessage).then((response) => {
                    console.log(response);
                    this.overlay = false;
                });
            }
        }
    }
</script>
