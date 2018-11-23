$(function(){
   //1--  请求导航的数据
   navRender();
   function navRender(){
    $.ajax({
      type: "get",
      url: "http://127.0.0.1:9090/api/getindexmenu",  
      dataType: "json",
      success: function (info) {
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
    $.ajax({
       url:"http://127.0.0.1:9090/api/getmoneyctrl",
       dataType:"json",
       success:function(info){
         console.log(info);
         $(".rmd_content ul").html(template("recommaendTmp",info));
       }
    })
  }

  //3 -- 点击更多,显示更多
$(".m_nav .nav_box").on("click",".more",function(){
    $(".m_nav ul").toggleClass("hig");
})

   

});