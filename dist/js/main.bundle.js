!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=21)}([function(t,e,n){"use strict";function r(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,r=document.createElement("img");return r.src=t,r.setAttribute("class","image"),r.alt=e||null,r.title=n||null,r}function o(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"output-text",n=(arguments.length>2&&void 0!==arguments[2]&&arguments[2],document.createElement("p"));n.setAttribute("class",e);var r=document.createTextNode(t);return n.appendChild(r),n}function a(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"response-container",e=document.createElement("div");return e.setAttribute("class",t),e}function i(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"example-output";document.getElementById(e).getElementsByClassName(n)[0].innerHTML=t}function c(t,e,n){var i,c=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"example-output";switch(e){case"norris":i=function(t){var e=a("response-container"),n=r(t.icon_url),i=o(t.value);return e.appendChild(n),e.appendChild(i),e}(t);break;case"taco":i=function(t){return o("".concat(t.shell.name,", ").concat(t.base_layer.name,", ").concat(t.condiment.name,", ").concat(t.mixin.name,", and ").concat(t.seasoning.name))}(t);break;case"createUser":i=function(t){return o("The user's id is ".concat(t.id," and the user was created on ").concat(t.createdAt))}(t);break;case"numbers":i=o(t);break;case"country":i=function(t){var e=a("response-container"),n=r(t[0].flag),i=o("The country is ".concat(t[0].name," and the capital is ").concat(t[0].capital));return e.appendChild(n),e.appendChild(i),e}(t);break;case"klingon":i=function(t){return o("".concat(t.contents.translated))}(t);break;default:i=function(t){return JSON.stringify(t)}(t)}document.getElementById(n).getElementsByClassName(c)[0].appendChild(i)}n.d(e,"a",function(){return i}),n.d(e,"b",function(){return c})},function(t,e,n){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var n=function(t,e){var n=t[1]||"",r=t[3];if(!r)return n;if(e&&"function"==typeof btoa){var o=(i=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */"),a=r.sources.map(function(t){return"/*# sourceURL="+r.sourceRoot+t+" */"});return[n].concat(a).concat([o]).join("\n")}var i;return[n].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+n+"}":n}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},o=0;o<this.length;o++){var a=this[o][0];null!=a&&(r[a]=!0)}for(o=0;o<t.length;o++){var i=t[o];null!=i[0]&&r[i[0]]||(n&&!i[2]?i[2]=n:n&&(i[2]="("+i[2]+") and ("+n+")"),e.push(i))}},e}},function(t,e,n){var r,o,a={},i=(r=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===o&&(o=r.apply(this,arguments)),o}),c=function(t){var e={};return function(t,n){if("function"==typeof t)return t();if(void 0===e[t]){var r=function(t,e){return e?e.querySelector(t):document.querySelector(t)}.call(this,t,n);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(t){r=null}e[t]=r}return e[t]}}(),u=null,s=0,l=[],f=n(6);function h(t,e){for(var n=0;n<t.length;n++){var r=t[n],o=a[r.id];if(o){o.refs++;for(var i=0;i<o.parts.length;i++)o.parts[i](r.parts[i]);for(;i<r.parts.length;i++)o.parts.push(g(r.parts[i],e))}else{var c=[];for(i=0;i<r.parts.length;i++)c.push(g(r.parts[i],e));a[r.id]={id:r.id,refs:1,parts:c}}}}function p(t,e){for(var n=[],r={},o=0;o<t.length;o++){var a=t[o],i=e.base?a[0]+e.base:a[0],c={css:a[1],media:a[2],sourceMap:a[3]};r[i]?r[i].parts.push(c):n.push(r[i]={id:i,parts:[c]})}return n}function d(t,e){var n=c(t.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=l[l.length-1];if("top"===t.insertAt)r?r.nextSibling?n.insertBefore(e,r.nextSibling):n.appendChild(e):n.insertBefore(e,n.firstChild),l.push(e);else if("bottom"===t.insertAt)n.appendChild(e);else{if("object"!=typeof t.insertAt||!t.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=c(t.insertAt.before,n);n.insertBefore(e,o)}}function v(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var e=l.indexOf(t);e>=0&&l.splice(e,1)}function m(t){var e=document.createElement("style");if(void 0===t.attrs.type&&(t.attrs.type="text/css"),void 0===t.attrs.nonce){var r=function(){0;return n.nc}();r&&(t.attrs.nonce=r)}return y(e,t.attrs),d(t,e),e}function y(t,e){Object.keys(e).forEach(function(n){t.setAttribute(n,e[n])})}function g(t,e){var n,r,o,a;if(e.transform&&t.css){if(!(a="function"==typeof e.transform?e.transform(t.css):e.transform.default(t.css)))return function(){};t.css=a}if(e.singleton){var i=s++;n=u||(u=m(e)),r=x.bind(null,n,i,!1),o=x.bind(null,n,i,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(t){var e=document.createElement("link");return void 0===t.attrs.type&&(t.attrs.type="text/css"),t.attrs.rel="stylesheet",y(e,t.attrs),d(t,e),e}(e),r=function(t,e,n){var r=n.css,o=n.sourceMap,a=void 0===e.convertToAbsoluteUrls&&o;(e.convertToAbsoluteUrls||a)&&(r=f(r));o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var i=new Blob([r],{type:"text/css"}),c=t.href;t.href=URL.createObjectURL(i),c&&URL.revokeObjectURL(c)}.bind(null,n,e),o=function(){v(n),n.href&&URL.revokeObjectURL(n.href)}):(n=m(e),r=function(t,e){var n=e.css,r=e.media;r&&t.setAttribute("media",r);if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}.bind(null,n),o=function(){v(n)});return r(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;r(t=e)}else o()}}t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(e=e||{}).attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=i()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var n=p(t,e);return h(n,e),function(t){for(var r=[],o=0;o<n.length;o++){var i=n[o];(c=a[i.id]).refs--,r.push(c)}t&&h(p(t,e),e);for(o=0;o<r.length;o++){var c;if(0===(c=r[o]).refs){for(var u=0;u<c.parts.length;u++)c.parts[u]();delete a[c.id]}}}};var b,w=(b=[],function(t,e){return b[t]=e,b.filter(Boolean).join("\n")});function x(t,e,n,r){var o=n?"":r.css;if(t.styleSheet)t.styleSheet.cssText=w(e,o);else{var a=document.createTextNode(o),i=t.childNodes;i[e]&&t.removeChild(i[e]),i.length?t.insertBefore(a,i[e]):t.appendChild(a)}}},function(t,e,n){var r=n(11),o=n(12),a=n(13);t.exports=function(t){return r(t)||o(t)||a()}},function(t,e,n){var r=n(5);"string"==typeof r&&(r=[[t.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(2)(r,o);r.locals&&(t.exports=r.locals)},function(t,e,n){(t.exports=n(1)(!1)).push([t.i,"* {\n  margin: 0 auto;\n  padding: 0; }\n\nbody {\n  width: 100%;\n  height: 100%; }\n\nh1, h2 {\n  margin-top: 1%;\n  text-align: center; }\n\nh2 {\n  cursor: pointer;\n  margin-bottom: 2%;\n  text-decoration: underline; }\n\n.section-container {\n  display: none;\n  margin: 0 5%; }\n  .section-container.active {\n    display: block; }\n  .section-container .code-container {\n    background: lightgrey;\n    border: 1px solid darkslategrey;\n    margin-bottom: 1%;\n    padding: 1% 2%; }\n    .section-container .code-container p.code-title {\n      font-size: 1.15em;\n      font-weight: 600;\n      padding-bottom: 0.5%;\n      text-align: center; }\n    .section-container .code-container p.code-snippet-example, .section-container .code-container p.code-output {\n      font-weight: 600; }\n    .section-container .code-container p.pre-es6, .section-container .code-container p.post-es6 {\n      font-style: italic;\n      font-weight: 600; }\n    .section-container .code-container code .indent-20 {\n      padding-left: 20px; }\n    .section-container .code-container code .indent-40 {\n      padding-left: 40px; }\n    .section-container .code-container code .indent-60 {\n      padding-left: 60px; }\n    .section-container .code-container code .indent-80 {\n      padding-left: 80px; }\n    .section-container .code-container code .indent-100 {\n      padding-left: 100px; }\n",""])},function(t,e){t.exports=function(t){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var n=e.protocol+"//"+e.host,r=n+e.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(t,e){var o,a=e.trim().replace(/^"(.*)"$/,function(t,e){return e}).replace(/^'(.*)'$/,function(t,e){return e});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(a)?t:(o=0===a.indexOf("//")?a:0===a.indexOf("/")?n+a:r+a.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")})}},function(t,e){document.addEventListener("click",function(t){if(t.target.classList.contains("section-header")){var e=t.target.nextSibling.nextSibling.classList;if(e.contains("active"))e.remove("active");else document.querySelectorAll(".section-container.active").forEach(function(t){t.classList.remove("active")}),e.add("active")}})},function(t,e,n){t.exports=n(10)},function(t,e){function n(t,e,n,r,o,a,i){try{var c=t[a](i),u=c.value}catch(t){return void n(t)}c.done?e(u):Promise.resolve(u).then(r,o)}t.exports=function(t){return function(){var e=this,r=arguments;return new Promise(function(o,a){var i=t.apply(e,r);function c(t){n(i,o,a,c,u,"next",t)}function u(t){n(i,o,a,c,u,"throw",t)}c(void 0)})}}},function(t,e,n){var r=function(t){"use strict";var e,n=Object.prototype,r=n.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,e,n,r){var o=e&&e.prototype instanceof v?e:v,a=Object.create(o.prototype),i=new T(r||[]);return a._invoke=function(t,e,n){var r=l;return function(o,a){if(r===h)throw new Error("Generator is already running");if(r===p){if("throw"===o)throw a;return P()}for(n.method=o,n.arg=a;;){var i=n.delegate;if(i){var c=L(i,n);if(c){if(c===d)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===l)throw r=p,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=h;var u=s(t,e,n);if("normal"===u.type){if(r=n.done?p:f,u.arg===d)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(r=p,n.method="throw",n.arg=u.arg)}}}(t,n,i),a}function s(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=u;var l="suspendedStart",f="suspendedYield",h="executing",p="completed",d={};function v(){}function m(){}function y(){}var g={};g[a]=function(){return this};var b=Object.getPrototypeOf,w=b&&b(b(S([])));w&&w!==n&&r.call(w,a)&&(g=w);var x=y.prototype=v.prototype=Object.create(g);function j(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function O(t){var e;this._invoke=function(n,o){function a(){return new Promise(function(e,a){!function e(n,o,a,i){var c=s(t[n],t,o);if("throw"!==c.type){var u=c.arg,l=u.value;return l&&"object"==typeof l&&r.call(l,"__await")?Promise.resolve(l.__await).then(function(t){e("next",t,a,i)},function(t){e("throw",t,a,i)}):Promise.resolve(l).then(function(t){u.value=t,a(u)},function(t){return e("throw",t,a,i)})}i(c.arg)}(n,o,e,a)})}return e=e?e.then(a,a):a()}}function L(t,n){var r=t.iterator[n.method];if(r===e){if(n.delegate=null,"throw"===n.method){if(t.iterator.return&&(n.method="return",n.arg=e,L(t,n),"throw"===n.method))return d;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var o=s(r,t.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,d;var a=o.arg;return a?a.done?(n[t.resultName]=a.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,d):a:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,d)}function E(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function k(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function T(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function S(t){if(t){var n=t[a];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,i=function n(){for(;++o<t.length;)if(r.call(t,o))return n.value=t[o],n.done=!1,n;return n.value=e,n.done=!0,n};return i.next=i}}return{next:P}}function P(){return{value:e,done:!0}}return m.prototype=x.constructor=y,y.constructor=m,y[c]=m.displayName="GeneratorFunction",t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===m||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,c in t||(t[c]="GeneratorFunction")),t.prototype=Object.create(x),t},t.awrap=function(t){return{__await:t}},j(O.prototype),O.prototype[i]=function(){return this},t.AsyncIterator=O,t.async=function(e,n,r,o){var a=new O(u(e,n,r,o));return t.isGeneratorFunction(n)?a:a.next().then(function(t){return t.done?t.value:a.next()})},j(x),x[c]="Generator",x[a]=function(){return this},x.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=S,T.prototype={constructor:T,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(k),!t)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function o(r,o){return c.type="throw",c.arg=t,n.next=r,o&&(n.method="next",n.arg=e),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],c=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var u=r.call(i,"catchLoc"),s=r.call(i,"finallyLoc");if(u&&s){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,d):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),k(n),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;k(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:S(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),d}},t}(t.exports);try{regeneratorRuntime=r}catch(t){Function("r","regeneratorRuntime = r")(r)}},function(t,e){t.exports=function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}},function(t,e){t.exports=function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}},function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}},,,,,,,,function(t,e,n){"use strict";n.r(e);n(4),n(7);var r=n(0),o=[1,2,3,4,5].map(function(t){return t*t});Object(r.a)(o,"array-map-container");var a=["desk","chair",5,"backpack",3.14,100].filter(function(t){return"number"==typeof t});Object(r.a)(a,"array-filter-container");var i=["adam","nancy","damain","ramona","evan","wendy"].reduce(function(t,e){return t+e[0]},"");i=i.charAt(0).toUpperCase()+i.slice(1),Object(r.a)(i,"array-reduce-container");var c=[1,2,3,4],u=c.reduce(function(t,e){return t+e},1);Object(r.a)(u,"array-reduce-container","example-output2");var s=["wendy","evan","ramona","damain","nancy","adam"].reduceRight(function(t,e){return t+e[0]},"");s=s.charAt(0).toUpperCase()+s.slice(1),Object(r.a)(s,"array-reduce-right-container");var l=c.reduce(function(t,e){return t+e},100);Object(r.a)(l,"array-reduce-right-container","example-output2");var f=[1,2,3,4,5,6,7,8,9,10];f.forEach(function(t,e,n){t%2==0&&n.splice(e,1)}),Object(r.a)(f,"array-foreach-container");var h=[1,50,75,200,350,525,1e3].every(function(t){return t>0});Object(r.a)(h,"array-every-container");var p=["Stuart","Mark","Bob","Dave","Phil","John","Tim","Jerry","Carl","Kevin"];p.sort(),Object(r.a)(p,"array-sort-container"),p.reverse(),Object(r.a)(p,"array-sort-container","example-output1-reversed");var d=[23,22,4,16,8,42,15];d.sort(function(t,e){return t-e}),Object(r.a)(d,"array-sort-container","example-output2");for(var v=[],m=[1,2,3,4,5],y=0;y<m.length;y++){var g=m[y];v.push(10*g)}Object(r.a)(v,"array-forof-container");for(var b=[1,2,3,4,5,6,7],w=[1,2,3,4],x=[],j=0;j<b.length;j++)-1==w.indexOf(b[j])&&x.push(b[j]);var O=b.filter(function(t){return!w.includes(t)});Object(r.a)(x,"array-nondups-container"),Object(r.a)(O,"array-nondups-container","example-output2");var L={key1:"value1",key2:"value2",key3:"value3",key4:"value4",key5:"value5"};Object(r.a)(function(t){var e=[];for(var n in t)e.push(n);return e}(L),"object-objkey-container"),Object(r.a)(function(t){var e=[];for(var n in t)e.push(t[n]);return e}(L),"object-objvalue-container");var E=n(8),k=n.n(E),T=n(9),S=n.n(T),P=new XMLHttpRequest;P.responseType="json",P.onreadystatechange=function(){if(P.readyState===XMLHttpRequest.DONE){if(200!==P.status)return"Error ".concat(P.status);Object(r.b)(P.response,"norris","ajax-original-container")}},P.open("GET","https://api.chucknorris.io/jokes/random",!0),P.send();fetch("https://taco-randomizer.herokuapp.com/random/").then(function(t){return t.json()},function(t){Object(r.b)(t.message,"taco","ajax-fetch-container")}).then(function(t){Object(r.b)(t,"taco","ajax-fetch-container")}).catch(function(t){Object(r.a)(t,"ajax-fetch-container")});fetch("https://reqres.in/api/users",{method:"POST",body:{name:"Bilbo Baggins",movies:["Fellowship of the Ring"]}}).then(function(t){return t.json()},function(t){Object(r.b)(t.message,"createUser","ajax-fetchpost-container")}).then(function(t){Object(r.b)(t,"createUser","ajax-fetchpost-container")}).catch(function(t){Object(r.a)(t,"ajax-fetchpost-container")}),function(){var t=S()(k.a.mark(function t(e){var n,r;return k.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(e);case 2:if((n=t.sent).ok){t.next=5;break}throw new Error("Request failed!");case 5:return t.next=7,n.text();case 7:return r=t.sent,t.abrupt("return",r);case 9:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()("https://cors-anywhere.herokuapp.com/http://numbersapi.com/random/trivia").then(function(t){Object(r.b)(t,"numbers","ajax-asyncawait-container")}).catch(function(t){Object(r.a)(t,"ajax-asyncawait-container")});(function(){var t=S()(k.a.mark(function t(e,n){var r,o;return k.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(e,n);case 2:if((r=t.sent).ok){t.next=5;break}throw new Error("Request failed!");case 5:return t.next=7,r.json();case 7:return o=t.sent,t.abrupt("return",o);case 9:case"end":return t.stop()}},t)}));return function(e,n){return t.apply(this,arguments)}})()("https://reqres.in/api/users",{method:"POST",body:{name:"Geddy Lee",bands:["RUSH"]}}).then(function(t){Object(r.b)(t,"createUser","ajax-asyncawaitpost-container")}).catch(function(t){Object(r.a)(t,"ajax-asyncawaitpost-container")}),new Promise(function(t,e){Math.random()<.5?t("This is a successful promise and makes us happy"):e(new Error("This is an unsuccessful promise and makes us sad"))}).then(function(t){Object(r.a)(t,"promises-simple-container")}).catch(function(t){Object(r.a)(t,"promises-simple-container")}),Promise.all([new Promise(function(t){return setTimeout(function(){return t(1)},3e3)}),new Promise(function(t){return setTimeout(function(){return t(2)},2e3)}),new Promise(function(t){return setTimeout(function(){return t(3)},1e3)})]).then(function(t){return Object(r.a)(t,"promises-all-container")}).catch(function(t){return Object(r.a)(t,"promises-all-container")}),Promise.all([new Promise(function(t,e){return setTimeout(function(){return t(1)},1e3)}),new Promise(function(t,e){return setTimeout(function(){return e(new Error("Whoops!"))},2e3)}),new Promise(function(t,e){return setTimeout(function(){return t(3)},3e3)})]).then(function(t){return Object(r.a)(t,"promises-all-container","example-output2")}).catch(function(t){return Object(r.a)(t,"promises-all-container","example-output2")}),Promise.race([new Promise(function(t){return setTimeout(function(){return t(1)},3e3)}),new Promise(function(t){return setTimeout(function(){return t(2)},2e3)}),new Promise(function(t){return setTimeout(function(){return t(3)},1e3)})]).then(function(t){return Object(r.a)(t,"promises-race-container")}).catch(function(t){return Object(r.a)(t,"promises-race-container")});var U,A,R,N,C,_,M,I=n(3),B=n.n(I);U="01/01/1980",A=new Date,R=new Date(U),N=A.getFullYear()-R.getFullYear(),((C=A.getMonth()-R.getMonth())<0||0===C&&A.getDate()<R.getDate())&&N--,Object(r.a)(N,"other-age-container"),null!=(_="andrew")&&null!=_&&/^[a-zA-x]{2,30}$/.test(_)?Object(r.a)("Valid Name","other-name-container"):Object(r.a)("Invalid Name","other-name-container"),null!=(M="http://www.google.com")&&null!=M&&/^(ftp|http|https):\/\/[^ "]+$/.test(M)?Object(r.a)("Valid URL","other-url-container"):Object(r.a)("Invalid URL","other-url-container"),Object(r.a)(function t(e){if(!(e<0))return 0===e?1:e*t(e-1)}(3),"factorial-container"),Object(r.a)(function t(e){return""===e?"":t(e.substr(1))+e[0]}("cat"),"reverse-container");Object(r.a)(function(t){return t.split(",").reduce(function(t,e){if(0===Object.entries(t).length){var n=e.split("x");t.push(n[0],n[1])}else{var r=e.split("x");t[0]=Number(t[0])>Number(r[0])?t[0]:r[0],t[1]=Number(t[1])>Number(r[1])?t[1]:r[1]}return t},[]).join("x")}("360x300,360x310,338x280,300x250,320x50"),"largest-size-container");console.log(function t(e){return e.length<=2?2===e.length?[e,[e[1],e[0]]]:e:e.reduce(function(n,r,o){return n.concat(t([].concat(B()(e.slice(0,o)),B()(e.slice(o+1)))).map(function(t){return[r].concat(B()(t))}))},[])}(["Bill","Jim","bob","ash"])),Object(r.a)("Check the Console","permutations-container");var G,q,F,D=[2,5,10,2];Object(r.a)((G=D,F=[],D.forEach(function(t,e){q=1;for(var n=0;n<G.length;n++)e!==n&&(q*=G[n]);F.push(q)}),F),"products-except-self-container");var J=function(t,e){return t<e?-1:t>e?1:0};Object(r.a)(function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:J,n=B()(t);return function t(r,o){if(!(o-r<1)){for(var a=n[o],i=r,c=r;c<o;c++)if(-1===e(n[c],a)){if(i!==c){var u=n[i];n[i]=n[c],n[c]=u}i++}n[o]=n[i],n[i]=a,t(r,i-1),t(i+1,o)}}(0,t.length-1),n}([5,52,5,28,1,4,3,5,9,10,467389,998348]),"quick-sort-container");var H=[{value:6,left:1,right:2},{value:5,left:3,right:4},{value:7,left:null,right:5},{value:3,left:6,right:null},{value:4,left:null,right:null},{value:9,left:7,right:8},{value:2,left:9,right:null},{value:8,left:null,right:null},{value:10,left:null,right:null},{value:1,left:null,right:null}],$=function(t,e){var n=[];for(n.push(t[0]);0!==n.length;)for(var r=0;r<n.length;r++){var o=n.shift();if(o.value===e)return o;o.left&&n.push(t[o.left]),o.right&&n.push(t[o.right])}return null}(H,6);Object(r.a)("The seach value is: ".concat($.value,", The left node is: ").concat($.left,", The right node is: ").concat($.right),"breadth-first-container");var z=function(t,e){var n=[];for(n.push(t[0]);0!==n.length;)for(var r=0;r<n.length;r++){var o=n.pop();if(o.value===e)return o;o.right&&n.push(t[o.right]),o.left&&n.push(t[o.left])}return null}(H,6);Object(r.a)("The seach value is: ".concat(z.value,", The left node is: ").concat(z.left,", The right node is: ").concat(z.right),"depth-first-container")}]);