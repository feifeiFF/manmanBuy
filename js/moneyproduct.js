$(function(){

  var productid = getSearch("productid");
  // 1-- 国内折扣商品详情
  new AjaxRequest({
     url:"getmoneyctrlproduct",
     param:{
      getmoneyctrlproduct
     },
     callback:function(info){
       console.log(info);
       $(".m_moneyproduct").html(template("detailsTmp",info));
     }
  });


 
})