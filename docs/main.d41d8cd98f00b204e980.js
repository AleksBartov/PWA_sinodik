!function(e){function n(n){for(var t,i,r=n[0],s=n[1],a=0,d=[];a<r.length;a++)i=r[a],o[i]&&d.push(o[i][0]),o[i]=0;for(t in s)Object.prototype.hasOwnProperty.call(s,t)&&(e[t]=s[t]);for(c&&c(n);d.length;)d.shift()()}var t={},o={0:0};function i(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,i),o.l=!0,o.exports}i.e=function(e){var n=[],t=o[e];if(0!==t)if(t)n.push(t[2]);else{var r=new Promise(function(n,i){t=o[e]=[n,i]});n.push(t[2]=r);var s,a=document.createElement("script");a.charset="utf-8",a.timeout=120,i.nc&&a.setAttribute("nonce",i.nc),a.src=function(e){return i.p+"chunks/"+({1:"todo"}[e]||e)+"."+{1:"d41d8cd98f00b204e980"}[e]+".js"}(e),s=function(n){a.onerror=a.onload=null,clearTimeout(c);var t=o[e];if(0!==t){if(t){var i=n&&("load"===n.type?"missing":n.type),r=n&&n.target&&n.target.src,s=new Error("Loading chunk "+e+" failed.\n("+i+": "+r+")");s.type=i,s.request=r,t[1](s)}o[e]=void 0}};var c=setTimeout(function(){s({type:"timeout",target:a})},12e4);a.onerror=a.onload=s,document.head.appendChild(a)}return Promise.all(n)},i.m=e,i.c=t,i.d=function(e,n,t){i.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,n){if(1&n&&(e=i(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)i.d(t,o,function(n){return e[n]}.bind(null,o));return t},i.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(n,"a",n),n},i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},i.p="",i.oe=function(e){throw console.error(e),e};var r=window.webpackJsonp=window.webpackJsonp||[],s=r.push.bind(r);r.push=n,r=r.slice();for(var a=0;a<r.length;a++)n(r[a]);var c=s;i(i.s=0)}([function(e,n,t){"use strict";t.r(n);({init:function(){this.initComponents(),this.initServiceWorker()},initComponents:function(){var e=document.getElementsByClassName("sandwich")[0],n=document.getElementsByClassName("sandwich")[1],t=document.getElementsByClassName("sandwich")[2],o=!1;function i(){e.classList.remove("sandwichTopOpened"),n.classList.remove("sandwichMiddleOpened"),t.classList.remove("sandwichBottomOpened"),hiddenMenu.classList.remove("openedMenu"),startPray.classList.remove("heightAuto"),newSinodik.classList.remove("heightAuto"),newName.classList.remove("heightAuto"),allSinodiks.classList.remove("heightAuto"),logo.style.color="#e4e1dc"}function r(){container.style.top="".concat(d,"px");for(var e=0;e<s;e++)c("person_".concat(e));if(d+=1,container.getBoundingClientRect().top>50)return container.scrollIntoView(!1),pause.hidden=!0,void(d=0);u&&requestAnimationFrame(r)}sandwich.onclick=function(r){o=!o,u=!1,pause.hidden=!0,play.hidden=!1,o?(e.classList.add("sandwichTopOpened"),n.classList.add("sandwichMiddleOpened"),t.classList.add("sandwichBottomOpened"),hiddenMenu.classList.add("openedMenu"),startPray.classList.add("heightAuto"),newSinodik.classList.add("heightAuto"),newName.classList.add("heightAuto"),allSinodiks.classList.add("heightAuto"),logo.style.color="rgba(45,45,45,1)"):i()},allSinodiks.addEventListener("click",function(e){e.preventDefault(),startPray.classList.remove("heightAuto"),newSinodik.classList.remove("heightAuto"),newName.classList.remove("heightAuto"),allSinodiks.classList.remove("heightAuto"),setTimeout(function(){i()},1500),setTimeout(function(){hiddenList.classList.add("openedList"),hiddenList.innerHTML="<center>+</center><h1>о здравии</h1>".concat(a.reverse().map(function(e){return e.name}).join("</br>"))},2e3)},!1);var s=0;var a=[{name:"археп. Амвросия",comments:"Ермаков"},{name:"арх. Никиты",comments:"духовник"},{name:"Елисаветы",comments:"супруга"},{name:"мл. Варвары",comments:"дочь"},{name:"мл. Иоанна",comments:"сын"},{name:"мл. Бориса",comments:"сын"},{name:"мл. Любови",comments:"дочь"}];function c(e){var n=document.getElementById(e),t=n.getBoundingClientRect().top;n.style.opacity=t>0&&t<260?1:0,n.style.filter=t>30&&t<190?"blur(0px)":"blur(8px)"}a.reverse().forEach(function(e){return n=e,(t=document.createElement("div")).id="person_".concat(s),t.className="personDiv",t.innerHTML="".concat(n.name,"</br><p class='comments-for-name'>(").concat(n.comments,")</p>"),container.append(t),void s++;var n,t}),document.body.addEventListener("touchstart",function(e){"personDiv"==e.target.className&&(u=!1,pause.hidden=!0,play.hidden=!1)},!0),document.body.addEventListener("touchmove",function(e){for(var n=0;n<s;n++)c("person_".concat(n))},!0);var d=0,u=!1;play.onclick=function(e){e.target.hidden=!0,pause.hidden=!1,u=!0,requestAnimationFrame(r)},pause.onclick=function(e){pause.hidden=!0,play.hidden=!1,u=!1},reloadList.onclick=function(e){u=!1,container.scrollIntoView(!1),pause.hidden=!0,play.hidden=!1,d=0,requestAnimationFrame(r)},container.scrollIntoView(!1)},initServiceWorker:function(){navigator.serviceWorker&&navigator.serviceWorker.register("./sw.js").then(function(){console.log("sw registered successfully!")}).catch(function(e){console.log("Some error while registering sw:",e)})}}).init()}]);