$(function(){
   
   var  categoryId=getSearch("categoryId");
  //  1 --  渲染分页导航 
    $.ajax({
     url:"http://127.0.0.1:9090/api/getcategorybyid",
     data:{
      categoryid:categoryId
     },
     success:function(info){
         $(".m_path_nav .currentPosition").html(template("pathTmp",info))
    }
    })

  // 2--渲染产品列表
     // 获取分类id ,同上，地址栏获取
     var currentPage=1;
     var totalPage;
     var pageSize;
     var str;
     var page;

     renderProduct(categoryId,currentPage);
     function renderProduct(categoryId,currentPage){
      $.ajax({
        url:"http://127.0.0.1:9090/api/getproductlist",
        data:{
         categoryid:categoryId,
         pageid:currentPage
        },
        success:function(info){
            console.log(info);
            totalPage=info.totalCount;
            pageSize=info.pagesize;
            $(".m_tv_content").html(template("productListTmp",info));
            page=Math.ceil(totalPage/pageSize);
            str = currentPage+"/"+page;
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
             renderProduct(categoryId,currentPage);
          })



        //  下一页
          $(".next button").click(function(){ 
            if(currentPage >= page){                   
              console.log("next"+ currentPage);             
              return;
             }else{
               currentPage+=1;   
               str = currentPage+"/"+page;
               $(".currentPage button").html(str);
               renderProduct(categoryId,currentPage);
             }                      
        
          })


})