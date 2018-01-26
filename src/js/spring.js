var htmlWidth = $('html').width();
var designWidth = 750;

$('html').css({
	'font-size': htmlWidth / designWidth * 100 + 'px'
});


//开始加载的事件
var startTime;
//是否显示预加载
var isShowPre = true;
function preloading(isShowPre){
	
	createjs.CSSPlugin.install(createjs.Tween);
	startTime = new Date().getTime();
	
	if(isShowPre){
		
		var t1 = document.getElementById("t1");
		createjs.Tween.get(t1, {loop: false})
			.set({opacity: "1"}, t1.style)
			.wait(2000)
			.set({opacity: "0"}, t1.style)
			
		var t2 = document.getElementById("t2");
		createjs.Tween.get(t2, {loop: false})
			.wait(4000)
			.set({opacity: "1"}, t2.style)
			.wait(2000)
			.set({opacity: "0"}, t2.style)
			
		var t3 = document.getElementById("t3");
		createjs.Tween.get(t3, {loop: false})
			.wait(8000)
			.set({opacity: "1"}, t3.style)
			.wait(2000)
			.set({opacity: "0"}, t3.style)
			
		var t4 = document.getElementById("t4");
		createjs.Tween.get(t4, {loop: false})
			.wait(12000)
			.set({opacity: "1"}, t4.style)
			.wait(2000)
			.set({opacity: "0"}, t4.style)
		
		var mainView = document.getElementById("mainView");
		createjs.Tween.get(mainView, {loop: false})
			.wait(16000)
			.set({opacity: "1"}, mainView.style);
		
	}else{
		
		var mainView = document.getElementById("mainView");
		createjs.Tween.get(mainView, {loop: false})
			.wait(1000)
			.set({opacity: "1"}, mainView.style);
		
	}
	createjs.Ticker.setFPS(10);
	
	//加载资源
	loadResource();
	
}

if(isPC()){
	$("body").html("<h2>请使用手机浏览</h2>");
}else{
	preloading(isShowPre);
}


//加载资源
var loader;
function loadResource(){
	loader = new createjs.LoadQueue();
	loader.installPlugin(createjs.Sound);
	loader.on("fileload", handleFileComplete);
	loader.on("progress", handleProgress);
	loader.on("complete", handleAllComplete);
	loader.loadFile({id: "bgm", src: "./src/file/bgm.mp3"});
	loader.loadFile({id: "video", src: "./src/file/video.mp4"});
	var manifest = [
		{id: "mainCanvasBg", src: "./src/img/spring/mainCanvasBg.jpg"}
		,{id: "scene1Ticket", src: "./src/img/spring/scene1Ticket.png"}
		,{id: "bgTicket", src: "./src/img/spring/bg-ticket.png"}
		,{id: "tickets_success", src: "./src/img/spring/tickets_success.png"}
		,{id: "tickets_failure", src: "./src/img/spring/tickets_failure.png"}
		
	];
	loader.loadManifest(manifest);
}
function handleFileComplete(evt){
	
}
//加载完成事件
function handleAllComplete(){
	
	//播放音乐
	createjs.Sound.play("bgm");
	
	//隐藏加载
	if(isShowPre){
		var endTime = new Date().getTime();
		console.log(endTime - startTime);
		if(endTime - startTime < 18000){
			setTimeout(function(){
				$("#mainView").addClass("show");
				$("#bgAudioBtn").css("z-index", "1000");
			}, (18000 - endTime + startTime))
		}else{
			$("#mainView").addClass("show");
			$("#bgAudioBtn").css("z-index", "1000");
		}
		
	}else{
		$("#mainView").addClass("show");
		$("#bgAudioBtn").css("z-index", "1000");
	}
	
	
	
	
	//初始化界面
	initMainView();
	
}

function handleProgress(evt){
	$("#bottomScreen p").text(Math.floor(evt.loaded*100) + "%");
}

//初始化界面
var windowWidth = window.innerWidth;
var windowHeight = window.innerHeight;
var mainCanvas;
var mainstage;
var mainCanvasBg;

//场景1
var scene1bg;
var scene1grant;
var scene1SpriteSheet;
var scene1SpriteSheet;

