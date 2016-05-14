//轮播图部分
var oBox=document.getElementById("middle");
var pic=document.getElementById('ulWrap');
var picLi=pic.getElementsByTagName('ul');
// alert(picLi.length)
var imgs=pic.getElementsByTagName('img');
// alert(imgs.length)
var dots=document.getElementById('dots');
var dotLi=dots.getElementsByTagName('li');
// alert(dotLi.length)
var next=document.querySelector('.next')

pic.innerHTML+=pic.innerHTML;
pic.style.width=picLi.length*oBox.offsetWidth+"px";

var index=0;

function nextfn(){
	index++;
	if (index>dotLi.length-1) {
		index=0;
	} 
	if (pic.offsetLeft<=(-picLi.length*oBox.offsetWidth)/2) {
		pic.style.left="0px";
		pic.style.transitionDuration="0s";
	}
	pic.style.left=pic.offsetLeft-oBox.offsetWidth+"px";
	pic.style.transition="all .3s ease";

	for (var i=0;i<dotLi.length;i++) {
				dotLi[i].className="";
			}
			dotLi[index].className="active";
	}
next.onclick=function(){
			nextfn();
		}
for (var i=0;i<dotLi.length;i++) {
		dotLi[i].index=i;
		dotLi[i].onclick=function(){
			for (var i = 0; i < dotLi.length; i++){
				dotLi[i].className="";
			}
			this.className="active";
			pic.style.left= -this.index*oBox.offsetWidth+"px";
			pic.style.transition="all .3s ease";
		}
	}

// 点击变动态图部分
for (var i = 0; i < imgs.length; i++) {	
	imgs[i].index=i;
	imgs[i].boj=1;
	imgs[i].onclick=function(){	
		if (this.boj) {
			for (var i = 0; i < imgs.length; i++) {
				imgs[i].src=imgs[i].src.replace("gif","png");
				imgs[i].boj=1;
			}
			this.src=this.src.replace("png","gif");
	    	this.boj=0;
		}else{
			this.src=this.src.replace("gif","png");
	    	this.boj=1;
		}	  
	};
}