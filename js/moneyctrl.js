$(function(){
 // 获取分类id ,同上，地址栏获取
     var currentPage=1;  //当前页
     var totalPage;      //总条数
     var pageSize;       // 每页的条数
     var str;            // 分页区的文字
     var page;           // 总页数


  //  1 --渲染商品列表
  render(currentPage);
  function render(currentPage){
  new AjaxRequest({
    url:'getmoneyctrl',
    param:{
      pageid:currentPage
    },
    callback:function(info){
      console.log(info)
      // 获取当前页
      currentPage=currentPage;
      totalPage=info.totalCount;
      pageSize=info.pagesize;
      //  渲染页面 
      $(".m_moneyctrl_content").html(template("moneyCtrlTmp",info));
      page=Math.ceil(totalPage/pageSize);
      str = currentPage+"/"+page;


      console.log(page);
      $(".currentPage button.now").html("<span>"+str+"</span>");
      select();
    }
  });   
  }


   // 点击上一页，发送请求显示上一页数据        
     $(".pre button").click(function(){
        if(currentPage>1){
          currentPage--;
         }else{
           currentPage=1;
           return;
         }
         console.log("pre"+ currentPage);   
         str = currentPage+"/"+page;
         $(".currentPage button.now").html("<span>"+str+"</span>");
         render(currentPage);
      })

    //  下一页
      $(".next button").click(function(){ 
        if(currentPage >= page){   
          return;
         }else{
           currentPage+=1;   
           str = currentPage+"/"+page;
           $(".currentPage button.now").html(str);
           render(currentPage);
         }                      
    
      })

      function select(){
        // 动态创建选择框
        var btns="";
        for(var i=0 ; i < page; i++){     
          btns+="<button>"+ ( i+1) +"/"+page +"</button>";
        }
        $(".dropUp").html(btns); 

      }

    //  点击隐藏/显示
      $(".now").click(function(){
        $(".dropUp").slideDown().toggleClass("hide");  
      })

    //  选择到第几页 
      $(".dropUp").on("click","button",function(){
        $(".now").text($(this).text());
        currentPage =Number( $(this).text().split("/")[0] );
        render(currentPage);
        $(".dropUp").slideUp().addClass("hide");
      });
  
})