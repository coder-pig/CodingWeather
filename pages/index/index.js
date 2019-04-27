//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    userInfo: {}, //用户信息
    hasUserInfo: false, //是否有用户信息
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    weather: {}
  },

  refreshWeather: function () {
    var that = this
    wx.request({
      url: 'http://aider.meizu.com/app/weather/listWeather',
      data: {
        'cityIds': '101280601'
      },
      method: 'GET',
      headers: {
        'User-Agent:': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.103 Safari/537.36',
        'Host': 'aider.meizu.com'
      },
      success: function (res) {
        if (res.data.code == 200) {
          that.setData({
            weather: res.data.value[0]
          })
        }
      },
    })
  },

  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
    this.refreshWeather()
  },
  getUserInfo: function (e) {
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
