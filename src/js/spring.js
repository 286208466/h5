
var utils = require("./utils");

var htmlWidth = $('html').width();
var designWidth = 750;
var designHeight = 1334;

$('html').css({
	'font-size': htmlWidth / designWidth * 100 + 'px'
});

//开始加载的事件
var startTime;
//是否显示预加载
var isShowPre = Math.random()*2 > 1;
isShowPre = false;
function preloading(isShowPre){
	
	createjs.CSSPlugin.install(createjs.Tween);
	startTime = new Date().getTime();
	
	if(isShowPre){
		
		var t1 = document.getElementById("t1");
		createjs.Tween.get(t1, {loop: false})
			.wait(2000)
			.set({opacity: "1"}, t1.style)
			.wait(2000)
			.set({opacity: "0"}, t1.style).call(function(){
				
				var t2 = document.getElementById("t2");
				createjs.Tween.get(t2, {loop: false})
					.wait(2000)
					.set({opacity: "1"}, t2.style)
					.wait(2000)
					.set({opacity: "0"}, t2.style).call(function(){
						
						var t3 = document.getElementById("t3");
						createjs.Tween.get(t3, {loop: false})
							.wait(2000)
							.set({opacity: "1"}, t3.style)
							.wait(2000)
							.set({opacity: "0"}, t3.style).call(function(){
								
								var t4 = document.getElementById("t4");
								createjs.Tween.get(t4, {loop: false})
									.wait(2000)
									.set({opacity: "1"}, t4.style)
									.wait(2000)
									.set({opacity: "0"}, t4.style).call(function(){
										
										var mainView = document.getElementById("mainView");
										createjs.Tween.get(mainView, {loop: false})
											.wait(2000)
											.set({opacity: "1"}, mainView.style).call(function(){
												$("#mainView").css("z-index", "5");
											})
									})
							})
					})
			})
		
	}else{
		
		var mainView = document.getElementById("mainView");
		createjs.Tween.get(mainView, {loop: false})
			.wait(1000)
			.set({opacity: "1"}, mainView.style).call(function(){
				$("#mainView").css("z-index", "5");
			})
		
	}
	createjs.Ticker.setFPS(10);
	
	//加载资源
	loadResource();
	
}

if(isPC()){
	$("body").html("<h2>请使用手机浏览</h2>");
}else{
	try{
		preloading(isShowPre);
	}catch(e){
		$("#preloadWrap").addClass("toleft");
		$("#scene3").addClass("cur");
		initScene3();
	}
	
}

/*if(utils.isWx()){
	$("#scene3 .content").append('<img src="./src/img/spring/share.png" class="share" id="shareTip">');
}*/

//加载资源
var loader;
function loadResource(){
	loader = new createjs.LoadQueue();
	loader.installPlugin(createjs.Sound);
	loader.on("fileload", handleFileComplete);
	loader.on("progress", handleProgress);
	loader.on("complete", handleAllComplete);
	//loader.loadFile({id: "bgm", src: "./src/file/bgm.mp3"});
	loader.loadFile({id: "video", src: "./src/file/zbg.mp4"});
	var manifest = [
		{id: "scene1", src: "./src/img/spring/scene1.jpg"}
		//,{id: "mainCanvasBg", src: "./src/img/spring/mainCanvasBg.jpg"}
		,{id: "scene1Ticket", src: "./src/img/spring/scene1Ticket.png"}
		,{id: "scene1BgTicket", src: "./src/img/spring/scene1BgTicket.png"}
		,{id: "scene1Btn", src: "./src/img/spring/scene1Btn.png"}
		,{id: "ticketsSuccess", src: "./src/img/spring/ticketsSuccess.png"}
		,{id: "ticketsFailure", src: "./src/img/spring/ticketsFailure.png"}
		,{id: "tickets_failure", src: "./src/img/spring/tickets_failure.png"}
		
	];
	loader.loadManifest(manifest);
}
function handleFileComplete(evt){
}
//加载完成事件
function handleAllComplete(){
	
	//播放音乐
	//createjs.Sound.play("bgm");
	
	//隐藏加载
	if(isShowPre){
		var endTime = new Date().getTime();
		if(endTime - startTime < 20000){
			setTimeout(function(){
				showMainView();
			}, (20000 - endTime + startTime))
		}else{
			showMainView();
		}
		
	}else{
		setTimeout(function(){
			showMainView();
		}, 2000)
	}
	
	/*$("#leftScreen, #rightScreen").on("touchend", function(){
		
		showMainView();
		
	})*/
	
	//初始化界面
	initMainView();
	
	
}

