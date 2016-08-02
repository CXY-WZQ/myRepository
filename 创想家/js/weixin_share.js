function _getRandomString(len) {
        len = len || 32;
        var $chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678'; // 默认去掉了容易混淆的字符oOLl,9gq,Vv,Uu,I1
        var maxPos = $chars.length;
        var pwd = '';
        for (i = 0; i < len; i++) {
            pwd += $chars.charAt(Math.floor(Math.random() * maxPos));
        }
        return pwd;
    }

    var timestamp = Math.round(new Date().getTime()/1000).toString();
    var num = _getRandomString(16).toLowerCase();
    
    var appid = 'wx8d31104326b3643a',
        appsecret = 'e895feb65ff8c253cb0def01f173318d',
        nonceStr = num,
        timestamp = timestamp,
        signature = '',
        url = location.href;
        $.getJSON(
           "http://api.ellechina.com/tool/getwxsign",
            {
                appid: appid,
                appsecret:appsecret,
                noncestr:nonceStr,
                timestamp:timestamp,
                url:url
            },
            function(data){
                signature = data.signature;
            }
        );

    var time = setInterval(function(){
        if(signature != ''){
            wx.config({
                debug: false,
                appId: 'wxaf97cdea0a1ce3cb',
                timestamp: timestamp,
                nonceStr: num,
                signature: signature,
                jsApiList:  [
                    'onMenuShareTimeline',
                    'onMenuShareAppMessage'
                ]
            });
            wx.ready(function(){
                wx.onMenuShareTimeline({
                    title:  $("meta[property='share-title']").attr("content"),
                    link: location.href,
                    imgUrl: $("meta[property='share-img']").attr("content"),
                    cancel:function(){
                        
                    }
                });
                wx.onMenuShareAppMessage({
                    title:  $("meta[property='share-title']").attr("content"),
                    desc: $("meta[property='share-desc']").attr("content"),
                    link: location.href,
                    imgUrl: $("meta[property='share-img']").attr("content"),
                    type: '',
                    dataUrl: ''
                });
            });
            clearInterval(time);
        }
    }, 10);