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
    $.ajax({
      url:"http://127.0.0.1:9090/api/getmoneyctrl",
      dataType:'json',
      data:{
       pageid:currentPage
      },
      success:function(info){
       console.log(info)

        currentPage=currentPage;
        totalPage=info.totalCount;
        pageSize=info.pagesize;
        $(".m_moneyctrl_content").html(template("moneyCtrlTmp",info));
        page=Math.ceil(totalPage/pageSize);
        str = currentPage+"/"+page;
        console.log(page);
        $(".currentPage button").html("<span>"+str+"</span>");
      }
    })
  }



       // 上一页        
       $(".pre button").click(function(){
        if(currentPage>1){
          currentPage--;
         }else{
           currentPage=1;
           return;
         }
         console.log("pre"+ currentPage);   
         str = currentPage+"/"+page;
         $(".currentPage button").html("<span>"+str+"</span>");
         render(currentPage);
      })



    //  下一页
      $(".next button").click(function(){ 
        if(currentPage >= page){   
          return;
         }else{
           currentPage+=1;   
           str = currentPage+"/"+page;
           $(".currentPage button").html(str);
           render(currentPage);
         }                      
    
      })
})