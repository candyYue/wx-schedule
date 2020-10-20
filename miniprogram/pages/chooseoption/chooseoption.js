// pages/chooseoption/chooseoption.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[],
    optionsList:{
      reminderList:[{
        id:1,
        value:'1小时前'
      }],
      typeList:[{
        id:1,
        value:'工作'
      },{
        id:2,
        value:'娱乐'
      },{
        id:3,
        value:'纪念日'}
      ],
      repeatList:[{
        id:1,
        value:'不重复'
      },
      {
        id:1,
        value:'每天重复'
      },
      {
        id:1,
        value:'工作日重复'
      }],
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const that=this
    const eventChannel = this.getOpenerEventChannel()
    // 监听acceptOption事件，获取上一页面通过eventChannel传送到当前页面的数据
    eventChannel.on('acceptOption', function(data) {
      const type=`${data.data}List`
      that.setData({
        list:that.data.optionsList[type]
      })
    })

  },
  getType(e){
    const value= e.currentTarget.dataset.val
    const eventChannel = this.getOpenerEventChannel()
    const pages = getCurrentPages(); //当前页面
    const beforePage = pages[pages.length - 2]; //前一页
    wx.navigateBack({
      success: function (res) {
        // 通过eventChannel向被打开页面传送数据
        eventChannel.emit('getcurrentvalue', value)
        beforePage.onLoad(); // 执行前一个页面的onLoad方法
      }
    });
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})