// ~~~~~ 注册方式选项卡~~~~~~
$(document).ready(function(){
    $(".regist_way div").click(function(){
    	$(".regist_way div").eq($(this).index()).addClass("active").siblings().removeClass('active');
		$(".regist_con").hide().eq($(this).index()).show();
    });
var email_btn = document.getElementById('email_btn');
var phone_btn = document.getElementById('phone_btn');
var have_warning = document.getElementsByClassName('have_warning');
var warning=document.getElementsByClassName('warning');
// ~~~~~ 注册信息提示~~~~~~
$(".have_tips").each(function(index, el) {
		$(el).focus(function() {			
			$(".tips:eq("+index+")").show();
		})
		$(el).blur(function() {		
			$(".tips:eq("+index+")").hide();
		})	
	});

$.extend({'match_detail':function(reg_con,input_con,index,name){
		var reg_exp = reg_con;
		if (input_con.val()=="") {
			// alert(1);
			index.text(name+"不能为空！");
		}else if (reg_exp.test(input_con.val())) {
			index.text("✅");
		}else{
			index.text(name+"格式不正确！");
		}
	}
})
$.extend({'password_ensure':function(input_con,index,last_input_con){
		if (input_con.val()=="") {
			index.text(name+"确认密码不能为空！");
		}else if (input_con.val()==last_input_con.val()) {
			index.text("✅");
		}else{
			index.text("确认密码与密码不一致！");
		}
	}
})
$.extend({'name_spell':function(input_con,index,name){
		if (input_con.val()=="") {
			index.text(name+"不能为空！");
		}else{
			index.text("✅");
		}
	}
})

$.extend({'code_ensure':function(input_con,index,code_con){
		if (input_con.val()=="") {
			index.text(name+"验证码不能为空！");
		}else if (input_con.val()==code_con.text()) {
			index.text("✅");
		}else{
			index.text("验证码不正确！");
		}
	}
})
// 账号验证
$(".have_warning:eq(0)").blur(function(){
	$.match_detail(/^[a-zA-Z\d]\w{1,8}[a-zA-Z\d]$/,$(".have_warning:eq(0)"),$(".warning:eq(0)"),"账号")
	if (warning[0].innerHTML=="✅") {
		var url="php/emailInfo_exist.php";
		var postbody="str=account&val="+$(".have_warning:eq(0)").val();
		requestByPOST(url,postbody,function(responseText){
			$(".warning:eq(0)").text(responseText);
		})
	}
});
// 邮箱验证
$(".have_warning:eq(1)").blur(function(){
	$.match_detail(/^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/,$(".have_warning:eq(1)"),$(".warning:eq(1)"),"电子邮箱")
	if (warning[1].innerHTML=="✅") {
		var url="php/emailInfo_exist.php";
		var postbody="str=email&val="+$(".have_warning:eq(1)").val();
		requestByPOST(url,postbody,function(responseText){
			$(".warning:eq(1)").text(responseText);
		})
	}
});
// 密码验证
$(".have_warning:eq(2)").blur(function(){
	$.match_detail(/^(?![a-zA-Z0-9]+$)(?![^a-zA-Z/D]+$)(?![^0-9/D]+$).{8,16}$/,$(".have_warning:eq(2)"),$(".warning:eq(2)"),"密码")
});
// 确认密码
$(".have_warning:eq(3)").blur(function(){
	$.password_ensure($(".have_warning:eq(3)"),$(".warning:eq(3)"),$(".have_warning:eq(2)"))
});
// 姓氏拼音
$(".have_warning:eq(4)").blur(function(){
	$.name_spell($(".have_warning:eq(4)"),$(".warning:eq(4)"),"姓氏拼音")
});
// 名字拼音
$(".have_warning:eq(5)").blur(function(){
	$.name_spell($(".have_warning:eq(5)"),$(".warning:eq(5)"),"名字拼音")
});
// 姓名
$(".have_warning:eq(6)").blur(function(){
	$.name_spell($(".have_warning:eq(6)"),$(".warning:eq(6)"),"姓名")
});
// 联系电话
$(".have_warning:eq(7)").blur(function(){
	$.match_detail(/^(13[0-9]|14[0-9]|15[0-9]|18[0-9])\d{8}$/,$(".have_warning:eq(7)"),$(".warning:eq(7)"),"联系电话")
	if (warning[7].innerHTML=="✅") {
		var url="php/emailInfo_exist.php";
		var postbody="str=tel&val="+$(".have_warning:eq(7)").val();
		requestByPOST(url,postbody,function(responseText){
			$(".warning:eq(7)").text(responseText);
		})
	}
});
// 验证码
$(".have_warning:eq(8)").blur(function(){
	$.code_ensure($(".have_warning:eq(8)"),$(".warning:eq(8)"),$("#email_code"))
});
// 手机号码
$(".have_warning:eq(9)").blur(function(){
	$.match_detail(/^(13[0-9]|14[0-9]|15[0-9]|18[0-9])\d{8}$/,$(".have_warning:eq(9)"),$(".warning:eq(9)"),"手机号码")
	if (warning[9].innerHTML=="✅") {
		var url="php/phoneInfo_exist.php";
		var postbody="phone="+$(".have_warning:eq(9)").val();
		requestByPOST(url,postbody,function(responseText){
			$(".warning:eq(9)").text(responseText);
		})
	}
});
// 密码
$(".have_warning:eq(10)").blur(function(){
	$.match_detail(/^(?![a-zA-Z0-9]+$)(?![^a-zA-Z/D]+$)(?![^0-9/D]+$).{8,16}$/,$(".have_warning:eq(10)"),$(".warning:eq(10)"),"密码")
});
// 确认密码
$(".have_warning:eq(11)").blur(function(){
	$.password_ensure($(".have_warning:eq(11)"),$(".warning:eq(11)"),$(".have_warning:eq(10)"))
});
// 验证码
$(".have_warning:eq(12)").blur(function(){
	$.code_ensure($(".have_warning:eq(12)"),$(".warning:eq(12)"),$("#email_code"))
});

// ~~~~~ 二维码变化~~~~~~
// 随机函数
function rand(min, max){
	Num = Math.round(Math.random()*(max-min)) + min;
}
function code_do() {
	var arr = [];
	for (i = 0; i < 4; i++) {
		var a = rand(0, 9);
		arr.push(Num);
	}
	var con= arr.join("");
	$(".ref_con").text(con);
}
	$(".refresh").click(function(){
		code_do();
	})
		
code_do();

//前后台交互
// 注册
 // 邮箱注册
 	email_btn.onclick=function(){
			var url="php/email_regist.php";
			var postbody="account="+have_warning[0].value+"&email="+have_warning[1].value+"&password="+have_warning[2].value+"&last_name="+have_warning[4].value+"&first_name="+have_warning[5].value+"&name="+have_warning[6].value+"&tel="+have_warning[7].value;
			if (warning[0].innerHTML=="✅"&&warning[1].innerHTML=="✅"&&warning[2].innerHTML=="✅"&&warning[3].innerHTML=="✅"&&warning[4].innerHTML=="✅"&&warning[5].innerHTML=="✅"&&warning[6].innerHTML=="✅"&&warning[7].innerHTML=="✅"&&warning[8].innerHTML=="✅") {
				requestByPOST(url,postbody,function(responseText){
					alert(responseText);
					window.location.href="load.html";
				})
			}else{
				alert("请完善注册信息！");
			}	
		}
// 手机注册
	phone_btn.onclick=function(){
		var url="php/phone_regist.php";
		var postbody="phone="+have_warning[9].value+"&password="+have_warning[10].value;
		if (warning[10].innerHTML=="✅"&&warning[11].innerHTML=="✅"&&warning[12].innerHTML=="✅") {
			requestByPOST(url,postbody,function(responseText){
				alert(responseText);
				window.location.href="load.html";
			})
		}else{
			alert("请完善注册信息！");
		}	
	}	
});			