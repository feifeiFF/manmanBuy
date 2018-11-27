// 此方法专门用于解析获取地址栏参数
function getSearch ( k ) {
  var str = location.search;  // "?key=%E5%8C%A1%E5%A8%81&age=18&desc=%E5%B8%85
  str = decodeURI( str );    // "?key=匡威&age=18&desc=帅"
  str = str.slice( 1 );      // "key=匡威&age=18&desc=帅"
  var arr = str.split( "&" );   //  ["key=匡威", "age=18", "desc=帅"]

  var obj = {};
  // 遍历数组, 取得键值对
  arr.forEach(function( v, i ) {   // v => "age=18"
    var key = v.split("=")[0];    // age
    var value = v.split("=")[1];  // 18
    obj[ key ] = value;
  })

  // 将需要获取的对应属性返回
  return obj[ k ];
}



$(function(){
  // 1--点击回到顶部，回到顶部
  $(".toTop").click(function(){
    //  加入 finish 防止多次点出现动画 bug 
     $("html,body").finish().animate({"scrollTop":"0px"},900);
  })

  
  // 2--点击回退按钮回退到上一浏览页面
  $(".back").click(function(){
     window.history.back();
  })
 

  // 3--点击回到顶部
  $(".goTop").click(function(){
    $("html,body").finish().animate({"scrollTop":"0px"},200);
  })

  $(window).scroll(function(){   
    if($(window).scrollTop()<$(window).height()){
      $(".goTop").fadeOut(2000);
     }else{
      $(".goTop").fadeIn(2000);   
      
     }
  })
});
