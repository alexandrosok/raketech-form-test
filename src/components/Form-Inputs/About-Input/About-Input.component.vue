<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="10">
        <v-textarea v-model="AboutContent" label="About Us"/>
      </v-col>
      <v-col cols="2">
        <v-btn @click="CallSetAbout()" :disabled="isDisabled">
          Save
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
    import './About-Input.style.scss';
    import FormHttpService from "../../../Services/Form.service";

    export default {
        name: 'App-About-Input',

        data: () => ({
            FormHttpService,
            AboutContent: ''
        }),
        computed: {
            isDisabled() {
                return this.AboutContent.length <= 1;
            }
        },
        beforeMount() {
            this.FormHttpService = new FormHttpService(this.$http);
            this.FormHttpService.GetAbout().then((response) => {
                this.AboutContent = response.about;
            })
        },
        methods: {
            CallSetAbout() {
                this.FormHttpService.SetAbout(this.AboutContent).then((response) => {
                    console.log(response)
                })
            }
        }
    }
</script>
