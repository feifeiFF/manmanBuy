(function () {
  // 地址
  var urls = {
    baseUrl: "http://127.0.0.1:9090",

    getindexmenu: '/api/getindexmenu', //获取首页菜单
    getmoneyctrl: '/api/getmoneyctrl', //首页商品展示
    getcategorytitle: '/api/getcategorytitle', //比;hhyj价搜索一级导航
    getcategory: '/api/getcategory', //比价搜索二级导航
    getbaicaijiatitle: '/api/getbaicaijiatitle',
    getbaicaijiaproduct: '/api/getbaicaijiaproduct',
    getproduct: '/api/getproduct',
    getcategorybyid: '/api/getcategorybyid',
    getproductcom: '/api/getproductcom',
    getinlanddiscount:"/api/getinlanddiscount",
    getbrand:"/api/getbrand",
    getbrandproductlist:"/api/getbrandproductlist",
    getcoupon:"/api/getcoupon",
    getcouponproduct:"/api/getcouponproduct",
    getdiscountproduct:"/api/getdiscountproduct",
    getgsproduct:"/api/getgsproduct",
    getgsshoparea:"/api/getgsshoparea",
    getgsshop:"/api/getgsshop",
    getproductlist:"/api/getproductlist",
    getsitenav:"/api/getsitenav"
  };


  function AjaxRequest(opts) {
    this.type = opts.type || "get";
    this.url = urls.baseUrl + urls[opts.url];
    this.param = opts.param || {}; // 发送的参数
    this.isShowloader = opts.isShowloader || false;
    this.dataType = opts.dataType || "json";
    this.callback=opts.callback;  
    this.init(); 
    

  }

  AjaxRequest.prototype = {
    // 初始化核心方法
     init:function(){
       this.sendRequest();  
     },
    // 渲染 loader
    showLoader:function(){
       if(this.isShowloader){
         var loader ="<div class ='ajaxLoader'><div class='loader'>正在加载中……</div></div>";
         $("body").append(loader);
      }
    },
    // 移除loader
    hideLoader:function(){
       if(this.isShowloader){
         $(".ajaxLoader").remove();
       }
    },
    sendRequest:function(){
       var that=this;
       $.ajax({
          type:this.type,
          url:this.url,
          data:this.param,
          dataType:this.dataType,
          beforeSend:this.showLoader(),
          success:function(info){
             that.hideLoader();
             if( info != null && info != "" ){
               if( that.callback ){
                  if( Object.prototype.toString.call(that.callback) === "[object Function]"){
                     that.callback(info);
                  }else{
                     console.log("callback is not a function");
                  }
               }
             }
          }
       })
    }

  }


 window.AjaxRequest=AjaxRequest;

})(window);