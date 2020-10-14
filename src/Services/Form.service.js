import {Host} from '../Helpers/UrlList';

export default class FormHttpService {
  constructor(http) {
    this.host = Host;
    this.http = http;
    this.namespace = 'raketech-form-test/v1';
    this.UrlList = {
      SetFormTitle: `${this.host}/wp-json/${this.namespace}/form/title`,
      GetFormTitle: `${this.host}/wp-json/${this.namespace}/form/title/get`,
      SetCompanyDetails: `${this.host}/wp-json/${this.namespace}/form/company-details`,
      GetCompanyDetails: `${this.host}/wp-json/${this.namespace}/form/company-details/get`,
      SetAbout: `${this.host}/wp-json/${this.namespace}/form/about`,
      GetAbout: `${this.host}/wp-json/${this.namespace}/form/about/get`,
      SetSubmitMessage: `${this.host}/wp-json/${this.namespace}/form/submit-message`,
      GetSubmitMessage: `${this.host}/wp-json/${this.namespace}/form/submit-message/get`
    }
  }

  SetSubmitMessage(message) {
    return this.http.post(this.UrlList.SetSubmitMessage, {message}).then((response) => {
      return response.data;
    })
  }

  GetSubmitMessage() {
    return this.http.get(this.UrlList.GetSubmitMessage).then((response) => {
      return response.data;
    })
  }

  SetAbout(about) {
    return this.http.post(this.UrlList.SetAbout, {about}).then((response) => {
      return response.data;
    })
  }

  GetAbout() {
    return this.http.get(this.UrlList.GetAbout).then((response) => {
      return response.data;
    })
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
