<?php 
	include_once "include/include.php";
	session_start();
	$openid = $_SESSION["openid"];
	$action = $_POST['action'];
	if ($action == 'follow') {
		$result = is_follow($openid);
		if ($result) {
			$mysqli = new mysqli(HOST,USERNAME,PASSWORD,SQL,PORTNUM);
			if ($mysqli->connect_errno) {
				die($mysqli->connect_error);
			}
			$mysqli->query(UTF8);
			$sql = "SELECT * FROM user WHERE openid = '$openid'";
			$result1 = $mysqli->query($sql);
			$arr = $result1->fetch_assoc();
			$mysqli->close();
			$award = $arr['award'];
			$accept = $arr['accept'];
			$arr1 = array();
			array_push($arr1,$award);
			array_push($arr1,$accept);
			if ($arr['name'] == "" || $arr["tel" == ""]) {
				array_push($arr1, 1);
			}else{
				array_push($arr1, 0);
			}
			$json = json_encode($arr1);
			echo $json;
		}else{
			echo 0;
		}
	}else if($action == 'get_had_award'){
		$arr = get_user_info_from_sql($openid);
		$award = $arr['award'];
		$accept = $arr['accept'];
		$arr1 = array();
		array_push($arr1, $award);
		array_push($arr1, $accept);
		$json = json_encode($arr1);
		echo $json;
	}else if ($action == 'update_award') {
		$award = $_POST['award'];
		echo update_award($award,$openid);
	}else if ($action == 'update_score') {
		$score = $_POST['score'];
		echo update_score($score,$openid);
	}else if ($action == 'add_user_name_and_tel') {
		$name = $_POST['name'];
		$tel = $_POST['tel'];
		add_user_name_and_tel($name,$tel,$openid);
		echo 1;
	}else if ($action == 'update_accept') {
		$accept = $_POST['accept'];
		echo update_accept($accept,$openid);
	}else if ($action == 'update_share') {
		update_share($openid);
		echo 1;
	}else if ($action == 'get_sign_package') {	
	    $url = $_SERVER["HTTP_REFERER"];
		$sign = create_sign_package($url);
		echo $sign;
	}
 ?>