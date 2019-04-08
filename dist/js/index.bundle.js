!function(e){var n={};function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(r,o,function(n){return e[n]}.bind(null,o));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=6)}([function(e,n,t){var r=t(1);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};t(3)(r,o);r.locals&&(e.exports=r.locals)},function(e,n,t){(e.exports=t(2)(!1)).push([e.i,"* {\n  margin: 0 auto;\n  padding: 0; }\n\nbody {\n  width: 100%;\n  height: 100%; }\n\nh1, h2 {\n  margin-top: 1%;\n  text-align: center; }\n\nh2 {\n  cursor: pointer;\n  margin-bottom: 2%;\n  text-decoration: underline; }\n\n.section-container {\n  display: none;\n  margin: 0 5%; }\n  .section-container.active {\n    display: block; }\n  .section-container .code-container {\n    background: lightgrey;\n    border: 1px solid darkslategrey;\n    margin-bottom: 1%;\n    padding: 1% 2%; }\n    .section-container .code-container p.code-title {\n      font-size: 1.15em;\n      font-weight: 600;\n      padding-bottom: 0.5%;\n      text-align: center; }\n    .section-container .code-container p.code-snippet-example, .section-container .code-container p.code-output {\n      font-weight: 600; }\n    .section-container .code-container p.pre-es6, .section-container .code-container p.post-es6 {\n      font-style: italic;\n      font-weight: 600; }\n    .section-container .code-container p .indent-20 {\n      padding-left: 20px; }\n    .section-container .code-container p .indent-40 {\n      padding-left: 40px; }\n    .section-container .code-container p .indent-60 {\n      padding-left: 60px; }\n",""])},function(e,n,t){"use strict";e.exports=function(e){var n=[];return n.toString=function(){return this.map(function(n){var t=function(e,n){var t=e[1]||"",r=e[3];if(!r)return t;if(n&&"function"==typeof btoa){var o=(a=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),i=r.sources.map(function(e){return"/*# sourceURL="+r.sourceRoot+e+" */"});return[t].concat(i).concat([o]).join("\n")}var a;return[t].join("\n")}(n,e);return n[2]?"@media "+n[2]+"{"+t+"}":t}).join("")},n.i=function(e,t){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];null!=i&&(r[i]=!0)}for(o=0;o<e.length;o++){var a=e[o];null!=a[0]&&r[a[0]]||(t&&!a[2]?a[2]=t:t&&(a[2]="("+a[2]+") and ("+t+")"),n.push(a))}},n}},function(e,n,t){var r,o,i={},a=(r=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===o&&(o=r.apply(this,arguments)),o}),c=function(e){var n={};return function(e,t){if("function"==typeof e)return e();if(void 0===n[e]){var r=function(e,n){return n?n.querySelector(e):document.querySelector(e)}.call(this,e,t);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}n[e]=r}return n[e]}}(),s=null,u=0,f=[],l=t(4);function p(e,n){for(var t=0;t<e.length;t++){var r=e[t],o=i[r.id];if(o){o.refs++;for(var a=0;a<o.parts.length;a++)o.parts[a](r.parts[a]);for(;a<r.parts.length;a++)o.parts.push(g(r.parts[a],n))}else{var c=[];for(a=0;a<r.parts.length;a++)c.push(g(r.parts[a],n));i[r.id]={id:r.id,refs:1,parts:c}}}}function d(e,n){for(var t=[],r={},o=0;o<e.length;o++){var i=e[o],a=n.base?i[0]+n.base:i[0],c={css:i[1],media:i[2],sourceMap:i[3]};r[a]?r[a].parts.push(c):t.push(r[a]={id:a,parts:[c]})}return t}function m(e,n){var t=c(e.insertInto);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=f[f.length-1];if("top"===e.insertAt)r?r.nextSibling?t.insertBefore(n,r.nextSibling):t.appendChild(n):t.insertBefore(n,t.firstChild),f.push(n);else if("bottom"===e.insertAt)t.appendChild(n);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=c(e.insertAt.before,t);t.insertBefore(n,o)}}function h(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var n=f.indexOf(e);n>=0&&f.splice(n,1)}function v(e){var n=document.createElement("style");if(void 0===e.attrs.type&&(e.attrs.type="text/css"),void 0===e.attrs.nonce){var r=function(){0;return t.nc}();r&&(e.attrs.nonce=r)}return y(n,e.attrs),m(e,n),n}function y(e,n){Object.keys(n).forEach(function(t){e.setAttribute(t,n[t])})}function g(e,n){var t,r,o,i;if(n.transform&&e.css){if(!(i="function"==typeof n.transform?n.transform(e.css):n.transform.default(e.css)))return function(){};e.css=i}if(n.singleton){var a=u++;t=s||(s=v(n)),r=w.bind(null,t,a,!1),o=w.bind(null,t,a,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(t=function(e){var n=document.createElement("link");return void 0===e.attrs.type&&(e.attrs.type="text/css"),e.attrs.rel="stylesheet",y(n,e.attrs),m(e,n),n}(n),r=function(e,n,t){var r=t.css,o=t.sourceMap,i=void 0===n.convertToAbsoluteUrls&&o;(n.convertToAbsoluteUrls||i)&&(r=l(r));o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var a=new Blob([r],{type:"text/css"}),c=e.href;e.href=URL.createObjectURL(a),c&&URL.revokeObjectURL(c)}.bind(null,t,n),o=function(){h(t),t.href&&URL.revokeObjectURL(t.href)}):(t=v(n),r=function(e,n){var t=n.css,r=n.media;r&&e.setAttribute("media",r);if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}.bind(null,t),o=function(){h(t)});return r(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;r(e=n)}else o()}}e.exports=function(e,n){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(n=n||{}).attrs="object"==typeof n.attrs?n.attrs:{},n.singleton||"boolean"==typeof n.singleton||(n.singleton=a()),n.insertInto||(n.insertInto="head"),n.insertAt||(n.insertAt="bottom");var t=d(e,n);return p(t,n),function(e){for(var r=[],o=0;o<t.length;o++){var a=t[o];(c=i[a.id]).refs--,r.push(c)}e&&p(d(e,n),n);for(o=0;o<r.length;o++){var c;if(0===(c=r[o]).refs){for(var s=0;s<c.parts.length;s++)c.parts[s]();delete i[c.id]}}}};var b,x=(b=[],function(e,n){return b[e]=n,b.filter(Boolean).join("\n")});function w(e,n,t,r){var o=t?"":r.css;if(e.styleSheet)e.styleSheet.cssText=x(n,o);else{var i=document.createTextNode(o),a=e.childNodes;a[n]&&e.removeChild(a[n]),a.length?e.insertBefore(i,a[n]):e.appendChild(i)}}},function(e,n){e.exports=function(e){var n="undefined"!=typeof window&&window.location;if(!n)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var t=n.protocol+"//"+n.host,r=t+n.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,n){var o,i=n.trim().replace(/^"(.*)"$/,function(e,n){return n}).replace(/^'(.*)'$/,function(e,n){return n});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?e:(o=0===i.indexOf("//")?i:0===i.indexOf("/")?t+i:r+i.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")})}},function(e,n){document.addEventListener("click",function(e){if(e.target.classList.contains("section-header")){var n=e.target.nextSibling.nextSibling.classList;if(n.contains("active"))n.remove("active");else document.querySelectorAll(".section-container.active").forEach(function(e){e.classList.remove("active")}),n.add("active")}})},function(e,n,t){"use strict";t.r(n);t(0),t(5);function r(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"output-text",t=(arguments.length>2&&void 0!==arguments[2]&&arguments[2],document.createElement("p"));t.setAttribute("class",n);var r=document.createTextNode(e);return t.appendChild(r),t}function o(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"example-output";document.getElementById(n).getElementsByClassName(t)[0].innerHTML=e}function i(e,n,t){var o,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"example-output";switch(n){case"norris":o=function(e){var n=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"response-container",n=document.createElement("div");return n.setAttribute("class",e),n}("response-container"),t=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,r=document.createElement("img");return r.src=e,r.setAttribute("class","image"),r.alt=n||null,r.title=t||null,r}(e.icon_url),o=r(e.value);return n.appendChild(t),n.appendChild(o),n}(e);break;case"taco":o=function(e){return r("".concat(e.shell.name,", ").concat(e.base_layer.name,", ").concat(e.condiment.name,", ").concat(e.mixin.name,", and ").concat(e.seasoning.name))}(e);break;case"createUser":o=function(e){return r("The user's id is ".concat(e.id," and the user was created on ").concat(e.createdAt))}(e);break;default:o=function(e){return JSON.stringify(e)}(e)}document.getElementById(t).getElementsByClassName(i)[0].appendChild(o)}o([1,2,3,4,5].map(function(e){return e*e}),"array-map-container");o(["desk","chair",5,"backpack",3.14,100].filter(function(e){return"number"==typeof e}),"array-filter-container");var a=["adam","nancy","damain","ramona","evan","wendy"].reduce(function(e,n){return e+n[0]},"");o(a=a.charAt(0).toUpperCase()+a.slice(1),"array-reduce-container");o([1,2,3,4].reduce(function(e,n){return e+n},1),"array-reduce-container","example-output2");var c=[1,2,3,4,5,6,7,8,9,10];c.forEach(function(e,n,t){e%2==0&&t.splice(n,1)}),o(c,"array-foreach-container");o([1,50,75,200,350,525,1e3].every(function(e){return e>0}),"array-every-container");var s=["Stuart","Mark","Bob","Dave","Phil","John","Tim","Jerry","Carl","Kevin"];s.sort(),o(s,"array-sort-container"),s.reverse(),o(s,"array-sort-container","example-output1-reversed");var u=[23,22,4,16,8,42,15];u.sort(function(e,n){return e-n}),o(u,"array-sort-container","example-output2");for(var f=[1,2,3,4,5,6,7],l=[1,2,3,4],p=[],d=0;d<f.length;d++)-1==l.indexOf(f[d])&&p.push(f[d]);var m=f.filter(function(e){return!l.includes(e)});o(p,"array-nondups-container"),o(m,"array-nondups-container","example-output2");var h={key1:"value1",key2:"value2",key3:"value3",key4:"value4",key5:"value5"};o(function(e){var n=[];for(var t in e)n.push(t);return n}(h),"object-objkey-container"),o(function(e){var n=[];for(var t in e)n.push(e[t]);return n}(h),"object-objvalue-container");var v=new XMLHttpRequest;v.responseType="json",v.onreadystatechange=function(){if(v.readyState===XMLHttpRequest.DONE){if(200!==v.status)return"Error ".concat(v.status);i(v.response,"norris","ajax-original-container")}},v.open("GET","https://api.chucknorris.io/jokes/random",!0),v.send();fetch("http://taco-randomizer.herokuapp.com/random/").then(function(e){return e.json()},function(e){i(e.message,"taco","ajax-fetch-container")}).then(function(e){i(e,"taco","ajax-fetch-container")}).catch(function(e){o(e,"ajax-fetch-container")});fetch("https://reqres.in/api/users",{method:"POST",body:{name:"Bilbo Baggins",movies:["Fellowship of the Ring"]}}).then(function(e){return e.json()},function(e){i(e.message,"createUser","ajax-fetchpost-container")}).then(function(e){i(e,"createUser","ajax-fetchpost-container")}).catch(function(e){o(e,"ajax-fetchpost-container")}),new Promise(function(e,n){Math.random()<.5?e("This is a successful promise and makes us happy"):n(new Error("This is an unsuccessful promise and makes us sad"))}).then(function(e){o(e,"promises-simple-container")}).catch(function(e){o(e,"promises-simple-container")}),Promise.all([new Promise(function(e){return setTimeout(function(){return e(1)},3e3)}),new Promise(function(e){return setTimeout(function(){return e(2)},2e3)}),new Promise(function(e){return setTimeout(function(){return e(3)},1e3)})]).then(function(e){return o(e,"promises-all-container")}).catch(function(e){return o(e,"promises-all-container")}),Promise.all([new Promise(function(e,n){return setTimeout(function(){return e(1)},1e3)}),new Promise(function(e,n){return setTimeout(function(){return n(new Error("Whoops!"))},2e3)}),new Promise(function(e,n){return setTimeout(function(){return e(3)},3e3)})]).then(function(e){return o(e,"promises-all-container","example-output2")}).catch(function(e){return o(e,"promises-all-container","example-output2")}),Promise.race([new Promise(function(e){return setTimeout(function(){return e(1)},3e3)}),new Promise(function(e){return setTimeout(function(){return e(2)},2e3)}),new Promise(function(e){return setTimeout(function(){return e(3)},1e3)})]).then(function(e){return o(e,"promises-race-container")}).catch(function(e){return o(e,"promises-race-container")})}]);