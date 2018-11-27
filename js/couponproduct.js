$(function(){

  //  1--请求商品列表的数据
  var couponId=getSearch("couponId");
  var id;
  var index;

  console.log(couponId);
  render();
  function render(){
    new AjaxRequest({
      url:"getcouponproduct",
      param:{
        couponid:couponId
      },
      callback:function(info){
        console.log(info);
        $(".m_couponproduct ul").html(template("couponproductTmp",info));
          // 2--显示模态框 
          $(".m_couponproduct").on("click","li",function(){      
           id=$(this).data("couponproductid"); 
           // 获取被渲染列表的索引
          index=$(this).data("index");  
           $(".modal_box").fadeIn(1000).toggleClass("hide"); 
           couponId=getSearch("couponId");            
           getcouponproduct();
          })
      }
    });
  
 
  }

 // 2--渲染优惠券产品
    function getcouponproduct(){
      new AjaxRequest({
        url:"getcouponproduct",
        param:{
          couponid:couponId
        },
        callback:function(res){
          $(".main_img .swiper-wrapper .swiper-slide").html(res.result[index].couponProductImg);    
          swiper();
          //  3--关闭模态框
           $("body").on("click",".close",function(){                   
             $(".modal_box").fadeOut(400).addClass("hide");
          })
        }
      });            
    }
//  添加轮播图
function swiper(){  
  var mySwiper = new Swiper ('.main_img', {
    direction: 'horizontal', // 垂直切换选项
    loop: true, // 循环模式选项
    autoplay: true,
    // 如果需要前进后退按钮
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
   
  })   
}

})