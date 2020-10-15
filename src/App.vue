<template>
  <v-app>
    <v-app-bar app color="primary" dark/>
    <v-main>
      <v-alert v-if="AppStatus" dense text type="success">
        App State: {{AppState}}
      </v-alert>
      <v-alert v-else dense outlined type="error">
        Something went wrong
      </v-alert>
      <v-container>
        <v-row class="text-center">
          <v-col cols="5">
            <AppTitleInput/>
          </v-col>
          <v-col cols="5">
            <AppSubmitMessageInput/>
          </v-col>
        </v-row>
        <v-row class="text-center">
          <v-col cols="5">
            <AppCompanyInput/>
          </v-col>
          <v-col cols="5">
            <AppAboutInput/>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
    import HealthHttpService from "./Services/Health.service";
    import {HttpResponse} from "./Helpers/HttpResponse";
    import AppTitleInput from "./components/Form-Inputs/Title-Input/Title-Input.component";
    import AppCompanyInput from "./components/Form-Inputs/Company-Input/Company-Input.component";
    import AppAboutInput from "./components/Form-Inputs/About-Input/About-Input.component";
    import AppSubmitMessageInput
        from "./components/Form-Inputs/Submit-Message-Input/Submit-Message-Input.component";

    export default {
        name: 'App',
        components: {AppSubmitMessageInput, AppAboutInput, AppCompanyInput, AppTitleInput},
        data: () => ({
            AppState: null,
            AppStatus: null,
            overlay: false,
            HealthHttpService,
        }),
        beforeMount() {
            this.HealthHttpService = new HealthHttpService(this.$http);
            this.HealthHttpService.GetAppHealth().then((response) => {
                this.AppStatus = !!response;
                this.AppState = HttpResponse.Success;
            }).catch(error => console.log(error))
        },
        methods: {}
    };
</script>
