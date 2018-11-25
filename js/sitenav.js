$(function(){
    //1--  发送 ajax 请求，渲染网站导航
    $.ajax({
       url:"http://127.0.0.1:9090/api/getsitenav",
       type:"get",
       dataType:"json",
       success:function(info){
          console.log(info);
          $(".m_nav_list .nav_box").html(template("sitenavTmp",info));
       }
    })  
})