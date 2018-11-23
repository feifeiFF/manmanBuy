$(function(){
  var productid =getSearch("productId");
  // 1-- 国内折扣商品详情
  $.ajax({
    type: "get",
    url: "http://127.0.0.1:9090/api/getmoneyctrlproduct",
    data: {productid :productid },
    dataType: "json",
    success: function (info) {
       console.log(info);
       $(".m_moneyproduct").html(template("detailsTmp",info));
    }
  });


  // 2--
})