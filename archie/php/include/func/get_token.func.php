<?php 
	function get_token_from_net (){
		$url = "https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=".APPID."&secret=".APPSECRET;
		$res = httpGet($url);
		return $res;
	}

	function get_token(){
		$mysqli = new mysqli(HOST,USERNAME,PASSWORD,SQL,PORTNUM);
		if ($mysqli->connect_errno) {
			die($mysqli->connect_error);
		}
		$mysqli->query(UTF8);
		$sql = "SELECT * FROM access_token";
		$result = $mysqli->query($sql);
		if ($result->num_rows == 0) {
			$str = get_token_from_net();
			$obj = json_decode($str);
			$token = $obj->access_token;
			$last_time = time();
			$sql1 = "INSERT INTO access_token(token,last_time) VALUES('$token','$last_time')";
			$result1 = $mysqli->query($sql1);
			return $token;
		}else{
			$arr = $result->fetch_assoc();
			if (time() - $arr['last_time'] >= 7000) {
				$str = get_token_from_net();
				$obj = json_decode($str);
				$token = $obj->access_token;	
				$last_time = time();
				$sql1 = "UPDATE access_token SET token = '$token',last_time = '$last_time'";
				$result1 = $mysqli->query($sql);
				return $token;
			}else{
				return $arr['token'];
			}
		}
		$mysqli->close();
	}
 ?>