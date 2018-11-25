$(function(){
  //  1--渲染商品列表
  $.ajax({
     url:"http://127.0.0.1:9090/api/getinlanddiscount",
     dataType:"json",
     success:function(info){
       console.log(info);
       $(".m_product ul").html(template("productTmp",info));
     }
  })
})