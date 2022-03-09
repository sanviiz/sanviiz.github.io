(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{3454:function(e,t,r){"use strict";e.exports=r.g.process||r(7663)},5301:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(5075)}])},5075:function(e,t,r){"use strict";r.r(t);var n=r(5893),o=r(9008),a=r(5459),i=r.n(a);t.default=function(){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(o.default,{children:[(0,n.jsx)("title",{children:"Pakkaphong Akkabut - All about Sanviiz"}),(0,n.jsx)("meta",{name:"description",content:"Generated by create next app"}),(0,n.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,n.jsxs)("div",{className:"container mx-auto max-w-6xl px-2 py-4 pt-6 sm:px-4 md:pt-4 xl:px-0",children:[(0,n.jsxs)("div",{className:"flex flex-col justify-between md:flex-row lg:pr-20",children:[(0,n.jsxs)("div",{className:"flex flex-col justify-between gap-4 md:gap-0",children:[(0,n.jsxs)("div",{children:[(0,n.jsx)("span",{className:"mb-2 block text-4xl font-medium transition-all dark:text-gray-200 lg:mb-0",children:"Hi there, I'm"}),(0,n.jsxs)("span",{className:"block bg-gradient-to-r from-violet-500 to-fuchsia-500 bg-clip-text text-5xl font-medium leading-none text-transparent transition-all dark:from-green-400 dark:to-blue-500 lg:leading-normal",children:["Pakkaphong ",(0,n.jsx)("br",{className:"block lg:hidden"})," Akkabut"]}),(0,n.jsx)("div",{className:"my-4 h-1.5 w-16 bg-gradient-to-r from-violet-500 to-fuchsia-500 transition-all dark:from-green-400 dark:to-blue-500 lg:mt-0"}),(0,n.jsx)("div",{className:"text-3xl font-medium text-gray-800 transition-all dark:text-gray-300",children:(0,n.jsx)(i(),{options:{strings:["Frontend Developer","Web Designer","App Developer"],autoStart:!0,loop:!0}})})]}),(0,n.jsx)("div",{className:"max-w-fit cursor-pointer text-xl font-medium transition-all dark:text-white",children:"<Download Resume />"})]}),(0,n.jsxs)("div",{className:"relative my-4 max-w-fit self-center md:my-0",children:[(0,n.jsx)("div",{className:"absolute -right-2 top-2 h-full w-full bg-gradient-to-r from-violet-500 to-fuchsia-500 transition-all dark:from-green-400 dark:to-blue-500"}),(0,n.jsx)("img",{src:"/images/profile_image.webp",alt:"Profile image",className:"relative h-72"})]})]}),(0,n.jsx)("hr",{className:"my-4 border-gray-200 transition-all dark:border-gray-700 sm:mx-auto md:my-6"}),(0,n.jsx)("div",{className:"border border-red-500 py-40 text-center text-xl text-red-500",children:"Content"})]})]})}},7663:function(e){!function(){var t={162:function(e){var t,r,n=e.exports={};function o(){throw new Error("setTimeout has not been defined")}function a(){throw new Error("clearTimeout has not been defined")}function i(e){if(t===setTimeout)return setTimeout(e,0);if((t===o||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(n){try{return t.call(null,e,0)}catch(n){return t.call(this,e,0)}}}!function(){try{t="function"===typeof setTimeout?setTimeout:o}catch(e){t=o}try{r="function"===typeof clearTimeout?clearTimeout:a}catch(e){r=a}}();var s,u=[],c=!1,l=-1;function p(){c&&s&&(c=!1,s.length?u=s.concat(u):l=-1,u.length&&f())}function f(){if(!c){var e=i(p);c=!0;for(var t=u.length;t;){for(s=u,u=[];++l<t;)s&&s[l].run();l=-1,t=u.length}s=null,c=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===a||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function d(e,t){this.fun=e,this.array=t}function v(){}n.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];u.push(new d(e,t)),1!==u.length||c||i(f)},d.prototype.run=function(){this.fun.apply(null,this.array)},n.title="browser",n.browser=!0,n.env={},n.argv=[],n.version="",n.versions={},n.on=v,n.addListener=v,n.once=v,n.off=v,n.removeListener=v,n.removeAllListeners=v,n.emit=v,n.prependListener=v,n.prependOnceListener=v,n.listeners=function(e){return[]},n.binding=function(e){throw new Error("process.binding is not supported")},n.cwd=function(){return"/"},n.chdir=function(e){throw new Error("process.chdir is not supported")},n.umask=function(){return 0}}},r={};function n(e){var o=r[e];if(void 0!==o)return o.exports;var a=r[e]={exports:{}},i=!0;try{t[e](a,a.exports,n),i=!1}finally{i&&delete r[e]}return a.exports}n.ab="//";var o=n(162);e.exports=o}()},9008:function(e,t,r){e.exports=r(5443)},5459:function(e,t,r){var n,o=r(3454);"undefined"!=typeof self&&self,e.exports=(n=r(7294),(()=>{var e={7403:(e,t,r)=>{"use strict";r.d(t,{default:()=>O});var n=r(4087),o=r.n(n);const a=function(e){return new RegExp(/<[a-z][\s\S]*>/i).test(e)},i=function(e){var t=document.createElement("div");return t.innerHTML=e,t.childNodes},s=function(e,t){return Math.floor(Math.random()*(t-e+1))+e};var u="TYPE_CHARACTER",c="REMOVE_CHARACTER",l="REMOVE_ALL",p="REMOVE_LAST_VISIBLE_NODE",f="PAUSE_FOR",d="CALL_FUNCTION",v="ADD_HTML_TAG_ELEMENT",h="CHANGE_DELETE_SPEED",y="CHANGE_DELAY",m="CHANGE_CURSOR",b="PASTE_STRING",g="HTML_TAG";function _(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function x(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?_(Object(r),!0).forEach((function(t){T(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):_(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function w(e){return function(e){if(Array.isArray(e))return j(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return j(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?j(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function j(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function E(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function T(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const O=function(){function e(t,r){var _=this;if(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),T(this,"state",{cursorAnimation:null,lastFrameTime:null,pauseUntil:null,eventQueue:[],eventLoop:null,eventLoopPaused:!1,reverseCalledEvents:[],calledEvents:[],visibleNodes:[],initialOptions:null,elements:{container:null,wrapper:document.createElement("span"),cursor:document.createElement("span")}}),T(this,"options",{strings:null,cursor:"|",delay:"natural",pauseFor:1500,deleteSpeed:"natural",loop:!1,autoStart:!1,devMode:!1,skipAddStyles:!1,wrapperClassName:"Typewriter__wrapper",cursorClassName:"Typewriter__cursor",stringSplitter:null,onCreateTextNode:null,onRemoveNode:null}),T(this,"setupWrapperElement",(function(){_.state.elements.container&&(_.state.elements.wrapper.className=_.options.wrapperClassName,_.state.elements.cursor.className=_.options.cursorClassName,_.state.elements.cursor.innerHTML=_.options.cursor,_.state.elements.container.innerHTML="",_.state.elements.container.appendChild(_.state.elements.wrapper),_.state.elements.container.appendChild(_.state.elements.cursor))})),T(this,"start",(function(){return _.state.eventLoopPaused=!1,_.runEventLoop(),_})),T(this,"pause",(function(){return _.state.eventLoopPaused=!0,_})),T(this,"stop",(function(){return _.state.eventLoop&&((0,n.cancel)(_.state.eventLoop),_.state.eventLoop=null),_})),T(this,"pauseFor",(function(e){return _.addEventToQueue(f,{ms:e}),_})),T(this,"typeOutAllStrings",(function(){return"string"==typeof _.options.strings?(_.typeString(_.options.strings).pauseFor(_.options.pauseFor),_):(_.options.strings.forEach((function(e){_.typeString(e).pauseFor(_.options.pauseFor).deleteAll(_.options.deleteSpeed)})),_)})),T(this,"typeString",(function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(a(e))return _.typeOutHTMLString(e,t);if(e){var r=(_.options||{}).stringSplitter,n="function"==typeof r?r(e):e.split("");_.typeCharacters(n,t)}return _})),T(this,"pasteString",(function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return a(e)?_.typeOutHTMLString(e,t,!0):(e&&_.addEventToQueue(b,{character:e,node:t}),_)})),T(this,"typeOutHTMLString",(function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,r=arguments.length>2?arguments[2]:void 0,n=i(e);if(n.length>0)for(var o=0;o<n.length;o++){var a=n[o],s=a.innerHTML;a&&3!==a.nodeType?(a.innerHTML="",_.addEventToQueue(v,{node:a,parentNode:t}),r?_.pasteString(s,a):_.typeString(s,a)):a.textContent&&(r?_.pasteString(a.textContent,t):_.typeString(a.textContent,t))}return _})),T(this,"deleteAll",(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"natural";return _.addEventToQueue(l,{speed:e}),_})),T(this,"changeDeleteSpeed",(function(e){if(!e)throw new Error("Must provide new delete speed");return _.addEventToQueue(h,{speed:e}),_})),T(this,"changeDelay",(function(e){if(!e)throw new Error("Must provide new delay");return _.addEventToQueue(y,{delay:e}),_})),T(this,"changeCursor",(function(e){if(!e)throw new Error("Must provide new cursor");return _.addEventToQueue(m,{cursor:e}),_})),T(this,"deleteChars",(function(e){if(!e)throw new Error("Must provide amount of characters to delete");for(var t=0;t<e;t++)_.addEventToQueue(c);return _})),T(this,"callFunction",(function(e,t){if(!e||"function"!=typeof e)throw new Error("Callbak must be a function");return _.addEventToQueue(d,{cb:e,thisArg:t}),_})),T(this,"typeCharacters",(function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(!e||!Array.isArray(e))throw new Error("Characters must be an array");return e.forEach((function(e){_.addEventToQueue(u,{character:e,node:t})})),_})),T(this,"removeCharacters",(function(e){if(!e||!Array.isArray(e))throw new Error("Characters must be an array");return e.forEach((function(){_.addEventToQueue(c)})),_})),T(this,"addEventToQueue",(function(e,t){var r=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return _.addEventToStateProperty(e,t,r,"eventQueue")})),T(this,"addReverseCalledEvent",(function(e,t){var r=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return _.options.loop?_.addEventToStateProperty(e,t,r,"reverseCalledEvents"):_})),T(this,"addEventToStateProperty",(function(e,t){var r=arguments.length>2&&void 0!==arguments[2]&&arguments[2],n=arguments.length>3?arguments[3]:void 0,o={eventName:e,eventArgs:t||{}};return _.state[n]=r?[o].concat(w(_.state[n])):[].concat(w(_.state[n]),[o]),_})),T(this,"runEventLoop",(function(){_.state.lastFrameTime||(_.state.lastFrameTime=Date.now());var e=Date.now(),t=e-_.state.lastFrameTime;if(!_.state.eventQueue.length){if(!_.options.loop)return;_.state.eventQueue=w(_.state.calledEvents),_.state.calledEvents=[],_.options=x({},_.state.initialOptions)}if(_.state.eventLoop=o()(_.runEventLoop),!_.state.eventLoopPaused){if(_.state.pauseUntil){if(e<_.state.pauseUntil)return;_.state.pauseUntil=null}var r,n=w(_.state.eventQueue),a=n.shift();if(!(t<=(r=a.eventName===p||a.eventName===c?"natural"===_.options.deleteSpeed?s(40,80):_.options.deleteSpeed:"natural"===_.options.delay?s(120,160):_.options.delay))){var i=a.eventName,j=a.eventArgs;switch(_.logInDevMode({currentEvent:a,state:_.state,delay:r}),i){case b:case u:var E=j.character,T=j.node,O=document.createTextNode(E),A=O;_.options.onCreateTextNode&&"function"==typeof _.options.onCreateTextNode&&(A=_.options.onCreateTextNode(E,O)),A&&(T?T.appendChild(A):_.state.elements.wrapper.appendChild(A)),_.state.visibleNodes=[].concat(w(_.state.visibleNodes),[{type:"TEXT_NODE",character:E,node:A}]);break;case c:n.unshift({eventName:p,eventArgs:{removingCharacterNode:!0}});break;case f:var S=a.eventArgs.ms;_.state.pauseUntil=Date.now()+parseInt(S);break;case d:var N=a.eventArgs,k=N.cb,C=N.thisArg;k.call(C,{elements:_.state.elements});break;case v:var P=a.eventArgs,L=P.node,D=P.parentNode;D?D.appendChild(L):_.state.elements.wrapper.appendChild(L),_.state.visibleNodes=[].concat(w(_.state.visibleNodes),[{type:g,node:L,parentNode:D||_.state.elements.wrapper}]);break;case l:var R=_.state.visibleNodes,M=j.speed,F=[];M&&F.push({eventName:h,eventArgs:{speed:M,temp:!0}});for(var z=0,I=R.length;z<I;z++)F.push({eventName:p,eventArgs:{removingCharacterNode:!1}});M&&F.push({eventName:h,eventArgs:{speed:_.options.deleteSpeed,temp:!0}}),n.unshift.apply(n,F);break;case p:var Q=a.eventArgs.removingCharacterNode;if(_.state.visibleNodes.length){var U=_.state.visibleNodes.pop(),H=U.type,W=U.node,B=U.character;_.options.onRemoveNode&&"function"==typeof _.options.onRemoveNode&&_.options.onRemoveNode({node:W,character:B}),W&&W.parentNode.removeChild(W),H===g&&Q&&n.unshift({eventName:p,eventArgs:{}})}break;case h:_.options.deleteSpeed=a.eventArgs.speed;break;case y:_.options.delay=a.eventArgs.delay;break;case m:_.options.cursor=a.eventArgs.cursor,_.state.elements.cursor.innerHTML=a.eventArgs.cursor}_.options.loop&&(a.eventName===p||a.eventArgs&&a.eventArgs.temp||(_.state.calledEvents=[].concat(w(_.state.calledEvents),[a]))),_.state.eventQueue=n,_.state.lastFrameTime=e}}})),t)if("string"==typeof t){var j=document.querySelector(t);if(!j)throw new Error("Could not find container element");this.state.elements.container=j}else this.state.elements.container=t;r&&(this.options=x(x({},this.options),r)),this.state.initialOptions=x({},this.options),this.init()}var t;return(t=[{key:"init",value:function(){var e,t;this.setupWrapperElement(),this.addEventToQueue(m,{cursor:this.options.cursor},!0),this.addEventToQueue(l,null,!0),!window||window.___TYPEWRITER_JS_STYLES_ADDED___||this.options.skipAddStyles||(e=".Typewriter__cursor{-webkit-animation:Typewriter-cursor 1s infinite;animation:Typewriter-cursor 1s infinite;margin-left:1px}@-webkit-keyframes Typewriter-cursor{0%{opacity:0}50%{opacity:1}100%{opacity:0}}@keyframes Typewriter-cursor{0%{opacity:0}50%{opacity:1}100%{opacity:0}}",(t=document.createElement("style")).appendChild(document.createTextNode(e)),document.head.appendChild(t),window.___TYPEWRITER_JS_STYLES_ADDED___=!0),!0===this.options.autoStart&&this.options.strings&&this.typeOutAllStrings().start()}},{key:"logInDevMode",value:function(e){this.options.devMode&&console.log(e)}}])&&E(e.prototype,t),e}()},8552:(e,t,r)=>{var n=r(852)(r(5639),"DataView");e.exports=n},1989:(e,t,r)=>{var n=r(1789),o=r(401),a=r(7667),i=r(1327),s=r(1866);function u(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}u.prototype.clear=n,u.prototype.delete=o,u.prototype.get=a,u.prototype.has=i,u.prototype.set=s,e.exports=u},8407:(e,t,r)=>{var n=r(7040),o=r(4125),a=r(2117),i=r(7518),s=r(4705);function u(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}u.prototype.clear=n,u.prototype.delete=o,u.prototype.get=a,u.prototype.has=i,u.prototype.set=s,e.exports=u},7071:(e,t,r)=>{var n=r(852)(r(5639),"Map");e.exports=n},3369:(e,t,r)=>{var n=r(4785),o=r(1285),a=r(6e3),i=r(9916),s=r(5265);function u(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}u.prototype.clear=n,u.prototype.delete=o,u.prototype.get=a,u.prototype.has=i,u.prototype.set=s,e.exports=u},3818:(e,t,r)=>{var n=r(852)(r(5639),"Promise");e.exports=n},8525:(e,t,r)=>{var n=r(852)(r(5639),"Set");e.exports=n},8668:(e,t,r)=>{var n=r(3369),o=r(619),a=r(2385);function i(e){var t=-1,r=null==e?0:e.length;for(this.__data__=new n;++t<r;)this.add(e[t])}i.prototype.add=i.prototype.push=o,i.prototype.has=a,e.exports=i},6384:(e,t,r)=>{var n=r(8407),o=r(7465),a=r(3779),i=r(7599),s=r(4758),u=r(4309);function c(e){var t=this.__data__=new n(e);this.size=t.size}c.prototype.clear=o,c.prototype.delete=a,c.prototype.get=i,c.prototype.has=s,c.prototype.set=u,e.exports=c},2705:(e,t,r)=>{var n=r(5639).Symbol;e.exports=n},1149:(e,t,r)=>{var n=r(5639).Uint8Array;e.exports=n},577:(e,t,r)=>{var n=r(852)(r(5639),"WeakMap");e.exports=n},4963:e=>{e.exports=function(e,t){for(var r=-1,n=null==e?0:e.length,o=0,a=[];++r<n;){var i=e[r];t(i,r,e)&&(a[o++]=i)}return a}},4636:(e,t,r)=>{var n=r(2545),o=r(5694),a=r(1469),i=r(4144),s=r(5776),u=r(6719),c=Object.prototype.hasOwnProperty;e.exports=function(e,t){var r=a(e),l=!r&&o(e),p=!r&&!l&&i(e),f=!r&&!l&&!p&&u(e),d=r||l||p||f,v=d?n(e.length,String):[],h=v.length;for(var y in e)!t&&!c.call(e,y)||d&&("length"==y||p&&("offset"==y||"parent"==y)||f&&("buffer"==y||"byteLength"==y||"byteOffset"==y)||s(y,h))||v.push(y);return v}},2488:e=>{e.exports=function(e,t){for(var r=-1,n=t.length,o=e.length;++r<n;)e[o+r]=t[r];return e}},2908:e=>{e.exports=function(e,t){for(var r=-1,n=null==e?0:e.length;++r<n;)if(t(e[r],r,e))return!0;return!1}},8470:(e,t,r)=>{var n=r(7813);e.exports=function(e,t){for(var r=e.length;r--;)if(n(e[r][0],t))return r;return-1}},8866:(e,t,r)=>{var n=r(2488),o=r(1469);e.exports=function(e,t,r){var a=t(e);return o(e)?a:n(a,r(e))}},4239:(e,t,r)=>{var n=r(2705),o=r(9607),a=r(2333),i=n?n.toStringTag:void 0;e.exports=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":i&&i in Object(e)?o(e):a(e)}},9454:(e,t,r)=>{var n=r(4239),o=r(7005);e.exports=function(e){return o(e)&&"[object Arguments]"==n(e)}},939:(e,t,r)=>{var n=r(2492),o=r(7005);e.exports=function e(t,r,a,i,s){return t===r||(null==t||null==r||!o(t)&&!o(r)?t!=t&&r!=r:n(t,r,a,i,e,s))}},2492:(e,t,r)=>{var n=r(6384),o=r(7114),a=r(8351),i=r(6096),s=r(4160),u=r(1469),c=r(4144),l=r(6719),p="[object Arguments]",f="[object Array]",d="[object Object]",v=Object.prototype.hasOwnProperty;e.exports=function(e,t,r,h,y,m){var b=u(e),g=u(t),_=b?f:s(e),x=g?f:s(t),w=(_=_==p?d:_)==d,j=(x=x==p?d:x)==d,E=_==x;if(E&&c(e)){if(!c(t))return!1;b=!0,w=!1}if(E&&!w)return m||(m=new n),b||l(e)?o(e,t,r,h,y,m):a(e,t,_,r,h,y,m);if(!(1&r)){var T=w&&v.call(e,"__wrapped__"),O=j&&v.call(t,"__wrapped__");if(T||O){var A=T?e.value():e,S=O?t.value():t;return m||(m=new n),y(A,S,r,h,m)}}return!!E&&(m||(m=new n),i(e,t,r,h,y,m))}},8458:(e,t,r)=>{var n=r(3560),o=r(5346),a=r(3218),i=r(346),s=/^\[object .+?Constructor\]$/,u=Function.prototype,c=Object.prototype,l=u.toString,p=c.hasOwnProperty,f=RegExp("^"+l.call(p).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");e.exports=function(e){return!(!a(e)||o(e))&&(n(e)?f:s).test(i(e))}},8749:(e,t,r)=>{var n=r(4239),o=r(1780),a=r(7005),i={};i["[object Float32Array]"]=i["[object Float64Array]"]=i["[object Int8Array]"]=i["[object Int16Array]"]=i["[object Int32Array]"]=i["[object Uint8Array]"]=i["[object Uint8ClampedArray]"]=i["[object Uint16Array]"]=i["[object Uint32Array]"]=!0,i["[object Arguments]"]=i["[object Array]"]=i["[object ArrayBuffer]"]=i["[object Boolean]"]=i["[object DataView]"]=i["[object Date]"]=i["[object Error]"]=i["[object Function]"]=i["[object Map]"]=i["[object Number]"]=i["[object Object]"]=i["[object RegExp]"]=i["[object Set]"]=i["[object String]"]=i["[object WeakMap]"]=!1,e.exports=function(e){return a(e)&&o(e.length)&&!!i[n(e)]}},280:(e,t,r)=>{var n=r(5726),o=r(6916),a=Object.prototype.hasOwnProperty;e.exports=function(e){if(!n(e))return o(e);var t=[];for(var r in Object(e))a.call(e,r)&&"constructor"!=r&&t.push(r);return t}},2545:e=>{e.exports=function(e,t){for(var r=-1,n=Array(e);++r<e;)n[r]=t(r);return n}},1717:e=>{e.exports=function(e){return function(t){return e(t)}}},4757:e=>{e.exports=function(e,t){return e.has(t)}},4429:(e,t,r)=>{var n=r(5639)["__core-js_shared__"];e.exports=n},7114:(e,t,r)=>{var n=r(8668),o=r(2908),a=r(4757);e.exports=function(e,t,r,i,s,u){var c=1&r,l=e.length,p=t.length;if(l!=p&&!(c&&p>l))return!1;var f=u.get(e),d=u.get(t);if(f&&d)return f==t&&d==e;var v=-1,h=!0,y=2&r?new n:void 0;for(u.set(e,t),u.set(t,e);++v<l;){var m=e[v],b=t[v];if(i)var g=c?i(b,m,v,t,e,u):i(m,b,v,e,t,u);if(void 0!==g){if(g)continue;h=!1;break}if(y){if(!o(t,(function(e,t){if(!a(y,t)&&(m===e||s(m,e,r,i,u)))return y.push(t)}))){h=!1;break}}else if(m!==b&&!s(m,b,r,i,u)){h=!1;break}}return u.delete(e),u.delete(t),h}},8351:(e,t,r)=>{var n=r(2705),o=r(1149),a=r(7813),i=r(7114),s=r(8776),u=r(1814),c=n?n.prototype:void 0,l=c?c.valueOf:void 0;e.exports=function(e,t,r,n,c,p,f){switch(r){case"[object DataView]":if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case"[object ArrayBuffer]":return!(e.byteLength!=t.byteLength||!p(new o(e),new o(t)));case"[object Boolean]":case"[object Date]":case"[object Number]":return a(+e,+t);case"[object Error]":return e.name==t.name&&e.message==t.message;case"[object RegExp]":case"[object String]":return e==t+"";case"[object Map]":var d=s;case"[object Set]":var v=1&n;if(d||(d=u),e.size!=t.size&&!v)return!1;var h=f.get(e);if(h)return h==t;n|=2,f.set(e,t);var y=i(d(e),d(t),n,c,p,f);return f.delete(e),y;case"[object Symbol]":if(l)return l.call(e)==l.call(t)}return!1}},6096:(e,t,r)=>{var n=r(8234),o=Object.prototype.hasOwnProperty;e.exports=function(e,t,r,a,i,s){var u=1&r,c=n(e),l=c.length;if(l!=n(t).length&&!u)return!1;for(var p=l;p--;){var f=c[p];if(!(u?f in t:o.call(t,f)))return!1}var d=s.get(e),v=s.get(t);if(d&&v)return d==t&&v==e;var h=!0;s.set(e,t),s.set(t,e);for(var y=u;++p<l;){var m=e[f=c[p]],b=t[f];if(a)var g=u?a(b,m,f,t,e,s):a(m,b,f,e,t,s);if(!(void 0===g?m===b||i(m,b,r,a,s):g)){h=!1;break}y||(y="constructor"==f)}if(h&&!y){var _=e.constructor,x=t.constructor;_==x||!("constructor"in e)||!("constructor"in t)||"function"==typeof _&&_ instanceof _&&"function"==typeof x&&x instanceof x||(h=!1)}return s.delete(e),s.delete(t),h}},1957:(e,t,r)=>{var n="object"==typeof r.g&&r.g&&r.g.Object===Object&&r.g;e.exports=n},8234:(e,t,r)=>{var n=r(8866),o=r(9551),a=r(3674);e.exports=function(e){return n(e,a,o)}},5050:(e,t,r)=>{var n=r(7019);e.exports=function(e,t){var r=e.__data__;return n(t)?r["string"==typeof t?"string":"hash"]:r.map}},852:(e,t,r)=>{var n=r(8458),o=r(7801);e.exports=function(e,t){var r=o(e,t);return n(r)?r:void 0}},9607:(e,t,r)=>{var n=r(2705),o=Object.prototype,a=o.hasOwnProperty,i=o.toString,s=n?n.toStringTag:void 0;e.exports=function(e){var t=a.call(e,s),r=e[s];try{e[s]=void 0;var n=!0}catch(e){}var o=i.call(e);return n&&(t?e[s]=r:delete e[s]),o}},9551:(e,t,r)=>{var n=r(4963),o=r(479),a=Object.prototype.propertyIsEnumerable,i=Object.getOwnPropertySymbols,s=i?function(e){return null==e?[]:(e=Object(e),n(i(e),(function(t){return a.call(e,t)})))}:o;e.exports=s},4160:(e,t,r)=>{var n=r(8552),o=r(7071),a=r(3818),i=r(8525),s=r(577),u=r(4239),c=r(346),l="[object Map]",p="[object Promise]",f="[object Set]",d="[object WeakMap]",v="[object DataView]",h=c(n),y=c(o),m=c(a),b=c(i),g=c(s),_=u;(n&&_(new n(new ArrayBuffer(1)))!=v||o&&_(new o)!=l||a&&_(a.resolve())!=p||i&&_(new i)!=f||s&&_(new s)!=d)&&(_=function(e){var t=u(e),r="[object Object]"==t?e.constructor:void 0,n=r?c(r):"";if(n)switch(n){case h:return v;case y:return l;case m:return p;case b:return f;case g:return d}return t}),e.exports=_},7801:e=>{e.exports=function(e,t){return null==e?void 0:e[t]}},1789:(e,t,r)=>{var n=r(4536);e.exports=function(){this.__data__=n?n(null):{},this.size=0}},401:e=>{e.exports=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t}},7667:(e,t,r)=>{var n=r(4536),o=Object.prototype.hasOwnProperty;e.exports=function(e){var t=this.__data__;if(n){var r=t[e];return"__lodash_hash_undefined__"===r?void 0:r}return o.call(t,e)?t[e]:void 0}},1327:(e,t,r)=>{var n=r(4536),o=Object.prototype.hasOwnProperty;e.exports=function(e){var t=this.__data__;return n?void 0!==t[e]:o.call(t,e)}},1866:(e,t,r)=>{var n=r(4536);e.exports=function(e,t){var r=this.__data__;return this.size+=this.has(e)?0:1,r[e]=n&&void 0===t?"__lodash_hash_undefined__":t,this}},5776:e=>{var t=/^(?:0|[1-9]\d*)$/;e.exports=function(e,r){var n=typeof e;return!!(r=null==r?9007199254740991:r)&&("number"==n||"symbol"!=n&&t.test(e))&&e>-1&&e%1==0&&e<r}},7019:e=>{e.exports=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e}},5346:(e,t,r)=>{var n,o=r(4429),a=(n=/[^.]+$/.exec(o&&o.keys&&o.keys.IE_PROTO||""))?"Symbol(src)_1."+n:"";e.exports=function(e){return!!a&&a in e}},5726:e=>{var t=Object.prototype;e.exports=function(e){var r=e&&e.constructor;return e===("function"==typeof r&&r.prototype||t)}},7040:e=>{e.exports=function(){this.__data__=[],this.size=0}},4125:(e,t,r)=>{var n=r(8470),o=Array.prototype.splice;e.exports=function(e){var t=this.__data__,r=n(t,e);return!(r<0||(r==t.length-1?t.pop():o.call(t,r,1),--this.size,0))}},2117:(e,t,r)=>{var n=r(8470);e.exports=function(e){var t=this.__data__,r=n(t,e);return r<0?void 0:t[r][1]}},7518:(e,t,r)=>{var n=r(8470);e.exports=function(e){return n(this.__data__,e)>-1}},4705:(e,t,r)=>{var n=r(8470);e.exports=function(e,t){var r=this.__data__,o=n(r,e);return o<0?(++this.size,r.push([e,t])):r[o][1]=t,this}},4785:(e,t,r)=>{var n=r(1989),o=r(8407),a=r(7071);e.exports=function(){this.size=0,this.__data__={hash:new n,map:new(a||o),string:new n}}},1285:(e,t,r)=>{var n=r(5050);e.exports=function(e){var t=n(this,e).delete(e);return this.size-=t?1:0,t}},6e3:(e,t,r)=>{var n=r(5050);e.exports=function(e){return n(this,e).get(e)}},9916:(e,t,r)=>{var n=r(5050);e.exports=function(e){return n(this,e).has(e)}},5265:(e,t,r)=>{var n=r(5050);e.exports=function(e,t){var r=n(this,e),o=r.size;return r.set(e,t),this.size+=r.size==o?0:1,this}},8776:e=>{e.exports=function(e){var t=-1,r=Array(e.size);return e.forEach((function(e,n){r[++t]=[n,e]})),r}},4536:(e,t,r)=>{var n=r(852)(Object,"create");e.exports=n},6916:(e,t,r)=>{var n=r(5569)(Object.keys,Object);e.exports=n},1167:(e,t,r)=>{e=r.nmd(e);var n=r(1957),o=t&&!t.nodeType&&t,a=o&&e&&!e.nodeType&&e,i=a&&a.exports===o&&n.process,s=function(){try{return a&&a.require&&a.require("util").types||i&&i.binding&&i.binding("util")}catch(e){}}();e.exports=s},2333:e=>{var t=Object.prototype.toString;e.exports=function(e){return t.call(e)}},5569:e=>{e.exports=function(e,t){return function(r){return e(t(r))}}},5639:(e,t,r)=>{var n=r(1957),o="object"==typeof self&&self&&self.Object===Object&&self,a=n||o||Function("return this")();e.exports=a},619:e=>{e.exports=function(e){return this.__data__.set(e,"__lodash_hash_undefined__"),this}},2385:e=>{e.exports=function(e){return this.__data__.has(e)}},1814:e=>{e.exports=function(e){var t=-1,r=Array(e.size);return e.forEach((function(e){r[++t]=e})),r}},7465:(e,t,r)=>{var n=r(8407);e.exports=function(){this.__data__=new n,this.size=0}},3779:e=>{e.exports=function(e){var t=this.__data__,r=t.delete(e);return this.size=t.size,r}},7599:e=>{e.exports=function(e){return this.__data__.get(e)}},4758:e=>{e.exports=function(e){return this.__data__.has(e)}},4309:(e,t,r)=>{var n=r(8407),o=r(7071),a=r(3369);e.exports=function(e,t){var r=this.__data__;if(r instanceof n){var i=r.__data__;if(!o||i.length<199)return i.push([e,t]),this.size=++r.size,this;r=this.__data__=new a(i)}return r.set(e,t),this.size=r.size,this}},346:e=>{var t=Function.prototype.toString;e.exports=function(e){if(null!=e){try{return t.call(e)}catch(e){}try{return e+""}catch(e){}}return""}},7813:e=>{e.exports=function(e,t){return e===t||e!=e&&t!=t}},5694:(e,t,r)=>{var n=r(9454),o=r(7005),a=Object.prototype,i=a.hasOwnProperty,s=a.propertyIsEnumerable,u=n(function(){return arguments}())?n:function(e){return o(e)&&i.call(e,"callee")&&!s.call(e,"callee")};e.exports=u},1469:e=>{var t=Array.isArray;e.exports=t},8612:(e,t,r)=>{var n=r(3560),o=r(1780);e.exports=function(e){return null!=e&&o(e.length)&&!n(e)}},4144:(e,t,r)=>{e=r.nmd(e);var n=r(5639),o=r(5062),a=t&&!t.nodeType&&t,i=a&&e&&!e.nodeType&&e,s=i&&i.exports===a?n.Buffer:void 0,u=(s?s.isBuffer:void 0)||o;e.exports=u},8446:(e,t,r)=>{var n=r(939);e.exports=function(e,t){return n(e,t)}},3560:(e,t,r)=>{var n=r(4239),o=r(3218);e.exports=function(e){if(!o(e))return!1;var t=n(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t}},1780:e=>{e.exports=function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=9007199254740991}},3218:e=>{e.exports=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}},7005:e=>{e.exports=function(e){return null!=e&&"object"==typeof e}},6719:(e,t,r)=>{var n=r(8749),o=r(1717),a=r(1167),i=a&&a.isTypedArray,s=i?o(i):n;e.exports=s},3674:(e,t,r)=>{var n=r(4636),o=r(280),a=r(8612);e.exports=function(e){return a(e)?n(e):o(e)}},479:e=>{e.exports=function(){return[]}},5062:e=>{e.exports=function(){return!1}},75:function(e){(function(){var t,r,n,a,i,s;"undefined"!=typeof performance&&null!==performance&&performance.now?e.exports=function(){return performance.now()}:"undefined"!=typeof o&&null!==o&&o.hrtime?(e.exports=function(){return(t()-i)/1e6},r=o.hrtime,a=(t=function(){var e;return 1e9*(e=r())[0]+e[1]})(),s=1e9*o.uptime(),i=a-s):Date.now?(e.exports=function(){return Date.now()-n},n=Date.now()):(e.exports=function(){return(new Date).getTime()-n},n=(new Date).getTime())}).call(this)},2703:(e,t,r)=>{"use strict";var n=r(414);function o(){}function a(){}a.resetWarningCache=o,e.exports=function(){function e(e,t,r,o,a,i){if(i!==n){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function t(){return e}e.isRequired=e;var r={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:a,resetWarningCache:o};return r.PropTypes=r,r}},5697:(e,t,r)=>{e.exports=r(2703)()},414:e=>{"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},4087:(e,t,r)=>{for(var n=r(75),o="undefined"==typeof window?r.g:window,a=["moz","webkit"],i="AnimationFrame",s=o["request"+i],u=o["cancel"+i]||o["cancelRequest"+i],c=0;!s&&c<a.length;c++)s=o[a[c]+"Request"+i],u=o[a[c]+"Cancel"+i]||o[a[c]+"CancelRequest"+i];if(!s||!u){var l=0,p=0,f=[];s=function(e){if(0===f.length){var t=n(),r=Math.max(0,16.666666666666668-(t-l));l=r+t,setTimeout((function(){var e=f.slice(0);f.length=0;for(var t=0;t<e.length;t++)if(!e[t].cancelled)try{e[t].callback(l)}catch(e){setTimeout((function(){throw e}),0)}}),Math.round(r))}return f.push({handle:++p,callback:e,cancelled:!1}),p},u=function(e){for(var t=0;t<f.length;t++)f[t].handle===e&&(f[t].cancelled=!0)}}e.exports=function(e){return s.call(o,e)},e.exports.cancel=function(){u.apply(o,arguments)},e.exports.polyfill=function(e){e||(e=o),e.requestAnimationFrame=s,e.cancelAnimationFrame=u}},9297:e=>{"use strict";e.exports=n}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var a=t[n]={id:n,loaded:!1,exports:{}};return e[n].call(a.exports,a,a.exports,r),a.loaded=!0,a.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.nmd=e=>(e.paths=[],e.children||(e.children=[]),e);var a={};return(()=>{"use strict";r.d(a,{default:()=>y});var e=r(9297),t=r.n(e),n=(r(5697),r(7403)),o=r(8446),i=r.n(o);function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function l(e,t){return(l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function p(e,t){if(t&&("object"===s(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return f(e)}function f(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function v(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var h=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&l(e,t)}(h,e);var r,o,a,s=(o=h,a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=d(o);if(a){var r=d(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return p(this,e)});function h(){var e;u(this,h);for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];return v(f(e=s.call.apply(s,[this].concat(r))),"state",{instance:null}),e}return(r=[{key:"componentDidMount",value:function(){var e=this,t=new n.default(this.typewriter,this.props.options);this.setState({instance:t},(function(){var r=e.props.onInit;r&&r(t)}))}},{key:"componentDidUpdate",value:function(e){i()(this.props.options,e.options)||this.setState({instance:new n.default(this.typewriter,this.props.options)})}},{key:"componentWillUnmount",value:function(){this.state.instance&&this.state.instance.stop()}},{key:"render",value:function(){var e=this,r=this.props.component;return t().createElement(r,{ref:function(t){return e.typewriter=t},className:"Typewriter","data-testid":"typewriter-wrapper"})}}])&&c(h.prototype,r),h}(e.Component);h.defaultProps={component:"div"};const y=h})(),a.default})())}},function(e){e.O(0,[774,888,179],(function(){return t=5301,e(e.s=t);var t}));var t=e.O();_N_E=t}]);