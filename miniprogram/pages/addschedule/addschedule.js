// pages/addschedule/addschedule.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    pickerHidden: true,
    chosen: '',
    date: '2016-09-01',
    time: '12:01',
    reminder:'1小时前',
    type:"工作",
    repeat:"不重复"
  },
  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    return {
      title: 'form',
      path: 'page/component/pages/form/form'
    }
  },
  bindDateChange: function(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      date: e.detail.value
    })
  },

  bindTimeChange: function(e) {
    this.setData({
      time: e.detail.value
    })
  },
  chooseOption(e){
    const type=e.currentTarget.dataset.type
    const that=this
    wx.navigateTo({
      url: '/pages/chooseoption/chooseoption',
      events: {
        // 为指定事件添加一个监听器，获取被打开页面传送到当前页面的数据
        getcurrentvalue: function(data) {
          that.setData({
            [type]:data
          })
        },
      },
      success: function(res) {
        // 通过eventChannel向被打开页面传送数据
        res.eventChannel.emit('acceptOption', { data: type })
      }
    })
  },
  formSubmit(e) {
    const {reminder,type,repeat}=this.data
    const addform ={...e.detail.value,
      reminder,
      type,
      repeat
    }
    console.log(addform)
  }
})