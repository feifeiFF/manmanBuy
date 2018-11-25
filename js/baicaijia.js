$(function(){

  var id=0;
  renderProduct(id);
  //  1-- 导航
  render();
  function render(){
    $.ajax({
      type: "get",
      url: "http://127.0.0.1:9090/api/getbaicaijiatitle",
      dataType: "json",
      success: function (info) {
         console.log(info);
         $(".m_bcj_nav ul").html(template("navTmp",info));
          iscroll();     
      }
    });
  
  }

   function iscroll(){
      // 2--导航区域滚动
      //使用区域滚动注意事项
      // 1.父元素有宽高
      // 2.子元素有宽高
      // 3.默认垂直方向
      //动态计算ul的宽度
      var lis=document.querySelectorAll(".m_bcj_nav ul li");     
     
      var sum=0;
      for(var i=0;i<lis.length;i++){
         sum+=lis[i].offsetWidth;
      }
       var ulWidth=$(".m_bcj_nav ul").width(sum);    
       var nav=document.querySelector(".m_bcj_nav");
       leftScroll = new IScroll(nav, {
         scrollX:true,
         scrollY:false      
       });
      
      //  给每一个 a 注册点击事件，获取相应的id，获取下面商品列表信息     
      $(".m_bcj_nav").on("click","li",function(){
           $(this).addClass("now").siblings().removeClass("now");
           id=$(this).find("a").data("titleid");       
           renderProduct(id);
 

      });    
   }

   function renderProduct(id){          
    $.ajax({
      url:"http://127.0.0.1:9090/api/getbaicaijiaproduct",
      data:{
        titleid:id
      },
      dataType:"json",
      type:"get",
      success:function(info){
         console.log(info);
         $(".m_bcj_content ul").html(template("detailsTmp",info));
      }
   })
    }
});