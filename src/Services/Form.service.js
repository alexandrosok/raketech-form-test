export default class FormHttpService {
  constructor(http) {
    this.http = http;
    this.UrlList = {
      SetFormTitle: 'http://localhost:4007/form/title',
      GetFormTitle: 'http://localhost:4007/form/title/get',
      SetCompanyDetails: 'http://localhost:4007/form/company-details',
      GetCompanyDetails: 'http://localhost:4007/form/company-details/get'
    }
  }

  SetCompanyDetails(CompanyDetails) {
    return this.http.post(this.UrlList.SetCompanyDetails, {CompanyDetails}).then((response) => {
      return response.data;
    })
  }

  GetCompanyDetails() {
    return this.http.get(this.UrlList.GetCompanyDetails).then((response) => {
      return response.data;
    })
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
