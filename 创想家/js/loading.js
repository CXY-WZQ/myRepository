;(function($){
  $.extend($.fn, {
     fnLoad: function (arr,callback) {
//      $('<div id="loading">'+
//          '<p id="load_percent">0%</p>'+
//          '<p id="load_wrap"><span id="load_time"></span></p>'+
//          '</div>').insertBefore($(".Ctopmask"));
        var imgs=[];

        var index=0;

        for (var i=0; i<arr.length; i++){

            var imgObj=new Image();

            imgObj.src=arr[i];

            imgObj.onload=function (){

                index++;
                $("#load_time").css("left",parseInt((index/arr.length-1)*100)+"%");
                $("#load_percent").html(parseInt(index/arr.length*100)+"%");
                
                imgs.push(this);
                if (index==arr.length){
                    //全部加载完毕
                    $("#loading").remove();
                    callback&&callback();
                }
            }
        }
    }
  })
})(Zepto)