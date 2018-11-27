$(function(){
    //1--  请求导航的数据
   navRender();
   function navRender(){
     new AjaxRequest({
       url: "getindexmenu",  
       callback:function(info){
        console.log(info);
       $(".nav_box").html(template("navTmp",info))
      console.log(info.result[0].img)
      console.log(info.result[0].name)
      }
  });
  } 



  // 2 -- 折扣优惠列表  
  recommaendRender();
  function recommaendRender(){
    new AjaxRequest({
       url:"getmoneyctrl",
       callback:function(info){
        $(".rmd_content ul").html(template("recommaendTmp",info));
       }
    });
  }

  //3 -- 点击更多,显示更多
$(".m_nav .nav_box").on("click",".more",function(){
    $(".m_nav ul").toggleClass("hig");
})


// 4--点击商品列表，去详情页

   

});