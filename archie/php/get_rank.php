<?php 
	include_once "include/include.php";
	session_start();
	$openid = $_SESSION['openid'];
	$mysqli = new mysqli(HOST,USERNAME,PASSWORD,SQL,PORTNUM);
	if ($mysqli->connect_errno) {
		die($mysqli->connect_error);
	}
	$mysqli->query(UTF8);
	$sql = "SELECT * FROM user WHERE openid != '' ORDER BY score DESC LIMIT 0,20";
	$result = $mysqli->query($sql);
	$arr = array();
	while ($row = $result->fetch_assoc()) {
		array_push($arr, $row);
	}
	$json = json_encode($arr);
	$mysqli->close();
	echo $json;
 ?>