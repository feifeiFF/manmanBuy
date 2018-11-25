$(function(){
   $.ajax({
     url:"http://127.0.0.1:9090/api/getcoupon",
     type:"get",
     dataType:"json",
     success:function(info){
        $(".m_coupon ul").html(template("couponTmp",info));
        console.log(info);
     }
   })
})