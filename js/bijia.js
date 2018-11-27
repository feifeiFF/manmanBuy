$(function(){

  var   categoryId=getSearch("categoryId");
  var   productId=getSearch("productId");
  console.log(categoryId,productId)
  //  1 --  渲染分页导航 
    new AjaxRequest({
       url:"getcategorybyid",
       param:{
        categoryid:categoryId
       },
       callback:function(info){
        $(".m_path_nav .currentPosition").html(template("pathTmp",info));
       }
    })


  // 1 .根据地址栏id值渲染商品详情
  new AjaxRequest({
    url:"getproduct",
    param:{
      productid :productId
    },
    callback:function(info){
      console.log(info);   
       $(".m_big_product").html(template("detailsTmp",info));
    }
  });



  //3--渲染评论
  new AjaxRequest({
     url:"getproductcom",
     param:{
      productid:productId
     },
     callback:function(){
      console.log(info);
      $(".all_com").html(template("comTmp",info));
     }
  })
})