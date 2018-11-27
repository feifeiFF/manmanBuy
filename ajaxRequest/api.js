(function (window) {
    //地址
    var urls = {
        baseUrl: 'http://127.0.0.1:9090',     

        getindexmenu: '/api/getindexmenu',//获取首页菜单
        getmoneyctrl: '/api/getmoneyctrl',//首页商品展示
        getcategorytitle: '/api/getcategorytitle',//比;hhyj价搜索一级导航
        getcategory: '/api/getcategory',//比价搜索二级导航
        getbaicaijiatitle: '/api/getbaicaijiatitle',
        getbaicaijiaproduct: '/api/getbaicaijiaproduct',
        getproduct: '/api/getproduct',
        getcategorybyid: '/api/getcategorybyid',
        getproductcom: '/api/getproductcom',
    } 

    function AjaxRequest(opts) {
        this.type = opts.type || "get";
        this.url = urls.baseUrl + urls[opts.url];
        this.param = opts.param || {};
        this.isShowLoader = opts.isShowLoader || false;
        this.dataType = opts.dataType || "json";
        this.callBack = opts.callBack;
        this.init();
    }

    AjaxRequest.prototype = {
        //初始化
        init: function () {
            this.sendRequest();
        },
        //渲染loader
        showLoader: function () {
            if (this.isShowLoader) {
                var loader = '<div class="ajaxLoader"><div class="loader">加载中...</div></div>';
                $("body").append(loader);
            }
        },
        //隐藏loader
        hideLoader: function () {
            if (this.isShowLoader) {
                $(".ajaxLoader").remove();
            }
        },
        //发送请求
        sendRequest: function () {    
            var self = this;
            $.ajax({
                type: this.type,
                url: this.url,
                data: this.param,
                dataType: this.dataType,
                beforeSend: this.showLoader(),
                success: function (res) {
                    self.hideLoader();
                    if (res != null && res != "") {
                        if (self.callBack) {
                            if (Object.prototype.toString.call(self.callBack) === "[object Function]") {   //Object.prototype.toString.call方法--精确判断对象的类型
                                self.callBack(res);
                            } else {
                                console.log("callBack is not a function");
                            }
                        }
                    }
                }
            });
        }
    };
    window.AjaxRequest = AjaxRequest;
})(window);