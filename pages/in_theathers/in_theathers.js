var postData = require('../../data/indexdata.js');
var data = postData.data;
Page({
  data: {
    films: [],
    hasMore: false,
    showLoading: true,
    start: 0
  },
  onLoad: function () {
    var that = this
    setTimeout(function(){
      that.setData({
        films: data.subjects,
        start: 0,
        showLoading: false
      });
    },1000);
  },
  viewDetail: function (event) {
    var dataset = event.currentTarget.dataset;
    wx.navigateTo({
      url: '../detail/detail?id=' + dataset.id + '&title=' + dataset.title + '&type=inTheathers'+"&image="+dataset.url
    })
  },
  onShareAppMessage: function (res) {
    if (res.from === 'button') {
      console.log(res.target)
    }
    return {
      title: '电影推荐平台',
      path: 'pages/douban/in_theathers/in_theathers',
      success: function (res) {
        console.log("转发成功" + res.target)
      },
      fail: function (res) {
        console.log("转发失败" + res.target)
      }
    }
  }
})
