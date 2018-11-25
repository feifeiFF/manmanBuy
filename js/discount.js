$(function(){
  var productid =getSearch("productid");
   $.ajax({
     url:"http://127.0.0.1:9090/api/getdiscountproduct",
     data:{
      productid:productid
     },
     dataType:"json",
     success:function(info){
        console.log(info);
        $('.m_moneyproduct').html(template("discountTmp",info));
     }
   })
})