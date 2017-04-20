<?php 
	function create_nonceStr ($length = 16){
	    $chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
	    $str = "";
	    for ($i = 0; $i < $length; $i++) {
	      $str .= substr($chars, mt_rand(0, strlen($chars) - 1), 1);
	    }
	    return $str;	
	}

	function create_sign_package($url){
		$ticket = get_ticket();
		$nonceStr = create_nonceStr();
		$timestamp = time();
		$string = "jsapi_ticket=$ticket&noncestr=$nonceStr&timestamp=$timestamp&url=$url";
		$signature = sha1($string);
		$sign_package = array(
			"appId" => APPID,
			"nonceStr" => $nonceStr,
			"timestamp" => $timestamp,
			"url" => $url,
			"signature" => $signature,
			"rawString" => $string
		);

		$json = json_encode($sign_package);
		return $json;
	}
 ?>