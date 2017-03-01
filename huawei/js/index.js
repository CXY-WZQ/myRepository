$(document).ready(function(){
	// ~~~~~封装slide_toggle~~~~~
	function slide_toggle(a,b){
		a.click(function(){
			b.slideToggle(200);
		})
	}
	// ~~~~~搜索框的显示/隐藏~~~~~
	slide_toggle($(".xs_button"),$(".hid_search"));
	slide_toggle($(".sm_button"),$(".sm_search"));
	// ~~~~~微信二维码的显示/隐藏~~~~~
	slide_toggle($(".wechat"),$(".wx_code"));
	slide_toggle($(".wx_code"),$(".wx_code"));

	// ~~~~~导航选项卡~~~~~
	$(".navbar-nav li").each(function(index, el) {
		$(el).on('mouseenter', function() {
			$(".nav_con_ul li").each(function(index, el) {
				$(el).slideUp(200);
			});
			$(".nav_con_ul li:eq("+index+")").slideDown(200);
			
		})	
	});

	$(".nav_con_ul li").each(function(index, el) {
		$(el).on('mouseenter', function() {
			$(this).show();
		}).on('mouseleave', function() {
			$(this).slideUp(200);
		});
	});

	$(".nav_banner").mouseleave(function() {
		$(".nav_con_ul li").slideUp(200);
		
	});
	// ~~~~~轮播图banner部分~~~~~
	var mySwiper = new Swiper('.main', {
		autoplay: 5000,
		loop:true,
		speed:800,
		autoplayDisableOnInteraction:false,
		pagination : '.swiper-pagination',
		prevButton:'.swiper-button-prev',
		nextButton:'.swiper-button-next',
		onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
	        swiperAnimateCache(swiper); //隐藏动画元素 
	        swiperAnimate(swiper); //初始化完成开始动画
      	}, 
	    onSlideChangeEnd: function(swiper){ 
	        swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
	    } 
	})
	// ~~~~~新闻轮播图部分~~~~~
	var mySwiper = new Swiper('.news_swiper', {
		autoplay: 8000,
		loop:true,
		speed:800,
		direction : 'vertical',
		autoplayDisableOnInteraction:false,
		prevButton:'.swiper-button-prev',
		nextButton:'.swiper-button-next',
	})

	// ~~~~~小火箭~~~~~ 
	var t=0;
	$(window).on("scroll",function(){
		t=$(window).scrollTop();        
		if (t>500) {
			$(".rocket").addClass("rocket_show");
		} else {
			$(".rocket").removeClass("rocket_show");
		}
	    $(".rocket").on("click",function(){
	    	var a=0;
	    	var b=t;
	    	var c=a-b;
	    	var d=20;
	    	var timer=setInterval(function(){
	    		a++;
	    		if (a>=d) {
	    			clearInterval(timer);
	    		} 
	    		$(window).scrollTop(Tween.Quart.easeInOut(a,b,c,d));	
	   		 },30)	
	    })
	})
})