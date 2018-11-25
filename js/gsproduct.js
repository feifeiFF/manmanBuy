$(function(){
    var $shopId;
    var $areaId;
  //  1--点击显示下拉菜单
     $.ajax({
        url:"http://127.0.0.1:9090/api/getgsshop",
        dataType:"json",
        success:function(info){
           $(".dropdown .drop_hd").html(template("shopTmp",info));        
        }
     });

     $.ajax({
        url:"http://127.0.0.1:9090/api/getgsshoparea",
        dataType:"json",
        success:function(info){
          $(".dropdown .drop_hb").html(template("areaTmp",info));     
      }
    })




  //  店铺
  $(".hd").click(function(){
    $shopId=$(this).data("shopId");
    $(this).find("i").toggleClass("rotate");    
    $(this).parent().next().find(".drop_hd").toggleClass("hide");     
    $(this).siblings().find("i").removeClass("rotate");  
    $(".drop_hd").siblings().addClass("hide");



   })
 //  华东
   $(".hb").click(function(){
    $areaId=$(this).data("areaId");
    $(this).find("i").toggleClass("rotate")   
    $(this).parent().next().find(".drop_hb").toggleClass("hide");
    $(this).siblings().find("i").removeClass("rotate"); 
    $(".dropdown .drop_hb").siblings().addClass("hide");  
   
  })

  $(".all").click(function(){     
     $(this).find("i").toggleClass("rotate")   
     $(this).parent().next().find(".drop_all").toggleClass("hide");
     $(this).siblings().find("i").removeClass("rotate"); 
     $(".drop_all").siblings().addClass("hide");   
  })

  



  render();
  // 下拉列表的每项注册点击事件
  $(".drop_hd").on("click","li",function(){
      $shopId=$(this).data('shopid');
      $(".hd span").html($(this).text().trim());
      $(this).find("i").removeClass("hide")
      $(this).siblings().find("i").addClass("hide");
      render($shopId,$areaId);
  })
  // 下拉列表的每项注册点击事件
  $(".drop_hb").on("click","li",function(){
      $areaId=$(this).data('areaid');
      $(".hb span").html($(this).text().trim().slice(0,2));
      $(this).find("i").removeClass("hide");
      $(this).siblings().find("i").addClass("hide");
      console.log($shopId,$areaId);
      render($shopId,$areaId);
    })

  function render($shopId,$areaId){
    $.ajax({
      url:"http://127.0.0.1:9090/api/getgsproduct",
      dataType:"json",
      data:{
        shopid: $shopId||0,
        areaid:$areaId||0
      },
      success:function(info){
        console.log(info);
       $(".m_product ul").html(template("productTmp",info));

      }
   })
  }
 
})