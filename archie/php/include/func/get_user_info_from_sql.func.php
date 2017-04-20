<?php
	/**
	*从数据库获取指定用户的信息
	*参数：openid
	*返回值：用户信息的关联数组
	*/
	function get_user_info_from_sql ($openid){
		$mysqli = new mysqli(HOST,USERNAME,PASSWORD,SQL,PORTNUM);
		if ($mysqli->connect_errno) {
			die($mysqli->connect_error);
		}
		$mysqli->query(UTF8);
		$sql = "SELECT * FROM user WHERE openid = '$openid'";
		$result = $mysqli->query($sql);
		$arr = $result->fetch_assoc();
		$mysqli->close();
		return $arr;
	}
 ?>