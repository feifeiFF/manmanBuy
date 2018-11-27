$(function(){
  
  var titileId=getSearch("brandtitleid");
  var brandTitle=getSearch("brandTitle");

  var str=brandTitle;
  

  str=str.slice(0,str.length-4);
  $(".rank_title span").html(str);
  console.log(brandTitle);
  // 1.发送请求，渲染十大品牌
  new AjaxRequest({
     url:"getbrand",
     param:{
      brandtitleid:titileId
     },
     callback:function(info){
      console.log(info)
      $(".good_box").html(template("brandTmp",info));
     }
  });

  // 2--销量排行
  //  销量排行id
  var  productid ;
  new AjaxRequest({
     url:"getbrandproductlist",
     param:{
      brandtitleid:titileId,
      pagesize:4
     },
     callback:function(info){
      console.log(info)
      $(".m_brand_rank .rank_box").html(template("rankTmp",info));     
     }
  })

 
  var productid=$("rank_box").data("productId")||0;
  //3--评论详情
  new AjaxRequest({
      url:"getproductcom",
      param:{
         productid:productid  
      },
      callback:function(info){
           // $(".m_brank_comment").html(template("commentTmp",info));
      }
  })
  $(".m_path_nav a.now").html("<span>"+ str +"</span>");
}); 

  


