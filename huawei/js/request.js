//1、GET方式的请求
	/*
		url：我们网络请求的地址；
		successCallback:是请求成功的回调函数
		errorCallback:是请求失败的回调函数
	*/
function requestByGET(url,successCallback,errorCallback){	
	//创建请求对象
	if (window.XMLHttpRequest) {
		var request= new XMLHttpRequest();
	} else {
		var request= new ActiveXObject("Microsoft.XMLHTTP");
	}
	//设置请求对象的请求地址
	request.open("GET",url,true);

	//发送请求
	request.send();

	//请求状态
	request.onreadystatechange=function(){
		if (request.readyState==4&&request.status==200) {
			//如果调用函数的时候，传入了成功的回调函数，我们调用一下这个回调函数，并把服务器返回的数据作为回调函数的参数，供外界使用。
			if (successCallback) {
				successCallback(request.responseText);//responseText:服务器返回的数据
			}
		}else if(request.readyState==4&&request.status!=200){
			if (errorCallback) {
				errorCallback(request.statusText);
			}
		}
	}
}
// 2、POST方式的请求
function requestByPOST(url,postbody,successCallback,errorCallback){

	if (window.XMLHttpRequest) {
		var request=new XMLHttpRequest();
	} else {
		var request=ActiveXObject('Microsoft.XMLHTTP');
	}

	request.open("POST",url,true);

	//仿form方式传数据:以键值对的方式
	request.setRequestHeader("content-type","application/x-www-form-urlencoded");//必须放在open之后

	request.send(postbody);

	request.onreadystatechange=function(){
		if (request.readyState==4&&request.status==200) {
			if (successCallback) {
				successCallback(request.responseText);
			}

		} else if(request.readyState==4&&request.status!=200){
			if (errorCallback) {
				errorCallback(request.statusText);  //传失败的信息（status）
			}
		}
	}
}