function initMainView(){
	
	//解决图片模糊问题
	mainCanvas = document.getElementById("mainCanvas");
	mainCanvas.width = windowWidth*2;
	mainCanvas.height = windowHeight*2;
	$("#mainCanvas").css({"width":windowWidth, "height": windowHeight});
	
	//创建舞台 
	mainstage = new createjs.Stage(mainCanvas);
	
	//渲染背景图片
	var container = new createjs.Container();
	mainCanvasBg = new createjs.Bitmap(loader.getResult("mainCanvasBg"));
	var scale = (2*windowHeight)/1334;
	mainCanvasBg.scaleX = mainCanvasBg.scaleY = scale;
	container.addChild(mainCanvasBg);
	
	mainstage.addChild(container);
	
	//出票机器
	scene1bg = new createjs.Bitmap(loader.getResult("scene1Ticket"));
	scene1bg.x = windowWidth - scene1bg.image.width/2;
	scene1bg.y = 100;
	mainstage.addChild(scene1bg);
	
	//票
	var ticket = new createjs.Bitmap(loader.getResult("bgTicket"));
	ticket.x = windowWidth - ticket.image.width/2;
	ticket.y = 200;
	mainstage.addChild(ticket);
	
	mainstage.update();
	
}

//按钮点击事件
$("#ticketBtn a").on("touchstart", function(){
	
	$("#goBtn").siblings().addClass("hide");
	//抢票成功几率50%
	var isSuccess = Math.random()*2 > 1;
	var imgFlag = "tickets_failure";
	isSuccess = true;
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
		"frames": {"regX": 0, "height": 389, "count": 12, "regY": 0, "width": 606},
		"animations": {
			"run": [0, 11],
		}
	});
	scene1grant = new createjs.Sprite(scene1SpriteSheet, "run");
	scene1grant.x = windowWidth - 606/2;
	scene1grant.y = 360;

	mainstage.addChild(scene1grant);
	createjs.Ticker.addEventListener("tick", mainstage);
	setTimeout(function(){
		scene1grant.stop();
		mainstage.update();
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
	$("#preloadWrap").addClass("toleft");
	$("#scene2").addClass("cur");
	playVideo();
});

//继续抢
$("#goBtn .go2").on("touchstart", function(){
	mainstage.removeChild(scene1grant);
	$("#ticketBtn a").trigger("touchstart");
});

//不抢了
$("#goBtn .go3").on("touchstart", function(){
	$("#preloadWrap").addClass("toleft");
	$("#scene3").addClass("cur");
	app.initScene3();
});

//播放视频
var video = document.getElementById("video");
function playVideo(){
	video.src = "./src/file/zbg.mp4";
	video.play();
}

video.onended = function(){
	$("#scene2").addClass("isHide").removeClass("cur");
	$("#scene3").addClass("cur");
};




















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











window.app = window.app || {};

//场景2
var scene2canvas;
var scene2stage;
var scene2bg;

app.initScene2 = function(){
	var video = document.getElementById("scene2video");
	//video.src = loader.getItem("video").src;
	video.play();
	
	/*scene2canvas = document.getElementById("scene2canvas");
	
	//创建舞台 
	scene2stage = new createjs.Stage(scene2canvas);
	//scene2stage.autoClear = true;
	
	//渲染背景图片
	var container = new createjs.Container();
	scene2bg = new createjs.Bitmap(loader.getResult("scene2bg"));
	var scale = (2*windowHeight)/1334;
	scene2bg.scaleX = scene2bg.scaleY = scale;
	container.addChild(scene2bg);
	
	scene2bg.alpha = 1; 
	
	scene2stage.addChild(container);
	scene2stage.update();
	
	createjs.Tween.get(scene2stage).to({x:(windowWidth*2 - scene2bg.image.width*scale)}, 20000, createjs.Ease.linear);
	
	createjs.Ticker.setFPS(30);  
	createjs.Ticker.addEventListener("tick", scene2stage);  */
	
}
function scene2Tick(event){
	
	var deltaS = event.delta / 1000;
	scene2bg.x = scene2bg.x - deltaS * 45;
	scene2stage.update();
	
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
	$("#remakeBtn").data("text", text);
	var url = "http://192.168.32.78:9001/poem?start_words=" + text;
	$("#inputDialog").removeClass("show");
	
	$(".showInputBtn").hide();
	$(".btnGroupWrap").show();
	
	$.ajax({
		url: url,
		type: "get",
		dataType: "jsonp",
		success: function(data){
			if(data.poem.length > 0){
				var html = createWords(data.poem);
				$("#words ul").html(html);
			}
			
		}
	})
})

//重新生成
$("#remakeBtn").on("touchstart", function(){
	$("#makeBtn").trigger("touchstart");
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