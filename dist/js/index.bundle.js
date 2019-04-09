!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=9)}([function(t,e,n){t.exports=n(8)},function(t,e){function n(t,e,n,r,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void n(t)}c.done?e(u):Promise.resolve(u).then(r,o)}t.exports=function(t){return function(){var e=this,r=arguments;return new Promise(function(o,i){var a=t.apply(e,r);function c(t){n(a,o,i,c,u,"next",t)}function u(t){n(a,o,i,c,u,"throw",t)}c(void 0)})}}},function(t,e,n){var r=n(3);"string"==typeof r&&(r=[[t.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(5)(r,o);r.locals&&(t.exports=r.locals)},function(t,e,n){(t.exports=n(4)(!1)).push([t.i,"* {\n  margin: 0 auto;\n  padding: 0; }\n\nbody {\n  width: 100%;\n  height: 100%; }\n\nh1, h2 {\n  margin-top: 1%;\n  text-align: center; }\n\nh2 {\n  cursor: pointer;\n  margin-bottom: 2%;\n  text-decoration: underline; }\n\n.section-container {\n  display: none;\n  margin: 0 5%; }\n  .section-container.active {\n    display: block; }\n  .section-container .code-container {\n    background: lightgrey;\n    border: 1px solid darkslategrey;\n    margin-bottom: 1%;\n    padding: 1% 2%; }\n    .section-container .code-container p.code-title {\n      font-size: 1.15em;\n      font-weight: 600;\n      padding-bottom: 0.5%;\n      text-align: center; }\n    .section-container .code-container p.code-snippet-example, .section-container .code-container p.code-output {\n      font-weight: 600; }\n    .section-container .code-container p.pre-es6, .section-container .code-container p.post-es6 {\n      font-style: italic;\n      font-weight: 600; }\n    .section-container .code-container p .indent-20 {\n      padding-left: 20px; }\n    .section-container .code-container p .indent-40 {\n      padding-left: 40px; }\n    .section-container .code-container p .indent-60 {\n      padding-left: 60px; }\n",""])},function(t,e,n){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var n=function(t,e){var n=t[1]||"",r=t[3];if(!r)return n;if(e&&"function"==typeof btoa){var o=(a=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),i=r.sources.map(function(t){return"/*# sourceURL="+r.sourceRoot+t+" */"});return[n].concat(i).concat([o]).join("\n")}var a;return[n].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+n+"}":n}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];null!=i&&(r[i]=!0)}for(o=0;o<t.length;o++){var a=t[o];null!=a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),e.push(a))}},e}},function(t,e,n){var r,o,i={},a=(r=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===o&&(o=r.apply(this,arguments)),o}),c=function(t){var e={};return function(t,n){if("function"==typeof t)return t();if(void 0===e[t]){var r=function(t,e){return e?e.querySelector(t):document.querySelector(t)}.call(this,t,n);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(t){r=null}e[t]=r}return e[t]}}(),u=null,s=0,f=[],l=n(6);function p(t,e){for(var n=0;n<t.length;n++){var r=t[n],o=i[r.id];if(o){o.refs++;for(var a=0;a<o.parts.length;a++)o.parts[a](r.parts[a]);for(;a<r.parts.length;a++)o.parts.push(g(r.parts[a],e))}else{var c=[];for(a=0;a<r.parts.length;a++)c.push(g(r.parts[a],e));i[r.id]={id:r.id,refs:1,parts:c}}}}function h(t,e){for(var n=[],r={},o=0;o<t.length;o++){var i=t[o],a=e.base?i[0]+e.base:i[0],c={css:i[1],media:i[2],sourceMap:i[3]};r[a]?r[a].parts.push(c):n.push(r[a]={id:a,parts:[c]})}return n}function d(t,e){var n=c(t.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=f[f.length-1];if("top"===t.insertAt)r?r.nextSibling?n.insertBefore(e,r.nextSibling):n.appendChild(e):n.insertBefore(e,n.firstChild),f.push(e);else if("bottom"===t.insertAt)n.appendChild(e);else{if("object"!=typeof t.insertAt||!t.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=c(t.insertAt.before,n);n.insertBefore(e,o)}}function m(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var e=f.indexOf(t);e>=0&&f.splice(e,1)}function v(t){var e=document.createElement("style");if(void 0===t.attrs.type&&(t.attrs.type="text/css"),void 0===t.attrs.nonce){var r=function(){0;return n.nc}();r&&(t.attrs.nonce=r)}return y(e,t.attrs),d(t,e),e}function y(t,e){Object.keys(e).forEach(function(n){t.setAttribute(n,e[n])})}function g(t,e){var n,r,o,i;if(e.transform&&t.css){if(!(i="function"==typeof e.transform?e.transform(t.css):e.transform.default(t.css)))return function(){};t.css=i}if(e.singleton){var a=s++;n=u||(u=v(e)),r=x.bind(null,n,a,!1),o=x.bind(null,n,a,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(t){var e=document.createElement("link");return void 0===t.attrs.type&&(t.attrs.type="text/css"),t.attrs.rel="stylesheet",y(e,t.attrs),d(t,e),e}(e),r=function(t,e,n){var r=n.css,o=n.sourceMap,i=void 0===e.convertToAbsoluteUrls&&o;(e.convertToAbsoluteUrls||i)&&(r=l(r));o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var a=new Blob([r],{type:"text/css"}),c=t.href;t.href=URL.createObjectURL(a),c&&URL.revokeObjectURL(c)}.bind(null,n,e),o=function(){m(n),n.href&&URL.revokeObjectURL(n.href)}):(n=v(e),r=function(t,e){var n=e.css,r=e.media;r&&t.setAttribute("media",r);if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}.bind(null,n),o=function(){m(n)});return r(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;r(t=e)}else o()}}t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(e=e||{}).attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=a()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var n=h(t,e);return p(n,e),function(t){for(var r=[],o=0;o<n.length;o++){var a=n[o];(c=i[a.id]).refs--,r.push(c)}t&&p(h(t,e),e);for(o=0;o<r.length;o++){var c;if(0===(c=r[o]).refs){for(var u=0;u<c.parts.length;u++)c.parts[u]();delete i[c.id]}}}};var b,w=(b=[],function(t,e){return b[t]=e,b.filter(Boolean).join("\n")});function x(t,e,n,r){var o=n?"":r.css;if(t.styleSheet)t.styleSheet.cssText=w(e,o);else{var i=document.createTextNode(o),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(i,a[e]):t.appendChild(i)}}},function(t,e){t.exports=function(t){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var n=e.protocol+"//"+e.host,r=n+e.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(t,e){var o,i=e.trim().replace(/^"(.*)"$/,function(t,e){return e}).replace(/^'(.*)'$/,function(t,e){return e});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?t:(o=0===i.indexOf("//")?i:0===i.indexOf("/")?n+i:r+i.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")})}},function(t,e){document.addEventListener("click",function(t){if(t.target.classList.contains("section-header")){var e=t.target.nextSibling.nextSibling.classList;if(e.contains("active"))e.remove("active");else document.querySelectorAll(".section-container.active").forEach(function(t){t.classList.remove("active")}),e.add("active")}})},function(t,e,n){var r=function(t){"use strict";var e,n=Object.prototype,r=n.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,e,n,r){var o=e&&e.prototype instanceof m?e:m,i=Object.create(o.prototype),a=new T(r||[]);return i._invoke=function(t,e,n){var r=f;return function(o,i){if(r===p)throw new Error("Generator is already running");if(r===h){if("throw"===o)throw i;return P()}for(n.method=o,n.arg=i;;){var a=n.delegate;if(a){var c=E(a,n);if(c){if(c===d)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===f)throw r=h,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=p;var u=s(t,e,n);if("normal"===u.type){if(r=n.done?h:l,u.arg===d)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(r=h,n.method="throw",n.arg=u.arg)}}}(t,n,a),i}function s(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=u;var f="suspendedStart",l="suspendedYield",p="executing",h="completed",d={};function m(){}function v(){}function y(){}var g={};g[i]=function(){return this};var b=Object.getPrototypeOf,w=b&&b(b(S([])));w&&w!==n&&r.call(w,i)&&(g=w);var x=y.prototype=m.prototype=Object.create(g);function L(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function j(t){var e;this._invoke=function(n,o){function i(){return new Promise(function(e,i){!function e(n,o,i,a){var c=s(t[n],t,o);if("throw"!==c.type){var u=c.arg,f=u.value;return f&&"object"==typeof f&&r.call(f,"__await")?Promise.resolve(f.__await).then(function(t){e("next",t,i,a)},function(t){e("throw",t,i,a)}):Promise.resolve(f).then(function(t){u.value=t,i(u)},function(t){return e("throw",t,i,a)})}a(c.arg)}(n,o,e,i)})}return e=e?e.then(i,i):i()}}function E(t,n){var r=t.iterator[n.method];if(r===e){if(n.delegate=null,"throw"===n.method){if(t.iterator.return&&(n.method="return",n.arg=e,E(t,n),"throw"===n.method))return d;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var o=s(r,t.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,d;var i=o.arg;return i?i.done?(n[t.resultName]=i.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,d):i:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,d)}function k(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function O(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function T(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(k,this),this.reset(!0)}function S(t){if(t){var n=t[i];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function n(){for(;++o<t.length;)if(r.call(t,o))return n.value=t[o],n.done=!1,n;return n.value=e,n.done=!0,n};return a.next=a}}return{next:P}}function P(){return{value:e,done:!0}}return v.prototype=x.constructor=y,y.constructor=v,y[c]=v.displayName="GeneratorFunction",t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===v||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,c in t||(t[c]="GeneratorFunction")),t.prototype=Object.create(x),t},t.awrap=function(t){return{__await:t}},L(j.prototype),j.prototype[a]=function(){return this},t.AsyncIterator=j,t.async=function(e,n,r,o){var i=new j(u(e,n,r,o));return t.isGeneratorFunction(n)?i:i.next().then(function(t){return t.done?t.value:i.next()})},L(x),x[c]="Generator",x[i]=function(){return this},x.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=S,T.prototype={constructor:T,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(O),!t)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function o(r,o){return c.type="throw",c.arg=t,n.next=r,o&&(n.method="next",n.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=r.call(a,"catchLoc"),s=r.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,d):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),O(n),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;O(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:S(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),d}},t}(t.exports);try{regeneratorRuntime=r}catch(t){Function("r","regeneratorRuntime = r")(r)}},function(t,e,n){"use strict";n.r(e);n(2),n(7);function r(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"output-text",n=(arguments.length>2&&void 0!==arguments[2]&&arguments[2],document.createElement("p"));n.setAttribute("class",e);var r=document.createTextNode(t);return n.appendChild(r),n}function o(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"example-output";document.getElementById(e).getElementsByClassName(n)[0].innerHTML=t}function i(t,e,n){var o,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"example-output";switch(e){case"norris":o=function(t){var e=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"response-container",e=document.createElement("div");return e.setAttribute("class",t),e}("response-container"),n=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,r=document.createElement("img");return r.src=t,r.setAttribute("class","image"),r.alt=e||null,r.title=n||null,r}(t.icon_url),o=r(t.value);return e.appendChild(n),e.appendChild(o),e}(t);break;case"taco":o=function(t){return r("".concat(t.shell.name,", ").concat(t.base_layer.name,", ").concat(t.condiment.name,", ").concat(t.mixin.name,", and ").concat(t.seasoning.name))}(t);break;case"createUser":o=function(t){return r("The user's id is ".concat(t.id," and the user was created on ").concat(t.createdAt))}(t);break;case"numbers":o=r(t);break;default:o=function(t){return JSON.stringify(t)}(t)}document.getElementById(n).getElementsByClassName(i)[0].appendChild(o)}o([1,2,3,4,5].map(function(t){return t*t}),"array-map-container");o(["desk","chair",5,"backpack",3.14,100].filter(function(t){return"number"==typeof t}),"array-filter-container");var a=["adam","nancy","damain","ramona","evan","wendy"].reduce(function(t,e){return t+e[0]},"");o(a=a.charAt(0).toUpperCase()+a.slice(1),"array-reduce-container");o([1,2,3,4].reduce(function(t,e){return t+e},1),"array-reduce-container","example-output2");var c=[1,2,3,4,5,6,7,8,9,10];c.forEach(function(t,e,n){t%2==0&&n.splice(e,1)}),o(c,"array-foreach-container");o([1,50,75,200,350,525,1e3].every(function(t){return t>0}),"array-every-container");var u=["Stuart","Mark","Bob","Dave","Phil","John","Tim","Jerry","Carl","Kevin"];u.sort(),o(u,"array-sort-container"),u.reverse(),o(u,"array-sort-container","example-output1-reversed");var s=[23,22,4,16,8,42,15];s.sort(function(t,e){return t-e}),o(s,"array-sort-container","example-output2");for(var f=[1,2,3,4,5,6,7],l=[1,2,3,4],p=[],h=0;h<f.length;h++)-1==l.indexOf(f[h])&&p.push(f[h]);var d=f.filter(function(t){return!l.includes(t)});o(p,"array-nondups-container"),o(d,"array-nondups-container","example-output2");var m={key1:"value1",key2:"value2",key3:"value3",key4:"value4",key5:"value5"};o(function(t){var e=[];for(var n in t)e.push(n);return e}(m),"object-objkey-container"),o(function(t){var e=[];for(var n in t)e.push(t[n]);return e}(m),"object-objvalue-container");var v=n(0),y=n.n(v),g=n(1),b=n.n(g),w=new XMLHttpRequest;w.responseType="json",w.onreadystatechange=function(){if(w.readyState===XMLHttpRequest.DONE){if(200!==w.status)return"Error ".concat(w.status);i(w.response,"norris","ajax-original-container")}},w.open("GET","https://api.chucknorris.io/jokes/random",!0),w.send();fetch("https://taco-randomizer.herokuapp.com/random/").then(function(t){return t.json()},function(t){i(t.message,"taco","ajax-fetch-container")}).then(function(t){i(t,"taco","ajax-fetch-container")}).catch(function(t){o(t,"ajax-fetch-container")});fetch("https://reqres.in/api/users",{method:"POST",body:{name:"Bilbo Baggins",movies:["Fellowship of the Ring"]}}).then(function(t){return t.json()},function(t){i(t.message,"createUser","ajax-fetchpost-container")}).then(function(t){i(t,"createUser","ajax-fetchpost-container")}).catch(function(t){o(t,"ajax-fetchpost-container")}),function(){var t=b()(y.a.mark(function t(e){var n,r;return y.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(e);case 2:if((n=t.sent).ok){t.next=5;break}throw new Error("Request failed!");case 5:return t.next=7,n.text();case 7:return r=t.sent,t.abrupt("return",r);case 9:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()("http://numbersapi.com/random/trivia").then(function(t){i(t,"numbers","ajax-asyncawait-container")}).catch(function(t){o(t,"ajax-asyncawait-container")});var x,L,j,E,k,O,T;(function(){var t=b()(y.a.mark(function t(e,n){var r,o;return y.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(e,n);case 2:if((r=t.sent).ok){t.next=5;break}throw new Error("Request failed!");case 5:return t.next=7,r.json();case 7:return o=t.sent,t.abrupt("return",o);case 9:case"end":return t.stop()}},t)}));return function(e,n){return t.apply(this,arguments)}})()("https://reqres.in/api/users",{method:"POST",body:{name:"Geddy Lee",bands:["RUSH"]}}).then(function(t){i(t,"createUser","ajax-asyncawaitpost-container")}).catch(function(t){o(t,"ajax-asyncawaitpost-container")}),new Promise(function(t,e){Math.random()<.5?t("This is a successful promise and makes us happy"):e(new Error("This is an unsuccessful promise and makes us sad"))}).then(function(t){o(t,"promises-simple-container")}).catch(function(t){o(t,"promises-simple-container")}),Promise.all([new Promise(function(t){return setTimeout(function(){return t(1)},3e3)}),new Promise(function(t){return setTimeout(function(){return t(2)},2e3)}),new Promise(function(t){return setTimeout(function(){return t(3)},1e3)})]).then(function(t){return o(t,"promises-all-container")}).catch(function(t){return o(t,"promises-all-container")}),Promise.all([new Promise(function(t,e){return setTimeout(function(){return t(1)},1e3)}),new Promise(function(t,e){return setTimeout(function(){return e(new Error("Whoops!"))},2e3)}),new Promise(function(t,e){return setTimeout(function(){return t(3)},3e3)})]).then(function(t){return o(t,"promises-all-container","example-output2")}).catch(function(t){return o(t,"promises-all-container","example-output2")}),Promise.race([new Promise(function(t){return setTimeout(function(){return t(1)},3e3)}),new Promise(function(t){return setTimeout(function(){return t(2)},2e3)}),new Promise(function(t){return setTimeout(function(){return t(3)},1e3)})]).then(function(t){return o(t,"promises-race-container")}).catch(function(t){return o(t,"promises-race-container")}),x="01/01/1980",L=new Date,j=new Date(x),E=L.getFullYear()-j.getFullYear(),((k=L.getMonth()-j.getMonth())<0||0===k&&L.getDate()<j.getDate())&&E--,o(E,"other-age-container"),null!=(O="andrew")&&null!=O&&/^[a-zA-x]{2,30}$/.test(O)?o("Valid Name","other-name-container"):o("Invalid Name","other-name-container"),null!=(T="http://www.google.com")&&null!=T&&/^(ftp|http|https):\/\/[^ "]+$/.test(T)?o("Valid URL","other-url-container"):o("Invalid URL","other-url-container")}]);