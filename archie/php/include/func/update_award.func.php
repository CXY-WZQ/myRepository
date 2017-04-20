<?php 
	function update_award ($award,$openid){
		$mysqli = new mysqli(HOST,USERNAME,PASSWORD,SQL,PORTNUM);
		if ($mysqli->connect_errno) {
			die($mysqli->connect_error);
		}
		$mysqli->query(UTF8);
		$sql1 = "SELECT * FROM user WHERE openid = '$openid'";
		$result = $mysqli->query($sql1);
		$arr = $result->fetch_assoc();
		$award += $arr['award'];
		$sql2 = "UPDATE user SET award = '$award' WHERE openid = '$openid'";
		$mysqli->query($sql2);
		$mysqli->close();
		return $award;
	}
?>