// ~~~~~ 登陆方式选项卡~~~~~~
$(document).ready(function(){
    $(".load_way div").click(function(){
    	$(".load_way div").eq($(this).index()).addClass("active").siblings().removeClass('active');
		$(".load_con_left").hide().eq($(this).index()).show();
    });


	$("#email_btn").click(function(){
				var url="php/email_loading.php";
				var postbody="account="+$("#account1").val()+"&password="+$("#password1").val();
				requestByPOST(url,postbody,function(responseText){
					alert(responseText);
				})	
	})

	$("#phone_btn").click(function(){
				var url="php/phone_loading.php";
				var postbody="phone="+$("#account2").val()+"&password="+$("#password2").val();
				requestByPOST(url,postbody,function(responseText){
					alert(responseText);
				})	
	})

});

