export default class HealthHttpService {
  constructor(http) {
    this.http = http;
    this.UrlList = {
      AppHealth: ' http://localhost:4007/health/status'
    };
  }

  GetAppHealth() {
    return this.http.get(this.UrlList.AppHealth).then((response) => {
      return response.data;
    })
  }

}
