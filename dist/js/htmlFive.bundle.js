!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=16)}([,function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var o=(a=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),i=r.sources.map(function(e){return"/*# sourceURL="+r.sourceRoot+e+" */"});return[n].concat(i).concat([o]).join("\n")}var a;return[n].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+n+"}":n}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];null!=i&&(r[i]=!0)}for(o=0;o<e.length;o++){var a=e[o];null!=a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),t.push(a))}},t}},function(e,t,n){var r,o,i={},a=(r=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===o&&(o=r.apply(this,arguments)),o}),c=function(e){var t={};return function(e,n){if("function"==typeof e)return e();if(void 0===t[e]){var r=function(e,t){return t?t.querySelector(e):document.querySelector(e)}.call(this,e,n);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}t[e]=r}return t[e]}}(),s=null,d=0,u=[],l=n(6);function f(e,t){for(var n=0;n<e.length;n++){var r=e[n],o=i[r.id];if(o){o.refs++;for(var a=0;a<o.parts.length;a++)o.parts[a](r.parts[a]);for(;a<r.parts.length;a++)o.parts.push(y(r.parts[a],t))}else{var c=[];for(a=0;a<r.parts.length;a++)c.push(y(r.parts[a],t));i[r.id]={id:r.id,refs:1,parts:c}}}}function p(e,t){for(var n=[],r={},o=0;o<e.length;o++){var i=e[o],a=t.base?i[0]+t.base:i[0],c={css:i[1],media:i[2],sourceMap:i[3]};r[a]?r[a].parts.push(c):n.push(r[a]={id:a,parts:[c]})}return n}function g(e,t){var n=c(e.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=u[u.length-1];if("top"===e.insertAt)r?r.nextSibling?n.insertBefore(t,r.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),u.push(t);else if("bottom"===e.insertAt)n.appendChild(t);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=c(e.insertAt.before,n);n.insertBefore(t,o)}}function m(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=u.indexOf(e);t>=0&&u.splice(t,1)}function v(e){var t=document.createElement("style");if(void 0===e.attrs.type&&(e.attrs.type="text/css"),void 0===e.attrs.nonce){var r=function(){0;return n.nc}();r&&(e.attrs.nonce=r)}return h(t,e.attrs),g(e,t),t}function h(e,t){Object.keys(t).forEach(function(n){e.setAttribute(n,t[n])})}function y(e,t){var n,r,o,i;if(t.transform&&e.css){if(!(i="function"==typeof t.transform?t.transform(e.css):t.transform.default(e.css)))return function(){};e.css=i}if(t.singleton){var a=d++;n=s||(s=v(t)),r=x.bind(null,n,a,!1),o=x.bind(null,n,a,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(e){var t=document.createElement("link");return void 0===e.attrs.type&&(e.attrs.type="text/css"),e.attrs.rel="stylesheet",h(t,e.attrs),g(e,t),t}(t),r=function(e,t,n){var r=n.css,o=n.sourceMap,i=void 0===t.convertToAbsoluteUrls&&o;(t.convertToAbsoluteUrls||i)&&(r=l(r));o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var a=new Blob([r],{type:"text/css"}),c=e.href;e.href=URL.createObjectURL(a),c&&URL.revokeObjectURL(c)}.bind(null,n,t),o=function(){m(n),n.href&&URL.revokeObjectURL(n.href)}):(n=v(t),r=function(e,t){var n=t.css,r=t.media;r&&e.setAttribute("media",r);if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}.bind(null,n),o=function(){m(n)});return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(t=t||{}).attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=a()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var n=p(e,t);return f(n,t),function(e){for(var r=[],o=0;o<n.length;o++){var a=n[o];(c=i[a.id]).refs--,r.push(c)}e&&f(p(e,t),t);for(o=0;o<r.length;o++){var c;if(0===(c=r[o]).refs){for(var s=0;s<c.parts.length;s++)c.parts[s]();delete i[c.id]}}}};var b,E=(b=[],function(e,t){return b[e]=t,b.filter(Boolean).join("\n")});function x(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=E(t,o);else{var i=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}},,function(e,t,n){var r=n(5);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(2)(r,o);r.locals&&(e.exports=r.locals)},function(e,t,n){(e.exports=n(1)(!1)).push([e.i,"* {\n  margin: 0 auto;\n  padding: 0; }\n\nbody {\n  width: 100%;\n  height: 100%; }\n\nh1, h2 {\n  margin-top: 1%;\n  text-align: center; }\n\nh2 {\n  cursor: pointer;\n  margin-bottom: 2%;\n  text-decoration: underline; }\n\n.section-container {\n  display: none;\n  margin: 0 5%; }\n  .section-container.active {\n    display: block; }\n  .section-container .code-container {\n    background: lightgrey;\n    border: 1px solid darkslategrey;\n    margin-bottom: 1%;\n    padding: 1% 2%; }\n    .section-container .code-container p.code-title {\n      font-size: 1.15em;\n      font-weight: 600;\n      padding-bottom: 0.5%;\n      text-align: center; }\n    .section-container .code-container p.code-snippet-example, .section-container .code-container p.code-output {\n      font-weight: 600; }\n    .section-container .code-container p.pre-es6, .section-container .code-container p.post-es6 {\n      font-style: italic;\n      font-weight: 600; }\n    .section-container .code-container code .indent-20 {\n      padding-left: 20px; }\n    .section-container .code-container code .indent-40 {\n      padding-left: 40px; }\n    .section-container .code-container code .indent-60 {\n      padding-left: 60px; }\n    .section-container .code-container code .indent-80 {\n      padding-left: 80px; }\n    .section-container .code-container code .indent-100 {\n      padding-left: 100px; }\n",""])},function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var n=t.protocol+"//"+t.host,r=n+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,t){var o,i=t.trim().replace(/^"(.*)"$/,function(e,t){return t}).replace(/^'(.*)'$/,function(e,t){return t});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?e:(o=0===i.indexOf("//")?i:0===i.indexOf("/")?n+i:r+i.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")})}},function(e,t){document.addEventListener("click",function(e){if(e.target.classList.contains("section-header")){var t=e.target.nextSibling.nextSibling.classList;if(t.contains("active"))t.remove("active");else document.querySelectorAll(".section-container.active").forEach(function(e){e.classList.remove("active")}),t.add("active")}})},,,,,,,,,function(e,t,n){"use strict";n.r(t);n(4),n(17),n(19),n(7),n(20)},function(e,t,n){var r=n(18);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(2)(r,o);r.locals&&(e.exports=r.locals)},function(e,t,n){(e.exports=n(1)(!1)).push([e.i,".go-back {\n  text-align: center; }\n\n#dragbox-container {\n  display: inline-block; }\n  #dragbox-container #dragbox1, #dragbox-container #dragbox2 {\n    border: 1px solid black;\n    float: left;\n    height: 100px;\n    margin: 10px;\n    padding: 10px;\n    width: 100px; }\n    #dragbox-container #dragbox1 img, #dragbox-container #dragbox2 img {\n      width: 90%; }\n\n.button {\n  -webkit-border-radius: 5px;\n  -moz-border-radius: 5px;\n  border-radius: 5px;\n  color: white;\n  cursor: pointer;\n  font-weight: normal;\n  outline: none;\n  padding: 10px;\n  text-align: center;\n  text-decoration: none;\n  text-transform: uppercase;\n  width: auto; }\n  .button.orange {\n    background-color: #ff9933; }\n  .button.red {\n    background-color: red; }\n  .button.green {\n    background-color: green; }\n  .button.purple {\n    background-color: purple; }\n  .button.pink {\n    background-color: pink; }\n  .button.grey {\n    background-color: grey; }\n",""])},function(e,t,n){e.exports=n.p+"images/michelangelo.png"},function(e,t){var n=function(e){e.preventDefault()},r=function(e){e.target.style.background="",e.preventDefault();var t=e.dataTransfer.getData("text");e.target.appendChild(document.getElementById(t))},o=function(e){e.preventDefault(),e.dataTransfer.dropEffect="move",e.target.style.background="orange"},i=function(e){e.target.style.background=""},a=document.getElementById("tmnt-michelangelo"),c=document.getElementById("dragbox1"),s=document.getElementById("dragbox2");a.addEventListener("dragstart",function(e){e.dataTransfer.setData("text",e.target.id),e.dataTransfer.dropEffect="move",e.target.style.opacity=".5"}),a.addEventListener("dragend",function(e){e.target.style.opacity=""}),c.addEventListener("drop",r),s.addEventListener("drop",r),c.addEventListener("dragover",n),s.addEventListener("dragover",n),c.addEventListener("dragenter",o),s.addEventListener("dragenter",o),c.addEventListener("dragleave",i),s.addEventListener("dragleave",i);var d=document.getElementById("historyBack"),u=document.getElementById("historyForward"),l=document.getElementById("historyGo"),f=document.getElementById("historyRefresh"),p=document.getElementById("historyLength"),g=document.getElementById("historyReplaceState"),m=document.getElementById("historyPushState"),v=document.getElementById("historyReplacePushonPopState"),h="There is unrest in the forest \nThere is trouble with the trees\nFor the maples want more sunlight\nAnd the oaks ignore their pleas";d.addEventListener("click",function(){window.history.back()}),u.addEventListener("click",function(){window.history.forward()}),l.addEventListener("click",function(){window.history.go(-2)}),f.addEventListener("click",function(){window.history.go()}),p.addEventListener("click",function(){alert(window.history.length)}),g.addEventListener("click",function(){history.replaceState(h,"title","rush")}),m.addEventListener("click",function(){history.pushState(h,"title","rush")}),v.addEventListener("click",function(){history.replaceState(h,"title","trees"),history.pushState(h,"title","trees"),window.history.back()}),window.addEventListener("popstate",function(e){alert(h)});var y=document.getElementById("vibrateMe"),b=document.getElementById("vibrateSuperMario"),E=document.getElementById("vibrateVader"),x=document.getElementById("vibratePacMan");y.addEventListener("click",function(){navigator.vibrate([3e3,2e3,1e3])}),b.addEventListener("click",function(){navigator.vibrate([125,75,125,275,200,275,125,75,125,275,200,600,200,600])}),E.addEventListener("click",function(){navigator.vibrate([500,110,500,110,450,110,200,110,170,40,450,110,200,110,170,40,500])}),x.addEventListener("click",function(){navigator.vibrate([200,150,200,150,200,150,200,300,200,150,200,150,200,150,200,300,200,150,200,150,200,150,200,150,300,150,350,150,400])}),document.getElementById("proximity").addEventListener("click",function(){window.addEventListener("userproximity",function(e){e.near&&alert("DANGER WILL ROBINSON! MOTION HAS BEEN DETECTED!")})});var w=document.getElementById("storageLength"),L=document.getElementById("storageSetItem"),k=document.getElementById("storageKey"),S=document.getElementById("storageGetItem"),I=document.getElementById("storageRemoveItem"),B=document.getElementById("storageClear");w.addEventListener("click",function(){alert(sessionStorage.length)}),L.addEventListener("click",function(){null===sessionStorage.getItem("ASH")?sessionStorage.setItem("ASH","This is my boomstick!"):null===sessionStorage.getItem("ASH2")?sessionStorage.setItem("ASH2","Gimme Some Sugar Baby"):sessionStorage.setItem("ASH3","GROOVY!")}),k.addEventListener("click",function(){alert(sessionStorage.key(0))}),S.addEventListener("click",function(){alert(sessionStorage.getItem(sessionStorage.key(0)))}),I.addEventListener("click",function(){sessionStorage.removeItem(sessionStorage.key(0)),alert("Check the length now!")}),B.addEventListener("click",function(){sessionStorage.clear(),alert("Check the length now!")})}]);