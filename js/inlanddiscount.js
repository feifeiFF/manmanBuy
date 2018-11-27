$(function(){
  //  1--渲染商品列表
  new AjaxRequest({
    url:"getinlanddiscount",
    callback:function(info){
      console.log(info);
      $(".m_product ul").html(template("productTmp",info));
    }
  })
})