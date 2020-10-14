<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="10">
        <v-text-field
          v-model="FormTitle"
          label="Form Title"
        ></v-text-field>
      </v-col>
      <v-col cols="2">
        <v-btn :disabled="isDisabled" @click="CallSetFormTitle()">
          Save
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
    import FormHttpService from "../../../Services/Form.service";
    import './Title-Input.style.scss';

    export default {
        name: 'App-Title-Input',

        data: () => ({
            FormTitle: '',
            FormHttpService,
            disabled: false,
        }),
        beforeMount() {
            this.FormHttpService = new FormHttpService(this.$http);
            this.FormHttpService.GetFormTitle().then((response) => {
                this.FormTitle = response.title;
            })
        },
        computed: {
            isDisabled() {
                return this.FormTitle.length <= 1;
            }
        },
        methods: {
            CallSetFormTitle() {
                this.FormHttpService.SetFormTitle(this.FormTitle).then((response) => {
                    console.log(response)
                })
            }
        }
    }
</script>
