<?php 
	function add_user_name_and_tel ($name,$tel,$openid){
		$mysqli = new mysqli(HOST,USERNAME,PASSWORD,SQL,PORTNUM);
		if ($mysqli->connect_errno) {
			die($mysqli->connect_error);
		}
		$mysqli->query(UTF8);
		$sql = "UPDATE user SET name = '$name',tel = '$tel' WHERE openid = '$openid'";
		$result = $mysqli->query($sql);
		$mysqli->close();
	}
 ?>