<?php
	function update_accept ($accept,$openid){
		$mysqli = new mysqli(HOST,USERNAME,PASSWORD,SQL,PORTNUM);
		if ($mysqli->connect_errno) {
			die($mysqli->connect_error);
		}
		$mysqli->query(UTF8);
		$sql1 = "SELECT * FROM user WHERE openid = '$openid'";
		$result = $mysqli->query($sql1);
		$arr = $result->fetch_assoc();
		$accept += $arr['accept'];
		$sql2 = "UPDATE user SET accept = '$accept' WHERE openid = '$openid'";
		$mysqli->query($sql2);
		$mysqli->close();
		return $accept;
	} 
?> 