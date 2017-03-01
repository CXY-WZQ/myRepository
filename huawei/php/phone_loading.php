<?php 
	$phone=$_POST["phone"];
	$password=md5($_POST["password"]);
	
	$mysqli=new mysqli("2xz1jwix.zzcdb.dnstoo.com","wzqsql_f","wzq920815","wzqsql","5502");
	if($mysqli->connect_errno){
		die($mysqli->connect_error);
	}
	$mysqli->query("set names utf8");
	$sql = "SELECT * FROM huawei_phone WHERE phone = '$phone' and password ='$password'";
	$result=$mysqli->query($sql);
	if ($result->num_rows>0) {  
		echo "登录成功！"; 
	}else{
		echo "用户名或密码错误！";
	}
 ?>