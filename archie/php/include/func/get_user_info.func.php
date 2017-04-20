 <?php 
	function get_token_normal($code){
		$url = "https://api.weixin.qq.com/sns/oauth2/access_token?appid=".APPID."&secret=".APPSECRET."&code={$code}&grant_type=authorization_code";
		$res = httpGet($url);
		return $res;
	}
	function get_user_info_normal($code){
		$res = get_token_normal($code);
		$obj = json_decode($res);
		$token = $obj->access_token;
		$openid = $obj->openid;
		$url = "https://api.weixin.qq.com/sns/userinfo?access_token={$token}&openid={$openid}&lang=zh_CN";
		$res = httpGet($url);
		return $res;	
	}
 ?>