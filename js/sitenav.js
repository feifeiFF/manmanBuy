$(function(){
    //1--  发送 ajax 请求，渲染网站导航
    new AjaxRequest({
       url:"getsitenav",
       callback:function(info){
         console.log(info);
         $(".m_nav_list .nav_box").html(template("sitenavTmp",info));
       }
    });

})