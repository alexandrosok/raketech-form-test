import {Host} from "../Helpers/UrlList";

export default class HealthHttpService {
  constructor(http) {
    this.http = http;
    this.host = Host;
    this.namespace = 'raketech-form-test/v1';
    this.UrlList = {
      AppHealth: `${this.host}/wp-json/${this.namespace}/health/status`,
    };
  }

  GetAppHealth() {
    return this.http.get(this.UrlList.AppHealth).then((response) => {
      return response.data;
    })
  }

}
