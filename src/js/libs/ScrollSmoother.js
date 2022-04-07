/*!
 * ScrollSmoother 3.10.3
 * https://greensock.com
 *
 * @license Copyright 2022, GreenSock. All rights reserved.
 * *** DO NOT DEPLOY THIS FILE ***
 * This is a trial version that only works locally and on domains like codepen.io and codesandbox.io.
 * Loading it on an unauthorized domain violates the license and will cause a redirect.
 * Get the unrestricted file by joining Club GreenSock at https://greensock.com/club
 * @author: Jack Doyle, jack@greensock.com
 */

/* eslint-disable */

!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e=e||self).window=e.window||{})}(this,function(e){"use strict";function _defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function p(){return"undefined"!=typeof window}function q(){return C||p()&&(C=window.gsap)&&C.registerPlugin&&C}function t(){return String.fromCharCode.apply(null,arguments)}function z(e){for(var t=e.target;t&&t.scrollHeight<=t.clientHeight;)t=t.parentNode;t&&t!==M&&t!==L&&e.stopPropagation()}var C,_,R,F,L,M,I,O,B,D,A,N,a="ScrollSmoother",s=t(103,114,101,101,110,115,111,99,107,46,99,111,109),r=(function(e){var r="undefined"!=typeof window,n=0===(r?window.location.href:"").indexOf(t(102,105,108,101,58,47,47))||-1!==e.indexOf(t(108,111,99,97,108,104,111,115,116))||-1!==e.indexOf(t(49,50,55,46,48,32,48,46,49)),o=[s,t(99,111,100,101,112,101,110,46,105,111),t(99,111,100,101,112,101,110,46,112,108,117,109,98,105,110,103),t(99,111,100,101,112,101,110,46,100,101,118),t(99,111,100,101,112,101,110,46,97,112,112),t(99,111,100,101,112,101,110,46,119,101,98,115,105,116,101),t(112,101,110,115,46,99,108,111,117,100),t(99,115,115,45,116,114,105,99,107,115,46,99,111,109),t(99,100,112,110,46,105,111),t(112,101,110,115,46,105,111),t(103,97,110,110,111,110,46,116,118),t(99,111,100,101,99,97,110,121,111,110,46,110,101,116),t(116,104,101,109,101,102,111,114,101,115,116,46,110,101,116),t(99,101,114,101,98,114,97,120,46,99,111,46,117,107),t(116,121,109,112,97,110,117,115,46,110,101,116),t(116,119,101,101,110,109,97,120,46,99,111,109),t(116,119,101,101,110,108,105,116,101,46,99,111,109),t(112,108,110,107,114,46,99,111),t(104,111,116,106,97,114,46,99,111,109),t(119,101,98,112,97,99,107,98,105,110,46,99,111,109),t(97,114,99,104,105,118,101,46,111,114,103),t(99,111,100,101,115,97,110,100,98,111,120,46,105,111),t(99,115,98,46,97,112,112),t(115,116,97,99,107,98,108,105,116,122,46,99,111,109),t(115,116,97,99,107,98,108,105,116,122,46,105,111),t(99,111,100,105,101,114,46,105,111),t(109,111,116,105,111,110,116,114,105,99,107,115,46,99,111,109),t(115,116,97,99,107,111,118,101,114,102,108,111,119,46,99,111,109),t(115,116,97,99,107,101,120,99,104,97,110,103,101,46,99,111,109),t(106,115,102,105,100,100,108,101,46,110,101,116)],i=o.length;for(setTimeout(function checkWarn(){r&&("loading"===document.readyState||"interactive"===document.readyState?document.addEventListener("readystatechange",checkWarn):(document.removeEventListener("readystatechange",checkWarn),r&&window.console&&!window._gsapWarned&&"object"==typeof window.gsap&&!1!==window.gsap.config().trialWarn&&(console.log(t(37,99,87,97,114,110,105,110,103),t(102,111,110,116,45,115,105,122,101,58,51,48,112,120,59,99,111,108,111,114,58,114,101,100,59)),console.log(t(65,32,116,114,105,97,108,32,118,101,114,115,105,111,110,32,111,102,32)+a+t(32,105,115,32,108,111,97,100,101,100,32,116,104,97,116,32,111,110,108,121,32,119,111,114,107,115,32,108,111,99,97,108,108,121,32,97,110,100,32,111,110,32,100,111,109,97,105,110,115,32,108,105,107,101,32,99,111,100,101,112,101,110,46,105,111,32,97,110,100,32,99,111,100,101,115,97,110,100,98,111,120,46,105,111,46,32,42,42,42,32,68,79,32,78,79,84,32,68,69,80,76,79,89,32,84,72,73,83,32,70,73,76,69,32,42,42,42,32,76,111,97,100,105,110,103,32,105,116,32,111,110,32,97,110,32,117,110,97,117,116,104,111,114,105,122,101,100,32,115,105,116,101,32,118,105,111,108,97,116,101,115,32,116,104,101,32,108,105,99,101,110,115,101,32,97,110,100,32,119,105,108,108,32,99,97,117,115,101,32,97,32,114,101,100,105,114,101,99,116,46,32,80,108,101,97,115,101,32,106,111,105,110,32,67,108,117,98,32,71,114,101,101,110,83,111,99,107,32,116,111,32,103,101,116,32,102,117,108,108,32,97,99,99,101,115,115,32,116,111,32,116,104,101,32,98,111,110,117,115,32,112,108,117,103,105,110,115,32,116,104,97,116,32,98,111,111,115,116,32,121,111,117,114,32,97,110,105,109,97,116,105,111,110,32,115,117,112,101,114,112,111,119,101,114,115,46,32,68,105,115,97,98,108,101,32,116,104,105,115,32,119,97,114,110,105,110,103,32,119,105,116,104,32,103,115,97,112,46,99,111,110,102,105,103,40,123,116,114,105,97,108,87,97,114,110,58,32,102,97,108,115,101,125,41,59)),console.log(t(37,99,71,101,116,32,117,110,114,101,115,116,114,105,99,116,101,100,32,102,105,108,101,115,32,97,116,32,104,116,116,112,115,58,47,47,103,114,101,101,110,115,111,99,107,46,99,111,109,47,99,108,117,98),t(102,111,110,116,45,115,105,122,101,58,49,54,112,120,59,99,111,108,111,114,58,35,52,101,57,56,49,53)),window._gsapWarned=1)))},50);-1<--i;)if(-1!==e.indexOf(o[i]))return;n||setTimeout(function(){r&&(window.location.href=t(104,116,116,112,115,58,47,47)+s+t(47,114,101,113,117,105,114,101,115,45,109,101,109,98,101,114,115,104,105,112,47)+"?plugin="+a+"&source=trial")},3e3)}("undefined"!=typeof window?window.location.host:""),ScrollSmoother.register=function register(e){return _||(C=e||q(),p()&&window.document&&(R=window,F=document,L=F.documentElement,M=F.body),C&&(I=C.utils.toArray,O=C.utils.clamp,A=C.parseEase("expo"),B=C.core.globals().ScrollTrigger,C.core.globals("ScrollSmoother",ScrollSmoother),M&&B&&(N=B.core._getVelocityProp,_=1))),_},function _createClass(e,t,r){return t&&_defineProperties(e.prototype,t),r&&_defineProperties(e,r),e}(ScrollSmoother,[{key:"progress",get:function get(){return this.scrollTrigger.animation._time/100}}]),ScrollSmoother);function ScrollSmoother(e){var o=this;_||ScrollSmoother.register(C)||console.warn("Please gsap.registerPlugin(ScrollSmoother)"),e=this.vars=e||{},D&&D.kill(),D=this;function Ba(){return k.update(-T)}function Da(){return r.style.overflow="visible"}function Fa(e){e.update();var t=e.getTween();t&&(t.pause(),t._time=t._dur,t._tTime=t._tDur),u=!1,e.animation.progress(e.progress,!0)}function Ga(e,t){(e!==T&&!l||t)&&(S&&(r.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+e+", 0, 1)"),E=e-T,T=e,B.isUpdating||B.update())}function Ha(e){return arguments.length?(l&&(T=-e),P.y=-e,u=!0,b(e),this):-P.y}function Ja(e){v.scrollTop=0,m&&!1===m(o,e)||(B.isInViewport(e.target)||e.target===f||o.scrollTo(e.target,!1,"center center"),f=e.target)}function Ka(e){var r,n,o,i;w.forEach(function(t){r=t.pins,i=t.markers,e.forEach(function(e){e.trigger!==t.trigger&&e.pinnedContainer!==t.trigger||t===e||(n=e.start,o=(n-t.start-t.offset)/t.ratio-(n-t.start),r.forEach(function(e){return o-=e.distance/t.ratio-e.distance}),e.setPositions(n+o,e.end+o),e.markerStart&&i.push(C.quickSetter([e.markerStart,e.markerEnd],"y","px")),e.pin&&0<e.end&&(o=e.end-e.start,r.push({start:e.start,end:e.end,distance:o,trig:e}),t.setPositions(t.start,t.end+o),t.vars.onRefresh(t)))})})}function La(){Da(),requestAnimationFrame(Da),w&&(w.forEach(function(e){var t=e.start,r=e.auto?Math.min(B.maxScroll(e.scroller),e.end):t+(e.end-t)/e.ratio,n=(r-e.end)/2;t-=n,r-=n,e.offset=n||1e-4,e.pins.length=0,e.setPositions(Math.min(t,r),Math.max(t,r)),e.vars.onRefresh(e)}),Ka(B.sort())),k.reset()}function Ma(){return w&&w.forEach(function(e){return e.vars.onRefresh(e)})}function Na(){return w&&w.forEach(function(e){return e.vars.onRefreshInit(e)}),Ma}function Oa(t,r,n,o){return function(){var e="function"==typeof r?r(n,o):r;return e||0===e||(e=o.getAttribute("data-"+t)||("speed"===t?1:0)),o.setAttribute("data-"+t,e),"auto"===e?e:parseFloat(e)}}function Pa(r,e,t,n){function Db(){e=a(),t=f(),o=parseFloat(e)||1,c=(s="auto"===e)?0:.5,l&&l.kill(),l=t&&C.to(r,{ease:A,overwrite:!1,y:"+=0",duration:t}),i&&(i.ratio=o,i.autoSpeed=s)}function Eb(){d.y=h+"px",d.renderTransform(1),Db()}function Ib(e){if(s){Eb();var t=function _autoDistance(e,t){var r,n,o=e.parentNode||L,i=e.getBoundingClientRect(),a=o.getBoundingClientRect(),s=a.top-i.top,l=a.bottom-i.bottom,c=(Math.abs(s)>Math.abs(l)?s:l)/(1-t),u=-c*t;return 0<c&&(u+=-(n=.5==(r=a.height/(R.innerHeight+a.height))?2*a.height:2*Math.min(a.height,-c*r/(2*r-1)))/2,c+=n),{change:c,offset:u}}(r,O(0,1,-e.start/(e.end-e.start)));m=t.change,u=t.offset}else m=(e.end-e.start)*(1-o),u=0;g.forEach(function(e){return m-=e.distance*(1-o)}),e.vars.onUpdate(e),l&&l.progress(1)}var o,i,s,l,c,u,a=Oa("speed",e,n,r),f=Oa("lag",t,n,r),h=C.getProperty(r,"y"),d=r._gsap,g=[],p=[],m=0;return Db(),(1!==o||s||l)&&(Ib(i=B.create({trigger:s?r.parentNode:r,scroller:v,scrub:!0,refreshPriority:-999,onRefreshInit:Eb,onRefresh:Ib,onKill:function onKill(e){var t=w.indexOf(e);0<=t&&w.splice(t,1),Eb()},onUpdate:function onUpdate(e){var t,r,n,o=h+m*(e.progress-c),i=g.length,a=0;if(e.offset){if(i){for(r=-P.y,n=e.end;i--;){if((t=g[i]).trig.isActive||r>=t.start&&r<=t.end)return void(l&&(t.trig.progress+=t.trig.direction<0?.001:-.001,t.trig.update(0,0,1),l.resetTo("y",parseFloat(d.y),-E,!0),x&&l.progress(1)));r>t.end&&(a+=t.distance),n-=t.distance}o=h+a+m*((C.utils.clamp(e.start,e.end,r)-e.start-a)/(n-e.start)-c)}o=function _round(e){return Math.round(1e5*e)/1e5||0}(o+u),p.length&&!s&&p.forEach(function(e){return e(o-a)}),l?(l.resetTo("y",o,-E,!0),x&&l.progress(1)):(d.y=o+"px",d.renderTransform(1))}}})),C.core.getCache(i.trigger).stRevert=Na,i.startY=h,i.pins=g,i.markers=p,i.ratio=o,i.autoSpeed=s,r.style.willChange="transform"),i}var r,v,t,n,w,i,a,s,l,c,u,f,h=e.smoothTouch,d=e.onUpdate,g=e.onStop,p=e.smooth,m=e.onFocusIn,b=B.getScrollFunc(R),S=1===B.isTouch?!0===h?.8:parseFloat(h)||0:0===p||!1===p?0:parseFloat(p)||.8,T=0,E=0,x=1,k=N(0),P={y:0};function refreshHeight(){return t=r.clientHeight,r.style.overflow="visible",M.style.height=t+"px",t-R.innerHeight}B.addEventListener("refresh",La),C.delayedCall(.5,function(){return x=0}),this.scrollTop=Ha,this.scrollTo=function(e,t,r){var n=C.utils.clamp(0,B.maxScroll(R),isNaN(e)?o.offset(e,r):+e);t?l?C.to(o,{duration:S,scrollTop:n,overwrite:"auto",ease:A}):b(n):Ha(n)},this.offset=function(e,t){var r,n=(e=I(e)[0]).style.cssText,o=B.create({trigger:e,start:t||"top top"});return w&&Ka([o]),r=o.start,o.kill(!1),e.style.cssText=n,C.core.getCache(e).uncache=1,r},this.content=function(e){return arguments.length?(r=I(e||"#smooth-content")[0]||M.children[0],s=r.getAttribute("style")||"",C.set(r,{overflow:"visible",width:"100%"}),this):r},this.wrapper=function(e){return arguments.length?(v=I(e||"#smooth-wrapper")[0]||function _wrap(e){var t=F.createElement("div");return t.classList.add("ScrollSmoother-wrapper"),e.parentNode.insertBefore(t,e),t.appendChild(e),t}(r),a=v.getAttribute("style")||"",refreshHeight(),C.set(v,S?{overflow:"hidden",position:"fixed",height:"100%",width:"100%",top:0,left:0,right:0,bottom:0}:{overflow:"visible",position:"relative",width:"100%",height:"auto",top:"auto",bottom:"auto",left:"auto",right:"auto"}),this):v},this.effects=function(e,t){if(w=w||[],!e)return w.slice(0);(e=I(e)).forEach(function(e){for(var t=w.length;t--;)w[t].trigger===e&&(w[t].kill(),w.splice(t,1))});t=t||{};var r,n,o=t.speed,i=t.lag,a=[];for(r=0;r<e.length;r++)(n=Pa(e[r],o,i,r))&&a.push(n);return w.push.apply(w,a),a},this.content(e.content),this.wrapper(e.wrapper),this.render=function(e){return Ga(e||0===e?e:T)},this.getVelocity=function(){return k.getVelocity(-T)},B.scrollerProxy(v,{scrollTop:Ha,scrollHeight:function scrollHeight(){return refreshHeight()&&M.scrollHeight},fixedMarkers:!1!==e.fixedMarkers&&!!S,content:r,getBoundingClientRect:function getBoundingClientRect(){return{top:0,left:0,width:R.innerWidth,height:R.innerHeight}}}),B.defaults({scroller:v});var H=B.getAll().filter(function(e){return e.scroller===R||e.scroller===v});H.forEach(function(e){return e.revert(!0)}),n=B.create({animation:C.to(P,{y:function y(){return R.innerHeight-t},ease:"none",data:"ScrollSmoother",duration:100,onUpdate:function onUpdate(){var e=u;e&&(P.y=T,Fa(n)),Ga(P.y,e),Ba(),d&&!l&&d(o)}}),onRefreshInit:function onRefreshInit(){return P.y=0},id:"ScrollSmoother",scroller:R,invalidateOnRefresh:!0,start:0,refreshPriority:-9999,end:refreshHeight,onScrubComplete:function onScrubComplete(){k.reset(),g&&g(o)},scrub:S||!0,onRefresh:function onRefresh(e){Fa(e),Ga(P.y)}}),this.smooth=function(e){return S=e,arguments.length?n.scrubDuration(e):n.getTween()?n.getTween().duration():0},n.getTween()&&(n.getTween().vars.ease=e.ease||A),this.scrollTrigger=n,e.effects&&this.effects(!0===e.effects?"[data-speed], [data-lag]":e.effects,{}),H.forEach(function(e){e.vars.scroller=v,e.init(e.vars,e.animation)}),this.paused=function(e){return arguments.length?(!!l!==e&&(e?(n.getTween()&&n.getTween().pause(),b(-T),k.reset(),(c=B.normalizeScroll())&&c.disable(),F.addEventListener("wheel",z,{capture:!0}),l=B.observe({preventDefault:!0,type:"wheel,touch,scroll",debounce:!1,onChangeY:function onChangeY(){return Ha(-T)}})):(l.kill(),l=0,F.removeEventListener("wheel",z),c&&c.enable(),n.progress=(-T-n.start)/(n.end-n.start),Fa(n))),this):!!l},this.kill=function(){o.paused(!1),Fa(n),n.kill();for(var e=w?w.length:0;e--;)w[e].kill();B.scrollerProxy(v),B.removeEventListener("refresh",La),M.style.height="auto",v.style.cssText=a,r.style.cssText=s;var t=B.defaults({});t&&t.scroller===v&&B.defaults({scroller:R}),o.observer&&B.normalizeScroll(!1),clearInterval(i),D=null,R.removeEventListener("focusin",Ja)},e.normalizeScroll&&(this.observer=B.normalizeScroll({debounce:!0})),B.config(e),"overscrollBehavior"in R.getComputedStyle(M)&&C.set(M,{overscrollBehavior:"none"}),R.addEventListener("focusin",Ja),i=setInterval(Ba,250),"loading"===F.readyState||requestAnimationFrame(function(){return B.refresh()})}r.version="3.10.3",r.create=function(e){return D&&e&&D.content()===I(e.content)[0]?D:new r(e)},r.get=function(){return D},q()&&C.registerPlugin(r),e.ScrollSmoother=r,e.default=r;if (typeof(window)==="undefined"||window!==e){Object.defineProperty(e,"__esModule",{value:!0})} else {delete e.default}});