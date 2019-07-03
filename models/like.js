import config from '../config'
import HTTPClient from "../utils/http_client";

export default class LikeModel extends HTTPClient {
  like(artId, category, likeOrCancel) {
    let url = likeOrCancel ? config.API_LIKE : config.API_LIKE_CANCEL
    this.request({
      url: url,
      method: 'POST',
      data: {
        art_id: artId,
        type: category
      }
    })
  }
}