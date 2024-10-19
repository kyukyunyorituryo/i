/*! For license information please see a9b981167e1b0af65db012e19c147d39ac21805c-6220045803efe5029198.js.LICENSE.txt */
(self.webpackChunkgatsby_starter_blog=self.webpackChunkgatsby_starter_blog||[]).push([[7829],{2473:function(e,t,n){"use strict";var r=n(6540),o=n(4794);t.A=e=>{let{asin:t}=e;var n,a,i=(0,o.useStaticQuery)("2345691313").allJson.edges.filter((e=>t.includes(e.node.Asin)));for(let r=0;r<i.length;r++)n=i[r].node.ImageURL.replace(/_SL500_/,"_SL160_"),a=i[r].node.ImageURL.replace(/_SL500_/,"_SL75_"),i[r].node.image_m=n,i[r].node.image_s=a;const c=Array.from(new Map(i.map((e=>[e.node.Asin,e]))).values());return r.createElement("div",null,c.map((e=>r.createElement("div",{key:e.node.Asin},r.createElement("a",{className:"amazon-card-container",target:"_blank",rel:"noopener noreferrer",href:e.node.URL},r.createElement("div",{className:"amazon-card-body"},r.createElement("div",{className:"amazon-card-title"},e.node.Title),r.createElement("div",{className:"amazon-card-domain"},"価格：",e.node.Price,"円、ポイント：",e.node.Points,"、",e.node.Contributor,"、出版社：",e.node.Publisher,"、カテゴリー：",e.node.Category)),r.createElement("div",{className:"amazon-card-image-container"},r.createElement("img",{className:"amazon-card-image",srcSet:`${e.node.image_s} 320w, ${e.node.image_m} 640w, ${e.node.ImageURL} `,src:e.node.image_s,sizes:"(max-width:1280px) 50vw, 1280px",loading:"lazy",alt:e.node.Title})))))))}},7880:function(e,t,n){"use strict";var r=n(6540);t.A=e=>{let{src:t,title:n}=e;const o="https://hatenablog-parts.com/embed?url="+encodeURI(t);return r.createElement("div",null,r.createElement("div",{key:t},r.createElement("iframe",{src:o,title:n,className:"embed-card embed-webcard",scrolling:"no",frameBorder:"0",loading:"lazy"})))}},2343:function(e,t,n){"use strict";n.d(t,{A:function(){return x}});var r,o=n(6540),a=(r=function(e,t){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},r(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),i=function(e){function t(t){var n=e.call(this,t)||this;return n.name="AssertionError",n}return a(t,e),t}(Error);function c(e,t){if(!e)throw new i(t)}function l(e){var t=Object.entries(e).filter((function(e){var t=e[1];return null!=t})).map((function(e){var t=e[0],n=e[1];return"".concat(encodeURIComponent(t),"=").concat(encodeURIComponent(String(n)))}));return t.length>0?"?".concat(t.join("&")):""}var s=n(6942),u=n.n(s),d=function(){var e=function(t,n){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},e(t,n)};return function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),f=function(){return f=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},f.apply(this,arguments)},h=function(e,t,n,r){return new(n||(n=Promise))((function(o,a){function i(e){try{l(r.next(e))}catch(t){a(t)}}function c(e){try{l(r.throw(e))}catch(t){a(t)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,c)}l((r=r.apply(e,t||[])).next())}))},p=function(e,t){var n,r,o,a,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function c(a){return function(c){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,r&&(o=2&a[0]?r.return:a[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,a[1])).done)return o;switch(r=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return i.label++,{value:a[1],done:!1};case 5:i.label++,r=a[1],a=[0];continue;case 7:a=i.ops.pop(),i.trys.pop();continue;default:if(!(o=i.trys,(o=o.length>0&&o[o.length-1])||6!==a[0]&&2!==a[0])){i=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){i.label=a[1];break}if(6===a[0]&&i.label<o[1]){i.label=o[1],o=a;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(a);break}o[2]&&i.ops.pop(),i.trys.pop();continue}a=t.call(e,i)}catch(c){a=[6,c],r=0}finally{n=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,c])}}},w=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n};var v=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.openShareDialog=function(e){var n,r,o=t.props,a=o.onShareWindowClose,i=o.windowHeight,c=void 0===i?400:i,l=o.windowPosition,s=void 0===l?"windowCenter":l,u=o.windowWidth,d=void 0===u?550:u;!function(e,t,n){var r=t.height,o=t.width,a=w(t,["height","width"]),i=f({height:r,width:o,location:"no",toolbar:"no",status:"no",directories:"no",menubar:"no",scrollbars:"yes",resizable:"no",centerscreen:"yes",chrome:"yes"},a),c=window.open(e,"",Object.keys(i).map((function(e){return"".concat(e,"=").concat(i[e])})).join(", "));if(n)var l=window.setInterval((function(){try{(null===c||c.closed)&&(window.clearInterval(l),n(c))}catch(e){console.error(e)}}),1e3)}(e,f({height:c,width:d},"windowCenter"===s?(n=d,r=c,{left:window.outerWidth/2+(window.screenX||window.screenLeft||0)-n/2,top:window.outerHeight/2+(window.screenY||window.screenTop||0)-r/2}):function(e,t){return{top:(window.screen.height-t)/2,left:(window.screen.width-e)/2}}(d,c)),a)},t.handleClick=function(e){return h(t,void 0,void 0,(function(){var t,n,r,o,a,i,c,l,s,u;return p(this,(function(d){switch(d.label){case 0:return t=this.props,n=t.beforeOnClick,r=t.disabled,o=t.networkLink,a=t.onClick,i=t.url,c=t.openShareDialogOnClick,l=t.opts,s=o(i,l),r?[2]:(e.preventDefault(),n?(u=n(),!(f=u)||"object"!=typeof f&&"function"!=typeof f||"function"!=typeof f.then?[3,2]:[4,u]):[3,2]);case 1:d.sent(),d.label=2;case 2:return c&&this.openShareDialog(s),a&&a(e,s),[2]}var f}))}))},t}return d(t,e),t.prototype.render=function(){var e=this.props,t=(e.beforeOnClick,e.children),n=e.className,r=e.disabled,a=e.disabledStyle,i=e.forwardedRef,c=(e.networkLink,e.networkName),l=(e.onShareWindowClose,e.openShareDialogOnClick,e.opts,e.resetButtonStyle),s=e.style,d=(e.url,e.windowHeight,e.windowPosition,e.windowWidth,w(e,["beforeOnClick","children","className","disabled","disabledStyle","forwardedRef","networkLink","networkName","onShareWindowClose","openShareDialogOnClick","opts","resetButtonStyle","style","url","windowHeight","windowPosition","windowWidth"])),h=u()("react-share__ShareButton",{"react-share__ShareButton--disabled":!!r,disabled:!!r},n),p=f(f(l?{backgroundColor:"transparent",border:"none",padding:0,font:"inherit",color:"inherit",cursor:"pointer"}:{},s),r&&a);return o.createElement("button",f({},d,{"aria-label":d["aria-label"]||c,className:h,onClick:this.handleClick,ref:i,style:p}),t)},t.defaultProps={disabledStyle:{opacity:.6},openShareDialogOnClick:!0,resetButtonStyle:!0},t}(o.Component),m=v,y=function(){return y=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},y.apply(this,arguments)};var b=function(e,t,n,r){function a(a,i){var c=n(a),l=y({},a);return Object.keys(c).forEach((function(e){delete l[e]})),o.createElement(m,y({},r,l,{forwardedRef:i,networkName:e,networkLink:t,opts:n(a)}))}return a.displayName="ShareButton-".concat(e),(0,o.forwardRef)(a)};var g=b("twitter",(function(e,t){var n=t.title,r=t.via,o=t.hashtags,a=void 0===o?[]:o,i=t.related,s=void 0===i?[]:i;return c(e,"twitter.url"),c(Array.isArray(a),"twitter.hashtags is not an array"),c(Array.isArray(s),"twitter.related is not an array"),"https://twitter.com/intent/tweet"+l({url:e,text:n,via:r,hashtags:a.length>0?a.join(","):void 0,related:s.length>0?s.join(","):void 0})}),(function(e){return{hashtags:e.hashtags,title:e.title,via:e.via,related:e.related}}),{windowWidth:550,windowHeight:400}),C=function(){return C=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},C.apply(this,arguments)},k=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n};function O(e){var t=function(t){var n=t.bgStyle,r=t.borderRadius,a=t.iconFillColor,i=t.round,c=t.size,l=k(t,["bgStyle","borderRadius","iconFillColor","round","size"]);return o.createElement("svg",C({viewBox:"0 0 64 64",width:c,height:c},l),i?o.createElement("circle",{cx:"32",cy:"32",r:"31",fill:e.color,style:n}):o.createElement("rect",{width:"64",height:"64",rx:r,ry:r,fill:e.color,style:n}),o.createElement("path",{d:e.path,fill:a}))};return t.defaultProps={bgStyle:{},borderRadius:0,iconFillColor:"white",size:64},t}var _=O({color:"#00aced",networkName:"twitter",path:"M48,22.1c-1.2,0.5-2.4,0.9-3.8,1c1.4-0.8,2.4-2.1,2.9-3.6c-1.3,0.8-2.7,1.3-4.2,1.6 C41.7,19.8,40,19,38.2,19c-3.6,0-6.6,2.9-6.6,6.6c0,0.5,0.1,1,0.2,1.5c-5.5-0.3-10.3-2.9-13.5-6.9c-0.6,1-0.9,2.1-0.9,3.3 c0,2.3,1.2,4.3,2.9,5.5c-1.1,0-2.1-0.3-3-0.8c0,0,0,0.1,0,0.1c0,3.2,2.3,5.8,5.3,6.4c-0.6,0.1-1.1,0.2-1.7,0.2c-0.4,0-0.8,0-1.2-0.1 c0.8,2.6,3.3,4.5,6.1,4.6c-2.2,1.8-5.1,2.8-8.2,2.8c-0.5,0-1.1,0-1.6-0.1c2.9,1.9,6.4,2.9,10.1,2.9c12.1,0,18.7-10,18.7-18.7 c0-0.3,0-0.6,0-0.8C46,24.5,47.1,23.4,48,22.1z"});var S=b("facebook",(function(e,t){var n=t.quote,r=t.hashtag;return c(e,"facebook.url"),"https://www.facebook.com/sharer/sharer.php"+l({u:e,quote:n,hashtag:r})}),(function(e){return{quote:e.quote,hashtag:e.hashtag}}),{windowWidth:550,windowHeight:400}),E=O({color:"#3b5998",networkName:"facebook",path:"M34.1,47V33.3h4.6l0.7-5.3h-5.3v-3.4c0-1.5,0.4-2.6,2.6-2.6l2.8,0v-4.8c-0.5-0.1-2.2-0.2-4.1-0.2 c-4.1,0-6.9,2.5-6.9,7V28H24v5.3h4.6V47H34.1z"});var j=b("line",(function(e,t){var n=t.title;return c(e,"line.url"),"https://social-plugins.line.me/lineit/share"+l({url:e,text:n})}),(function(e){return{title:e.title}}),{windowWidth:500,windowHeight:500}),L=O({color:"#00b800",networkName:"line",path:"M52.62 30.138c0 3.693-1.432 7.019-4.42 10.296h.001c-4.326 4.979-14 11.044-16.201 11.972-2.2.927-1.876-.591-1.786-1.112l.294-1.765c.069-.527.142-1.343-.066-1.865-.232-.574-1.146-.872-1.817-1.016-9.909-1.31-17.245-8.238-17.245-16.51 0-9.226 9.251-16.733 20.62-16.733 11.37 0 20.62 7.507 20.62 16.733zM27.81 25.68h-1.446a.402.402 0 0 0-.402.401v8.985c0 .221.18.4.402.4h1.446a.401.401 0 0 0 .402-.4v-8.985a.402.402 0 0 0-.402-.401zm9.956 0H36.32a.402.402 0 0 0-.402.401v5.338L31.8 25.858a.39.39 0 0 0-.031-.04l-.002-.003-.024-.025-.008-.007a.313.313 0 0 0-.032-.026.255.255 0 0 1-.021-.014l-.012-.007-.021-.012-.013-.006-.023-.01-.013-.005-.024-.008-.014-.003-.023-.005-.017-.002-.021-.003-.021-.002h-1.46a.402.402 0 0 0-.402.401v8.985c0 .221.18.4.402.4h1.446a.401.401 0 0 0 .402-.4v-5.337l4.123 5.568c.028.04.063.072.101.099l.004.003a.236.236 0 0 0 .025.015l.012.006.019.01a.154.154 0 0 1 .019.008l.012.004.028.01.005.001a.442.442 0 0 0 .104.013h1.446a.4.4 0 0 0 .401-.4v-8.985a.402.402 0 0 0-.401-.401zm-13.442 7.537h-3.93v-7.136a.401.401 0 0 0-.401-.401h-1.447a.4.4 0 0 0-.401.401v8.984a.392.392 0 0 0 .123.29c.072.068.17.111.278.111h5.778a.4.4 0 0 0 .401-.401v-1.447a.401.401 0 0 0-.401-.401zm21.429-5.287c.222 0 .401-.18.401-.402v-1.446a.401.401 0 0 0-.401-.402h-5.778a.398.398 0 0 0-.279.113l-.005.004-.006.008a.397.397 0 0 0-.111.276v8.984c0 .108.043.206.112.278l.005.006a.401.401 0 0 0 .284.117h5.778a.4.4 0 0 0 .401-.401v-1.447a.401.401 0 0 0-.401-.401h-3.93v-1.519h3.93c.222 0 .401-.18.401-.402V29.85a.401.401 0 0 0-.401-.402h-3.93V27.93h3.93z"});var N=b("hatena",(function(e,t){var n=t.title;return c(e,"hatena.url"),"http://b.hatena.ne.jp/add?mode=confirm&url=".concat(e,"&title=").concat(n)}),(function(e){return{title:e.title}}),{windowWidth:660,windowHeight:460,windowPosition:"windowCenter"}),P=O({color:"#009ad9",networkName:"hatena",path:"M 36.164062 33.554688 C 34.988281 32.234375 33.347656 31.5 31.253906 31.34375 C 33.125 30.835938 34.476562 30.09375 35.335938 29.09375 C 36.191406 28.09375 36.609375 26.78125 36.609375 25.101562 C 36.628906 23.875 36.332031 22.660156 35.75 21.578125 C 35.160156 20.558594 34.292969 19.71875 33.253906 19.160156 C 32.304688 18.640625 31.175781 18.265625 29.847656 18.042969 C 28.523438 17.824219 26.195312 17.730469 22.867188 17.730469 L 14.769531 17.730469 L 14.769531 47.269531 L 23.113281 47.269531 C 26.46875 47.269531 28.886719 47.15625 30.367188 46.929688 C 31.851562 46.695312 33.085938 46.304688 34.085938 45.773438 C 35.289062 45.148438 36.28125 44.179688 36.933594 42.992188 C 37.597656 41.796875 37.933594 40.402344 37.933594 38.816406 C 37.933594 36.621094 37.347656 34.867188 36.164062 33.554688 Z M 22.257812 24.269531 L 23.984375 24.269531 C 25.988281 24.269531 27.332031 24.496094 28.015625 24.945312 C 28.703125 25.402344 29.042969 26.183594 29.042969 27.285156 C 29.042969 28.390625 28.664062 29.105469 27.9375 29.550781 C 27.210938 29.992188 25.84375 30.199219 23.855469 30.199219 L 22.257812 30.199219 Z M 29.121094 41.210938 C 28.328125 41.691406 26.976562 41.925781 25.078125 41.925781 L 22.257812 41.925781 L 22.257812 35.488281 L 25.195312 35.488281 C 27.144531 35.488281 28.496094 35.738281 29.210938 36.230469 C 29.925781 36.726562 30.304688 37.582031 30.304688 38.832031 C 30.304688 40.078125 29.914062 40.742188 29.105469 41.222656 Z M 29.121094 41.210938 M 46.488281 39.792969 C 44.421875 39.792969 42.742188 41.46875 42.742188 43.535156 C 42.742188 45.605469 44.421875 47.28125 46.488281 47.28125 C 48.554688 47.28125 50.230469 45.605469 50.230469 43.535156 C 50.230469 41.46875 48.554688 39.792969 46.488281 39.792969 Z M 46.488281 39.792969 M 43.238281 17.730469 L 49.738281 17.730469 L 49.738281 37.429688 L 43.238281 37.429688 Z M 43.238281 17.730469 "});var x=e=>{const t=e.title,n=e.url;return o.createElement("div",{className:"share"},o.createElement("p",{className:"share__title"},"SHARE!"),o.createElement("div",{className:"social-links"},o.createElement("div",{className:"social-links__icon"},o.createElement(g,{url:n,title:t+" #ad"},o.createElement(_,{round:!0,size:40}))),o.createElement("div",{className:"social-links__icon"},o.createElement(S,{url:n},o.createElement(E,{round:!0,size:40}))),o.createElement("div",{className:"social-links__icon"},o.createElement(j,{url:n,title:t},o.createElement(L,{round:!0,size:40}))),o.createElement("div",{className:"social-links__icon"},o.createElement(N,{url:n,title:t},o.createElement(P,{round:!0,size:40})))))}},6942:function(e,t){var n;!function(){"use strict";var r={}.hasOwnProperty;function o(){for(var e="",t=0;t<arguments.length;t++){var n=arguments[t];n&&(e=i(e,a(n)))}return e}function a(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return o.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var t="";for(var n in e)r.call(e,n)&&e[n]&&(t=i(t,n));return t}function i(e,t){return t?e?e+" "+t:e+t:e}e.exports?(o.default=o,e.exports=o):void 0===(n=function(){return o}.apply(t,[]))||(e.exports=n)}()},8453:function(e,t,n){"use strict";n.d(t,{RP:function(){return a}});var r=n(6540);const o=r.createContext({});function a(e){const t=r.useContext(o);return r.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}}}]);
//# sourceMappingURL=a9b981167e1b0af65db012e19c147d39ac21805c-6220045803efe5029198.js.map