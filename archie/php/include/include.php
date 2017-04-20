<?php 
	header("content-type:text/html;charset=utf-8");
	date_default_timezone_set("PRC");
	define("ROOT",dirname(__FILE__));
	set_include_path(".".PATH_SEPARATOR.ROOT."/core".PATH_SEPARATOR.ROOT."/func".PATH_SEPARATOR.ROOT."/configs".PATH_SEPARATOR.get_include_path());
	include_once "config.php";
	include_once "cURL.php";
	include_once "get_user_info.func.php";
	include_once "get_token.func.php";
	include_once "get_ticket.func.php";
	include_once "is_follow.func.php";
	include_once "create_sign_package.func.php";
	include_once "get_user_info_from_sql.func.php";
	include_once "update_award.func.php";
	include_once "update_accept.func.php";
	include_once "update_share.func.php";
	include_once "update_score.func.php";
	include_once "add_user_name_and_tel.func.php";
 ?>