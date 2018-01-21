require("../css/common.css");
require("../css/spring.css");

$("#bgAudioBtn").on("touchstart", function(){
	var $this = $(this);
	$this.toggleClass("on");
	var audio = document.getElementById("bgm");
	if($this.hasClass("on")){
		audio.paused && audio.play();
	}else{
		audio.pause();
	}
})
$("#ticketBtn a").on("touchstart", function(){
	$(".section1").addClass("isHide").removeClass("cur");
	$(".section2").addClass("cur");
});

var initSnowCanvas = function(id){
	function rnd(n, m){
		return Math.floor(Math.random()*(m-n) + n);
	};

	function d2a(n){
		return n*Math.PI/180;
	};

	//在画布中生成雪花：
	var snowCanvas = document.getElementById(id);
	var ctx = snowCanvas.getContext("2d");
	var maxW = window.innerWidth;
	var maxH = window.innerHeight;
	var arr = [];
	var width = 20; 

	for(var i=0; i<100; i++){
		arr.push({
			"left":rnd(0, 800),
			"top":rnd(0, 600),
			"deg":rnd(-10, 10),
			"scale":rnd(2, 10) 
		});
	}

	setInterval(function(){
		ctx.clearRect(0, 0, snowCanvas.width, snowCanvas.height);
		ctx.save();

		for(var i=0; i<arr.length; i++){
			var h = 0.5 * arr[i].scale;
			arr[i].left = arr[i].left + Math.tan(d2a(arr[i].deg))*h;
			arr[i].top = arr[i].top + h;

			//若已在画面外则删除
			if(arr[i].left < 0 || arr[i].left > maxW || arr[i].top > maxH){
				arr.splice(i--, 1);
				continue;
			}

			var width_i = arr[i].scale;
			var ra = ctx.createRadialGradient(arr[i].left, arr[i].top, width_i/4, arr[i].left, arr[i].top, width_i);
			ra.addColorStop(0, "rgba(255,255,255,1)");
			ra.addColorStop(1, "rgba(255,255,255,0.1)");
			ctx.fillStyle = ra;

			ctx.beginPath();
			ctx.arc(arr[i].left, arr[i].top, width_i, 0, 2*Math.PI);
			ctx.fill();
		}

		ctx.restore();
	}, 50);

	//不断增加新的雪花
	function next(){
		setTimeout(function(){
			if(arr.length < 200){
				for(var i=0; i<20; i++){
					arr.push({
							"left":rnd(0, 800),
							"top":0,
							"deg":rnd(-10, 10),
							"scale":rnd(2, 10) 
							});
				}
			}
			next();
		}, Math.random()*200+500);
	};

	next();
}

window.app = window.app || {};

//初始化场景1
app.initScene1 = function(){
	initSnowCanvas("snowCanvas");
	$("#loadingWrap").fadeOut(400);
}



