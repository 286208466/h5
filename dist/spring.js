!function(t){function e(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,e),i.l=!0,i.exports}var n={};e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=2)}([function(t,e){function n(t,e){var n=t[1]||"",i=t[3];if(!i)return n;if(e&&"function"==typeof btoa){var o=r(i);return[n].concat(i.sources.map(function(t){return"/*# sourceURL="+i.sourceRoot+t+" */"})).concat([o]).join("\n")}return[n].join("\n")}function r(t){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t))))+" */"}t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var r=n(e,t);return e[2]?"@media "+e[2]+"{"+r+"}":r}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},i=0;i<this.length;i++){var o=this[i][0];"number"==typeof o&&(r[o]=!0)}for(i=0;i<t.length;i++){var a=t[i];"number"==typeof a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),e.push(a))}},e}},function(t,e,n){function r(t,e){for(var n=0;n<t.length;n++){var r=t[n],i=h[r.id];if(i){i.refs++;for(var o=0;o<i.parts.length;o++)i.parts[o](r.parts[o]);for(;o<r.parts.length;o++)i.parts.push(d(r.parts[o],e))}else{for(var a=[],o=0;o<r.parts.length;o++)a.push(d(r.parts[o],e));h[r.id]={id:r.id,refs:1,parts:a}}}}function i(t,e){for(var n=[],r={},i=0;i<t.length;i++){var o=t[i],a=e.base?o[0]+e.base:o[0],s=o[1],l=o[2],c=o[3],d={css:s,media:l,sourceMap:c};r[a]?r[a].parts.push(d):n.push(r[a]={id:a,parts:[d]})}return n}function o(t,e){var n=v(t.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=x[x.length-1];if("top"===t.insertAt)r?r.nextSibling?n.insertBefore(e,r.nextSibling):n.appendChild(e):n.insertBefore(e,n.firstChild),x.push(e);else{if("bottom"!==t.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(e)}}function a(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var e=x.indexOf(t);e>=0&&x.splice(e,1)}function s(t){var e=document.createElement("style");return t.attrs.type="text/css",c(e,t.attrs),o(t,e),e}function l(t){var e=document.createElement("link");return t.attrs.type="text/css",t.attrs.rel="stylesheet",c(e,t.attrs),o(t,e),e}function c(t,e){Object.keys(e).forEach(function(n){t.setAttribute(n,e[n])})}function d(t,e){var n,r,i,o;if(e.transform&&t.css){if(!(o=e.transform(t.css)))return function(){};t.css=o}if(e.singleton){var c=g++;n=m||(m=s(e)),r=f.bind(null,n,c,!1),i=f.bind(null,n,c,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=l(e),r=p.bind(null,n,e),i=function(){a(n),n.href&&URL.revokeObjectURL(n.href)}):(n=s(e),r=u.bind(null,n),i=function(){a(n)});return r(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;r(t=e)}else i()}}function f(t,e,n,r){var i=n?"":r.css;if(t.styleSheet)t.styleSheet.cssText=w(e,i);else{var o=document.createTextNode(i),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(o,a[e]):t.appendChild(o)}}function u(t,e){var n=e.css,r=e.media;if(r&&t.setAttribute("media",r),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}function p(t,e,n){var r=n.css,i=n.sourceMap,o=void 0===e.convertToAbsoluteUrls&&i;(e.convertToAbsoluteUrls||o)&&(r=y(r)),i&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */");var a=new Blob([r],{type:"text/css"}),s=t.href;t.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}var h={},b=function(t){var e;return function(){return void 0===e&&(e=t.apply(this,arguments)),e}}(function(){return window&&document&&document.all&&!window.atob}),v=function(t){var e={};return function(n){return void 0===e[n]&&(e[n]=t.call(this,n)),e[n]}}(function(t){return document.querySelector(t)}),m=null,g=0,x=[],y=n(5);t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");e=e||{},e.attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||(e.singleton=b()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var n=i(t,e);return r(n,e),function(t){for(var o=[],a=0;a<n.length;a++){var s=n[a],l=h[s.id];l.refs--,o.push(l)}if(t){r(i(t,e),e)}for(var a=0;a<o.length;a++){var l=o[a];if(0===l.refs){for(var c=0;c<l.parts.length;c++)l.parts[c]();delete h[l.id]}}}};var w=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}()},function(t,e,n){n(3),n(6),$("#bgAudioBtn").on("touchstart",function(){var t=$(this);t.toggleClass("on");var e=document.getElementById("bgm");t.hasClass("on")?e.paused&&e.play():e.pause()}),$("#ticketBtn a").on("touchstart",function(){$(".section1").addClass("isHide").removeClass("cur"),$(".section2").addClass("cur")});var r=function(t){function e(t,e){return Math.floor(Math.random()*(e-t)+t)}function n(t){return t*Math.PI/180}function r(){setTimeout(function(){if(l.length<200)for(var t=0;t<20;t++)l.push({left:e(0,800),top:0,deg:e(-10,10),scale:e(2,10)});r()},200*Math.random()+500)}for(var i=document.getElementById(t),o=i.getContext("2d"),a=window.innerWidth,s=window.innerHeight,l=[],c=0;c<100;c++)l.push({left:e(0,800),top:e(0,600),deg:e(-10,10),scale:e(2,10)});setInterval(function(){o.clearRect(0,0,i.width,i.height),o.save();for(var t=0;t<l.length;t++){var e=.5*l[t].scale;if(l[t].left=l[t].left+Math.tan(n(l[t].deg))*e,l[t].top=l[t].top+e,l[t].left<0||l[t].left>a||l[t].top>s)l.splice(t--,1);else{var r=l[t].scale,c=o.createRadialGradient(l[t].left,l[t].top,r/4,l[t].left,l[t].top,r);c.addColorStop(0,"rgba(255,255,255,1)"),c.addColorStop(1,"rgba(255,255,255,0.1)"),o.fillStyle=c,o.beginPath(),o.arc(l[t].left,l[t].top,r,0,2*Math.PI),o.fill()}}o.restore()},50),r()};window.app=window.app||{},app.initScene1=function(){r("snowCanvas"),$("#loadingWrap").fadeOut(400)}},function(t,e,n){var r=n(4);"string"==typeof r&&(r=[[t.i,r,""]]);var i={minimize:!0};i.transform=void 0;n(1)(r,i);r.locals&&(t.exports=r.locals)},function(t,e,n){e=t.exports=n(0)(!1),e.push([t.i,'*{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}html{-webkit-tap-highlight-color:transparent;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;height:100%}::-webkit-input-placeholder{font-family:-apple-system-font,Helvetica Neue,sans-serif}a,abbr,acronym,address,applet,article,aside,audio,b,big,blockquote,body,canvas,caption,center,cite,code,dd,del,details,dfn,div,dl,dt,em,embed,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,header,hgroup,html,i,iframe,img,ins,kbd,label,legend,li,mark,menu,nav,object,ol,output,p,pre,q,ruby,s,samp,section,small,span,strike,strong,sub,summary,sup,table,tbody,td,tfoot,th,thead,time,tr,tt,u,ul,var,video{margin:0;padding:0;border:none;font-size:100%}body{height:100%;line-height:1.6;overflow-x:hidden;max-width:768px;font-family:-apple-system-font,Helvetica Neue,sans-serif}@media screen and (min-width:768px){body{margin:0 auto}}body iframe{display:none}article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block}audio,canvas,video{display:inline-block;*display:inline;*zoom:1}a{text-decoration:none;cursor:pointer;-webkit-touch-callout:none}ol,ul{list-style:none}img{border:0;vertical-align:middle;max-width:100%}h1,h2,h3,h4,h5,h6{font-weight:300}table{border-collapse:collapse;border-spacing:0}input,textarea{-webkit-appearance:none;border-radius:0;border:1px solid #dcdcdc}input:focus,textarea:focus{outline:none}p{word-wrap:break-word;word-break:break-all}.clearfix:after{clear:both;content:"";display:block;height:0;visibility:hidden}.clearfix{*zoom:1}.fr{float:right}.fl{float:left}.hidden{visibility:hidden}.hide{display:none}.img-circle{border-radius:50%}.ellipsis{overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.btn{display:inline-block;vertical-align:middle;text-align:center}',""])},function(t,e){t.exports=function(t){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var n=e.protocol+"//"+e.host,r=n+e.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(t,e){var i=e.trim().replace(/^"(.*)"$/,function(t,e){return e}).replace(/^'(.*)'$/,function(t,e){return e});if(/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(i))return t;var o;return o=0===i.indexOf("//")?i:0===i.indexOf("/")?n+i:r+i.replace(/^\.\//,""),"url("+JSON.stringify(o)+")"})}},function(t,e,n){var r=n(7);"string"==typeof r&&(r=[[t.i,r,""]]);var i={minimize:!0};i.transform=void 0;n(1)(r,i);r.locals&&(t.exports=r.locals)},function(t,e,n){var r=n(8);e=t.exports=n(0)(!1),e.push([t.i,".scene{-webkit-transition:all .45s linear;transition:all .45s linear;position:absolute;top:0;left:0;bottom:0;right:0;overflow:hidden;-webkit-transform:translate(100%);transform:translate(100%)}.scene.cur{-webkit-transform:translate(0);transform:translate(0)}.scene.isHide{-webkit-transform:translate(-100%);transform:translate(-100%)}#snowCanvas{background:url("+r(n(9))+") no-repeat left bottom 100%;background-size:100%}#ticketBtn{position:absolute;z-index:1;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}#ticketBtn a{line-height:44px;background:#085a94;color:#fff;border-radius:50%;font-size:18px;border:6px solid #5896e5;position:relative;z-index:1}#ticketBtn a,.circles{width:58px;height:58px}.circles{position:absolute;animation:a1 1.5s linear infinite;-webkit-animation:a1 1.5s linear infinite}.circles>div{border-radius:50%;width:58px;height:58px;background:#5896e5;padding:2px}.circles>div>div{border-radius:50%;width:54px;height:54px;background:#fff;padding:2px}.circles>div>div>div{width:50px;height:50px;background:#5896e5;padding:2px;border-radius:50%}.circles>div>div>div>div{width:46px;height:46px;background:#fff;padding:2px;border-radius:50%}.circles>div>div>div>div>div{width:42px;height:42px;background:#5896e5;border-radius:50%}@keyframes a1{0%{transform:scale(1);opacity:1}to{transform:scale(1.5);opacity:0}}@-webkit-keyframes a1{0%{transform:scale(1);opacity:1}to{transform:scale(1.5);opacity:0}}.section2{background:url("+r(n(10))+") no-repeat left bottom 100%;background-size:100%}",""])},function(t,e){t.exports=function(t){return"string"!=typeof t?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),/["'() \t\n]/.test(t)?'"'+t.replace(/"/g,'\\"').replace(/\n/g,"\\n")+'"':t)}},function(t,e){t.exports="/h5/dist/img/section1.jpg"},function(t,e){t.exports="/h5/dist/img/section2.jpg"}]);