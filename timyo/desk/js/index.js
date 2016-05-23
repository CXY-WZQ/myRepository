// 文字轮播部分
	var aPicLi=document.querySelectorAll('.slogan span');
	var timer=null;
	var alpha=0;
	var index=0;

	//封装文字显示函数
	function show(){
		timer=setInterval(function(){
			alpha+=0.2;
			aPicLi[index].style.opacity=alpha;
				if(alpha>=1){
				clearInterval(timer);//关闭定时器,以便alpha能取到1
				alpha=0;		
			}
		},100)	
	}
	//封装文字隐藏函数
	function hide(){
		for (var i=0;i<aPicLi.length;i++) {
			aPicLi[i].style.opacity=0;
		}
	}
	//定义自动播放函数
	var timer1=null;
	function auto(){
		clearInterval(timer1);
		timer1=setInterval(function(){
			hide();	//先全部隐藏	，再执行动画显示
			clearInterval(timer);
			index++;
			if(index>aPicLi.length-1){
				index=0;
			}
			show();
		},3000)			
	}
	auto();
	
// 手机图片轮播部分
var mySwiper = new Swiper('.main', {
      	autoplay:3000,
    	loop:true,
        pagination: '.swiper-pagination',
        paginationClickable: '.swiper-pagination',
		autoplayDisableOnInteraction:false,
		speed:500,
        effect: 'fade',
    });