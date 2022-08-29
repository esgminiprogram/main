// pages/main/main.js
const util = require('../../utils/util.js')

Page({

    /**
     * 页面的初始数据
     */
    data: {
        modalHidden: true,
        searchItem:"",
        search: false,
        searchName:"",
        max:{
            "xxysb": 18.944,
            "yfzb": 0.063,
            "hbzb": 0.091,
            "jnysb":23556.621,
            "zhnh": 126703.887,
            "aqtrzb":0.013,
            "jkzb" :0.001
        },
        min:{
            "xxysb": 0.040,
            "yfzb": 0.001,
            "hbzb": 0.001,
            "jnysb":0,
            "zhnh": 0,
            "aqtrzb":0,
            "jkzb" :0
        },
        info:[
            {
                "name" : "鞍钢股份有限公司",
                "revenue": 1366.74 ,
                "xxpl" : 77,
                "yftr" : 58.316,
                "jljz" : 1,
                "lyxgfgt" : 1,
                "hbtr" : 22.22,
                "jynh" : "have",
                "wsqtpf" : "/",
                "gylgl" : 0,
                "nnbl" : 9,
                "aqsctr" : 12432,
                "ggly" : "have",
                "score": 0
            },
            {
                "name" : "宝山钢铁股份有限公司",
                "revenue": 3653.42 ,
                "xxpl" : "have",
                "yftr" : 113.7,
                "jljz" : 1,
                "lyxgfgt" : 1,
                "hbtr" : 64.9,
                "jynh" : "have",
                "wsqtpf" : "90805000",
                "gylgl" : 1,
                "nnbl" : 12,
                "aqsctr" : 74200,
                "ggly" : "have",
                "score": 0
            },
            {
                "name" : "广汇能源股份有限公司",
                "revenue": 248.65 ,
                "xxpl" : "/",
                "yftr" : 3.43,
                "jljz" : 1,
                "lyxgfgt" : 1,
                "hbtr" : 8.29,
                "jynh" : 0,
                "wsqtpf" : "/",
                "gylgl" : 1,
                "nnbl" : 27.1,
                "aqsctr" : 18983.12,
                "ggly" : 54.43,
                "score": 0
            },
            
        ]

    },


    
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad() {
        var that = this;
        let tmp =[];
        that.data.info.forEach(element => {
            element.score = util.countNumber(element,that.data.max,that.data.min)
            console.log(element.score)
            tmp.push(
                element
            )
        });
        that.setData({
            info: tmp
        })
    },

    formSubmit(e) {
        console.log('form发生了submit事件，携带数据为：', e.detail.value)
      },

    checkComplete: function() {
        this.setData({
            modalHidden: true,
        })
    },
    search: function() {
        this.setData({
            search :true
        })
    },
    Name:function(e) {
        this.setData({
            searchName:e.detail.value
        })
    },

    cancel: function() {
        this.setData({
            search :false
        })
        this.onLoad()
    },

    btnclick:function (e) {
        console.log(e.currentTarget.dataset.obj)
        this.setData({
            searchItem :e.currentTarget.dataset.obj,
            modalHidden:false
        })
    },
    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {

    }
})