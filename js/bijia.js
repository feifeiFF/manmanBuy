$(function(){

  var   categoryId=getSearch("categoryId");
  var   productId=getSearch("productId");
  console.log(categoryId,productId)
  //  1 --  渲染分页导航 
    $.ajax({
     url:"http://127.0.0.1:9090/api/getcategorybyid",
     data:{
      categoryid:categoryId
     },
     success:function(info){
         $(".m_path_nav .currentPosition").html(template("pathTmp",info))
    }
    })


  // 1 .根据地址栏id值渲染商品详情
  $.ajax({
    url:"http://127.0.0.1:9090/api/getproduct",
    type:"get",
    data:{
      productid :productId
    },
    dataType:"json",
    success:function(info){
      console.log(info);   
       $(".m_big_product").html(template("detailsTmp",info));
    }
  });


  //3--渲染评论
  $.ajax({
    url:"http://127.0.0.1:9090/api/getproductcom",
    data:{
      productid:productId
    },
    dataType:"json",
    success:function(info){
      console.log(info);
      $(".all_com").html(template("comTmp",info));
    }
  })  


})