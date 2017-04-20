<?php 
	function update_share ($openid){
		$mysqli = new mysqli(HOST,USERNAME,PASSWORD,SQL,PORTNUM);
		if ($mysqli->connect_errno) {
			die($mysqli->connect_error);
		}
		$mysqli->query(UTF8);
		$sql = "UPDATE user SET share = 1 WHERE openid = '$openid'";
		$mysqli->query($sql);
		$mysqli->close();
	}
 ?>