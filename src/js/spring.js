require("../css/common.css");
require("../css/spring.css");

$("#bgAudioBtn").on("touchstart", function(){
	var $this = $(this);
	$this.toggleClass("on");
	var audio = document.getElementById("bgm");
	if($this.hasClass("on")){
		createjs.Sound.play("bgm");
	}else{
		createjs.Sound.stop("bgm");
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
	isSuccess = false;
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
app.initScene3 = function(){
	var words = [
		["鞭炮声震除夕夜", "万家灯火思语时"],
		["瑞狗衔财报新春", "金蝉吐运福如海"]
	];
	var html = createWords(words);
	$("#words ul").html(html);
}
var createWords = function(words){
	var html = '';
	for(var i = 0; i < words.length; i++){
		html += '<li>' + words[i][0] + ',</li>';
		html += '<li>' + words[i][1] + '。</li>';
	}
	return html;
}
$(".showInputBtn").on("touchstart", function(){
	$("#inputDialog input").val("");
	$("#inputDialog").addClass("show");
})

//生成
$("#makeBtn").on("touchstart", function(){
	var text = $.trim($("#inputDialog input").val());
	var url = "http://192.168.32.78:9001/poem?start_words=" + text;
	$("#inputDialog").removeClass("show");
	
	$(".showInputBtn").hide();
	$(".btnGroupWrap").show();
	
	$.ajax({
		url: url,
		type: "get",
		dataType: "jsonp",
		success: function(data){
			console.log(data);
			
		}
	})
})

//重新生成
$("#remakeBtn").on("touchstart", function(){
	
})


//继续做诗
$("#reinputBtn").on("touchstart", function(){
	$(".showInputBtn").trigger("touchstart");
})

//生成图片
$("#getImgBtn").on("click", function(){
	$("#previewWrap").addClass("show");
	$("#previewWrap img").attr("src", "./src/img/spring/bg-ticket.png");
})

$("#previewWrap").on("click", function(){
	$(this).removeClass("show");
})