var videoCurrentTime;
var showMainView = function(){
	$("#progress").hide();
	$("#mainView").addClass("show");
	var video = document.getElementById("video");
	//video.width = windowWidth;
	//video.height = windowHeight;
	//v.poster = loader.getItem("scene1").src;
	video.src = loader.getItem("video").src;
	
	video.onended = function(){
		$("#scene2").addClass("isHide").removeClass("cur");
		$("#scene3").addClass("cur");
		initScene3();
	};

	video.addEventListener("timeupdate",function(){
		console.log(this.currentTime)
		if(!videoCurrentTime && this.currentTime > 24.2){
			this.pause();
			videoCurrentTime = this.currentTime;
			$("#tip1").show();
		}
	});
	
}

function handleProgress(evt){
	var num = Math.floor(evt.loaded*100);
	$("#progress").text(num + "%");
	
}

//初始化界面
var windowWidth = window.innerWidth;
var windowHeight = window.innerHeight;
var mainCanvas;
var mainstage;
var mainCanvasBg;

//场景1
var scene1bg;
var scene1Ticket;
var scene1bgContainer;

function initMainView(){
	
	//解决图片模糊问题
	mainCanvas = document.getElementById("mainCanvas");
	mainCanvas.width = windowWidth*2;
	mainCanvas.height = windowHeight*2;
	$("#mainCanvas").css({"width":windowWidth, "height": windowHeight});
	
	//创建舞台 
	mainstage = new createjs.Stage(mainCanvas);
	
	createjs.Touch.enable(mainstage);
	
	//渲染背景图片
	//mainCanvasBg = new createjs.Bitmap(loader.getResult("mainCanvasBg"));
	//var scale = (2*windowHeight)/1334;
	mainCanvasBg = new createjs.Bitmap(loader.getResult("scene1"));
	var scale = (2*windowWidth)/750;
	mainCanvasBg.scaleX = mainCanvasBg.scaleY = scale;
	mainstage.addChild(mainCanvasBg);
	
	//出票机器
	scene1bg = new createjs.Bitmap(loader.getResult("scene1Ticket"));
	
	scene1bgContainer = new createjs.Container();
	scene1bgContainer.width = scene1bg.image.width;
	scene1bgContainer.height = scene1bg.image.height;
	scene1bgContainer.x = windowWidth - scene1bg.image.width/2;
	scene1bgContainer.y = 122*2*windowHeight/designHeight;
	
	scene1bg.x = 0;
	scene1bg.y = 0;
	scene1bgContainer.addChild(scene1bg);
	
	scene1Ticket = new createjs.Bitmap(loader.getResult("scene1BgTicket"));
	scene1Ticket.x = (scene1bgContainer.width - scene1Ticket.image.width)/2;
	scene1Ticket.y = 100;
	scene1bgContainer.addChild(scene1Ticket);
	
	mainstage.addChild(scene1bgContainer);
	
	mainstage.update();
	
}

//按钮点击事件
var scene1SpriteSheet;
var scene1grant;
var scene1Failure;
$("#ticketBtn .circleBtn").on("click", function(){
	
	$("#goBtn").siblings().addClass("hide");
	
	createjs.Ticker.setFPS(8);
	createjs.Ticker.addEventListener("tick", tick);
	
	if(!!scene1grant){
		mainstage.removeChild(scene1grant);
	}
	
	if(!!scene1Failure){
		mainstage.removeChild(scene1Failure);
	}
	
	//抢票成功几率50%
	var isSuccess = Math.random()*2 > 1;
	//isSuccess = false;
	
	if(isSuccess){
		//出票动画
		scene1SpriteSheet = new createjs.SpriteSheet({
			//帧率
			framerate: 9,
			//图片地址
			"images": [loader.getResult("ticketsSuccess")],
			"frames": {"regX": 0, "height": 389.5, "count": 12, "regY": 0, "width": 606},
			"animations": {
				"run": [0, 11],
				"endRun": [11]
			},
			"complete": true
		});
		scene1grant = new createjs.Sprite(scene1SpriteSheet);
		scene1grant.x = windowWidth - 606/2;
		scene1grant.y = scene1bgContainer.y + 280;
		mainstage.addChild(scene1grant);
		mainstage.update();
		scene1grant.gotoAndPlay("run");
		
	}else{
		scene1Failure = new createjs.Bitmap(loader.getResult("ticketsFailure"));
		scene1Failure.x = windowWidth - scene1Failure.image.width/2;
		scene1Failure.y = scene1bgContainer.y + 250;
		scene1Failure.alpha = 0;
		createjs.Tween.get(scene1Failure)
			.to({alpha: 1, y:(scene1bgContainer.y + 280)}, 500, createjs.Ease.linear);
		mainstage.addChild(scene1Failure);
		mainstage.update();
	}
	
	if(isSuccess){
		setTimeout(function(){
			scene1grant.gotoAndPlay("endRun");
			mainstage.update();
			$("#goBtn a[data-target='success']").removeClass("hide");
			$("#goBtn a[data-target='failure']").addClass("hide");
		}, (12)/8*1000);
		
	}else{
		$("#goBtn a[data-target='failure']").removeClass("hide");
		$("#goBtn a[data-target='success']").addClass("hide");
	}
	
	
	
	
});

