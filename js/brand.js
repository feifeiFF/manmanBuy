$(function(){
  // 1.发送请求，渲染十大品牌
  var titileId=getSearch("brandtitleid");
  var brandTitle=getSearch("brandTitle");

  var str=brandTitle;
  

  str=str.slice(0,str.length-4);
  $(".rank_title span").html(str);
  console.log(brandTitle);
   $.ajax({
     type: "get",
     url: "http://127.0.0.1:9090/api/getbrand",
     data:{
      brandtitleid:titileId
     },
     dataType: "json",
     success: function (info) {    
      console.log(info)
       $(".good_box").html(template("brandTmp",info))
     
     }
   }); 

  
  // 2--销量排行
  //  销量排行id
  var  productid ;
  $.ajax({
     url:'http://127.0.0.1:9090/api/getbrandproductlist',
     type:"get",
     data:{
      brandtitleid:titileId,
      pagesize:4
     },
     dataType:"json",
     success:function(info){
       console.log(info)
        $(".m_brand_rank .rank_box").html(template("rankTmp",info));      
     }
  }) 

  var productid=$("rank_box").data("productId")||0;
  //3--评论详情
  $.ajax({
     url:"http://127.0.0.1:9090/api/getproductcom",
     type:"get",
     dataType:"json",
     data:{
      productid:productid  
     },
     success:function(info){
        // $(".m_brank_comment").html(template("commentTmp",info));
     }
  })

  $(".m_path_nav a.now").html("<span>"+ str +"</span>");
})