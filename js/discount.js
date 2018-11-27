$(function(){
  var productid =getSearch("productid");

  new AjaxRequest({
    url:"getdiscountproduct",
    param:{
      productid:productid
    },
    callback:function(info){
      console.log(info);
      $('.m_moneyproduct').html(template("discountTmp",info));
    }
  });
   
})