function tick(){
	mainstage.update();
}
//回家
$("#goBtn .go1").on("click", function(){
	
	var video = document.getElementById("video");
	video.play();
	setTimeout(function(){
		$("#preloadWrap").addClass("hide");
	}, 500);
	if(browser.versions.iPhone){
		var tip = document.getElementById("tip2");
		createjs.Tween.get(tip, {loop: false})
			.wait(1000)
			.set({opacity: "1"}, tip.style)
			.wait(1000)
			.set({opacity: "0"}, tip.style)
			.wait(1000)
			.set({opacity: "1"}, tip.style)
			.wait(1000)
			.set({opacity: "0"}, tip.style)
			.wait(1000)
			.set({opacity: "1"}, tip.style)
			.wait(1000)
			.set({opacity: "0"}, tip.style)
	}
	
	
});

//继续抢
$("#goBtn .go2").on("click", function(){
	$("#goBtn a").addClass("hide");
	$("#ticketBtn .circleBtn").trigger("click");
});

//不抢了
$("#goBtn .go3").on("click", function(){
	$("#preloadWrap").addClass("toleft");
	$("#scene3").addClass("cur");
	initScene3();
});

$("#video").on("touchstart", function(e){
	e.preventDefault();
    e.stopPropagation();
	var v = document.getElementById("video");
	v.playbackRate = 2;
})

$("#video").on("touchend", function(e){
	e.preventDefault();
    e.stopPropagation();
	var v = document.getElementById("video");
	v.playbackRate = 1;
})

//回家过年
var tip1 = document.getElementById("tip1");
var xx,yy,XX,YY,swipeX,swipeY ;
tip1.addEventListener('touchstart',function(event){
    xx = event.targetTouches[0].screenX ;
    yy = event.targetTouches[0].screenY ;
    swipeX = true;
    swipeY = true ;
})
tip1.addEventListener('touchmove',function(event){
     XX = event.targetTouches[0].screenX ;
     YY = event.targetTouches[0].screenY ;
     if(swipeX && Math.abs(XX-xx)-Math.abs(YY-yy)>0)  //左右滑动
     {
         event.stopPropagation();//组织冒泡
         event.preventDefault();//阻止浏览器默认事件
         swipeY = false ;
         if(XX-xx < 0){
        	 console.log(0);
         }
     }
})
tip1.addEventListener('touchend',function(event){
	if(XX-xx<0){
		if(xx-XX>120){
			if(!$("#tip1").is(":hidden")){
				var v = document.getElementById("video");
				v.play();
				$("#tip1").hide();
			}
   	 	}else{
   	 		console.log("2")
   	 	}
   	 
    }else{
    	console.log("3")
    }
    
})

//判断访问终端
var browser = {
    versions: function(){
        var u = navigator.userAgent, app = navigator.appVersion;
        return {
            trident: u.indexOf('Trident') > -1, //IE内核
            presto: u.indexOf('Presto') > -1, //opera内核
            webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
            gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1,//火狐内核
            mobile: !!u.match(/AppleWebKit.*Mobile.*/), //是否为移动终端
            ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
            android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或者uc浏览器
            iPhone: u.indexOf('iPhone') > -1 , //是否为iPhone或者QQHD浏览器
            iPad: u.indexOf('iPad') > -1, //是否iPad
            webApp: u.indexOf('Safari') == -1, //是否web应该程序，没有头部与底部
            weixin: u.indexOf('MicroMessenger') > -1, //是否微信 （2015-01-22新增）
            qq: u.match(/\sQQ/i) == " qq" //是否QQ
        };
    }(),
    language: (navigator.browserLanguage || navigator.language).toLowerCase()
}

//声音按钮事件
/*$("#bgAudioBtn").on("touchstart", function(){
	var $this = $(this);
	$this.toggleClass("on");
	var audio = document.getElementById("bgm");
	if($this.hasClass("on")){
		createjs.Sound.play("bgm");
	}else{
		createjs.Sound.stop("bgm");
	}
});
*/

