!function(e){var t={};function i(n){if(t[n])return t[n].exports;var s=t[n]={i:n,l:!1,exports:{}};return e[n].call(s.exports,s,s.exports,i),s.l=!0,s.exports}i.m=e,i.c=t,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)i.d(n,s,function(t){return e[t]}.bind(null,s));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i(i.s=1)}([function(e,t,i){},function(e,t,i){"use strict";i.r(t);i(0);console.log("loading time.ts");var n,s=function(){function e(e,t,i,n,s,r){var o=this;this.running=!1,this.timeElapsedStored=0,this.isBigTimer=!1,this.bigTimerText=document.getElementById("bigtimer-text");var a=document.getElementsByClassName("hidden-stopwatch")[0],l=document.getElementById("timerbank");this.theHTMLObject=a.cloneNode(!0),this.theHTMLObject.className="regular-stopwatch",l.appendChild(this.theHTMLObject),this.displayTime=this.theHTMLObject.getElementsByClassName("displayTime")[0],this.title=this.theHTMLObject.getElementsByClassName("title")[0],this.title.innerHTML=t,this.duration=r+1e3*s+60*n*1e3+60*i*60*1e3,this.setDisplayTime(this.convertTimeToString(this.duration)),this.theHTMLObject.addEventListener("click",(function(){e(o)})),this.delete=this.theHTMLObject.getElementsByClassName("deleteIcon")[0],this.delete.addEventListener("click",(function(e){e.preventDefault(),o.destroy()}))}return e.prototype.setAsBigTimer=function(){this.isBigTimer=!0,this.theHTMLObject.classList.add("titleOnly"),this.setDisplayTime(this.convertTimeToString(this.duration))},e.prototype.unsetBigTimer=function(){this.isBigTimer=!1,this.theHTMLObject.classList.remove("titleOnly")},e.prototype.play=function(){var e=this;this.startTime=new Date,0==this.running&&(this.running=!0,this.intervalHolder=setInterval((function(){e.updateTimer()}),100))},e.prototype.pause=function(){0!=this.running&&(this.timeElapsedStored+=this.getTimeElapsedSinceLastStart(),clearInterval(this.intervalHolder),this.running=!1,this.startTime=null)},e.prototype.reset=function(){this.pause(),this.timeElapsedStored=0,this.setDisplayTime(this.convertTimeToString(this.duration))},e.prototype.destroy=function(){this.theHTMLObject.remove(),this.unsetBigTimer()},e.prototype.convertTimeToString=function(e){var t=Math.floor(e/36e5);e-=60*t*60*1e3;var i=Math.floor(e/6e4);return e-=60*i*1e3,t+":"+i+":"+Math.floor(e/1e3)},e.prototype.setDisplayTime=function(e){this.isBigTimer&&(this.bigTimerText.innerHTML=e),this.displayTime.innerHTML=e},e.prototype.getTimeElapsedSinceLastStart=function(){return(new Date).getTime()-this.startTime.getTime()},e.prototype.updateTimer=function(){var e=this.getTimeElapsedSinceLastStart()+this.timeElapsedStored,t=this.duration-e;this.setDisplayTime(this.convertTimeToString(t))},e}(),r=function(e){n.unsetBigTimer(),n=e,e.setAsBigTimer()},o=new s(r,"Short",0,2,0,0);new s(r,"Five",0,5,0,0),(n=o).setAsBigTimer();var a=document.getElementById("play"),l=document.getElementById("pause"),c=document.getElementById("reset");a.addEventListener("click",(function(){n.play()})),l.addEventListener("click",(function(){n.pause()})),c.addEventListener("click",(function(){n.reset()})),document.getElementById("addContainer").addEventListener("click",(function(){document.getElementById("modal").classList.remove("invisible")})),document.getElementById("closeModal").addEventListener("click",(function(){document.getElementById("modal").classList.add("invisible")}));var d=document.getElementById("modalContent").getElementsByTagName("input");document.getElementById("modalButton").addEventListener("click",(function(){for(var e,t,i,n,o=0,a=Array.from(d);o<a.length;o++){var l=a[o];switch(console.log(l),l.name){case"Title":e=l.value;break;case"Hrs":t=+l.value;break;case"Mins":i=+l.value;break;case"Secs":n=+l.value}}new s(r,e,t,i,n,0),document.getElementById("modal").classList.add("invisible")})),console.log("loading app.ts")}]);