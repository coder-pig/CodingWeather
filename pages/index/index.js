//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    city: '深圳',
    province: '广东省',
    realtime: {
      img: "1",
      sD: "72",
      sendibleTemp: "25",
      temp: "25",
      time: "2019-04-17 16:35:08",
      wD: "西南风",
      wS: "1级",
      weather: "多云",
      ziwaixian: "N/A"
    },
    indexes: [{
      abbreviation: "uv",
      alias: "",
      content: "辐射较弱，涂擦SPF12-15、PA+护肤品。",
      level: "弱",
      name: "紫外线强度指数"
    },
    {
      abbreviation: "pp",
      alias: "",
      content: "建议用露质面霜打底，水质无油粉底霜，透明粉饼，粉质胭脂。",
      level: "控油",
      name: "化妆指数"
    },
    {
      abbreviation: "yd",
      alias: "",
      content: "天气较好，且紫外线辐射不强，适宜户外运动。",
      level: "适宜",
      name: "运动指数"
    },
    {
      abbreviation: "xc",
      alias: "",
      content: "洗车后，只能保持1天车辆清洁，不太适宜洗车。",
      level: "较不适宜",
      name: "洗车指数"
    },
    {
      abbreviation: "ct",
      alias: "",
      content: "天气较热，衣物精干简洁，室内酌情添加空调衫。",
      level: "热",
      name: "穿衣指数"
    },
    {
      abbreviation: "gm",
      alias: "",
      content: "感冒较易发生，干净整洁的环境和清新流通的空气都有利于降低感冒的几率，体质较弱的童鞋们要特别加强自我保护。",
      level: "较易发",
      name: "感冒指数"
    }],

  },

  onLoad: function () {

  },
})