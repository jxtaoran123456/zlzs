//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    logs: [],
    arrayShen: ['预言家', '女巫', '猎人', '白痴', '守卫', '骑士'],
    arrayWolf: ['白狼', '狼美人', '恶魔'],
    arrayThird: ['丘比特', '野孩子'],
  },
  onLoad: function () {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return util.formatTime(new Date(log))
      })
    })
  }
})
