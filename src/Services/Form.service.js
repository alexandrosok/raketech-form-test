export default class FormHttpService {
  constructor(http) {
    this.http = http;
    this.UrlList = {
      SetFormTitle: 'http://localhost:4007/form/title',
      GetFormTitle: 'http://localhost:4007/form/title/get'
    }
  }

  SetFormTitle(title) {
    return this.http.post(this.UrlList.SetFormTitle, {title}).then((response) => {
      return response.data;
    })
  }

  GetFormTitle() {
    return this.http.get(this.UrlList.GetFormTitle).then((response) => {
      return response.data;
    })
  }


}
