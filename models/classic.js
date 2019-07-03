import config from '../config'
import HTTPClient from "../utils/http_client";

export default class ClassicModel extends HTTPClient {
  getLatest(callback) {
    this.request({
      url: config.API_CLASSIC_LATEST,
      success: data => {
        callback(data)
      }
    })
  }
}