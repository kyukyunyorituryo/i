"use strict";(self.webpackChunkgatsby_starter_blog=self.webpackChunkgatsby_starter_blog||[]).push([[851],{3204:function(e){const t=/[\p{Lu}]/u,a=/[\p{Ll}]/u,r=/^[\p{Lu}](?![\p{Lu}])/gu,n=/([\p{Alpha}\p{N}_]|$)/u,i=/[_.\- ]+/,s=new RegExp("^"+i.source),l=new RegExp(i.source+n.source,"gu"),o=new RegExp("\\d+"+n.source,"gu"),c=(e,n)=>{if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");if(n={pascalCase:!1,preserveConsecutiveUppercase:!1,...n},0===(e=Array.isArray(e)?e.map((e=>e.trim())).filter((e=>e.length)).join("-"):e.trim()).length)return"";const i=!1===n.locale?e=>e.toLowerCase():e=>e.toLocaleLowerCase(n.locale),c=!1===n.locale?e=>e.toUpperCase():e=>e.toLocaleUpperCase(n.locale);if(1===e.length)return n.pascalCase?c(e):i(e);return e!==i(e)&&(e=((e,r,n)=>{let i=!1,s=!1,l=!1;for(let o=0;o<e.length;o++){const c=e[o];i&&t.test(c)?(e=e.slice(0,o)+"-"+e.slice(o),i=!1,l=s,s=!0,o++):s&&l&&a.test(c)?(e=e.slice(0,o-1)+"-"+e.slice(o-1),l=s,s=!1,i=!0):(i=r(c)===c&&n(c)!==c,l=s,s=n(c)===c&&r(c)!==c)}return e})(e,i,c)),e=e.replace(s,""),e=n.preserveConsecutiveUppercase?((e,t)=>(r.lastIndex=0,e.replace(r,(e=>t(e)))))(e,i):i(e),n.pascalCase&&(e=c(e.charAt(0))+e.slice(1)),((e,t)=>(l.lastIndex=0,o.lastIndex=0,e.replace(l,((e,a)=>t(a))).replace(o,(e=>t(e)))))(e,c)};e.exports=c,e.exports.default=c},8032:function(e,t,a){a.d(t,{L:function(){return g},M:function(){return k},P:function(){return E},S:function(){return D},_:function(){return l},a:function(){return s},b:function(){return u},g:function(){return d},h:function(){return o}});var r=a(7294),n=(a(3204),a(5697)),i=a.n(n);function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},s.apply(this,arguments)}function l(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)t.indexOf(a=i[r])>=0||(n[a]=e[a]);return n}const o=()=>"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;function c(e,t,a){const r={};let n="gatsby-image-wrapper";return"fixed"===a?(r.width=e,r.height=t):"constrained"===a&&(n="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:n,"data-gatsby-image-wrapper":"",style:r}}function u(e,t,a,r,n){return void 0===n&&(n={}),s({},a,{loading:r,shouldLoad:e,"data-main-image":"",style:s({},n,{opacity:t?1:0})})}function d(e,t,a,r,n,i,l,o){const c={};i&&(c.backgroundColor=i,"fixed"===a?(c.width=r,c.height=n,c.backgroundColor=i,c.position="relative"):("constrained"===a||"fullWidth"===a)&&(c.position="absolute",c.top=0,c.left=0,c.bottom=0,c.right=0)),l&&(c.objectFit=l),o&&(c.objectPosition=o);const u=s({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:s({opacity:t?0:1,transition:"opacity 500ms linear"},c)});return u}const p=["children"],m=function(e){let{layout:t,width:a,height:n}=e;return"fullWidth"===t?r.createElement("div",{"aria-hidden":!0,style:{paddingTop:n/a*100+"%"}}):"constrained"===t?r.createElement("div",{style:{maxWidth:a,display:"block"}},r.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg%20height='"+n+"'%20width='"+a+"'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null},g=function(e){let{children:t}=e,a=l(e,p);return r.createElement(r.Fragment,null,r.createElement(m,s({},a)),t,null)},h=["src","srcSet","loading","alt","shouldLoad"],f=["fallback","sources","shouldLoad"],y=function(e){let{src:t,srcSet:a,loading:n,alt:i="",shouldLoad:o}=e,c=l(e,h);return r.createElement("img",s({},c,{decoding:"async",loading:n,src:o?t:void 0,"data-src":o?void 0:t,srcSet:o?a:void 0,"data-srcset":o?void 0:a,alt:i}))},b=function(e){let{fallback:t,sources:a=[],shouldLoad:n=!0}=e,i=l(e,f);const o=i.sizes||(null==t?void 0:t.sizes),c=r.createElement(y,s({},i,t,{sizes:o,shouldLoad:n}));return a.length?r.createElement("picture",null,a.map((e=>{let{media:t,srcSet:a,type:i}=e;return r.createElement("source",{key:t+"-"+i+"-"+a,type:i,media:t,srcSet:n?a:void 0,"data-srcset":n?void 0:a,sizes:o})})),c):c};var w;y.propTypes={src:n.string.isRequired,alt:n.string.isRequired,sizes:n.string,srcSet:n.string,shouldLoad:n.bool},b.displayName="Picture",b.propTypes={alt:n.string.isRequired,shouldLoad:n.bool,fallback:n.exact({src:n.string.isRequired,srcSet:n.string,sizes:n.string}),sources:n.arrayOf(n.oneOfType([n.exact({media:n.string.isRequired,type:n.string,sizes:n.string,srcSet:n.string.isRequired}),n.exact({media:n.string,type:n.string.isRequired,sizes:n.string,srcSet:n.string.isRequired})]))};const v=["fallback"],E=function(e){let{fallback:t}=e,a=l(e,v);return t?r.createElement(b,s({},a,{fallback:{src:t},"aria-hidden":!0,alt:""})):r.createElement("div",s({},a))};E.displayName="Placeholder",E.propTypes={fallback:n.string,sources:null==(w=b.propTypes)?void 0:w.sources,alt:function(e,t,a){return e[t]?new Error("Invalid prop `"+t+"` supplied to `"+a+"`. Validation failed."):null}};const k=function(e){return r.createElement(r.Fragment,null,r.createElement(b,s({},e)),r.createElement("noscript",null,r.createElement(b,s({},e,{shouldLoad:!0}))))};k.displayName="MainImage",k.propTypes=b.propTypes;const L=["as","className","class","style","image","loading","imgClassName","imgStyle","backgroundColor","objectFit","objectPosition"],S=["style","className"],C=e=>e.replace(/\n/g,""),x=function(e,t,a){for(var r=arguments.length,n=new Array(r>3?r-3:0),s=3;s<r;s++)n[s-3]=arguments[s];return e.alt||""===e.alt?i().string.apply(i(),[e,t,a].concat(n)):new Error('The "alt" prop is required in '+a+'. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html')},N={image:i().object.isRequired,alt:x},T=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],_=["style","className"],I=new Set;let O,j;const q=function(e){let{as:t="div",image:n,style:i,backgroundColor:u,className:d,class:p,onStartLoad:m,onLoad:g,onError:h}=e,f=l(e,T);const{width:y,height:b,layout:w}=n,v=c(y,b,w),{style:E,className:k}=v,L=l(v,_),S=(0,r.useRef)(),C=(0,r.useMemo)((()=>JSON.stringify(n.images)),[n.images]);p&&(d=p);const x=function(e,t,a){let r="";return"fullWidth"===e&&(r='<div aria-hidden="true" style="padding-top: '+a/t*100+'%;"></div>'),"constrained"===e&&(r='<div style="max-width: '+t+'px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg%20height=\''+a+"'%20width='"+t+"'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E\" style=\"max-width: 100%; display: block; position: static;\"></div>"),r}(w,y,b);return(0,r.useEffect)((()=>{O||(O=a.e(731).then(a.bind(a,6731)).then((e=>{let{renderImageToString:t,swapPlaceholderImage:a}=e;return j=t,{renderImageToString:t,swapPlaceholderImage:a}})));const e=S.current.querySelector("[data-gatsby-image-ssr]");if(e&&o())return e.complete?(null==m||m({wasCached:!0}),null==g||g({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)):(null==m||m({wasCached:!0}),e.addEventListener("load",(function t(){e.removeEventListener("load",t),null==g||g({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)}))),void I.add(C);if(j&&I.has(C))return;let t,r;return O.then((e=>{let{renderImageToString:a,swapPlaceholderImage:l}=e;S.current&&(S.current.innerHTML=a(s({isLoading:!0,isLoaded:I.has(C),image:n},f)),I.has(C)||(t=requestAnimationFrame((()=>{S.current&&(r=l(S.current,C,I,i,m,g,h))}))))})),()=>{t&&cancelAnimationFrame(t),r&&r()}}),[n]),(0,r.useLayoutEffect)((()=>{I.has(C)&&j&&(S.current.innerHTML=j(s({isLoading:I.has(C),isLoaded:I.has(C),image:n},f)),null==m||m({wasCached:!0}),null==g||g({wasCached:!0}))}),[n]),(0,r.createElement)(t,s({},L,{style:s({},E,i,{backgroundColor:u}),className:k+(d?" "+d:""),ref:S,dangerouslySetInnerHTML:{__html:x},suppressHydrationWarning:!0}))},M=(0,r.memo)((function(e){return e.image?(0,r.createElement)(q,e):null}));M.propTypes=N,M.displayName="GatsbyImage";const R=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"];function z(e){return function(t){let{src:a,__imageData:n,__error:i}=t,o=l(t,R);return i&&console.warn(i),n?r.createElement(e,s({image:n},o)):(console.warn("Image not loaded",a),null)}}const P=z((function(e){let{as:t="div",className:a,class:n,style:i,image:o,loading:p="lazy",imgClassName:m,imgStyle:h,backgroundColor:f,objectFit:y,objectPosition:b}=e,w=l(e,L);if(!o)return console.warn("[gatsby-plugin-image] Missing image prop"),null;n&&(a=n),h=s({objectFit:y,objectPosition:b,backgroundColor:f},h);const{width:v,height:x,layout:N,images:T,placeholder:_,backgroundColor:I}=o,O=c(v,x,N),{style:j,className:q}=O,M=l(O,S),R={fallback:void 0,sources:[]};return T.fallback&&(R.fallback=s({},T.fallback,{srcSet:T.fallback.srcSet?C(T.fallback.srcSet):void 0})),T.sources&&(R.sources=T.sources.map((e=>s({},e,{srcSet:C(e.srcSet)})))),r.createElement(t,s({},M,{style:s({},j,i,{backgroundColor:f}),className:q+(a?" "+a:"")}),r.createElement(g,{layout:N,width:v,height:x},r.createElement(E,s({},d(_,!1,N,v,x,I,y,b))),r.createElement(k,s({"data-gatsby-image-ssr":"",className:m},w,u("eager"===p,!1,R,p,h)))))})),A=function(e,t){for(var a=arguments.length,r=new Array(a>2?a-2:0),n=2;n<a;n++)r[n-2]=arguments[n];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?i().number.apply(i(),[e,t].concat(r)):new Error('"'+t+'" '+e[t]+" may not be passed when layout is fullWidth.")},F=new Set(["fixed","fullWidth","constrained"]),W={src:i().string.isRequired,alt:x,width:A,height:A,sizes:i().string,layout:e=>{if(void 0!==e.layout&&!F.has(e.layout))return new Error("Invalid value "+e.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".')}};P.displayName="StaticImage",P.propTypes=W;const D=z(M);D.displayName="StaticImage",D.propTypes=W},8771:function(e,t,a){var r=a(7294),n=a(1883),i=a(8032);t.Z=()=>{var e,t;const s=(0,n.useStaticQuery)("3257411868"),l=null===(e=s.site.siteMetadata)||void 0===e?void 0:e.author,o=null===(t=s.site.siteMetadata)||void 0===t?void 0:t.social;return r.createElement("div",{className:"bio"},r.createElement(i.S,{className:"bio-avatar",layout:"fixed",formats:["auto","webp","avif"],src:"../images/profile-pic.png",width:50,height:50,quality:95,alt:"Profile picture",__imageData:a(8766)}),(null==l?void 0:l.name)&&r.createElement("p",null,r.createElement("strong",null,l.name)," ",(null==l?void 0:l.summary)||null," ",r.createElement("a",{href:"https://twitter.com/"+((null==o?void 0:o.twitter)||"")},"Twitterをフォロー")))}},8678:function(e,t,a){var r=a(7294),n=a(1883);t.Z=e=>{let{location:t,title:a,children:i}=e;const s="/i/"===t.pathname;let l;return l=s?r.createElement("h1",{className:"main-heading"},r.createElement(n.Link,{to:"/"},a)):r.createElement(n.Link,{className:"header-link-home",to:"/"},a),r.createElement("div",{className:"global-wrapper","data-is-root-path":s},r.createElement("header",{className:"global-header"},l),r.createElement("main",null,i),r.createElement("footer",null,"© ",(new Date).getFullYear(),","," ",r.createElement("a",{href:"https://github.com/kyukyunyorituryo"},"kyukyunyorituryo")))}},9357:function(e,t,a){var r=a(7294),n=a(1883);t.Z=e=>{var t,a,i;let{description:s,title:l,ogpimage:o,children:c}=e;const{site:u}=(0,n.useStaticQuery)("3802579323"),d=s||u.siteMetadata.description,p=o||u.siteMetadata.icon,m=null===(t=u.siteMetadata)||void 0===t?void 0:t.title;return r.createElement(r.Fragment,null,r.createElement("title",null,m?l+" | "+m:l),r.createElement("meta",{name:"description",content:d}),r.createElement("meta",{property:"og:title",content:l}),r.createElement("meta",{property:"og:description",content:d}),r.createElement("meta",{property:"og:type",content:"website"}),r.createElement("meta",{property:"og:image",content:p}),r.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),r.createElement("meta",{name:"twitter:creator",content:(null===(a=u.siteMetadata)||void 0===a||null===(i=a.social)||void 0===i?void 0:i.twitter)||""}),r.createElement("meta",{name:"twitter:title",content:l}),r.createElement("meta",{name:"twitter:description",content:d}),r.createElement("meta",{name:"twitter:image",content:p}),c)}},8766:function(e){e.exports=JSON.parse('{"layout":"fixed","backgroundColor":"#f8f8f8","images":{"fallback":{"src":"/i/static/0c38e3279bc07b04616a7ea4ac8ad33c/e5610/profile-pic.png","srcSet":"/i/static/0c38e3279bc07b04616a7ea4ac8ad33c/e5610/profile-pic.png 50w,\\n/i/static/0c38e3279bc07b04616a7ea4ac8ad33c/e9b55/profile-pic.png 100w","sizes":"50px"},"sources":[{"srcSet":"/i/static/0c38e3279bc07b04616a7ea4ac8ad33c/d4bf4/profile-pic.avif 50w,\\n/i/static/0c38e3279bc07b04616a7ea4ac8ad33c/ee81f/profile-pic.avif 100w","type":"image/avif","sizes":"50px"},{"srcSet":"/i/static/0c38e3279bc07b04616a7ea4ac8ad33c/3faea/profile-pic.webp 50w,\\n/i/static/0c38e3279bc07b04616a7ea4ac8ad33c/6a679/profile-pic.webp 100w","type":"image/webp","sizes":"50px"}]},"width":50,"height":50}')}}]);
//# sourceMappingURL=77cb7aa827c35b687580adc25f88e7e6eb906aa0-eca97621019f51fc64f9.js.map