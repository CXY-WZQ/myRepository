function loading(json){
	var index=0;
	var imgs=[];			

	for (var i = 0; i < json.arr.length; i++) {
	  	var imgobj=new Image();
		imgobj.src=json.arr[i];			
		imgobj.onload=function(){
			index++;
			var per=parseInt((index/json.arr.length)*100);
			if(json.span){
				json.span.innerHTML=per+'%';
			}
			if(json.CloadW){			
				json.CloadW.style.width=per+'%';
			}
			
			imgs.push(this);
			if(index==json.arr.length){
				json.succFn();
			}
						
		}
	}
}

function Cwrapfive(){
    var num=10;
    var Ctimer=null;
    var deg=0.02640845*$(window).height();
    var c = 0.025*(568-$(window).height())
    deg=deg+c;
    for (var i=0;i<10;i++) {
        $(".Cfigure>div").eq(i).css({"transform":"rotateZ("+deg+"deg)"})
    }
    setTimeout(function(){
    	$('.CtitleY').animate({opacity:1},1000);
    },500)
	Ctimer=setInterval(function(){
		if(num<0){
			$('.Cmask').animate({opacity:1},1000);
			$('.Cmask').addClass('animated fadeIn infinite');
			$('.Cpop').css({display:'none'});
			clearInterval(Ctimer);
		}
		setTimeout(function(num){
			
			$('.Cglass').eq(num).addClass('Cglass2');
			setTimeout(function(num){
				$('.Cfigure>div>.CtopmaskP').eq(num).css({
						opacity:1
					});			
			},500,num)
			
			setTimeout(function(num){			
				$(".Cpeople").eq(num).addClass("Cpeople2");
			},800,num)
		},300,num)
		num-=1;
	},300);
	
}



