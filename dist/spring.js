!function(e){function t(i){if(n[i])return n[i].exports;var r=n[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,i){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:i})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=2)}([function(e,t){function n(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var o=i(r);return[n].concat(r.sources.map(function(e){return"/*# sourceURL="+r.sourceRoot+e+" */"})).concat([o]).join("\n")}return[n].join("\n")}function i(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var i=n(t,e);return t[2]?"@media "+t[2]+"{"+i+"}":i}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var i={},r=0;r<this.length;r++){var o=this[r][0];"number"==typeof o&&(i[o]=!0)}for(r=0;r<e.length;r++){var a=e[r];"number"==typeof a[0]&&i[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),t.push(a))}},t}},function(e,t,n){function i(e,t){for(var n=0;n<e.length;n++){var i=e[n],r=h[i.id];if(r){r.refs++;for(var o=0;o<r.parts.length;o++)r.parts[o](i.parts[o]);for(;o<i.parts.length;o++)r.parts.push(l(i.parts[o],t))}else{for(var a=[],o=0;o<i.parts.length;o++)a.push(l(i.parts[o],t));h[i.id]={id:i.id,refs:1,parts:a}}}}function r(e,t){for(var n=[],i={},r=0;r<e.length;r++){var o=e[r],a=t.base?o[0]+t.base:o[0],s=o[1],c=o[2],d=o[3],l={css:s,media:c,sourceMap:d};i[a]?i[a].parts.push(l):n.push(i[a]={id:a,parts:[l]})}return n}function o(e,t){var n=m(e.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var i=w[w.length-1];if("top"===e.insertAt)i?i.nextSibling?n.insertBefore(t,i.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),w.push(t);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(t)}}function a(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=w.indexOf(e);t>=0&&w.splice(t,1)}function s(e){var t=document.createElement("style");return e.attrs.type="text/css",d(t,e.attrs),o(e,t),t}function c(e){var t=document.createElement("link");return e.attrs.type="text/css",e.attrs.rel="stylesheet",d(t,e.attrs),o(e,t),t}function d(e,t){Object.keys(t).forEach(function(n){e.setAttribute(n,t[n])})}function l(e,t){var n,i,r,o;if(t.transform&&e.css){if(!(o=t.transform(e.css)))return function(){};e.css=o}if(t.singleton){var d=v++;n=b||(b=s(t)),i=u.bind(null,n,d,!1),r=u.bind(null,n,d,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=c(t),i=f.bind(null,n,t),r=function(){a(n),n.href&&URL.revokeObjectURL(n.href)}):(n=s(t),i=p.bind(null,n),r=function(){a(n)});return i(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;i(e=t)}else r()}}function u(e,t,n,i){var r=n?"":i.css;if(e.styleSheet)e.styleSheet.cssText=x(t,r);else{var o=document.createTextNode(r),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(o,a[t]):e.appendChild(o)}}function p(e,t){var n=t.css,i=t.media;if(i&&e.setAttribute("media",i),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}function f(e,t,n){var i=n.css,r=n.sourceMap,o=void 0===t.convertToAbsoluteUrls&&r;(t.convertToAbsoluteUrls||o)&&(i=y(i)),r&&(i+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var a=new Blob([i],{type:"text/css"}),s=e.href;e.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}var h={},g=function(e){var t;return function(){return void 0===t&&(t=e.apply(this,arguments)),t}}(function(){return window&&document&&document.all&&!window.atob}),m=function(e){var t={};return function(n){return void 0===t[n]&&(t[n]=e.call(this,n)),t[n]}}(function(e){return document.querySelector(e)}),b=null,v=0,w=[],y=n(5);e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");t=t||{},t.attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||(t.singleton=g()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var n=r(e,t);return i(n,t),function(e){for(var o=[],a=0;a<n.length;a++){var s=n[a],c=h[s.id];c.refs--,o.push(c)}if(e){i(r(e,t),t)}for(var a=0;a<o.length;a++){var c=o[a];if(0===c.refs){for(var d=0;d<c.parts.length;d++)c.parts[d]();delete h[c.id]}}}};var x=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},function(e,t,n){n(3),n(6),$("#bgAudioBtn").on("touchstart",function(){var e=$(this);e.toggleClass("on");document.getElementById("bgm");e.hasClass("on")?createjs.Sound.play("bgm"):createjs.Sound.stop("bgm")});window.app=window.app||{};var i,r,o,a=window.innerWidth,s=window.innerHeight;app.initScene1=function(){var e=document.getElementById("snowCanvas");e.width=2*a,e.height=2*s,$("#snowCanvas").css({width:a,height:s}),$("#snowCanvas").css("background-image","url(./src/img/spring/scene1.jpg)"),i=new createjs.Stage(e);var t=new createjs.Bitmap(loader.getResult("scene1Ticket"));t.x=a-t.image.width/2,t.y=100,i.addChild(t),i.update();var n=new createjs.Bitmap(loader.getResult("bgTicket")),r=new createjs.Container;r.addChild(n),r.x=a-n.image.width/2,r.y=200,i.addChild(r),i.update()},$("#ticketBtn a").on("touchstart",function(){$("#ticketBtn").addClass("hide");var e=2*Math.random()>1,t="tickets_failure";e=!0,e&&(t="tickets_success"),o=new createjs.SpriteSheet({framerate:9,images:[loader.getResult(t)],frames:{regX:0,height:389,count:12,regY:0,width:606},animations:{run:[0,11]}}),r=new createjs.Sprite(o,"run"),r.x=a-303,r.y=360,i.addChild(r),createjs.Ticker.addEventListener("tick",i),setTimeout(function(){r.stop(),i.update(),e?($("#goBtn a[data-target='success']").removeClass("hide"),$("#goBtn a[data-target='failure']").addClass("hide")):($("#goBtn a[data-target='failure']").removeClass("hide"),$("#goBtn a[data-target='success']").addClass("hide"))},1400)}),$("#goBtn .go1").on("touchstart",function(){$(".scene1").addClass("isHide").removeClass("cur"),$("#scene2").addClass("cur"),app.initScene2()}),$("#goBtn .go2").on("touchstart",function(){i.removeChild(r),$("#ticketBtn a").trigger("touchstart")}),$("#goBtn .go3").on("touchstart",function(){$(".scene1").addClass("isHide").removeClass("cur"),$("#scene3").addClass("cur"),app.initScene3()});app.initScene2=function(){document.getElementById("scene2video").play()},app.initScene3=function(){var e=[["鞭炮声震除夕夜","万家灯火思语时"],["瑞狗衔财报新春","金蝉吐运福如海"]],t=c(e);$("#words ul").html(t)};var c=function(e){for(var t="",n=0;n<e.length;n++)t+="<li>"+e[n][0]+",</li>",t+="<li>"+e[n][1]+"。</li>";return t};$(".showInputBtn").on("touchstart",function(){$("#inputDialog input").val(""),$("#inputDialog").addClass("show")}),$("#makeBtn").on("touchstart",function(){var e=$.trim($("#inputDialog input").val());$("#remakeBtn").data("text",e);var t="http://192.168.32.78:9001/poem?start_words="+e;$("#inputDialog").removeClass("show"),$(".showInputBtn").hide(),$(".btnGroupWrap").show(),$.ajax({url:t,type:"get",dataType:"jsonp",success:function(e){if(e.poem.length>0){var t=c(e.poem);$("#words ul").html(t)}}})}),$("#remakeBtn").on("touchstart",function(){$("#makeBtn").trigger("touchstart")}),$("#reinputBtn").on("touchstart",function(){$(".showInputBtn").trigger("touchstart")}),$("#getImgBtn").on("click",function(){$("#previewWrap").addClass("show"),$("#previewWrap img").attr("src","./src/img/spring/bg-ticket.png")}),$("#previewWrap").on("click",function(){$(this).removeClass("show")})},function(e,t,n){var i=n(4);"string"==typeof i&&(i=[[e.i,i,""]]);var r={minimize:!0};r.transform=void 0;n(1)(i,r);i.locals&&(e.exports=i.locals)},function(e,t,n){t=e.exports=n(0)(!1),t.push([e.i,'*{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}html{-webkit-tap-highlight-color:transparent;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;height:100%}::-webkit-input-placeholder{font-family:-apple-system-font,Helvetica Neue,sans-serif}a,abbr,acronym,address,applet,article,aside,audio,b,big,blockquote,body,canvas,caption,center,cite,code,dd,del,details,dfn,div,dl,dt,em,embed,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,header,hgroup,html,i,iframe,img,ins,kbd,label,legend,li,mark,menu,nav,object,ol,output,p,pre,q,ruby,s,samp,section,small,span,strike,strong,sub,summary,sup,table,tbody,td,tfoot,th,thead,time,tr,tt,u,ul,var,video{margin:0;padding:0;border:none;font-size:100%}body{height:100%;line-height:1.6;overflow-x:hidden;position:relative;font-family:-apple-system-font,Helvetica Neue,sans-serif}body iframe{display:none}article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block}audio,canvas,video{display:inline-block;*display:inline;*zoom:1}a{text-decoration:none;cursor:pointer;-webkit-touch-callout:none}ol,ul{list-style:none}img{border:0;vertical-align:middle;max-width:100%}h1,h2,h3,h4,h5,h6{font-weight:300}table{border-collapse:collapse;border-spacing:0}input,textarea{-webkit-appearance:none;border-radius:0;border:1px solid #dcdcdc}input:focus,textarea:focus{outline:none}p{word-wrap:break-word;word-break:break-all}.clearfix:after{clear:both;content:"";display:block;height:0;visibility:hidden}.clearfix{*zoom:1}.fr{float:right}.fl{float:left}.hidden{visibility:hidden}.hide{display:none!important}.img-circle{border-radius:50%}.ellipsis{overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.btn{display:inline-block;vertical-align:middle;text-align:center}.flex{display:flex}.flexitem{-moz-box-flex:1;flex:1 1 0}',""])},function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var n=t.protocol+"//"+t.host,i=n+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,t){var r=t.trim().replace(/^"(.*)"$/,function(e,t){return t}).replace(/^'(.*)'$/,function(e,t){return t});if(/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(r))return e;var o;return o=0===r.indexOf("//")?r:0===r.indexOf("/")?n+r:i+r.replace(/^\.\//,""),"url("+JSON.stringify(o)+")"})}},function(e,t,n){var i=n(7);"string"==typeof i&&(i=[[e.i,i,""]]);var r={minimize:!0};r.transform=void 0;n(1)(i,r);i.locals&&(e.exports=i.locals)},function(e,t,n){var i=n(8);t=e.exports=n(0)(!1),t.push([e.i,".scene{-webkit-transition:all .45s linear;transition:all .45s linear;position:fixed;top:0;left:0;width:100%;height:100%;overflow:hidden;-webkit-transform:translate(100%);transform:translate(100%)}.scene.cur{-webkit-transform:translate(0);transform:translate(0)}.scene.isHide{-webkit-transform:translate(-100%);transform:translate(-100%)}.scene1 #scene1canvas,.scene1 #snowCanvas{background-repeat:no-repeat;background-position:0 100%;background-size:100%}.scene1 .content{position:absolute;z-index:1;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);text-align:center}.scene1 .content>div{height:58px;font-size:0}#scene1canvas{margin-bottom:30px}#ticketBtn{position:relative;display:inline-block}#ticketBtn.hide{-webkit-animation:zoomOut .3s linear;animation:zoomOut .3s linear;opacity:0}@keyframes zoomOut{0%{opacity:1}50%{opacity:0;transform:scale3d(.3,.3,.3)}to{opacity:0}}#ticketBtn a{line-height:44px;background:#085a94;color:#fff;border-radius:50%;font-size:18px;border:6px solid #5896e5;position:relative;z-index:1;margin:0 auto}#ticketBtn a,.circles{width:58px;height:58px}.circles{position:absolute;animation:a1 1.5s linear infinite;-webkit-animation:a1 1.5s linear infinite}.circles>div{border-radius:50%;width:58px;height:58px;background:#5896e5;padding:2px}.circles>div>div{border-radius:50%;width:54px;height:54px;background:#fff;padding:2px}.circles>div>div>div{width:50px;height:50px;background:#5896e5;padding:2px;border-radius:50%}.circles>div>div>div>div{width:46px;height:46px;background:#fff;padding:2px;border-radius:50%}.circles>div>div>div>div>div{width:42px;height:42px;background:#5896e5;border-radius:50%}@keyframes a1{0%{transform:scale(1);opacity:1}to{transform:scale(1.5);opacity:0}}@-webkit-keyframes a1{0%{transform:scale(1);opacity:1}to{transform:scale(1.5);opacity:0}}#goBtn a{display:inline-block;width:2.2rem;text-align:center;color:#2d4354;background:#fff;line-height:.72rem;font-size:.32rem;border-radius:.24rem;padding:0 .36rem;margin:0 .1rem}#scene2{background:#fcf0da}#scene2 video{position:absolute;bottom:0;left:0;display:block;width:100%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);top:50%;left:50%}#scene3{background-repeat:no-repeat;background-position:0 100%;background-size:100%;background-image:url("+i(n(9))+")}#scene3 .content{width:100%;height:100%}#scene3 .title{padding:.7rem .2rem 0 .5rem}#scene3 #words{position:absolute;top:4.3rem;left:.7rem;width:4rem;height:5rem;font-size:.4rem;color:#e72e36}#scene3 .info{position:absolute;bottom:0;padding-bottom:.2rem;width:100%;text-align:center}#scene3 .copyright{width:1.94rem;height:.37rem;background:url("+i(n(10))+") no-repeat left top 100%;background-size:100%;display:block;margin:0 auto}#scene3 .showInputBtn{line-height:.72rem;background:#f19894;color:#fff;font-size:.32rem;border-radius:.24rem;margin:.8rem auto;padding:0 .36rem}#scene3 .btnGroupWrap{font-size:.32rem;text-align:center;margin:.8rem auto;display:none}#scene3 .btnGroupWrap .btn{line-height:.7rem;background:#f19894;color:#fff;border:1px solid #f19894;border-radius:.24rem;margin:0 .28rem;padding:0 .36rem}#scene3 .btnGroupWrap #reinputBtn{border-color:#a7514d;color:#a7514d;background:none}#scene3 .btnGroupWrap p{margin-top:.52rem}#scene3 .btnGroupWrap p a{color:#a7514d;text-decoration:underline}#scene3 .code{width:1.57rem;height:2.38rem;margin-right:1.34rem;float:right;display:block}#inputDialog{position:fixed;top:0;left:0;width:100%;height:100%;background:hsla(0,0%,100%,.6);font-size:.32rem;-webit-transition:all .3s ease;transition:all .3s ease;opacity:0;visibility:hidden}#inputDialog.show{opacity:1;visibility:visible}#inputDialog .logo img{margin:1.2rem auto;display:block;width:1.42rem}#inputDialog .input{position:relative;width:80%;margin:0 auto;margin-bottom:1.2rem}#inputDialog .input input{width:100%;display:block;height:.68rem;background:#dbe6ea;padding:0 .2rem;border:none;border-radius:3px}#inputDialog .btnWrap{text-align:center;font-size:.24rem}#inputDialog .btnWrap a{width:1.44rem;line-height:.4rem;text-align:center;background:#a0aaac;color:#fff;border-radius:3px;margin-top:.5rem}",""])},function(e,t){e.exports=function(e){return"string"!=typeof e?e:(/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),/["'() \t\n]/.test(e)?'"'+e.replace(/"/g,'\\"').replace(/\n/g,"\\n")+'"':e)}},function(e,t){e.exports="/h5/dist/img/scene3bg.jpg"},function(e,t){e.exports="/h5/dist/img/scene3copy.png"}]);