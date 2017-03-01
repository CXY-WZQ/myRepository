<?php 
 	$str=$_POST["str"];
 	$str1=$_POST["val"];

	$mysqli=new mysqli("2xz1jwix.zzcdb.dnstoo.com","wzqsql_f","wzq920815","wzqsql","5502");
	if($mysqli->connect_errno){
		die($mysqli->connect_error);
	}
	$mysqli->query("set names utf8");
	if ($str=="account") {
		$sql = "SELECT * FROM huawei_email WHERE account = '$str1'";
	}else if ($str=="email") {
		$sql = "SELECT * FROM huawei_email WHERE email = '$str1'";	
	}else{
		$sql = "SELECT * FROM huawei_email WHERE tel = '$str1'";
	}
	$result=$mysqli->query($sql);
	if ($result->num_rows>0) {
		if ($str=="account") {
			echo "该账号已被注册,请使用其他账号";
		}else if ($str=="email") {
			echo "该邮箱已被注册,请使用其他邮箱";
		}else{
			echo "该号码已被注册,请使用其他号码";
		}	
	}else{
		echo "✅";
	}
	$mysqli->close();
?>