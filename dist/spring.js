/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {


var utils = __webpack_require__(12);

var htmlWidth = $('html').width();
var designWidth = 750;
var designHeight = 1334;

$('html').css({
	'font-size': htmlWidth / designWidth * 100 + 'px'
});

//开始加载的事件
var startTime;
//是否显示预加载
var isShowPre = false;
function preloading(isShowPre){
	
	createjs.CSSPlugin.install(createjs.Tween);
	startTime = new Date().getTime();
	
	if(isShowPre){
		
		var t1 = document.getElementById("t1");
		createjs.Tween.get(t1, {loop: false})
			.wait(2000)
			.set({opacity: "1"}, t1.style)
			.wait(2000)
			.set({opacity: "0"}, t1.style)
			
		var t2 = document.getElementById("t2");
		createjs.Tween.get(t2, {loop: false})
			.wait(6000)
			.set({opacity: "1"}, t2.style)
			.wait(2000)
			.set({opacity: "0"}, t2.style)
			
		var t3 = document.getElementById("t3");
		createjs.Tween.get(t3, {loop: false})
			.wait(10000)
			.set({opacity: "1"}, t3.style)
			.wait(2000)
			.set({opacity: "0"}, t3.style)
			
		var t4 = document.getElementById("t4");
		createjs.Tween.get(t4, {loop: false})
			.wait(14000)
			.set({opacity: "1"}, t4.style)
			.wait(2000)
			.set({opacity: "0"}, t4.style)
		
		var mainView = document.getElementById("mainView");
		createjs.Tween.get(mainView, {loop: false})
			.wait(18000)
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
				$("#mainView").addClass("show");
				//$("#bgAudioBtn").css("z-index", "1000");
			}, (20000 - endTime + startTime))
		}else{
			$("#mainView").addClass("show");
			//$("#bgAudioBtn").css("z-index", "1000");
		}
		
	}else{
		setTimeout(function(){
			$("#mainView").addClass("show");
		}, 2000)
		//$("#bgAudioBtn").css("z-index", "1000");
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
var scene1Ticket;
var scene1bgContainer;
var scene1TicketContainer;

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
$("#ticketBtn a").on("touchstart", function(){
	
	$("#goBtn").siblings().addClass("hide");
	
	createjs.Ticker.setFPS(8);
	createjs.Ticker.addEventListener("tick", tick);
	
	if(!!scene1grant){
		mainstage.removeChild(scene1grant);
	}
	
	if(!!scene1Failure){
		scene1bgContainer.removeChild(scene1Failure);
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
				"startRun": [0]
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
		scene1Failure.x = (scene1bgContainer.width - scene1Failure.image.width)/2;
		scene1Failure.y = 200;
		scene1bgContainer.addChild(scene1Failure);
		mainstage.update();
	}
	
	if(isSuccess){
		setTimeout(function(){
			scene1grant.stop();
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
$("#goBtn .go1").on("touchstart", function(){
	$("#preloadWrap").addClass("toleft");
	$("#scene2").addClass("cur");
	playVideo();
});

//继续抢
$("#goBtn .go2").on("touchstart", function(){
	scene1grant.gotoAndPlay("startRun");
	scene1grant.gotoAndPlay("run");
	//$("#ticketBtn a").trigger("touchstart");
});

//不抢了
$("#goBtn .go3").on("touchstart", function(){
	$("#preloadWrap").addClass("toleft");
	$("#scene3").addClass("cur");
	initScene3();
});

//播放视频
var video = document.getElementById("video");
function playVideo(){
	video.src = loader.getItem("video").src;
	video.play();
}

video.onended = function(){
	$("#scene2").addClass("isHide").removeClass("cur");
	$("#scene3").addClass("cur");
	initScene3();
};

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
		"鞭炮声震除夕夜", 
		"万家灯火思语时",
		"瑞狗衔财报新春", 
		"金蝉吐运福如海"
	];
	var html = createWords(words);
	$("#words ul").html(html);
}
var createWords = function(words){
	var html = '';
	for(var i = 0; i < words.length; i++){
		if(i%2 == 0){
			html += '<li>';
			html += '<span>' + words[i] + ',</span>';
		}else{
			html += '<span>&ensp;' + words[i] + '。</span>';
			html += '</li>';
		}
		
	}
	return html;
}
$(".showInputBtn").on("touchstart", function(){
	$("#inputDialog input").val("");
	$("#inputDialog").addClass("show");
})

//生成
window.poem = "";
$("#makeBtn").on("touchstart", function(){
	var text = $.trim($("#inputDialog input").val());
	if(text == ""){
		text = "新年大吉大利";
	}
	if(text.length > 8){
		utils.warning("不能超过8个字哦");
		return;
	}else if(!/^[\u4e00-\u9fa5]{1,8}$/i.test(text)){
		utils.warning("只支持汉字作诗");
		return;
	}
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
			if(data.code == 0){
				window.poem = data.poem;
				if(data.poem.length > 0){
					var html = createWords(data.poem);
					$("#words ul").html(html);
				}
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
	var arr = [];
	for(var k in window.poem){
		arr.push("poem[]=" + window.poem[k]);
	}
	$.ajax({
		url: "http://192.168.32.78:9001/sharegen?" + arr.join("&"),
		type: "get",
		dataType: "jsonp",
		success: function(data){
			if(data.code == 0){
				$("#previewWrap").addClass("show");
				$("#previewWrap img").attr("src", data.url);
			}
			
		}
	})
	
})

$("#previewWrap").on("click", function(){
	/*$(this).removeClass("show");*/
})


























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



/***/ }),

/***/ 12:
/***/ (function(module, exports, __webpack_require__) {

;(function(){
	
	var _base64 = function(){

        var self = this;

        // private property
        var _keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";

        // public method for encoding
        this.encode = function (input) {
            var output = "";
            var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
            var i = 0;
            input = self._utf8_encode(input);
            while (i < input.length) {
                chr1 = input.charCodeAt(i++);
                chr2 = input.charCodeAt(i++);
                chr3 = input.charCodeAt(i++);
                enc1 = chr1 >> 2;
                enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
                enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
                enc4 = chr3 & 63;
                if (isNaN(chr2)) {
                    enc3 = enc4 = 64;
                } else if (isNaN(chr3)) {
                    enc4 = 64;
                }
                output = output +
                    _keyStr.charAt(enc1) + _keyStr.charAt(enc2) +
                    _keyStr.charAt(enc3) + _keyStr.charAt(enc4);
            }
            return output;
        }

        // public method for decoding
        this.decode = function (input) {
            var output = "";
            var chr1, chr2, chr3;
            var enc1, enc2, enc3, enc4;
            var i = 0;
            input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");
            while (i < input.length) {
                enc1 = _keyStr.indexOf(input.charAt(i++));
                enc2 = _keyStr.indexOf(input.charAt(i++));
                enc3 = _keyStr.indexOf(input.charAt(i++));
                enc4 = _keyStr.indexOf(input.charAt(i++));
                chr1 = (enc1 << 2) | (enc2 >> 4);
                chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
                chr3 = ((enc3 & 3) << 6) | enc4;
                output = output + String.fromCharCode(chr1);
                if (enc3 != 64) {
                    output = output + String.fromCharCode(chr2);
                }
                if (enc4 != 64) {
                    output = output + String.fromCharCode(chr3);
                }
            }
            output = self._utf8_decode(output);
            return output;
        }

        // private method for UTF-8 encoding
        this._utf8_encode = function (string) {
            string = string.replace(/\r\n/g,"\n");
            var utftext = "";
            for (var n = 0; n < string.length; n++) {
                var c = string.charCodeAt(n);
                if (c < 128) {
                    utftext += String.fromCharCode(c);
                } else if((c > 127) && (c < 2048)) {
                    utftext += String.fromCharCode((c >> 6) | 192);
                    utftext += String.fromCharCode((c & 63) | 128);
                } else {
                    utftext += String.fromCharCode((c >> 12) | 224);
                    utftext += String.fromCharCode(((c >> 6) & 63) | 128);
                    utftext += String.fromCharCode((c & 63) | 128);
                }

            }
            return utftext;
        }

        // private method for UTF-8 decoding
        this._utf8_decode = function (utftext) {
            var string = "";
            var i = 0;
            var c = 0;
            var c1 = 0;
            var c2 = 0;
            var c3 = 0;
            while ( i < utftext.length ) {
                c = utftext.charCodeAt(i);
                if (c < 128) {
                    string += String.fromCharCode(c);
                    i++;
                } else if((c > 191) && (c < 224)) {
                    c2 = utftext.charCodeAt(i+1);
                    string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
                    i += 2;
                } else {
                    c2 = utftext.charCodeAt(i+1);
                    c3 = utftext.charCodeAt(i+2);
                    string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
                    i += 3;
                }
            }
            return string;
        }
    };
    
    var Utils = function(){};
    
    //根据url参数名称获取参数的值
    Utils.prototype.getUrlParam = function(name){
    	let reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
		let r = window.location.search.substr(1).match(reg);
		if (r != null) {
			return decodeURI(r[2]);
		}
		return "";
    }
    
    //iframe下载文件
    Utils.prototype.download = function(filepath){
		let iframe = document.getElementById("downloadframe");
		if (iframe) {
			iframe.src = filepath;
		} else {
			iframe = document.createElement("iframe");
			iframe.src = filepath;
			iframe.style.display = "none";
			iframe.id = "downloadframe";
			document.body.appendChild(iframe);
		}
	}
    
    //获取IE版本
    Utils.prototype.getIEVersion = function(){
		let ua = navigator.userAgent, matches, tridentMap = {'4': 8, '5': 9, '6': 10, '7': 11};
		matches = ua.match(/MSIE (\d+)/i);
		if (matches && matches[1]) {
			return +matches[1];
		}
		matches = ua.match(/Trident\/(\d+)/i);
		if (matches && matches[1]) {
			return tridentMap[matches[1]] || null;
		}
		return null;
	}
    
    //封装ajax
    Utils.prototype.ajax = function(param){
		
		let _url = param.url;
		let _data = param.data || {};
		if(typeof _data == "object"){
			if(!!this.getCookie("companyCode")){
				_data.companyCode = this.getCookie("companyCode");
			}
		}
		let _type = !!param.type ? param.type : "post";
		let _async = (typeof param.async) != 'undefined' ? param.async : true;
		let _contentType = !!param.contentType ? param.contentType : "application/x-www-form-urlencoded";
		$.ajax({
			url: _url,
			data: _data,
			type: _type,
			dataType: "json",
			cache: false,
			async: _async,
			contentType: _contentType,
			beforeSend: function(request){
				param.beforeSend && param.beforeSend(request);
			},
			success: function(data){
				if(typeof param.success == "function"){
					param.success(data);
				}
			},
			error: function(res){
				if(typeof param.error == "function"){
					param.error(res);
				}
			},
			complete: function() {
				param.complete && param.complete();
			}
		});
	}
	
    
    //过滤表情
    Utils.prototype.filteremoji = function(content){
		let ranges = [  
			'\ud83c[\udf00-\udfff]',  
			'\ud83d[\udc00-\ude4f]',  
			'\ud83d[\ude80-\udeff]'  
		];  
		let emojireg = content.replace(new RegExp(ranges.join('|'), 'g'), '');  
		return emojireg;  
	}
    
    //计算字节
    Utils.prototype.countByte = function(s){
		let len = 0;  
		for (let i=0; i<s.length; i++) {   
			let c = s.charCodeAt(i);   
			//单字节加1   
			if ((c >= 0x0001 && c <= 0x007e) || (0xff60<=c && c<=0xff9f)) {   
				len++;   
			} else {   
				len += 2;   
			}   
		} 
		return len;
	}
    
    //验证url
    Utils.prototype.isUrl = function(str){
		return /(http|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&:/~\+#]*[\w\-\@?^=%&/~\+#])?/.test(str);
	}
    
    //过滤XSS攻击
    Utils.prototype.escape = function(str){
		return String(str).replace(/&(?!\w+;)/g, '&amp;')
		.replace(/</g, '&lt;')
		.replace(/>/g, '&gt;')
		.replace(/"/g, '&quot;')
		.replace(/'/g, '&#039;');
    }
    
    //加载js
    Utils.prototype.loadScript = function(url, callback){
		let script = document.createElement("script")
		script.type = "text/javascript";
		if (script.readyState) {
			script.onreadystatechange = function(){
				if (script.readyState == "loaded" || script.readyState == "complete") {
					script.onreadystatechange = null;
					callback();
				}
			}
		} else {
			script.onload = function(){
				callback();
			}
		}
		script.src = url;
		document.getElementsByTagName("head")[0].appendChild(script);
	}
    
    //设置cookie
    Utils.prototype.setCookie = function(key, value, exp) {
		let date = new Date();
		date.setTime(date.getTime() + (exp * 24 * 60 * 60 * 1000));
		let expires = "; expires=" + date.toGMTString();
		document.cookie = key + "=" + value + expires + "; path=/";
	}
    
    //获取cookie
    Utils.prototype.getCookie = function(key){
		let nameEQ = key + "=";
		let ca = document.cookie.split(';');
		for (let i = 0, max = ca.length; i < max; i++) {
			let c = ca[i];
			while (c.charAt(0) === ' ') {
				c = c.substring(1, c.length);
			}
			if (c.indexOf(nameEQ) === 0) {
				return c.substring(nameEQ.length, c.length);
			}
		}
		return null;
	}
    
    //去掉2边空格
    Utils.prototype.trim = function(str){
		str = typeof str === 'string' ? str : '';
		return str.trim
			? str.trim()
			: str.replace(/^\s|\s$/g, '');
	}
    
    //base64加密
    Utils.prototype.encrypt = function(str){
        let base64 = new _base64();
        let encrypt = base64.encode(str);
        return encrypt;
    }
    
    //base64解密
    Utils.prototype.decrypt = function(str){
        let base64 = new _base64();
        let decrypt = base64.decode(str);
        decrypt = escape(decrypt);
        decrypt = decrypt.replace(/%00/g, '');
        decrypt = unescape(decrypt);
        return decrypt;
    }
    
    Utils.prototype.warning = function(message){
    	let warning = $("#warning");
		let body = $(document.body);
		if(warning.length > 0){
			warning.remove();
		}
		let html = '<div id="warning"><div><span>' + message + '</span></div></div>';
		body.append(html);
		setTimeout(function(){
			body.find("#warning").fadeOut();
		}, 2500);
    }
    
    /**
	 * 
	 *	Object
	 *	
	 * */
    Utils.prototype.extend = function(obj){
    	var length = arguments.length;
    	if (length < 2 || obj == null) return obj;
    	for (var index = 1; index < length; index++) {
    		var source = arguments[index],
    		keys = this.allKeys(source),
    		l = keys.length;
    		for (var i = 0; i < l; i++) {
    			var key = keys[i];
    			//if (!1 || obj[key] === void 0) obj[key] = source[key];
    			if (true) obj[key] = source[key];
    		}
    	}
  	    return obj;
    }
    
    Utils.prototype.isObject = function(obj){
    	var type = typeof obj;
        return type === 'function' || type === 'object' && !!obj;
    }
    
    Utils.prototype.allKeys = function(obj){
    	if (!this.isObject(obj)) return [];
        var keys = [];
        for (var key in obj) keys.push(key);
        // Ahem, IE < 9.
        //if (hasEnumBug) collectNonEnumProps(obj, keys);
        return keys;
    }
    
	module.exports = new Utils();
	
	
}());

/***/ })

/******/ });