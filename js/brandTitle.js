$(function(){
  //  1-- 渲染分类大标题
  $.ajax({
    type: "get",
    url: "http://127.0.0.1:9090/api/getbrandtitle",   
    dataType: "json",
    success: function (info) {
       console.log(info);
       $(".m_brandTitle .brand_box").html(template("brandTitleTmp",info));
    }
  });
})