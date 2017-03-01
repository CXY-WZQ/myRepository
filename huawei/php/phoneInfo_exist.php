<?php 
	$phone=$_POST["phone"];

	$mysqli=new mysqli("2xz1jwix.zzcdb.dnstoo.com","wzqsql_f","wzq920815","wzqsql","5502");

	if($mysqli->connect_errno){
		die($mysqli->connect_error);
	}
	$mysqli->query("set names utf8");
	$sql = "SELECT * FROM huawei_phone WHERE phone = '$phone'";
	$result=$mysqli->query($sql);
	if ($result->num_rows>0) {
		echo "该号码已被注册,请使用其他号码";
	}else{
		echo "✅";
	}
	$mysqli->close();
 ?>

