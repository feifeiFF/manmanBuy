$(function(){
//1.渲染分类大标题
  new AjaxRequest({
     url:"getcategorytitle",
     callback:function(info){
      console.log(info);
      $(".cate_title").html(template("cateTitle",info));  
        render();
     }
  })

  // 2- 为每一个a 注册点击事件，获取每一个的 id ,点击获取相应的 titelId 
 $(".m_category .cate_title").on("click","a.title",function(){       
       var id=$(this).data("id"); 
        render(id); 
        $(this).next("ul").addClass("hide").slideToggle();
        $(this).parent().siblings().find("ul").addClass("hide").slideUp();     
    })
 


  // 3  渲染小列表 
   function render(id){  
        new AjaxRequest({
           url:"getcategory",
           param:{
            titleid:id
           },
           callback:function(info){
            console.log(info);
           $(".cate_title .cate_list").html(template("itemTmp",info));  
           }
        })
   }


  // 4  点击相应的标题 当前展开，其他闭合
 



})