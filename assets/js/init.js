/* Modernizr 2.8.3 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-fontface-backgroundsize-borderimage-borderradius-boxshadow-flexbox-flexboxlegacy-hsla-multiplebgs-opacity-rgba-textshadow-cssanimations-csscolumns-generatedcontent-cssgradients-cssreflections-csstransforms-csstransforms3d-csstransitions-applicationcache-canvas-canvastext-draganddrop-hashchange-history-audio-video-indexeddb-input-inputtypes-localstorage-postmessage-sessionstorage-websockets-websqldatabase-webworkers-geolocation-inlinesvg-smil-svg-svgclippaths-touch-webgl-shiv-cssclasses-teststyles-testprop-testallprops-hasevent-prefixes-domprefixes-load
 */
;window.Modernizr=function(a,b,c){function C(a){j.cssText=a}function D(a,b){return C(n.join(a+";")+(b||""))}function E(a,b){return typeof a===b}function F(a,b){return!!~(""+a).indexOf(b)}function G(a,b){for(var d in a){var e=a[d];if(!F(e,"-")&&j[e]!==c)return b=="pfx"?e:!0}return!1}function H(a,b,d){for(var e in a){var f=b[a[e]];if(f!==c)return d===!1?a[e]:E(f,"function")?f.bind(d||b):f}return!1}function I(a,b,c){var d=a.charAt(0).toUpperCase()+a.slice(1),e=(a+" "+p.join(d+" ")+d).split(" ");return E(b,"string")||E(b,"undefined")?G(e,b):(e=(a+" "+q.join(d+" ")+d).split(" "),H(e,b,c))}function J(){e.input=function(c){for(var d=0,e=c.length;d<e;d++)u[c[d]]=c[d]in k;return u.list&&(u.list=!!b.createElement("datalist")&&!!a.HTMLDataListElement),u}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")),e.inputtypes=function(a){for(var d=0,e,f,h,i=a.length;d<i;d++)k.setAttribute("type",f=a[d]),e=k.type!=="text",e&&(k.value=l,k.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(f)&&k.style.WebkitAppearance!==c?(g.appendChild(k),h=b.defaultView,e=h.getComputedStyle&&h.getComputedStyle(k,null).WebkitAppearance!=="textfield"&&k.offsetHeight!==0,g.removeChild(k)):/^(search|tel)$/.test(f)||(/^(url|email)$/.test(f)?e=k.checkValidity&&k.checkValidity()===!1:e=k.value!=l)),t[a[d]]=!!e;return t}("search tel url email datetime date month week time datetime-local number range color".split(" "))}var d="2.8.3",e={},f=!0,g=b.documentElement,h="modernizr",i=b.createElement(h),j=i.style,k=b.createElement("input"),l=":)",m={}.toString,n=" -webkit- -moz- -o- -ms- ".split(" "),o="Webkit Moz O ms",p=o.split(" "),q=o.toLowerCase().split(" "),r={svg:"http://www.w3.org/2000/svg"},s={},t={},u={},v=[],w=v.slice,x,y=function(a,c,d,e){var f,i,j,k,l=b.createElement("div"),m=b.body,n=m||b.createElement("body");if(parseInt(d,10))while(d--)j=b.createElement("div"),j.id=e?e[d]:h+(d+1),l.appendChild(j);return f=["&#173;",'<style id="s',h,'">',a,"</style>"].join(""),l.id=h,(m?l:n).innerHTML+=f,n.appendChild(l),m||(n.style.background="",n.style.overflow="hidden",k=g.style.overflow,g.style.overflow="hidden",g.appendChild(n)),i=c(l,a),m?l.parentNode.removeChild(l):(n.parentNode.removeChild(n),g.style.overflow=k),!!i},z=function(){function d(d,e){e=e||b.createElement(a[d]||"div"),d="on"+d;var f=d in e;return f||(e.setAttribute||(e=b.createElement("div")),e.setAttribute&&e.removeAttribute&&(e.setAttribute(d,""),f=E(e[d],"function"),E(e[d],"undefined")||(e[d]=c),e.removeAttribute(d))),e=null,f}var a={select:"input",change:"input",submit:"form",reset:"form",error:"img",load:"img",abort:"img"};return d}(),A={}.hasOwnProperty,B;!E(A,"undefined")&&!E(A.call,"undefined")?B=function(a,b){return A.call(a,b)}:B=function(a,b){return b in a&&E(a.constructor.prototype[b],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(b){var c=this;if(typeof c!="function")throw new TypeError;var d=w.call(arguments,1),e=function(){if(this instanceof e){var a=function(){};a.prototype=c.prototype;var f=new a,g=c.apply(f,d.concat(w.call(arguments)));return Object(g)===g?g:f}return c.apply(b,d.concat(w.call(arguments)))};return e}),s.flexbox=function(){return I("flexWrap")},s.flexboxlegacy=function(){return I("boxDirection")},s.canvas=function(){var a=b.createElement("canvas");return!!a.getContext&&!!a.getContext("2d")},s.canvastext=function(){return!!e.canvas&&!!E(b.createElement("canvas").getContext("2d").fillText,"function")},s.webgl=function(){return!!a.WebGLRenderingContext},s.touch=function(){var c;return"ontouchstart"in a||a.DocumentTouch&&b instanceof DocumentTouch?c=!0:y(["@media (",n.join("touch-enabled),("),h,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(a){c=a.offsetTop===9}),c},s.geolocation=function(){return"geolocation"in navigator},s.postmessage=function(){return!!a.postMessage},s.websqldatabase=function(){return!!a.openDatabase},s.indexedDB=function(){return!!I("indexedDB",a)},s.hashchange=function(){return z("hashchange",a)&&(b.documentMode===c||b.documentMode>7)},s.history=function(){return!!a.history&&!!history.pushState},s.draganddrop=function(){var a=b.createElement("div");return"draggable"in a||"ondragstart"in a&&"ondrop"in a},s.websockets=function(){return"WebSocket"in a||"MozWebSocket"in a},s.rgba=function(){return C("background-color:rgba(150,255,150,.5)"),F(j.backgroundColor,"rgba")},s.hsla=function(){return C("background-color:hsla(120,40%,100%,.5)"),F(j.backgroundColor,"rgba")||F(j.backgroundColor,"hsla")},s.multiplebgs=function(){return C("background:url(https://),url(https://),red url(https://)"),/(url\s*\(.*?){3}/.test(j.background)},s.backgroundsize=function(){return I("backgroundSize")},s.borderimage=function(){return I("borderImage")},s.borderradius=function(){return I("borderRadius")},s.boxshadow=function(){return I("boxShadow")},s.textshadow=function(){return b.createElement("div").style.textShadow===""},s.opacity=function(){return D("opacity:.55"),/^0.55$/.test(j.opacity)},s.cssanimations=function(){return I("animationName")},s.csscolumns=function(){return I("columnCount")},s.cssgradients=function(){var a="background-image:",b="gradient(linear,left top,right bottom,from(#9f9),to(white));",c="linear-gradient(left top,#9f9, white);";return C((a+"-webkit- ".split(" ").join(b+a)+n.join(c+a)).slice(0,-a.length)),F(j.backgroundImage,"gradient")},s.cssreflections=function(){return I("boxReflect")},s.csstransforms=function(){return!!I("transform")},s.csstransforms3d=function(){var a=!!I("perspective");return a&&"webkitPerspective"in g.style&&y("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",function(b,c){a=b.offsetLeft===9&&b.offsetHeight===3}),a},s.csstransitions=function(){return I("transition")},s.fontface=function(){var a;return y('@font-face {font-family:"font";src:url("https://")}',function(c,d){var e=b.getElementById("smodernizr"),f=e.sheet||e.styleSheet,g=f?f.cssRules&&f.cssRules[0]?f.cssRules[0].cssText:f.cssText||"":"";a=/src/i.test(g)&&g.indexOf(d.split(" ")[0])===0}),a},s.generatedcontent=function(){var a;return y(["#",h,"{font:0/0 a}#",h,':after{content:"',l,'";visibility:hidden;font:3px/1 a}'].join(""),function(b){a=b.offsetHeight>=3}),a},s.video=function(){var a=b.createElement("video"),c=!1;try{if(c=!!a.canPlayType)c=new Boolean(c),c.ogg=a.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),c.h264=a.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),c.webm=a.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,"")}catch(d){}return c},s.audio=function(){var a=b.createElement("audio"),c=!1;try{if(c=!!a.canPlayType)c=new Boolean(c),c.ogg=a.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),c.mp3=a.canPlayType("audio/mpeg;").replace(/^no$/,""),c.wav=a.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),c.m4a=(a.canPlayType("audio/x-m4a;")||a.canPlayType("audio/aac;")).replace(/^no$/,"")}catch(d){}return c},s.localstorage=function(){try{return localStorage.setItem(h,h),localStorage.removeItem(h),!0}catch(a){return!1}},s.sessionstorage=function(){try{return sessionStorage.setItem(h,h),sessionStorage.removeItem(h),!0}catch(a){return!1}},s.webworkers=function(){return!!a.Worker},s.applicationcache=function(){return!!a.applicationCache},s.svg=function(){return!!b.createElementNS&&!!b.createElementNS(r.svg,"svg").createSVGRect},s.inlinesvg=function(){var a=b.createElement("div");return a.innerHTML="<svg/>",(a.firstChild&&a.firstChild.namespaceURI)==r.svg},s.smil=function(){return!!b.createElementNS&&/SVGAnimate/.test(m.call(b.createElementNS(r.svg,"animate")))},s.svgclippaths=function(){return!!b.createElementNS&&/SVGClipPath/.test(m.call(b.createElementNS(r.svg,"clipPath")))};for(var K in s)B(s,K)&&(x=K.toLowerCase(),e[x]=s[K](),v.push((e[x]?"":"no-")+x));return e.input||J(),e.addTest=function(a,b){if(typeof a=="object")for(var d in a)B(a,d)&&e.addTest(d,a[d]);else{a=a.toLowerCase();if(e[a]!==c)return e;b=typeof b=="function"?b():b,typeof f!="undefined"&&f&&(g.className+=" "+(b?"":"no-")+a),e[a]=b}return e},C(""),i=k=null,function(a,b){function l(a,b){var c=a.createElement("p"),d=a.getElementsByTagName("head")[0]||a.documentElement;return c.innerHTML="x<style>"+b+"</style>",d.insertBefore(c.lastChild,d.firstChild)}function m(){var a=s.elements;return typeof a=="string"?a.split(" "):a}function n(a){var b=j[a[h]];return b||(b={},i++,a[h]=i,j[i]=b),b}function o(a,c,d){c||(c=b);if(k)return c.createElement(a);d||(d=n(c));var g;return d.cache[a]?g=d.cache[a].cloneNode():f.test(a)?g=(d.cache[a]=d.createElem(a)).cloneNode():g=d.createElem(a),g.canHaveChildren&&!e.test(a)&&!g.tagUrn?d.frag.appendChild(g):g}function p(a,c){a||(a=b);if(k)return a.createDocumentFragment();c=c||n(a);var d=c.frag.cloneNode(),e=0,f=m(),g=f.length;for(;e<g;e++)d.createElement(f[e]);return d}function q(a,b){b.cache||(b.cache={},b.createElem=a.createElement,b.createFrag=a.createDocumentFragment,b.frag=b.createFrag()),a.createElement=function(c){return s.shivMethods?o(c,a,b):b.createElem(c)},a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+m().join().replace(/[\w\-]+/g,function(a){return b.createElem(a),b.frag.createElement(a),'c("'+a+'")'})+");return n}")(s,b.frag)}function r(a){a||(a=b);var c=n(a);return s.shivCSS&&!g&&!c.hasCSS&&(c.hasCSS=!!l(a,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),k||q(a,c),a}var c="3.7.0",d=a.html5||{},e=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,f=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,g,h="_html5shiv",i=0,j={},k;(function(){try{var a=b.createElement("a");a.innerHTML="<xyz></xyz>",g="hidden"in a,k=a.childNodes.length==1||function(){b.createElement("a");var a=b.createDocumentFragment();return typeof a.cloneNode=="undefined"||typeof a.createDocumentFragment=="undefined"||typeof a.createElement=="undefined"}()}catch(c){g=!0,k=!0}})();var s={elements:d.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",version:c,shivCSS:d.shivCSS!==!1,supportsUnknownElements:k,shivMethods:d.shivMethods!==!1,type:"default",shivDocument:r,createElement:o,createDocumentFragment:p};a.html5=s,r(b)}(this,b),e._version=d,e._prefixes=n,e._domPrefixes=q,e._cssomPrefixes=p,e.hasEvent=z,e.testProp=function(a){return G([a])},e.testAllProps=I,e.testStyles=y,g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(f?" js "+v.join(" "):""),e}(this,this.document),function(a,b,c){function d(a){return"[object Function]"==o.call(a)}function e(a){return"string"==typeof a}function f(){}function g(a){return!a||"loaded"==a||"complete"==a||"uninitialized"==a}function h(){var a=p.shift();q=1,a?a.t?m(function(){("c"==a.t?B.injectCss:B.injectJs)(a.s,0,a.a,a.x,a.e,1)},0):(a(),h()):q=0}function i(a,c,d,e,f,i,j){function k(b){if(!o&&g(l.readyState)&&(u.r=o=1,!q&&h(),l.onload=l.onreadystatechange=null,b)){"img"!=a&&m(function(){t.removeChild(l)},50);for(var d in y[c])y[c].hasOwnProperty(d)&&y[c][d].onload()}}var j=j||B.errorTimeout,l=b.createElement(a),o=0,r=0,u={t:d,s:c,e:f,a:i,x:j};1===y[c]&&(r=1,y[c]=[]),"object"==a?l.data=c:(l.src=c,l.type=a),l.width=l.height="0",l.onerror=l.onload=l.onreadystatechange=function(){k.call(this,r)},p.splice(e,0,u),"img"!=a&&(r||2===y[c]?(t.insertBefore(l,s?null:n),m(k,j)):y[c].push(l))}function j(a,b,c,d,f){return q=0,b=b||"j",e(a)?i("c"==b?v:u,a,b,this.i++,c,d,f):(p.splice(this.i++,0,a),1==p.length&&h()),this}function k(){var a=B;return a.loader={load:j,i:0},a}var l=b.documentElement,m=a.setTimeout,n=b.getElementsByTagName("script")[0],o={}.toString,p=[],q=0,r="MozAppearance"in l.style,s=r&&!!b.createRange().compareNode,t=s?l:n.parentNode,l=a.opera&&"[object Opera]"==o.call(a.opera),l=!!b.attachEvent&&!l,u=r?"object":l?"script":"img",v=l?"script":u,w=Array.isArray||function(a){return"[object Array]"==o.call(a)},x=[],y={},z={timeout:function(a,b){return b.length&&(a.timeout=b[0]),a}},A,B;B=function(a){function b(a){var a=a.split("!"),b=x.length,c=a.pop(),d=a.length,c={url:c,origUrl:c,prefixes:a},e,f,g;for(f=0;f<d;f++)g=a[f].split("="),(e=z[g.shift()])&&(c=e(c,g));for(f=0;f<b;f++)c=x[f](c);return c}function g(a,e,f,g,h){var i=b(a),j=i.autoCallback;i.url.split(".").pop().split("?").shift(),i.bypass||(e&&(e=d(e)?e:e[a]||e[g]||e[a.split("/").pop().split("?")[0]]),i.instead?i.instead(a,e,f,g,h):(y[i.url]?i.noexec=!0:y[i.url]=1,f.load(i.url,i.forceCSS||!i.forceJS&&"css"==i.url.split(".").pop().split("?").shift()?"c":c,i.noexec,i.attrs,i.timeout),(d(e)||d(j))&&f.load(function(){k(),e&&e(i.origUrl,h,g),j&&j(i.origUrl,h,g),y[i.url]=2})))}function h(a,b){function c(a,c){if(a){if(e(a))c||(j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}),g(a,j,b,0,h);else if(Object(a)===a)for(n in m=function(){var b=0,c;for(c in a)a.hasOwnProperty(c)&&b++;return b}(),a)a.hasOwnProperty(n)&&(!c&&!--m&&(d(j)?j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}:j[n]=function(a){return function(){var b=[].slice.call(arguments);a&&a.apply(this,b),l()}}(k[n])),g(a[n],j,b,n,h))}else!c&&l()}var h=!!a.test,i=a.load||a.both,j=a.callback||f,k=j,l=a.complete||f,m,n;c(h?a.yep:a.nope,!!i),i&&c(i)}var i,j,l=this.yepnope.loader;if(e(a))g(a,0,l,0);else if(w(a))for(i=0;i<a.length;i++)j=a[i],e(j)?g(j,0,l,0):w(j)?B(j):Object(j)===j&&h(j,l);else Object(a)===a&&h(a,l)},B.addPrefix=function(a,b){z[a]=b},B.addFilter=function(a){x.push(a)},B.errorTimeout=1e4,null==b.readyState&&b.addEventListener&&(b.readyState="loading",b.addEventListener("DOMContentLoaded",A=function(){b.removeEventListener("DOMContentLoaded",A,0),b.readyState="complete"},0)),a.yepnope=k(),a.yepnope.executeStack=h,a.yepnope.injectJs=function(a,c,d,e,i,j){var k=b.createElement("script"),l,o,e=e||B.errorTimeout;k.src=a;for(o in d)k.setAttribute(o,d[o]);c=j?h:c||f,k.onreadystatechange=k.onload=function(){!l&&g(k.readyState)&&(l=1,c(),k.onload=k.onreadystatechange=null)},m(function(){l||(l=1,c(1))},e),i?k.onload():n.parentNode.insertBefore(k,n)},a.yepnope.injectCss=function(a,c,d,e,g,i){var e=b.createElement("link"),j,c=i?h:c||f;e.href=a,e.rel="stylesheet",e.type="text/css";for(j in d)e.setAttribute(j,d[j]);g||(n.parentNode.insertBefore(e,n),m(c,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))};
/* http://prismjs.com/download.html?themes=prism&languages=markup+css+clike+javascript+less+php */
var _self="undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{},Prism=function(){var e=/\blang(?:uage)?-(?!\*)(\w+)\b/i,t=_self.Prism={util:{encode:function(e){return e instanceof n?new n(e.type,t.util.encode(e.content),e.alias):"Array"===t.util.type(e)?e.map(t.util.encode):e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).match(/\[object (\w+)\]/)[1]},clone:function(e){var n=t.util.type(e);switch(n){case"Object":var a={};for(var r in e)e.hasOwnProperty(r)&&(a[r]=t.util.clone(e[r]));return a;case"Array":return e.map&&e.map(function(e){return t.util.clone(e)})}return e}},languages:{extend:function(e,n){var a=t.util.clone(t.languages[e]);for(var r in n)a[r]=n[r];return a},insertBefore:function(e,n,a,r){r=r||t.languages;var i=r[e];if(2==arguments.length){a=arguments[1];for(var l in a)a.hasOwnProperty(l)&&(i[l]=a[l]);return i}var s={};for(var o in i)if(i.hasOwnProperty(o)){if(o==n)for(var l in a)a.hasOwnProperty(l)&&(s[l]=a[l]);s[o]=i[o]}return t.languages.DFS(t.languages,function(t,n){n===r[e]&&t!=e&&(this[t]=s)}),r[e]=s},DFS:function(e,n,a){for(var r in e)e.hasOwnProperty(r)&&(n.call(e,r,e[r],a||r),"Object"===t.util.type(e[r])?t.languages.DFS(e[r],n):"Array"===t.util.type(e[r])&&t.languages.DFS(e[r],n,r))}},highlightAll:function(e,n){for(var a,r=document.querySelectorAll('code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'),i=0;a=r[i++];)t.highlightElement(a,e===!0,n)},highlightElement:function(a,r,i){for(var l,s,o=a;o&&!e.test(o.className);)o=o.parentNode;if(o&&(l=(o.className.match(e)||[,""])[1],s=t.languages[l]),a.className=a.className.replace(e,"").replace(/\s+/g," ")+" language-"+l,o=a.parentNode,/pre/i.test(o.nodeName)&&(o.className=o.className.replace(e,"").replace(/\s+/g," ")+" language-"+l),s){var u=a.textContent;if(u){u=u.replace(/^(?:\r?\n|\r)/,"");var g={element:a,language:l,grammar:s,code:u};if(t.hooks.run("before-highlight",g),r&&_self.Worker){var c=new Worker(t.filename);c.onmessage=function(e){g.highlightedCode=n.stringify(JSON.parse(e.data),l),t.hooks.run("before-insert",g),g.element.innerHTML=g.highlightedCode,i&&i.call(g.element),t.hooks.run("after-highlight",g)},c.postMessage(JSON.stringify({language:g.language,code:g.code}))}else g.highlightedCode=t.highlight(g.code,g.grammar,g.language),t.hooks.run("before-insert",g),g.element.innerHTML=g.highlightedCode,i&&i.call(a),t.hooks.run("after-highlight",g)}}},highlight:function(e,a,r){var i=t.tokenize(e,a);return n.stringify(t.util.encode(i),r)},tokenize:function(e,n){var a=t.Token,r=[e],i=n.rest;if(i){for(var l in i)n[l]=i[l];delete n.rest}e:for(var l in n)if(n.hasOwnProperty(l)&&n[l]){var s=n[l];s="Array"===t.util.type(s)?s:[s];for(var o=0;o<s.length;++o){var u=s[o],g=u.inside,c=!!u.lookbehind,f=0,h=u.alias;u=u.pattern||u;for(var p=0;p<r.length;p++){var d=r[p];if(r.length>e.length)break e;if(!(d instanceof a)){u.lastIndex=0;var m=u.exec(d);if(m){c&&(f=m[1].length);var y=m.index-1+f,m=m[0].slice(f),v=m.length,k=y+v,b=d.slice(0,y+1),w=d.slice(k+1),N=[p,1];b&&N.push(b);var O=new a(l,g?t.tokenize(m,g):m,h);N.push(O),w&&N.push(w),Array.prototype.splice.apply(r,N)}}}}}return r},hooks:{all:{},add:function(e,n){var a=t.hooks.all;a[e]=a[e]||[],a[e].push(n)},run:function(e,n){var a=t.hooks.all[e];if(a&&a.length)for(var r,i=0;r=a[i++];)r(n)}}},n=t.Token=function(e,t,n){this.type=e,this.content=t,this.alias=n};if(n.stringify=function(e,a,r){if("string"==typeof e)return e;if("Array"===t.util.type(e))return e.map(function(t){return n.stringify(t,a,e)}).join("");var i={type:e.type,content:n.stringify(e.content,a,r),tag:"span",classes:["token",e.type],attributes:{},language:a,parent:r};if("comment"==i.type&&(i.attributes.spellcheck="true"),e.alias){var l="Array"===t.util.type(e.alias)?e.alias:[e.alias];Array.prototype.push.apply(i.classes,l)}t.hooks.run("wrap",i);var s="";for(var o in i.attributes)s+=o+'="'+(i.attributes[o]||"")+'"';return"<"+i.tag+' class="'+i.classes.join(" ")+'" '+s+">"+i.content+"</"+i.tag+">"},!_self.document)return _self.addEventListener?(_self.addEventListener("message",function(e){var n=JSON.parse(e.data),a=n.language,r=n.code;_self.postMessage(JSON.stringify(t.util.encode(t.tokenize(r,t.languages[a])))),_self.close()},!1),_self.Prism):_self.Prism;var a=document.getElementsByTagName("script");return a=a[a.length-1],a&&(t.filename=a.src,document.addEventListener&&!a.hasAttribute("data-manual")&&document.addEventListener("DOMContentLoaded",t.highlightAll)),_self.Prism}();"undefined"!=typeof module&&module.exports&&(module.exports=Prism);;
Prism.languages.markup={comment:/<!--[\w\W]*?-->/,prolog:/<\?[\w\W]+?\?>/,doctype:/<!DOCTYPE[\w\W]+?>/,cdata:/<!\[CDATA\[[\w\W]*?]]>/i,tag:{pattern:/<\/?[^\s>\/]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\\1|\\?(?!\1)[\w\W])*\1|[^\s'">=]+))?)*\s*\/?>/i,inside:{tag:{pattern:/^<\/?[^\s>\/]+/i,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"attr-value":{pattern:/=(?:('|")[\w\W]*?(\1)|[^\s>]+)/i,inside:{punctuation:/[=>"']/}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:/&#?[\da-z]{1,8};/i},Prism.hooks.add("wrap",function(t){"entity"===t.type&&(t.attributes.title=t.content.replace(/&amp;/,"&"))});;
Prism.languages.css={comment:/\/\*[\w\W]*?\*\//,atrule:{pattern:/@[\w-]+?.*?(;|(?=\s*\{))/i,inside:{rule:/@[\w-]+/}},url:/url\((?:(["'])(\\(?:\r\n|[\w\W])|(?!\1)[^\\\r\n])*\1|.*?)\)/i,selector:/[^\{\}\s][^\{\};]*?(?=\s*\{)/,string:/("|')(\\(?:\r\n|[\w\W])|(?!\1)[^\\\r\n])*\1/,property:/(\b|\B)[\w-]+(?=\s*:)/i,important:/\B!important\b/i,"function":/[-a-z0-9]+(?=\()/i,punctuation:/[(){};:]/},Prism.languages.css.atrule.inside.rest=Prism.util.clone(Prism.languages.css),Prism.languages.markup&&(Prism.languages.insertBefore("markup","tag",{style:{pattern:/<style[\w\W]*?>[\w\W]*?<\/style>/i,inside:{tag:{pattern:/<style[\w\W]*?>|<\/style>/i,inside:Prism.languages.markup.tag.inside},rest:Prism.languages.css},alias:"language-css"}}),Prism.languages.insertBefore("inside","attr-value",{"style-attr":{pattern:/\s*style=("|').*?\1/i,inside:{"attr-name":{pattern:/^\s*style/i,inside:Prism.languages.markup.tag.inside},punctuation:/^\s*=\s*['"]|['"]\s*$/,"attr-value":{pattern:/.+/i,inside:Prism.languages.css}},alias:"language-css"}},Prism.languages.markup.tag));;
Prism.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\w\W]*?\*\//,lookbehind:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0}],string:/("|')(\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,"class-name":{pattern:/((?:(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[a-z0-9_\.\\]+/i,lookbehind:!0,inside:{punctuation:/(\.|\\)/}},keyword:/\b(if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,"boolean":/\b(true|false)\b/,"function":/[a-z0-9_]+(?=\()/i,number:/\b-?(0x[\dA-Fa-f]+|\d*\.?\d+([Ee]-?\d+)?)\b/,operator:/[-+]{1,2}|!|<=?|>=?|={1,3}|&{1,2}|\|?\||\?|\*|\/|~|\^|%/,punctuation:/[{}[\];(),.:]/};;
Prism.languages.javascript=Prism.languages.extend("clike",{keyword:/\b(as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|false|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|true|try|typeof|var|void|while|with|yield)\b/,number:/\b-?(0x[\dA-Fa-f]+|0b[01]+|0o[0-7]+|\d*\.?\d+([Ee][+-]?\d+)?|NaN|Infinity)\b/,"function":/(?!\d)[a-z0-9_$]+(?=\()/i}),Prism.languages.insertBefore("javascript","keyword",{regex:{pattern:/(^|[^/])\/(?!\/)(\[.+?]|\\.|[^/\\\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})]))/,lookbehind:!0}}),Prism.languages.insertBefore("javascript","class-name",{"template-string":{pattern:/`(?:\\`|\\?[^`])*`/,inside:{interpolation:{pattern:/\$\{[^}]+\}/,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:Prism.languages.javascript}},string:/[\s\S]+/}}}),Prism.languages.markup&&Prism.languages.insertBefore("markup","tag",{script:{pattern:/<script[\w\W]*?>[\w\W]*?<\/script>/i,inside:{tag:{pattern:/<script[\w\W]*?>|<\/script>/i,inside:Prism.languages.markup.tag.inside},rest:Prism.languages.javascript},alias:"language-javascript"}});;
Prism.languages.less=Prism.languages.extend("css",{comment:[/\/\*[\w\W]*?\*\//,{pattern:/(^|[^\\])\/\/.*/,lookbehind:!0}],atrule:{pattern:/@[\w-]+?(?:\([^{}]+\)|[^(){};])*?(?=\s*\{)/i,inside:{punctuation:/[:()]/}},selector:{pattern:/(?:@\{[\w-]+\}|[^{};\s@])(?:@\{[\w-]+\}|\([^{}]*\)|[^{};@])*?(?=\s*\{)/,inside:{variable:/@+[\w-]+/}},property:/(\b|\B)(?:@\{[\w-]+\}|[\w-])+(?:\+_?)?(?=\s*:)/i,punctuation:/[{}();:,]/,operator:/[+\-*\/]/}),Prism.languages.insertBefore("less","punctuation",{"function":Prism.languages.less.function}),Prism.languages.insertBefore("less","property",{variable:[{pattern:/@[\w-]+\s*:/,inside:{punctuation:/:/}},/@@?[\w-]+/],"mixin-usage":{pattern:/([{;]\s*)[.#](?!\d)[\w-]+.*?(?=[(;])/,lookbehind:!0,alias:"function"}});;
Prism.languages.php=Prism.languages.extend("clike",{keyword:/\b(and|or|xor|array|as|break|case|cfunction|class|const|continue|declare|default|die|do|else|elseif|enddeclare|endfor|endforeach|endif|endswitch|endwhile|extends|for|foreach|function|include|include_once|global|if|new|return|static|switch|use|require|require_once|var|while|abstract|interface|public|implements|private|protected|parent|throw|null|echo|print|trait|namespace|final|yield|goto|instanceof|finally|try|catch)\b/i,constant:/\b[A-Z0-9_]{2,}\b/,comment:{pattern:/(^|[^\\])(\/\*[\w\W]*?\*\/|(^|[^:])(\/\/).*?(\r?\n|$))/,lookbehind:!0}}),Prism.languages.insertBefore("php","class-name",{"shell-comment":{pattern:/(^|[^\\])#.*?(\r?\n|$)/,lookbehind:!0,alias:"comment"}}),Prism.languages.insertBefore("php","keyword",{delimiter:/(\?>|<\?php|<\?)/i,variable:/(\$\w+)\b/i,"package":{pattern:/(\\|namespace\s+|use\s+)[\w\\]+/,lookbehind:!0,inside:{punctuation:/\\/}}}),Prism.languages.insertBefore("php","operator",{property:{pattern:/(->)[\w]+/,lookbehind:!0}}),Prism.languages.markup&&(Prism.hooks.add("before-highlight",function(e){"php"===e.language&&(e.tokenStack=[],e.backupCode=e.code,e.code=e.code.replace(/(?:<\?php|<\?)[\w\W]*?(?:\?>)/gi,function(n){return e.tokenStack.push(n),"{{{PHP"+e.tokenStack.length+"}}}"}))}),Prism.hooks.add("before-insert",function(e){"php"===e.language&&(e.code=e.backupCode,delete e.backupCode)}),Prism.hooks.add("after-highlight",function(e){if("php"===e.language){for(var n,a=0;n=e.tokenStack[a];a++)e.highlightedCode=e.highlightedCode.replace("{{{PHP"+(a+1)+"}}}",Prism.highlight(n,e.grammar,"php"));e.element.innerHTML=e.highlightedCode}}),Prism.hooks.add("wrap",function(e){"php"===e.language&&"markup"===e.type&&(e.content=e.content.replace(/(\{\{\{PHP[0-9]+\}\}\})/g,'<span class="token php">$1</span>'))}),Prism.languages.insertBefore("php","comment",{markup:{pattern:/<[^?]\/?(.*?)>/,inside:Prism.languages.markup},php:/\{\{\{PHP[0-9]+\}\}\}/}));;

'use strict';
// https://github.com/moagrius/isOnScreen
;(function ($) {

    $.fn.isOnScreen = function(x, y){

        if(x == null || typeof x == 'undefined') x = 1;
        if(y == null || typeof y == 'undefined') y = 1;

        var win = $(window);

        var viewport = {
            top : win.scrollTop(),
            left : win.scrollLeft()
        };
        viewport.right = viewport.left + win.width();
        viewport.bottom = viewport.top + win.height();

        var height = this.outerHeight();
        var width = this.outerWidth();

        if(!width || !height){
            return false;
        }

        var bounds = this.offset();
        bounds.right = bounds.left + width;
        bounds.bottom = bounds.top + height;

        var visible = (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));

        if(!visible){
            return false;
        }

        var deltas = {
            top : Math.min( 1, ( bounds.bottom - viewport.top ) / height),
            bottom : Math.min(1, ( viewport.bottom - bounds.top ) / height),
            left : Math.min(1, ( bounds.right - viewport.left ) / width),
            right : Math.min(1, ( viewport.right - bounds.left ) / width)
        };

        return (deltas.left * deltas.right) >= x && (deltas.top * deltas.bottom) >= y;

    };

})(jQuery);
/**
* @name Success
* @description Handles success messages
*/
var Success = function(message)
{
	'use strict';
	/* exported Success */

	/**
	* The success message
	*/
	this.message = message;

	/**
	* Function to show the success message
	*/
	this.showSuccess = function()
	{
		var self = this;
		$('<div>')
			.addClass('overlay')
			.hide()
			.appendTo('body')
			.on('click', function() {
				self.closeSuccess();
			})
			.fadeIn();
		$('<div>')
			.addClass('success')
			.text(this.message)
			.appendTo('body');

		setTimeout(function() {
			$('.success').addClass('show');
		},100);

		setTimeout(function() {
			self.closeSuccess();
		}, 5000);
	};

	/**
	* Function to close the success message
	*/
	this.closeSuccess = function()
	{
		$('.overlay').fadeOut(function()
		{
			$(this).remove();
			$('.success').removeClass('show');
			setTimeout(function() {
				$('.success').remove();
			},1000);
		});
	};
};
/**
* @name Fail
* @description Handles failiure messages
*/
var Fail = function(message)
{
	'use strict';
	/* exported Fail */

	/**
	* The success message
	*/
	this.message = message;

	/**
	* Function to show the success message
	*/
	this.showFail = function()
	{
		var self = this;
		$('<div>')
			.addClass('overlay')
			.hide()
			.appendTo('body')
			.on('click', function() {
				self.closeFail();
			})
			.fadeIn();
		$('<div>')
			.addClass('fail')
			.text(this.message)
			.appendTo('body');

		setTimeout(function() {
			$('.fail').addClass('show');
		},100);

		setTimeout(function() {
			self.closeFail();
		}, 5000);
	};

	/**
	* Function to close the success message
	*/
	this.closeFail = function()
	{
		$('.overlay').fadeOut(function()
		{
			$(this).remove();
			$('.fail').removeClass('show');
			setTimeout(function() {
				$('.fail').remove();
			},1000);
		});
	};
};
/**
* @name Article
* @description Handles article administration
*/
var Article = function()
{
	'use strict';
	/* exported Article */

	/**
	* The Article ID
	*/
	this.articleID = null;

	/**
	* The Article neta title
	*/
	this.meta_title = null;
	
	/**
	* The Article meta description
	*/
	this.meta_description = null;
	
	/**
	* The Article title
	*/
	this.articleTitle = null;
	
	/**
	* The Article excerpt
	*/
	this.excerpt = null;
	
	/**
	* The Article heading
	*/
	this.heading = null;
	
	/**
	* The Article body text
	*/
	this.articleBody = null;
	
	/**
	* The Article approved status
	*/
	this.approved = null;
	
	/**
	* The Article category ID
	*/
	this.categoryID = null;
	
	/**
	* The Article slug
	*/
	this.slug = null;

	/**
	* The nonce
	*/
	this.nonce = null;
	
	/**
	* The Ajax action
	*/
	this.ajaxAction = null;
	
	/**
	* The comment ID
	*/
	this.commentID = null;

	/**
	* Errors
	*/
	this.errors = [];

	this.valid = function()
	{
		var self = this;

		if ( this.articleTitle === '' ) {
			var error = new Error();
			error.elID = '#article_title';
			error.elText = 'Please enter your article name';
			self.errors.push( error );
		}

		if ( this.slug === '' ) {
			var error2 = new Error();
			error2.elID = '#article_slug';
			error2.elText = 'Please enter an article slug';
			self.errors.push( error2 );
		}

		if ( self.errors.length ) {
			return false;
		}

		return true;
	};

	/**
	* Method to return an array of errors
	*/
	this.getErrors = function()
	{
		if ( this.errors.length ) {
			return this.errors;
		} else {
			return false;
		}
	};

	/**
	* Method to submit comment
	*/
	this.submitArticle = function()
	{
		if ( !this.valid() || this.nonce === null ) {
			return false;
		}

		/*$.ajax({
			url: '/app/init.php',
			type: 'POST',
			dataType: 'JSON',
			data: 'action=article&nonce='+this.nonce+'&'+'comment_name='+this.cname+'&comment_email='+this.email+'&website='+this.website+'&comment='+this.comment+'&article_id='+this.articleID,
			success: function(response) {
				if ( response.success )
				{
					callback(response);
				}
			}
		});*/
	};

	/**
	* Method to approve/unapprove comments
	*/
	this.approve = function(callback)
	{
		if ( this.ajaxAction === null || this.articleID === null || this.nonce === null ) {
			return false;
		}

		$.ajax({
			url: '/app/init.php',
			type: 'POST',
			dataType: 'JSON',
			data: 'action='+this.ajaxAction+'&nonce='+this.nonce+'&article-id='+this.articleID,
			success: function() {
				callback();
			}
		});
	};

	/**
	* Method to delete a comment
	*/
	this.deleteArticle = function(callback)
	{
		if ( this.articleID === null || this.nonce === null ) {
			return false;
		}

		$.ajax({
			url: '/app/init.php',
			type: 'POST',
			dataType: 'JSON',
			data: 'action=delete-article&nonce='+this.nonce+'&article-id='+this.articleID,
			success: function() {
				callback();
			}
		});
	};

};
/**
* @name Enquiry
* @description Handles enquiry administration
*/
var Enquiry = function()
{
	'use strict';
	/* exported Enquiry */
	/* global SysError */

	/**
	* The ID of the enquiry
	*/
	this.enquiryID = null;

	/**
	* The enquirer name
	*/
	this.ename = null;

	/**
	* The enquirer Email
	*/
	this.email = null;

	/**
	* The enquiry text
	*/
	this.enquiry = null;

	/**
	* The nonce
	*/
	this.nonce = null;

	/**
	*	Email regular expression
	*/
	this.emailRegEx = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;

	/**
	* Errors
	*/
	this.errors = [];

	/**
	* Method to check if the enquiry is valid
	*/
	this.valid = function()
	{
		var self = this;

		if ( this.ename === '' ) {
			var error1 = new SysError();
			error1.elID = '#name';
			error1.elText = 'Please enter your name';
			self.errors.push( error1 );
		}

		if ( this.email === '' ) {
			var error2 = new SysError();
			error2.elID = '#email';
			error2.elText = 'Please enter your Email address';
			self.errors.push( error2 );
		} else if ( !this.emailRegEx.test( this.email ) ) {
			var error3 = new SysError();
			error3.elID = '#email';
			error3.elText = 'Please enter a valid Email address';
			self.errors.push( error3 );
		}

		if ( self.errors.length ) {
			return false;
		}

		return true;
	};

	/**
	* A method the get the errors
	*/
	this.getErrors = function()
	{
		if ( this.errors.length ) {
			return this.errors;
		} else {
			return false;
		}
	};

	/**
	* Method to delete an enquiry
	*/
	this.deleteEnquiry = function(callback)
	{
		if ( this.ajaxAction === null || this.enquiryID === null || this.nonce === null ) {
			return false;
		}

		$.ajax({
			url: '/app/init.php',
			type: 'POST',
			dataType: 'JSON',
			data: 'action='+this.ajaxAction+'&nonce='+this.nonce+'&enquiry-id='+this.enquiryID,
			success: function(response) {
				if (response.success) {
					callback();
				}
			}
		});
	};

	/**
	* A method to submit the enquiry by Ajax
	*/
	this.submitEnquiry = function(callback)
	{
		if ( !this.valid() || this.nonce === null ) {
			return false;
		}

		$.ajax({
			url: '/app/init.php',
			type: 'POST',
			dataType: 'JSON',
			data: 'action=enquiry&nonce='+this.nonce+'&name='+this.ename+'&email='+this.email+'&enquiry='+this.enquiry,
			success: function(response) {
				if ( response.success )
				{
					callback(response);
				}
			}
		});
	};

};
/**
* @name SysComment
* @description Handles comment administration
*/
var SysComment = function()
{
	'use strict';
	/* exported SysComment */
	/* global SysError */

	/**
	* The commenter name
	*/
	this.cname = null;

	/**
	* The commenter email
	*/
	this.email = null;

	/**
	* The commenters website
	*/
	this.website = null;

	/**
	* The comment
	*/
	this.commentText = null;
	
	/**
	* The article ID the comment is related to
	*/
	this.articleID = null;

	/**
	* The nonce
	*/
	this.nonce = null;
	
	/**
	* Ajax action
	*/
	this.ajaxAction = null;
	
	/**
	* The comment ID
	*/
	this.commentID = null;

	/**
	*	Email regular expression
	*/
	this.emailRegEx = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;

	/**
	* Errors
	*/
	this.errors = [];

	this.valid = function()
	{
		var self = this;

		if ( this.cname === '' ) {
			var error = new SysError();
			error.elID = '#comment_name';
			error.elText = 'Please enter your name';
			self.errors.push( error );
		}

		if ( this.email !== '' ) {
			if ( !this.emailRegEx.test( this.email ) ) {
				var error2 = new SysError();
				error2.elID = '#comment_email';
				error2.elText = 'Please enter a valid Email address';
				self.errors.push( error2 );
			}
		}

		if ( this.commentText === '' ) {
			var error3 = new SysError();
			error3.elID = '#comment';
			error3.elText = 'Please enter a comment';
			self.errors.push( error3 );
		}

		if ( self.errors.length ) {
			return false;
		}

		return true;
	};

	/**
	* Method to return an array of errors
	*/
	this.getErrors = function()
	{
		if ( this.errors.length ) {
			return this.errors;
		} else {
			return false;
		}
	};

	/**
	* Method to submit comment
	*/
	this.submitComment = function(callback)
	{
		if ( !this.valid() || this.nonce === null ) {
			return false;
		}

		$.ajax({
			url: '/app/init.php',
			type: 'POST',
			dataType: 'JSON',
			data: 'action=comment&nonce='+this.nonce+'&'+'comment_name='+this.cname+'&comment_email='+this.email+'&website='+this.website+'&comment='+this.commentText+'&article_id='+this.articleID,
			success: function(response) {
				if ( response.success )
				{
					callback(response);
				}
			}
		});
	};

	/**
	* Method to approve/unapprove comments
	*/
	this.approve = function(callback)
	{
		if ( this.ajaxAction === null || this.commentID === null || this.nonce === null ) {
			return false;
		}

		$.ajax({
			url: '/app/init.php',
			type: 'POST',
			dataType: 'JSON',
			data: 'action='+this.ajaxAction+'&nonce='+this.nonce+'&comment-id='+this.commentID,
			success: function() {
				callback();
			}
		});
	};

	/**
	* Method to delete a comment
	*/
	this.deleteComment = function(callback)
	{
		if ( this.ajaxAction === null || this.commentID === null || this.nonce === null ) {
			return false;
		}

		$.ajax({
			url: '/app/init.php',
			type: 'POST',
			dataType: 'JSON',
			data: 'action='+this.ajaxAction+'&nonce='+this.nonce+'&comment-id='+this.commentID,
			success: function() {
				callback();
			}
		});
	};

};
/**
* @name Reply
* @description Handles comment replies
*/
var Reply = function()
{
	'use strict';
	/* exported Reply */

	/**
	* The reply id
	*/
	this.replyID = null;
	
	/**
	* The reply text
	*/
	this.reply = null;
	
	/**
	* The reply approved status
	*/
	this.approved = null;

	/**
	* The comment id the reply is assocaited with
	*/
	this.commentID = null;

	/**
	*	Email regular expression
	*/
	this.emailRegEx = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;

	/**
	* Errors array
	*/
	this.errors = [];

	/**
	* Method to open the reply form
	*/
	this.openForm = function()
	{
		var self = this;
		$('<div>')
			.addClass('overlay')
			.hide()
			.appendTo('body')
			.on('click', function() {
				self.closeForm(function(){});
			})
			.fadeIn();

		var html = '<div class="row"><textarea name="reply" id="reply"></textarea></div>';
		html += '<div class="row"><input type="submit" name="submit" id="submitReply" value="Reply"></div>';

		$('<div>')
			.attr('id','addReply')
			.html(html)
			.appendTo('body');

		setTimeout(function() {
			$('#addReply').addClass('show');
		},100);
	};

	
	/**
	* Method to close the form
	*/
	this.closeForm = function()
	{
		$('.overlay').fadeOut(function()
		{
			$(this).remove();
			$('#addReply').removeClass('show');
			setTimeout(function() {
				$('#addReply').remove();
			},300);
		});
	};

	/**
	* Method to validate the reply data
	*/
	this.valid = function()
	{
		var self = this;

		self.errors = [];

		if ( this.reply === null )
		{
			var error = new Error();
			error.elID = '#reply';
			error.elText = 'Please enter your reply';
			self.errors.push( error );
		}	

		if ( self.errors.length ) {
			return false;
		}

		return true;
	};

	/**
	* Method to show the errors
	*/
	this.showErrors = function()
	{
		var self = this;
		if ( self.errors.length ) {
			for ( var i = 0; i < self.errors.length; i++ ) {
				self.errors[i].show();
			}
		}	
	};

	/**
	* Method to get the errors
	*/
	this.getErrors = function()
	{
		if ( this.errors.length ) {
			return this.errors;
		} else {
			return false;
		}
	};

	/**
	* A method to submit the enquiry by Ajax
	*/
	this.submitReply = function(callback)
	{
		if ( !this.valid() ) {
			return false;
		}

		$.ajax({
			url: '/app/init.php',
			type: 'POST',
			dataType: 'JSON',
			data: 'action=reply&nonce='+this.nonce+'&reply='+this.reply+'&approved='+this.approved+'&comment_id='+this.commentID,
			success: function(response) {
				if ( response.success )
				{
					callback(response);
				}
			}
		});
	};

	/**
	* Method to approve/unapprove comment replies
	*/
	this.approve = function(callback)
	{
		if ( !this.ajaxAction || !this.replyID || !this.nonce ) {
			return false;
		}

		$.ajax({
			url: '/app/init.php',
			type: 'POST',
			dataType: 'JSON',
			data: 'action='+this.ajaxAction+'&nonce='+this.nonce+'&reply-id='+this.replyID,
			success: function() {
				callback();
			}
		});
	};

	/**
	* Method to delete a reply
	*/
	this.deleteReply = function(callback)
	{
		if ( !this.replyID || !this.nonce) {
			return false;
		}

		$.ajax({
			url: '/app/init.php',
			type: 'POST',
			dataType: 'JSON',
			data: 'action=delete-reply&nonce='+this.nonce+'&reply-id='+this.replyID,
			success: function(response) {
				if ( response.success )
				{
					callback(response);
				}
			}
		});
	};

};
/**
* @name SysError
* @description Handles errors
*/
var SysError = function()
{
	'use strict';
	/* exported SysError */

	this.elID = null;
	this.elText = null;

	/**
	* Nethod to show the error
	*/
	this.show = function()
	{
		$(this.elID).addClass('error');
		$('<div>')
			.addClass('error-text')
			.html('<span>'+this.elText+'</span>')
			.hide()
			.insertAfter(this.elID)
			.fadeIn();
	};
};
$(document).ready(function() {

	'use strict';

	var nav = {

		init: function()
		{
			this.mobileToggle();
			this.mobileClick();
		},

		mobileToggle: function()
		{
			$('#mobileToggle').on('click', function(e)
			{
				e.preventDefault();
				$(this).toggleClass('open');
				$('body').toggleClass('open');
			});			
		},

		mobileClick: function()
		{
			$('nav a').on('click', function()
			{
				if ($('body').hasClass('open')) {
					$('#mobileToggle').removeClass('open');
					$('body').removeClass('open');
				}
			});
		}

	};

	nav.init();

});
$(document).ready(function() {

	'use strict';

	var navBar = {
		onScreen:true,
		init: function()
		{
			$(window).scroll(function()
			{
				if ( !$('header').isOnScreen(0.5,0.5) ) {
					if ( !$('header').hasClass('stick') ) {
						$('header').addClass('stick');
					}
				}
			});
		}
	};

	var banner = {
		init: function()
		{
			this.show();
			//this.scroll();
		},
		show: function()
		{
			setTimeout(function() {
				$('#banner .text').addClass('show');
			},700);
		},
		scroll: function()
		{
			$(window).scroll(function() {
				
				var top = $(window).scrollTop();
				if ( top < 400 )
				{
					var topPos = top + 100;
					$('#banner').css({
						backgroundPosition: 'center -' + topPos + 'px'
					});						
				}
			});
		},
	};

	var tech = {
		init: function()
		{
			var self = tech;
			setTimeout(function() {
				self.show();
			}, 1000);
		},
		show: function()
		{
			var time = 0;
			$('#tech ul li').each(function(i,el)
			{
				setTimeout(function() {
					$(el).addClass('show');
				}, time);
				time+=200;
			});
		}
	};

	var work = {
		init: function()
		{
			var self = work;
			self.workFadeIn();
			self.workTextFadeIn();
		},
		workFadeIn: function()
		{
			var complete = false;

			$(window).scroll(function() {
				if (!complete)
				{
					if ( $('#work').isOnScreen(0.5,0.5) )
					{
						var time = 0;
						$('#work .work').each(function(i,el) {
							setTimeout(function() {
								$(el).addClass('show');
							}, time);
						});
						complete = true;
					}					
				}
			});
		},
		workTextFadeIn: function()
		{
			var complete = false;
			$(window).scroll(function() {
				if (!complete)
				{
					if ( $('#work').isOnScreen(0.5,0.5) )
					{
						var time = 0;
						$('#work .work .text').each(function(i,el) {
							setTimeout(function() {
								$(el).addClass('show');
							}, time);
							//time+=500;
						});
						complete=true;
					}
				}
			});
		}
	};

	var testimonials = {
		init: function()
		{
			var self = testimonials;
			self.testimonialsFadeIn();
		},
		testimonialsFadeIn: function()
		{
			var complete = false;
			$(window).scroll(function()
			{	
				if (!complete)
				{
					if ( $('#testimonials').isOnScreen(0.5,0.5) )
					{
						$('#testimonials').addClass('show');
						var time = 0;
						$('#testimonials .testimonial').each(function(i,el) {
							setTimeout(function() {
								$(el).find('.pic').addClass('show');
							}, time);
							time+=500;
						});
					}					
				}
			});
		}
	};

	var articles = {
		init: function()
		{
			var self = articles;
			self.articlesFadeIn();
		},
		articlesFadeIn: function()
		{
			var complete = false;
			$(window).scroll(function()
			{	
				if (!complete)
				{
					if ( $('#articles').isOnScreen(0.5,0.5) )
					{
						var time = 0;
						$('#articles .article').each(function(i,el) {
							setTimeout(function() {
								$(el).addClass('show');
							}, time);
							time+=200;
						});
					}
				}
			});
		}
	};

	var contact = {
		init: function()
		{
			var self = contact;
			self.contactFadeIn();
		},
		contactFadeIn: function()
		{
			var complete = false;
			$(window).scroll(function() {
				if (!complete)
				{
					if ( $('#contact').isOnScreen(0.5, 0.5) )
					{
						$('#contact .row').each(function(i,el) {
							$(el).addClass('show');
						});
						setTimeout(function() {
							$('#contact input.button').addClass('show');
						},1000);
						complete = true;
					}
				}
			});
		}
	};

	// Initialise
	navBar.init();
	banner.init();
	tech.init();
	work.init();
	testimonials.init();
	articles.init();
	contact.init();

});
/**
* jAlert
* a nicer Javascript alert function, written for Jengnet by Craig Bullock
* 
* has 2 modes, standard and confirm replicating Javascripts alert and confirm methods
*/
var jAlert = function(options)
{
	'use strict';
	/* exported jAlert */

	/**
	* Options
	*/
	this.alertOptions = {
		'alertType':null,
		'message':null,
		callback:function(){}
	};

	this.currentjAlert = null;

	$.extend(this.alertOptions,options);

	this.alertOpen = function()
	{
		var self = this;

		if ( this.alertOptions.alertType === null ) {
			return false;
		}

		clearTimeout(self.currentjAlert);

		if ( this.alertOptions.alertType === 'alert' ) {
			this.alertStandard();
		} else if ( this.alertOptions.alertType === 'confirm' ) {
			this.alertConfirm();
		}

		this.attachActions();
	};

	this.attachActions = function()
	{
		var self = this;
		$('.jAlert a[data-action="cancel"]').on('click', function(e)
		{
			e.preventDefault();
			self.closeAlert(function(){});
		});
	};

	this.alertStandard = function()
	{
		var self = this;
		$('<div>')
			.addClass('overlay')
			.hide()
			.appendTo('body')
			.on('click', function() {
				self.closeAlert(function(){});
			})
			.fadeIn();

		var html = '<p>'+self.alertOptions.message+'</p>';
		html += '<div class="buttons"><a data-action="ok" href="#">OK</a></div>';

		$('<div>')
			.addClass('jAlert')
			.addClass('jAlertStandard')
			.html(html)
			.appendTo('body');

		setTimeout(function() {
			$('.jAlert').addClass('show');
		},100);
	};

	this.alertConfirm = function()
	{
		var self = this;
		$('<div>')
			.addClass('overlay')
			.hide()
			.appendTo('body')
			.on('click', function() {
				self.closeAlert(function(){});
			})
			.fadeIn();

		var html = '<p>'+self.alertOptions.message+'</p>';
		html += '<div class="buttons"><a data-action="ok" href="#">OK</a><a data-action="cancel" href="#">Cancel</a></div>';

		$('<div>')
			.addClass('jAlert')
			.addClass('jAlertStandard')
			.html(html)
			.appendTo('body');

		setTimeout(function() {
			$('.jAlert').addClass('show');
		},100);
	};

	this.closeAlert = function(callback)
	{
		var self = this;
		$('.overlay').fadeOut(function()
		{
			$(this).remove();
			$('.jAlert').removeClass('show');
			self.currentjAlert = setTimeout(function() {
				$('.jAlert').remove();
				if (typeof self.alertOptions.callback === 'function') {
					self.alertOptions.callback();	
				}
				if (typeof callback === 'function') {
					callback();	
				}
			},300);
		});
	};

	this.ok = function(callback)
	{
		var self = this;
		$('.jAlert a[data-action="ok"]').on('click', function(e)
		{
			e.preventDefault();
			callback();
			self.closeAlert();
		});
	};

};
'use strict';
/* global nonce, Enquiry, Success */
/**
*	Contact object for handling the contact form
* Performs basic validation and handles the Ajax request
*/
var contactForm = {

	/**
	* Errors array
	*/
	errors:null,

	/**
	*	A method to start everything off
	*/
	init: function()
	{
		this.removeAutoComplete();
		this.attachSubmit();
	},

	/**
	*	A method to remove browser default auto complete
	*/
	removeAutoComplete: function()
	{
		$('#name,#email,#enquiry').prop('autocomplete', 'off');
	},

	/**
	* A method to attach submit event to the contact form
	*/
	attachSubmit: function()
	{
		var self = this;
		$('#submitEnquiry').on('click', function(e)
		{
			e.preventDefault();
			self.removeErrors();

			var enquiry = new Enquiry();
			enquiry.ename = $('#name').val();
			enquiry.email = $('#email').val();
			enquiry.enquiry = $('#enquiry').val();
			enquiry.nonce = nonce;

			if ( enquiry.valid() ) {
				enquiry.submitEnquiry(function(response)
				{
					self.emptyForm();
					var success = new Success(response.message);
					success.showSuccess();
				});
			} else {
				self.errors = enquiry.getErrors();
				self.showErrors();
			}
		});
	},
	/**
	* A method to remove any current errors
	*/
	removeErrors: function()
	{
		$('.error-text').remove();
		$('input.error').removeClass('error');
	},

	/**
	* A method to show errors
	*/
	showErrors: function()
	{
		var self = this;
		if ( self.errors.length )
		{
			for ( var i = 0; i < self.errors.length; i++ )
			{
				self.errors[i].show();
			}
		}	
	},

	/**
	* A method to reset the form
	*/
	emptyForm: function()
	{
		$('#name,#email,#enquiry').val('');
	},

};

contactForm.init();
'use strict';
/* global nonce, SysComment, Success */
/*
*
*/
var comments = {

	/**
	* Errors array
	*/
	errors:null,

	/**
	*	A method to start everything off
	*/
	init: function()
	{
		this.removeAutoComplete();
		this.attachSubmit();
	},

	/**
	*	A method to remove browser default auto complete
	*/
	removeAutoComplete: function()
	{
		$('#comment_name,#comment_email,#website,#comment').prop('autocomplete', 'off');
	},

	/**
	* A method to attach submit event to the comment form
	*/
	attachSubmit: function()
	{
		var self = this;
		$('#submit_comment').on('click', function(e)
		{
			e.preventDefault();
			self.removeErrors();

			var comment = new SysComment();
			comment.cname = $('#comment_name').val();
			comment.email = $('#comment_email').val();
			comment.website = $('#website').val();
			comment.commentText = $('#comment').val();
			comment.articleID = $('input[name="article_id"]').val();
			comment.nonce = nonce;

			if ( comment.valid() ) {
				comment.submitComment(function(response)
				{
					self.emptyForm();
					var success = new Success(response.message);
					success.showSuccess();

					jQuery(response.template)
						.hide()
						.prependTo('div[data-target="comments-holder"]')
						.slideDown();

					$('html,body').animate({
						scrollTop: $('#comments').offset().top
					}, 500);	
				});
			} else {
				self.errors = comment.getErrors();
				self.showErrors();
			}
		});
	},

	/**
	* A method to remove any current errors
	*/
	removeErrors: function()
	{
		$('.error-text').remove();
		$('#commentForm input.error, #commentForm textarea.error').removeClass('error');
	},

	/**
	* A method to show errors
	*/
	showErrors: function()
	{
		var self = this;
		if ( self.errors.length )
		{
			for ( var i = 0; i < self.errors.length; i++ )
			{
				self.errors[i].show();
			}
		}	
	},

	/**
	* A method to reset the form
	*/
	emptyForm: function()
	{
		$('#comment_name,#comment_email,#website,#comment').val('');
	},


};

comments.init();
'use strict';
/* global SysError, nonce, Fail */

/**
*	Contact object for handling the contact form
* Performs basic validation and handles the Ajax request
*/
var loginForm = {

	/**
	* Errors array
	*/
	errors:[],

	/**
	*	Email regular expression
	*/
	emailRegEx:/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i,

	/**
	*	A method to start everything off
	*/
	init: function()
	{
		this.removeAutoComplete();
		this.attachSubmit();
	},

	/**
	*	A method to remove browser default auto complete
	*/
	removeAutoComplete: function()
	{
		$('#name,#password').prop('autocomplete', 'off');
	},

	/**
	* A method to attach submit event to the contact form
	*/
	attachSubmit: function()
	{
		var self = this;
		$('#submitLogin').on('click', function(e)
		{
			e.preventDefault();
			self.removeErrors();

			var credentials = {
				email:$('#email').val(),
				password:$('#password').val()
			};

			self.validate( credentials );

			if ( self.errors.length === 0 ) {
				self.submitLogin();
			} else {
				self.showErrors();
			}
		});
	},

	validate: function( credentials )
	{
		var self = this;
		if ( !self.emailRegEx.test( credentials.email ) )
		{
			var error1 = new SysError();
			error1.elID = '#email';
			error1.elText = 'Please enter a valid Email address';
			self.errors.push( error1 );
		}
		if ( credentials.password === '' )
		{
			var error2 = new SysError();
			error2.elID = '#password';
			error2.elText = 'Please enter a password';
			self.errors.push( error2 );
		}
	},

	/**
	* A method to remove any current errors
	*/
	removeErrors: function()
	{
		this.errors = [];
		$('.error-text').remove();
		$('input.error').removeClass('error');
	},

	/**
	* A method to show errors
	*/
	showErrors: function()
	{
		var self = this;
		if ( self.errors.length )
		{
			for ( var i = 0; i < self.errors.length; i++ )
			{
				self.errors[i].show();
			}
		}	
	},

	/**
	* A method to submit the enquiry by Ajax
	*/
	submitLogin: function()
	{
		$.ajax({
			url: '/app/init.php',
			type: 'POST',
			dataType: 'JSON',
			data: 'action=login&nonce='+nonce+'&'+$('#loginForm').serialize(),
			success: function(response) {
				
				if ( response.success )
				{
					window.location = '/admin/';
				}
				else
				{
					var fail = new Fail(response.message);
					fail.showFail();
				}
			}
		});
	},

	/**
	* A method to reset the form
	*/
	emptyForm: function()
	{
		$('#name,#email,#enquiry').val('');
	},

};

loginForm.init();
$(document).ready(function()
{
	'use strict';
	/* global jAlert, nonce, Article */

	var adminArticles = {

		processing:false,

		init:function()
		{
			this.attachApprove();
			this.attachDelete();
		},

		attachApprove:function()
		{
			$('#admin').on('click', 'a[data-action="approve-article"]', function(e)
			{
				e.preventDefault();
				var $this = $(this);
				var article = new Article();
				article.articleID = $(this).data('article-id');
				article.ajaxAction = ($(this).hasClass('approved')) ? 'un-approve-article' : 'approve-article';
				article.nonce = nonce;
				article.approve(function()
				{
					$this.toggleClass('approved');
				});
			});
		},

		attachDelete:function()
		{
			var self = this;
			$('#admin').on('click', 'a[data-action="delete-article"]', function(e)
			{
				e.preventDefault();

				if ( self.processing ) {
					return false;
				}

				self.processing = true;

				console.log($(this).data());

				var deleteOptions = {
					'alertType':'confirm',
					'message':'Are you sure you would like to delete this article?',
					callback:function()
					{
						self.processing = false;
					}
				};
				var deleteAlert = new jAlert(deleteOptions);
				deleteAlert.alertOpen();

				var parent = $(this).parents('.adminItem');

				var article = new Article();
				article.articleID = $(this).data('comment-id');
				article.nonce = nonce;

				deleteAlert.ok(function()
				{
					article.deleteArticle(function()
					{
					 	parent.fadeOut(function()
					 	{
					 		$(this).remove();
					 	});
					});
				});
			});
		}
	};

	adminArticles.init();
});
$(document).ready(function()
{
	'use strict';
	/* global jAlert, nonce, Enquiry */

	var adminEnquiries = {

		processing:false,

		init:function()
		{
			this.attachDelete();
		},

		attachDelete:function()
		{
			var self = this;
			$('#admin').on('click', 'a[data-action="delete-enquiry"]', function(e)
			{
				e.preventDefault();

				if ( self.processing ) {
					return false;
				}

				self.processing = true;
		
				var deleteOptions = {
					'alertType':'confirm',
					'message':'Are you sure you would like to delete this enquiry?',
					callback:function()
					{
						self.processing = false;
					}
				};
				var deleteAlert = new jAlert(deleteOptions);
				deleteAlert.alertOpen();

				var parent = $(this).parents('.adminItem');

				var enquiry = new Enquiry();
				enquiry.enquiryID = $(this).data('enquiry-id');
				enquiry.ajaxAction = 'delete-enquiry';
				enquiry.nonce = nonce;

				deleteAlert.ok(function()
				{
					enquiry.deleteEnquiry(function()
					{
						parent.fadeOut(function()
						{
							$(this).remove();
							self.processing = false;
						});
					});
				});
			});
		}
	};
	adminEnquiries.init();
});
$(document).ready(function()
{
	'use strict';
	/* global SysComment, jAlert, nonce */

	var adminComments = {

		processing:false,

		init:function()
		{
			this.attachApprove();
			this.attachDelete();
		},

		attachApprove:function()
		{
			$('#admin').on('click', 'a[data-action="approve-comment"]', function(e)
			{
				e.preventDefault();
				var $this = $(this);
				var comment = new SysComment();
				comment.commentID = $(this).data('comment-id');
				comment.ajaxAction = ($(this).hasClass('approved')) ? 'un-approve-comment' : 'approve-comment';
				comment.nonce = nonce;
				comment.approve(function()
				{
					$this.toggleClass('approved');
				});
			});
		},

		attachDelete:function()
		{
			var self = this;
			$('#admin').on('click', 'a[data-action="delete-comment"]', function(e)
			{
				e.preventDefault();

				if ( self.processing ) {
					return false;
				}

				self.processing = true;

				var deleteOptions = {
					'alertType':'confirm',
					'message':'Are you sure you would like to delete this comment?',
					callback:function()
					{
						self.processing = false;
					}
				};
				var deleteAlert = new jAlert(deleteOptions);
				deleteAlert.alertOpen();

				var parent = $(this).parents('.adminItem');

				var comment = new SysComment();
				comment.commentID = $(this).data('comment-id');
				comment.ajaxAction = 'delete-comment';
				comment.nonce = nonce;

				deleteAlert.ok(function()
				{
					comment.deleteComment(function()
					{
						parent.fadeOut(function()
						{
							$(this).remove();
						});
					});
				});
			});
		}
	};

	adminComments.init();
});
$(document).ready(function()
{
	'use strict';
	/* global jAlert, nonce, Reply */

	var adminReplies = {

		processing:false,

		init:function()
		{
			this.attachReply();
			this.attachDelete();
			this.attachApprove();
		},

		attachReply:function()
		{
			var self = this;
			$('#admin').on('click', 'a[data-action="reply-to-comment"]', function(e)
			{
				e.preventDefault();

				var parent = $(this).parents('.adminItem');

				var reply = new Reply();
				reply.commentID = $(this).data('comment-id');
				reply.approved = 1;
				reply.nonce = nonce;
				reply.openForm();

				$('#submitReply').on('click', function(e)
				{
					e.preventDefault();
					reply.reply = $('#reply').val();
					self.clearErrors();
					if (reply.valid()) {
						reply.submitReply(function(response)
						{
							reply.closeForm();
							$(response.template).appendTo(parent.find('.replies'));
						});
					} else {
						reply.showErrors();
					}
				});
			});
		},

		clearErrors:function()
		{
			$('#addReply .error-text').remove();
			$('#addReply #reply').removeClass('error');
		},

		attachApprove:function()
		{
			$('#admin').on('click', 'a[data-action="approve-reply"]', function(e)
			{
				e.preventDefault();
				var $this = $(this);
				var reply = new Reply();
				reply.replyID = $(this).data('reply-id');
				reply.ajaxAction = ($(this).hasClass('approved')) ? 'un-approve-reply' : 'approve-reply';
				reply.nonce = nonce;
				reply.approve(function()
				{
					$this.toggleClass('approved');
				});
			});
		},

		attachDelete:function()
		{
			var self = this;
			$('#admin').on('click', 'a[data-action="delete-reply"]', function(e)
			{
				e.preventDefault();

				if ( self.processing ) {
					return false;
				}

				self.processing = true;

				var deleteOptions = {
					'alertType':'confirm',
					'message':'Are you sure you would like to delete this reply?',
					callback:function()
					{
						self.processing = false;
					}
				};
				var deleteAlert = new jAlert(deleteOptions);
				deleteAlert.alertOpen();

				var parent = $(this).parents('.reply');

				var reply = new Reply();
				reply.replyID = $(this).data('reply-id');
				reply.nonce = nonce;

				deleteAlert.ok(function()
				{
					reply.deleteReply(function()
					{
						parent.fadeOut(function()
						{
							$(this).remove();
						});
					});
				});

			});
		}
	};
	adminReplies.init();
});