<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="10">
        <v-textarea v-model="CompanyDetails" label="Company Details"/>
      </v-col>
      <v-col cols="2">
        <v-btn @click="CallSetCompanyDetails()" :disabled="isDisabled">
          Save
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
    import './Company-Input.style.scss';
    import FormHttpService from "../../../Services/Form.service";

    export default {
        name: 'App-Company-Input',

        data: () => ({
            FormHttpService,
            CompanyDetails: '',
        }),
        beforeMount() {
            this.FormHttpService = new FormHttpService(this.$http);
            this.FormHttpService.GetCompanyDetails().then((response) => {
                this.CompanyDetails = response.details
            })
        },
        computed: {
            isDisabled() {
                return this.CompanyDetails.length <= 1;
            }
        },
        methods: {
            CallSetCompanyDetails() {
                this.FormHttpService.SetCompanyDetails(this.CompanyDetails).then((response) => {
                    console.log(response);
                })
            }
        }
    }
</script>
