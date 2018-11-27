$(function(){
  //  1-- 渲染分类大标题
  new AjaxRequest({
    url:"getbrandtitle",
    success:function(){
      console.log(info);
      $(".m_brandTitle .brand_box").html(template("brandTitleTmp",info));
    }
  });

})