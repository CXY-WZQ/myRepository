<?php 
	function is_follow ($openid){
		$token = get_token();
		$url = "https://api.weixin.qq.com/cgi-bin/user/info?access_token={$token}&openid={$openid}&lang=zh_CN";
		$res = httpGet($url);
		$obj = json_decode($res);
		$follow = $obj->subscribe;
		if ($follow == 1) {
			return true;
		}else{
			return false;
		}
	}
 ?>