Component({
  data: {
    selected: 0,
    color: "#8a8a8a",
    selectedColor: "#000",
    list: [{
      pagePath: "/pages/schedule/schedule",
      iconPath: "/assets/img/schedule.png",
      selectedIconPath: "/assets/img/schedule-active.png",
      text: "日程"
    }, {
      pagePath: "/pages/home/home",
      iconPath: "/assets/img/home.png",
      selectedIconPath: "/assets/img/home-active.png",
      text: "我的"
    }]
  },
  attached() {
  },
  methods: {
    switchTab(e) {
      const data = e.currentTarget.dataset
      const url = data.path
      wx.switchTab({url})
      this.setData({
        selected: data.index
      })
    },
    addschedule(e){
      wx.navigateTo({
        url: '/pages/addschedule/addschedule',
      })
    }
  }
})