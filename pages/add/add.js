Page({
 
    /**
     * 页面的初始数据
     */
    data: {
      jljz:[
        {name:1,value:'有',checked:'true'},
        {name:0,value:'无'}
      ],
      lyxgfgt:[
        {name:1,value:'有',checked:'true'},
        {name:0,value:'无'}
      ],

      gylgl:[
        {name:1,value:'有',checked:'true'},
        {name:0,value:'无'}
      ],

      isSex:"0",
      information:[],
      userSex:'',
      modalHidden:true
    },
    //单选按钮发生变化
    radioChange(e){
      console.log(e.detail.value);
      this.setData({
        isSex:e.detail.value
      })
    },
   
  
  
  
  
  
  
  
    //表单提交
    formSubmit(e){
        console.log(e.detail.value)
      this.setData({
        information: e.detail.value,
        modalHidden:false
      });
  
  
    },
   
  
    
    //模态框取消
    modalCancel(){
      wx.showToast({
        title: '取消提交',
        icon:'none'
      })
      this.setData({
        modalHidden:true,
      })
    },
  
  
    //模态框确定
    modalConfirm:function(e) {
      this.setData({
        
      })
  
  
  
      wx.showToast({
        title: '提交成功',
        icon:'success'
      })
      this.setData({
        modalHidden: true
      })
    },
  
  
  
    onLoad: function (options) {
  
    }
  })
  
  