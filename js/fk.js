$(function(){
	/*热门搜索隐藏栏*/
	$(".hbli").hover(function(){
   	    $(".subNav").css("display","none")
   	    $(this).find(".subNav").finish()
   	    $(this).find(".subNav").slideDown();	
   },function(){
   	$(this).find(".subNav").finish()
   	 $(this).find(".subNav").slideUp();
   })
   
})

