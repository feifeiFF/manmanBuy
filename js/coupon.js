$(function(){
   //   1--渲染优惠券部分
   new AjaxRequest({
      url:"getcoupon",
      callback:function(info){
         $(".m_coupon ul").html(template("couponTmp",info));
         console.log(info);
      }
   });
  
})