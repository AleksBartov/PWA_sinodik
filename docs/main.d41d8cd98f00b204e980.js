!function(e){function n(n){for(var t,s,i=n[0],r=n[1],a=0,d=[];a<i.length;a++)s=i[a],o[s]&&d.push(o[s][0]),o[s]=0;for(t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t]);for(c&&c(n);d.length;)d.shift()()}var t={},o={0:0};function s(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,s),o.l=!0,o.exports}s.e=function(e){var n=[],t=o[e];if(0!==t)if(t)n.push(t[2]);else{var i=new Promise(function(n,s){t=o[e]=[n,s]});n.push(t[2]=i);var r,a=document.createElement("script");a.charset="utf-8",a.timeout=120,s.nc&&a.setAttribute("nonce",s.nc),a.src=function(e){return s.p+"chunks/"+({1:"todo"}[e]||e)+"."+{1:"d41d8cd98f00b204e980"}[e]+".js"}(e),r=function(n){a.onerror=a.onload=null,clearTimeout(c);var t=o[e];if(0!==t){if(t){var s=n&&("load"===n.type?"missing":n.type),i=n&&n.target&&n.target.src,r=new Error("Loading chunk "+e+" failed.\n("+s+": "+i+")");r.type=s,r.request=i,t[1](r)}o[e]=void 0}};var c=setTimeout(function(){r({type:"timeout",target:a})},12e4);a.onerror=a.onload=r,document.head.appendChild(a)}return Promise.all(n)},s.m=e,s.c=t,s.d=function(e,n,t){s.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,n){if(1&n&&(e=s(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(s.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)s.d(t,o,function(n){return e[n]}.bind(null,o));return t},s.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(n,"a",n),n},s.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},s.p="",s.oe=function(e){throw console.error(e),e};var i=window.webpackJsonp=window.webpackJsonp||[],r=i.push.bind(i);i.push=n,i=i.slice();for(var a=0;a<i.length;a++)n(i[a]);var c=r;s(s.s=0)}([function(e,n,t){"use strict";t.r(n);({init:function(){this.initComponents(),this.initServiceWorker()},initComponents:function(){var e=document.getElementsByClassName("sandwich")[0],n=document.getElementsByClassName("sandwich")[1],t=document.getElementsByClassName("sandwich")[2],o=!1;sandwich.onclick=function(s){o=!o,pause.hidden=!0,play.hidden=!1,clearInterval(i),o?(e.classList.add("sandwichTopOpened"),n.classList.add("sandwichMiddleOpened"),t.classList.add("sandwichBottomOpened"),hiddenMenu.classList.add("openedMenu"),startPray.classList.add("heightAuto"),newSinodik.classList.add("heightAuto"),newName.classList.add("heightAuto"),allSinodiks.classList.add("heightAuto"),logo.style.color="rgba(45,45,45,1)"):(e.classList.remove("sandwichTopOpened"),n.classList.remove("sandwichMiddleOpened"),t.classList.remove("sandwichBottomOpened"),hiddenMenu.classList.remove("openedMenu"),startPray.classList.remove("heightAuto"),newSinodik.classList.remove("heightAuto"),newName.classList.remove("heightAuto"),allSinodiks.classList.remove("heightAuto"),logo.style.color="snow")},allSinodiks.addEventListener("click",function(o){o.preventDefault(),startPray.classList.remove("heightAuto"),newSinodik.classList.remove("heightAuto"),newName.classList.remove("heightAuto"),allSinodiks.classList.remove("heightAuto"),setTimeout(function(){e.classList.remove("sandwichTopOpened"),n.classList.remove("sandwichMiddleOpened"),t.classList.remove("sandwichBottomOpened"),hiddenMenu.classList.remove("openedMenu"),logo.style.color="snow"},1500),setTimeout(function(){hiddenList.classList.add("openedList"),hiddenList.innerHTML="<center>+</center><h1>о здравии</h1>".concat(r.reverse().map(function(e){return e.name}).join("</br>"))},2e3)},!1);var s=0;var i,r=[{name:"археп. Амвросия",comments:"Ермаков"},{name:"арх. Никиты",comments:"духовник"},{name:"Елисаветы",comments:"супруга"},{name:"мл. Варвары",comments:"дочь"},{name:"мл. Иоанна",comments:"сын"},{name:"мл. Бориса",comments:"сын"},{name:"мл. Любови",comments:"дочь"},{name:"мл. Стефана",comments:"крестник"},{name:"мл. Иоанна",comments:"крестник"},{name:"археп. Амвросия",comments:"Ермаков"},{name:"арх. Никиты",comments:"духовник"},{name:"Елисаветы",comments:"супруга"},{name:"мл. Варвары",comments:"дочь"},{name:"мл. Иоанна",comments:"сын"},{name:"мл. Бориса",comments:"сын"},{name:"мл. Любови",comments:"дочь"},{name:"мл. Стефана",comments:"крестник"},{name:"мл. Иоанна",comments:"крестник"},{name:"мл. Александра",comments:"крестник"},{name:"мл. Леонида",comments:"крестник"}];function a(e){var n=document.getElementById(e),t=n.getBoundingClientRect().top;n.style.opacity=t>0&&t<260?1:0,n.style.filter=t>30&&t<190?"blur(0px)":"blur(8px)"}r.reverse().forEach(function(e){return n=e,(t=document.createElement("div")).id="person_".concat(s),t.className="personDiv",t.innerHTML="".concat(n.name,"</br><p class='comments-for-name'>(").concat(n.comments,")</p>"),container.append(t),void s++;var n,t}),document.body.addEventListener("touchstart",function(e){"personDiv"==e.target.className&&(pause.hidden=!0,play.hidden=!1,clearInterval(i))},!0),document.body.addEventListener("touchmove",function(e){for(var n=0;n<s;n++)a("person_".concat(n))},!0);var c=0;play.onclick=function(e){e.target.hidden=!0,pause.hidden=!1,i=setInterval(function(){container.style.top="".concat(c,"px");for(var e=0;e<s;e++)a("person_".concat(e));c+=1,container.getBoundingClientRect().top>50&&(clearInterval(i),pause.hidden=!0,c=0)},8)},pause.onclick=function(e){pause.hidden=!0,play.hidden=!1,clearInterval(i)},reloadList.onclick=function(e){clearInterval(i),container.scrollIntoView(!1),pause.hidden=!1,c=0,i=setInterval(function(){container.style.top="".concat(c,"px");for(var e=0;e<s;e++)a("person_".concat(e));c+=1,container.getBoundingClientRect().top>50&&(clearInterval(i),container.scrollIntoView(!1),pause.hidden=!0,c=0)},8)},container.scrollIntoView(!1)},initServiceWorker:function(){navigator.serviceWorker&&navigator.serviceWorker.register("./sw.js").then(function(){console.log("sw registered successfully!")}).catch(function(e){console.log("Some error while registering sw:",e)})}}).init()}]);