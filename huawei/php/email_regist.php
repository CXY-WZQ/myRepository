<?php 
	$account=$_POST["account"];
	$email=$_POST["email"];
	$password=md5($_POST["password"]);
	$last_name=$_POST["last_name"];
	$first_name=$_POST["first_name"];
	$name=$_POST["name"];
	$tel=$_POST["tel"];

	$mysqli=new mysqli("2xz1jwix.zzcdb.dnstoo.com","wzqsql_f","wzq920815","wzqsql","5502");
	if($mysqli->connect_errno){
		die($mysqli->connect_error);
	}
	$mysqli->query("set names utf8");
	$sql = "SELECT * FROM huawei_email WHERE account = '$account'";
	$result=$mysqli->query($sql);
	if ($result->num_rows>0) {
		echo "用户名存在,请使用其他名称";
	}else{
		if ($account!=""&&$email!=""&&$password!=""&&$last_name!=""&&$first_name!=""&&$name!=""&&$tel!="") {
			$sql2="INSERT INTO huawei_email (account,email,password,last_name,first_name,name,tel) VALUES ('$account','$email','$password','$last_name','$first_name','$name','$tel')";
			$result2=$mysqli->query($sql2);
			if ($result2) {
				echo "注册成功！即将跳转登录页面";
			}
		}else{
			echo "请填写相关信息！";
		}
	}
	$mysqli->close();
 ?>