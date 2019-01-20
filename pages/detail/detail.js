Page({
  data: {
    film: {},
    showLoading: true,
    options: null,
    name: null,
    url:null,
  },
  onLoad: function (options) {
    var that = this
    wx.setNavigationBarTitle({
      title: options.title
    })
    var postData = require('../../data/detail1.js');
    if (options.id % 2 === 0) {
      postData = require('../../data/detail2.js');
    }
    var data = postData.detail;
    that.setData({
      name: options.title,
      url:options.image,
      film: data,
      showLoading: false
    })
  },

})
