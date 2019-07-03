import config from '../config'

const ERROR = {
  400: '请求包含不支持的参数',
  401: '未授权',
  403: '被禁止访问',
  404: '请求的资源不存在',
  413: '上传的File体积太大',
  500: '内部错误',
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
          if (params.success && typeof params.success === 'function') {
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
    let errorMsg = ERROR[errorCode] === undefined ? ERROR[1003] : ERROR[errorCode]
    wx.showToast({
      title: errorMsg,
      icon: 'none',
      duration: 2000
    })
  }
}