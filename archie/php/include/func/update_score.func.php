<?php 
	function update_score ($score,$openid){
		$mysqli = new mysqli(HOST,USERNAME,PASSWORD,SQL,PORTNUM);
		if ($mysqli->connect_errno) {
			die($mysqli->connect_error);
		}
		$mysqli->query(UTF8);
		$sql1 = "SELECT * FROM user WHERE openid = '$openid'";
		$result = $mysqli->query($sql1);
		$arr = $result->fetch_assoc();
		$award = $arr['award'];
		$share_bol = $arr['share'];
		if ($score>$arr['score']) {
			$sql2 = "UPDATE user SET score = '$score' WHERE openid = '$openid'";
			$mysqli->query($sql2);
			$max_score = $score;
		}else{
			$max_score = $arr['score'];
		}
		$mysqli->close();
		$arr1 = array();
		array_push($arr1, $max_score);
		array_push($arr1, $award);
		array_push($arr1, $share_bol);
		$json = json_encode($arr1);
		return $json;
	}
 ?>