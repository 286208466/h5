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
	//$(".scene1").addClass("isHide").removeClass("cur");
	//$(".scene2").addClass("cur");
	
	//出票
	//getTicket();
	
});

//出票
getTicket = function(){
	var canvas = document.getElementById("scene1canvas");
	var stage = new createjs.Stage(canvas);

	var spriteSheet = new createjs.SpriteSheet({
		//帧率
		framerate: 9,
		//图片地址
		"images": [loader.getResult("tickets")],
		"frames": {"regX": 129, "height": 166, "count": 12, "regY": 0, "width": 258},
		"animations": {
			"run": [0, 11],
		}
	});

	spriteSheet.on("complete", function(event) {
		console.log("Complete", event);
	});
	spriteSheet.on("error", function(event) {
		
	});

	var grant = new createjs.Sprite(spriteSheet, "run");
	grant.x = stage.canvas.width / 2;
	grant.y = 160;

	stage.addChild(grant);
	createjs.Ticker.timingMode = createjs.Ticker.RAF_SYNCHED;
	createjs.Ticker.addEventListener("tick", stage);
}

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
	//下雪动画
	initSnowCanvas("snowCanvas");
	//设置下雪的背景图片
	$("#snowCanvas").css("background-image", "url(./src/img/spring/scene1.jpg)");
	
	//出票机器背景
	$("#scene1canvas").css("background-image", "url(./src/img/spring/scene1Ticket.png)");
	
}



