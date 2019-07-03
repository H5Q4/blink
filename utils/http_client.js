import config from '../config'

const ERROR = {
  1003: '未知错误',
  1005: '不正确的开发者key',
  1006: '服务器内部错误'
}

export default class HTTPClient {
  request(params) {
    if (!params.method) {
      params.method = 'GET'
    }
    wx.request({
      url: config.API_BASE_URL + params.url,
      method: params.method,
      data: params.data,
      header: {
        'content-type': 'application/json',
        'appkey': config.APP_KEY
      },
      success: res => {
        let code = res.statusCode
        if (code.toString().startsWith('2')) {
          if (params.data && typeof params.data === 'function') {
            params.success(res.data)
          }
        } else {
          this._showError(code)
        }
      },
      fail: err => {
        this._showError(err.error_code)
      }
    })
  }

  _showError(errorCode = 1003) {
    wx.showToast({
      title: ERROR[errorCode],
      icon: 'none',
      duration: 2000
    })
  }
}