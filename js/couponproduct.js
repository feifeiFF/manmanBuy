$(function(){

  //  1--请求商品列表的数据
  var couponId=getSearch("couponId");
  var id;
  var index;
  console.log(couponId);
  render();
  function render(){
    $.ajax({
      url:"http://127.0.0.1:9090/api/getcouponproduct",
      data:{
       couponid:couponId
      },
      success:function(info){
        console.log(info);
         $(".m_couponproduct ul").html(template("couponproductTmp",info));
       
           // 2--显示模态框 
           $(".m_couponproduct").on("click","li",function(){      
            id=$(this).data("couponproductid"); 
            // 获取被渲染列表的索引
             var  index=$(this).data("index");  
            $(".modal_box").fadeIn(1000).toggleClass("hide"); 
            couponId=getSearch("couponId");
            
            
            $.ajax({
                url:"http://127.0.0.1:9090/api/getcouponproduct",
                data:{
                  couponid:couponId
                },
                success:function(info){         
                  $(".main_img .swiper-wrapper .swiper-slide").html(info.result[index].couponProductImg);    
                  swiper();
                  //  3--关闭模态框
                   $("body").on("click",".close",function(){                   
                     $(".modal_box").fadeOut(400).addClass("hide");
                  })
                }
              })
           })

          
      }
    })
 
  }

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