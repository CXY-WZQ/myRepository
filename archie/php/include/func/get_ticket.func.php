<?php
	function get_ticket_from_net (){
		$token = get_token();
		$url = "https://api.weixin.qq.com/cgi-bin/ticket/getticket?access_token={$token}&type=jsapi";
		$res = httpGet($url);
		$obj = json_decode($res);
		return $obj->ticket;
	}


	function get_ticket(){
		$mysqli = new mysqli(HOST,USERNAME,PASSWORD,SQL,PORTNUM);
		if ($mysqli->connect_errno) {
			die($mysqli->connect_error);
		}
		$mysqli->query(UTF8);
		$sql = "SELECT * FROM jsapi_ticket";
		$result = $mysqli->query($sql);
		if ($result->num_rows == 0) {
			$ticket = get_ticket_from_net();
			$last_time = time();
			$sql1 = "INSERT INTO jsapi_ticket(ticket,last_time) VALUES('$ticket','$last_time')";
			$result1 = $mysqli->query($sql1);
			return $ticket;
		}else{
			$arr = $result->fetch_assoc();
			if (time() - $arr['last_time'] >= 7000) {
				$ticket = get_ticket_from_net();
				$last_time = time();
				$sql1 = "UPDATE jsapi_ticket SET ticket = '$ticket',last_time = '$last_time'";
				$result1 = $mysqli->query($sql);
				return $ticket;
			}else{
				return $arr['ticket'];
			}
		}
		$mysqli->close();
	}
 ?>