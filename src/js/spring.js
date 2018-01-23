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
	snowCanvas.width = maxW;
	snowCanvas.height = maxH;
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

var windowWidth = window.innerWidth;
var windowHeight = window.innerHeight;
//场景1
var scene1canvas = document.getElementById("scene1canvas");
var scene1stage = new createjs.Stage(scene1canvas);
var scene1grant;
var scene1SpriteSheet;
app.initScene1 = function(){
	//下雪动画
	initSnowCanvas("snowCanvas");
	//设置下雪的背景图片
	$("#snowCanvas").css("background-image", "url(./src/img/spring/scene1.jpg)");
	
	//出票机器背景
	var bg = new createjs.Bitmap(loader.getResult("scene1Ticket"));
	bg.scaleX = 0.5;
	bg.scaleY = 0.5;
	scene1stage.addChild(bg);
	scene1stage.update();
	
	//票
	var ticket = new createjs.Bitmap(loader.getResult("bgTicket"));
	ticket.scaleX = 0.5;
	ticket.scaleY = 0.5;
	var container = new createjs.Container();
	container.addChild(ticket);
	container.x = 20;
	container.y = 50;
	scene1stage.addChild(container);
	scene1stage.update();
	
}

//按钮点击事件
$("#ticketBtn a").on("touchstart", function(){
	
	$("#ticketBtn").addClass("hide");
	//抢票成功几率50%
	var isSuccess = Math.random()*2 > 1;
	var imgFlag = "tickets_failure";
	//isSuccess = false;
	if(isSuccess){
		imgFlag = "tickets_success";
		//成功
	}
	//出票动画
	scene1SpriteSheet = new createjs.SpriteSheet({
		//帧率
		framerate: 9,
		//图片地址
		"images": [loader.getResult(imgFlag)],
		"frames": {"regX": 129, "height": 166, "count": 12, "regY": 0, "width": 258},
		"animations": {
			"run": [0, 11],
		}
	});
	scene1grant = new createjs.Sprite(scene1SpriteSheet, "run");
	scene1grant.x = scene1stage.canvas.width / 2;
	scene1grant.y = 160;

	scene1stage.addChild(scene1grant);
	createjs.Ticker.addEventListener("tick", scene1stage);
	setTimeout(function(){
		scene1grant.stop();
		scene1stage.update();
		if(isSuccess){
			$("#goBtn a[data-target='success']").removeClass("hide");
			$("#goBtn a[data-target='failure']").addClass("hide");
		}else{
			$("#goBtn a[data-target='failure']").removeClass("hide");
			$("#goBtn a[data-target='success']").addClass("hide");
		}
		
	}, 1400);
	
});

//回家
$("#goBtn .go1").on("touchstart", function(){
	$(".scene1").addClass("isHide").removeClass("cur");
	$("#scene2").addClass("cur");
	app.initScene2();
});

//继续抢
$("#goBtn .go2").on("touchstart", function(){
	scene1stage.removeChild(scene1grant);
	$("#ticketBtn a").trigger("touchstart");
});

//不抢了
$("#goBtn .go3").on("touchstart", function(){
	$(".scene1").addClass("isHide").removeClass("cur");
	$("#scene3").addClass("cur");
	app.initScene3();
});

//场景2
app.initScene2 = function(){
	var video = document.getElementById("scene2video");
	video.src = loader.getItem("video").src;
	video.play();
}

//场景3
var scene3canvas;
var scene3stage;
app.initScene3 = function(){
	
	scene3canvas = document.getElementById("scene3canvas");
	scene3stage = new createjs.Stage(scene3canvas);
	
	//设置canvas的宽高
	scene3canvas.width = windowWidth;
	scene3canvas.height = windowHeight;
	
	//填充背景图
	var bitmap1 = new createjs.Bitmap(loader.getResult("scene3bg"));
	var width1 = bitmap1.image.width;
	var height1 = bitmap1.image.height;
	//750为设计稿的宽度，图片按屏幕比例缩放
	bitmap1.scaleX = windowWidth/750;
	bitmap1.scaleY = windowWidth/750;
	bitmap1.x = 0;
	bitmap1.y = 0; 
	scene3stage.addChild(bitmap1);
	scene3stage.update();
	
	//填充标题
	var bitmap2 = new createjs.Bitmap(loader.getResult("scene3title"));
	var width2 = bitmap2.image.width;
	var height2 = bitmap2.image.height;
	var offsetX1 = 20;
	var offsetY1 = 40;
	//750为设计稿的宽度，图片按屏幕比例缩放
	bitmap2.scaleX = windowWidth/750;
	bitmap2.scaleY = windowWidth/750;
	bitmap2.x = offsetX1;
	bitmap2.y = offsetY1; 
	scene3stage.addChild(bitmap2);
	scene3stage.update();
	
	//填充诗词
	var textBitmap = new createjs.Bitmap(loader.getResult("scene3text"));
	var width3 = textBitmap.image.width;
	var height3 = textBitmap.image.height;
	//750为设计稿的宽度，图片按屏幕比例缩放
	textBitmap.scaleX = windowWidth/750;
	textBitmap.scaleY = windowWidth/750;
	textBitmap.x = offsetX1;
	textBitmap.y = height2*(windowWidth/750) + offsetY1 + 40; 
	scene3stage.addChild(textBitmap);
	scene3stage.update();
	
	//填充版权信息
	var copyBitmap = new createjs.Bitmap(loader.getResult("scene3copy"));
	//750为设计稿的宽度，图片按屏幕比例缩放
	copyBitmap.scaleX = windowWidth/750;
	copyBitmap.scaleY = windowWidth/750;
	copyBitmap.x = (windowWidth - copyBitmap.image.width/2)/2;
	copyBitmap.y = windowHeight - copyBitmap.image.height;
	scene3stage.addChild(copyBitmap);
	scene3stage.update();
	
	
	//填充按钮
	var text = new createjs.Text("生成专属藏头诗", "20px Arial", "#ff7700");
	text.x = (windowWidth - text.lineWidth/2)/2;
	text.y = windowHeight - copyBitmap.image.height;
	scene3stage.addChild(text);
	scene3stage.update();
	
}

