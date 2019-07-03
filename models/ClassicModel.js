import HTTPClient from "../utils/http_client";

export default class ClassicModel extends HTTPClient {
  getLatest(callback) {
    this.request({
      url: '/classic/latest',
      success: data => {
        callback(data)
      }
    })
  }
}