//场景3
function initScene3(){
	var words = [
		"新诗有明月", 
		"更有携手留",
		"年来走马蹄", 
		"半是出飞流",
		"快意方寸薄", 
		"一身无所求",
		"乐游揜不得", 
		"心地心不休"
	];
	var html = createWords(words);
	$("#words ul").html(html);
	
	if(utils.isWx()){
		/*var shareTip = document.getElementById("shareTip");
		createjs.Tween.get(shareTip, {loop: false})
		.wait(1000)
		.set({opacity: "1"}, shareTip.style)
		.wait(1000)
		.set({opacity: "0"}, shareTip.style)
		.wait(1000)
		.set({opacity: "1"}, shareTip.style)
		.wait(1000)
		.set({opacity: "0"}, shareTip.style)
		.wait(1000)
		.set({opacity: "1"}, shareTip.style)
		.wait(1000)
		.set({opacity: "0"}, shareTip.style)*/
	}
}
var createWords = function(words){
	var html = '';
	for(var i = 0; i < words.length; i++){
		if(i%2 == 0){
			html += '<li>';
			html += '<span>';
			for(var j = 0; j < words[i].length; j++){
				html += '<i>' + words[i][j] + '</i>'
			}
			html += ',</span>'
		}else{
			html += '<span>&ensp;';
			for(var j = 0; j < words[i].length; j++){
				html += '<i>' + words[i][j] + '</i>'
			}
			html += '。</span>';
			html += '</li>';
		}
		
	}
	return html;
}
$(".showInputBtn").on("click", function(){
	$("#inputDialog").addClass("show");
	$("#inputDialog input").val("");
});

//生成
window.poem = "";
$("#makeBtn").on("click", function(){
	var text = $.trim($("#inputDialog input").val());
	if(text == ""){
		text = "新年大吉大利";
	}
	if(text.length > 8){
		utils.warning("只支持2-8个简体中文作诗");
		return;
	}else if(!/^[\u4e00-\u9fa5]{2,8}$/i.test(text)){
		utils.warning("只支持2-8个简体中文作诗");
		return;
	}
	$("#remakeBtn").data("text", text);
	$("#inputDialog").removeClass("show");
	
	$(".showInputBtn").hide();
	$(".btnGroupWrap").show();
	
	utils.toast(true);
	$.ajax({
		url: "./../h5/poem",
		type: "post",
		data: {
			start_words: text
		},
		dataTyoe: "json",
		success: function(data){
			if(data.code == 0){
				utils.toast(false);
				window.poem = data.poem;
				if(data.poem.length > 0){
					var html = createWords(data.poem);
					$("#words ul").html(html);
				}
			}else{
				window.poem = "";
				$("#words ul").html("");
				resendPoem(text);
			}
			
		},
		error: function(){
			window.poem = "";
			$("#words ul").html("");
			resendPoem(text);
		}
	});
});

var resendPoem = function(text){
	$.ajax({
		url: "./../h5/poem",
		type: "post",
		data: {
			start_words: text
		},
		dataTyoe: "json",
		success: function(data){
			
			utils.toast(false);
			if(data.code == 0){
				window.poem = data.poem;
				if(data.poem.length > 0){
					var html = createWords(data.poem);
					$("#words ul").html(html);
				}
			}else if(data.code == 1004){
				utils.warning("只支持2-8个简体中文作诗");
			}else if(data.code == 1005){
				utils.warning("抱歉，小八哥作不来诗");
			}else{
				utils.warning("抱歉，小八哥走神了，请重新作诗");
			}
			
		},
		error: function(){
			utils.toast(false);
			utils.warning("抱歉，小八哥走神了，请重新作诗");
		}
	});
}

//重新生成
$("#remakeBtn").on("click", function(){
	if(window.poem == ""){
		$(".showInputBtn").trigger("click");
	}else{
		$("#makeBtn").trigger("click");
	}
	
});


//继续做诗
$("#reinputBtn").on("click", function(){
	$(".showInputBtn").trigger("click");
});

//生成图片
$("#getImgBtn").on("click", function(){
	utils.toast(true);
	$.ajax({
		url: "./../h5/sharegen",
		type: "post",
		data: {
			words: JSON.stringify(window.poem)
		},
		dataTyoe: "json",
		success: function(data){
			if(data.code == 0){
				utils.toast(false);
				$("#previewWrap").addClass("show");
				$("#previewWrap img").attr("src", data.url);
			}else{
				resendImg(window.poem);
			}
			
		},
		error: function(){
			resendImg(window.poem);
		}
	});
	
});

var resendImg = function(poem){

	$.ajax({
		url: "./../h5/sharegen",
		type: "post",
		data: {
			words: poem
		},
		dataTyoe: "json",
		success: function(data){
			utils.toast(false);
			if(data.code == 0){
				$("#previewWrap").addClass("show");
				$("#previewWrap img").attr("src", data.url);
			}else{
				utils.warning("诶，网络不佳，请重新生成");
			}
			
		},
		error: function(){
			utils.toast(false);
			utils.warning("诶，网络不佳，请重新生成");
		}
	});
}

$("#previewWrap .closeBtn").on("click", function(){
	$("#previewWrap").removeClass("show");
});


























window.app = window.app || {};

//场景2
var scene2canvas;
var scene2stage;
var scene2bg;

app.initScene2 = function(){
	
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

