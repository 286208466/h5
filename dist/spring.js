!function(e){function t(a){if(n[a])return n[a].exports;var i=n[a]={i:a,l:!1,exports:{}};return e[a].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,a){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:a})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t){function n(){u=new createjs.LoadQueue,u.installPlugin(createjs.Sound),u.on("fileload",a),u.on("progress",s),u.on("complete",i),u.loadFile({id:"bgm",src:"./src/file/bgm.mp3"}),u.loadFile({id:"video",src:"./src/file/video.mp4"});var e=[{id:"mainCanvasBg",src:"./src/img/spring/mainCanvasBg.jpg"},{id:"scene1Ticket",src:"./src/img/spring/scene1Ticket.png"},{id:"bgTicket",src:"./src/img/spring/bg-ticket.png"},{id:"tickets_success",src:"./src/img/spring/tickets_success.png"},{id:"tickets_failure",src:"./src/img/spring/tickets_failure.png"}];u.loadManifest(e)}function a(e){}function i(){if(createjs.Sound.play("bgm"),l){var e=(new Date).getTime();console.log(e-d),e-d<18e3?setTimeout(function(){$("#mainView").addClass("show"),$("#bgAudioBtn").css("z-index","1000")},18e3-e+d):($("#mainView").addClass("show"),$("#bgAudioBtn").css("z-index","1000"))}else $("#mainView").addClass("show"),$("#bgAudioBtn").css("z-index","1000");o()}function s(e){$("#bottomScreen p").text(Math.floor(100*e.loaded)+"%")}function o(){g=document.getElementById("mainCanvas"),g.width=2*v,g.height=2*y,$("#mainCanvas").css({width:v,height:y}),p=new createjs.Stage(g);var e=new createjs.Container;m=new createjs.Bitmap(u.getResult("mainCanvasBg"));var t=2*y/1334;m.scaleX=m.scaleY=t,e.addChild(m),p.addChild(e),h=new createjs.Bitmap(u.getResult("scene1Ticket")),h.x=v-h.image.width/2,h.y=100,p.addChild(h);var n=new createjs.Bitmap(u.getResult("bgTicket"));n.x=v-n.image.width/2,n.y=200,p.addChild(n),p.update()}function r(){B.src="./src/file/zbg.mp4",B.play()}var c=$("html").width();$("html").css({"font-size":c/750*100+"px"});var d,l=!0;isPC()?$("body").html("<h2>请使用手机浏览</h2>"):function(e){if(createjs.CSSPlugin.install(createjs.Tween),d=(new Date).getTime(),e){var t=document.getElementById("t1");createjs.Tween.get(t,{loop:!1}).set({opacity:"1"},t.style).wait(2e3).set({opacity:"0"},t.style);var a=document.getElementById("t2");createjs.Tween.get(a,{loop:!1}).wait(4e3).set({opacity:"1"},a.style).wait(2e3).set({opacity:"0"},a.style);var i=document.getElementById("t3");createjs.Tween.get(i,{loop:!1}).wait(8e3).set({opacity:"1"},i.style).wait(2e3).set({opacity:"0"},i.style);var s=document.getElementById("t4");createjs.Tween.get(s,{loop:!1}).wait(12e3).set({opacity:"1"},s.style).wait(2e3).set({opacity:"0"},s.style);var o=document.getElementById("mainView");createjs.Tween.get(o,{loop:!1}).wait(16e3).set({opacity:"1"},o.style)}else{var o=document.getElementById("mainView");createjs.Tween.get(o,{loop:!1}).wait(1e3).set({opacity:"1"},o.style)}createjs.Ticker.setFPS(10),n()}(l);var u,g,p,m,h,w,f,f,v=window.innerWidth,y=window.innerHeight;$("#ticketBtn a").on("touchstart",function(){$("#goBtn").siblings().addClass("hide");var e=2*Math.random()>1,t="tickets_failure";e=!0,e&&(t="tickets_success"),f=new createjs.SpriteSheet({framerate:9,images:[u.getResult(t)],frames:{regX:0,height:389,count:12,regY:0,width:606},animations:{run:[0,11]}}),w=new createjs.Sprite(f,"run"),w.x=v-303,w.y=360,p.addChild(w),createjs.Ticker.addEventListener("tick",p),setTimeout(function(){w.stop(),p.update(),e?($("#goBtn a[data-target='success']").removeClass("hide"),$("#goBtn a[data-target='failure']").addClass("hide")):($("#goBtn a[data-target='failure']").removeClass("hide"),$("#goBtn a[data-target='success']").addClass("hide"))},1400)}),$("#goBtn .go1").on("touchstart",function(){$("#preloadWrap").addClass("toleft"),$("#scene2").addClass("cur"),r()}),$("#goBtn .go2").on("touchstart",function(){p.removeChild(w),$("#ticketBtn a").trigger("touchstart")}),$("#goBtn .go3").on("touchstart",function(){$("#preloadWrap").addClass("toleft"),$("#scene3").addClass("cur"),app.initScene3()});var B=document.getElementById("video");B.onended=function(){$("#scene2").addClass("isHide").removeClass("cur"),$("#scene3").addClass("cur")},$("#bgAudioBtn").on("touchstart",function(){var e=$(this);e.toggleClass("on");document.getElementById("bgm");e.hasClass("on")?createjs.Sound.play("bgm"):createjs.Sound.stop("bgm")}),window.app=window.app||{};app.initScene2=function(){document.getElementById("scene2video").play()},app.initScene3=function(){var e=[["鞭炮声震除夕夜","万家灯火思语时"],["瑞狗衔财报新春","金蝉吐运福如海"]],t=C(e);$("#words ul").html(t)};var C=function(e){for(var t="",n=0;n<e.length;n++)t+="<li>"+e[n][0]+",</li>",t+="<li>"+e[n][1]+"。</li>";return t};$(".showInputBtn").on("touchstart",function(){$("#inputDialog input").val(""),$("#inputDialog").addClass("show")}),$("#makeBtn").on("touchstart",function(){var e=$.trim($("#inputDialog input").val());$("#remakeBtn").data("text",e);var t="http://192.168.32.78:9001/poem?start_words="+e;$("#inputDialog").removeClass("show"),$(".showInputBtn").hide(),$(".btnGroupWrap").show(),$.ajax({url:t,type:"get",dataType:"jsonp",success:function(e){if(e.poem.length>0){var t=C(e.poem);$("#words ul").html(t)}}})}),$("#remakeBtn").on("touchstart",function(){$("#makeBtn").trigger("touchstart")}),$("#reinputBtn").on("touchstart",function(){$(".showInputBtn").trigger("touchstart")}),$("#getImgBtn").on("click",function(){$("#previewWrap").addClass("show"),$("#previewWrap img").attr("src","./src/img/spring/bg-ticket.png")}),$("#previewWrap").on("click",function(){$(this).removeClass("show")})}]);