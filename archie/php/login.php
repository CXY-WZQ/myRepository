<?php
	session_start();
	include_once "include/include.php";
	echo "string";
	$code = $_GET['code'];
	
	$res = get_user_info_normal($code);
	$obj = json_decode($res);
	
	$openid = $obj->openid;
	$_SESSION["openid"] = $openid;
	$mysqli = new mysqli(HOST,USERNAME,PASSWORD,SQL,PORTNUM);
	if ($mysqli->connect_errno) {
		die($mysqli->connect_error);
	}
	$mysqli->query(UTF8);
	$sql = "SELECT * FROM user WHERE openid = '$openid'";
	$result = $mysqli->query($sql);
	if ($result->num_rows>0) {
		header("Location:http://227190.vhost363.cloudvhost.cn/archie/game.html");
	}else{
		$nickname = $obj->nickname;
		$sex = $obj->sex==1?"男":"女";
		$head_img = $obj->headimgurl;
		$score = 0;
		$sql1 = "INSERT INTO user(openid,nickname,score,sex,head_img) VALUES('$openid','$nickname','$score','$sex','$head_img')";
		$result1 = $mysqli->query($sql1);
		header("Location:http://227190.vhost363.cloudvhost.cn/archie/game.html");
	}
 ?>