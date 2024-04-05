"use strict";(self.webpackChunkgatsby_starter_blog=self.webpackChunkgatsby_starter_blog||[]).push([[727],{3204:function(e){const t=/[\p{Lu}]/u,a=/[\p{Ll}]/u,r=/^[\p{Lu}](?![\p{Lu}])/gu,i=/([\p{Alpha}\p{N}_]|$)/u,s=/[_.\- ]+/,n=new RegExp("^"+s.source),o=new RegExp(s.source+i.source,"gu"),l=new RegExp("\\d+"+i.source,"gu"),c=(e,i)=>{if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");if(i={pascalCase:!1,preserveConsecutiveUppercase:!1,...i},0===(e=Array.isArray(e)?e.map((e=>e.trim())).filter((e=>e.length)).join("-"):e.trim()).length)return"";const s=!1===i.locale?e=>e.toLowerCase():e=>e.toLocaleLowerCase(i.locale),c=!1===i.locale?e=>e.toUpperCase():e=>e.toLocaleUpperCase(i.locale);if(1===e.length)return i.pascalCase?c(e):s(e);return e!==s(e)&&(e=((e,r,i)=>{let s=!1,n=!1,o=!1;for(let l=0;l<e.length;l++){const c=e[l];s&&t.test(c)?(e=e.slice(0,l)+"-"+e.slice(l),s=!1,o=n,n=!0,l++):n&&o&&a.test(c)?(e=e.slice(0,l-1)+"-"+e.slice(l-1),o=n,n=!1,s=!0):(s=r(c)===c&&i(c)!==c,o=n,n=i(c)===c&&r(c)!==c)}return e})(e,s,c)),e=e.replace(n,""),e=i.preserveConsecutiveUppercase?((e,t)=>(r.lastIndex=0,e.replace(r,(e=>t(e)))))(e,s):s(e),i.pascalCase&&(e=c(e.charAt(0))+e.slice(1)),((e,t)=>(o.lastIndex=0,l.lastIndex=0,e.replace(o,((e,a)=>t(a))).replace(l,(e=>t(e)))))(e,c)};e.exports=c,e.exports.default=c},8032:function(e,t,a){a.d(t,{L:function(){return m},M:function(){return k},P:function(){return E},S:function(){return H},_:function(){return o},a:function(){return n},b:function(){return u},g:function(){return d},h:function(){return l}});var r=a(7294),i=(a(3204),a(5697)),s=a.n(i);function n(){return n=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},n.apply(this,arguments)}function o(e,t){if(null==e)return{};var a,r,i={},s=Object.keys(e);for(r=0;r<s.length;r++)t.indexOf(a=s[r])>=0||(i[a]=e[a]);return i}const l=()=>"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;function c(e,t,a){const r={};let i="gatsby-image-wrapper";return"fixed"===a?(r.width=e,r.height=t):"constrained"===a&&(i="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:i,"data-gatsby-image-wrapper":"",style:r}}function u(e,t,a,r,i){return void 0===i&&(i={}),n({},a,{loading:r,shouldLoad:e,"data-main-image":"",style:n({},i,{opacity:t?1:0})})}function d(e,t,a,r,i,s,o,l){const c={};s&&(c.backgroundColor=s,"fixed"===a?(c.width=r,c.height=i,c.backgroundColor=s,c.position="relative"):("constrained"===a||"fullWidth"===a)&&(c.position="absolute",c.top=0,c.left=0,c.bottom=0,c.right=0)),o&&(c.objectFit=o),l&&(c.objectPosition=l);const u=n({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:n({opacity:t?0:1,transition:"opacity 500ms linear"},c)});return u}const p=["children"],g=function(e){let{layout:t,width:a,height:i}=e;return"fullWidth"===t?r.createElement("div",{"aria-hidden":!0,style:{paddingTop:i/a*100+"%"}}):"constrained"===t?r.createElement("div",{style:{maxWidth:a,display:"block"}},r.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg%20height='"+i+"'%20width='"+a+"'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null},m=function(e){let{children:t}=e,a=o(e,p);return r.createElement(r.Fragment,null,r.createElement(g,n({},a)),t,null)},f=["src","srcSet","loading","alt","shouldLoad"],h=["fallback","sources","shouldLoad"],y=function(e){let{src:t,srcSet:a,loading:i,alt:s="",shouldLoad:l}=e,c=o(e,f);return r.createElement("img",n({},c,{decoding:"async",loading:i,src:l?t:void 0,"data-src":l?void 0:t,srcSet:l?a:void 0,"data-srcset":l?void 0:a,alt:s}))},b=function(e){let{fallback:t,sources:a=[],shouldLoad:i=!0}=e,s=o(e,h);const l=s.sizes||(null==t?void 0:t.sizes),c=r.createElement(y,n({},s,t,{sizes:l,shouldLoad:i}));return a.length?r.createElement("picture",null,a.map((e=>{let{media:t,srcSet:a,type:s}=e;return r.createElement("source",{key:t+"-"+s+"-"+a,type:s,media:t,srcSet:i?a:void 0,"data-srcset":i?void 0:a,sizes:l})})),c):c};var v;y.propTypes={src:i.string.isRequired,alt:i.string.isRequired,sizes:i.string,srcSet:i.string,shouldLoad:i.bool},b.displayName="Picture",b.propTypes={alt:i.string.isRequired,shouldLoad:i.bool,fallback:i.exact({src:i.string.isRequired,srcSet:i.string,sizes:i.string}),sources:i.arrayOf(i.oneOfType([i.exact({media:i.string.isRequired,type:i.string,sizes:i.string,srcSet:i.string.isRequired}),i.exact({media:i.string,type:i.string.isRequired,sizes:i.string,srcSet:i.string.isRequired})]))};const w=["fallback"],E=function(e){let{fallback:t}=e,a=o(e,w);return t?r.createElement(b,n({},a,{fallback:{src:t},"aria-hidden":!0,alt:""})):r.createElement("div",n({},a))};E.displayName="Placeholder",E.propTypes={fallback:i.string,sources:null==(v=b.propTypes)?void 0:v.sources,alt:function(e,t,a){return e[t]?new Error("Invalid prop `"+t+"` supplied to `"+a+"`. Validation failed."):null}};const k=function(e){return r.createElement(r.Fragment,null,r.createElement(b,n({},e)),r.createElement("noscript",null,r.createElement(b,n({},e,{shouldLoad:!0}))))};k.displayName="MainImage",k.propTypes=b.propTypes;const L=["as","className","class","style","image","loading","imgClassName","imgStyle","backgroundColor","objectFit","objectPosition"],S=["style","className"],C=e=>e.replace(/\n/g,""),x=function(e,t,a){for(var r=arguments.length,i=new Array(r>3?r-3:0),n=3;n<r;n++)i[n-3]=arguments[n];return e.alt||""===e.alt?s().string.apply(s(),[e,t,a].concat(i)):new Error('The "alt" prop is required in '+a+'. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html')},N={image:s().object.isRequired,alt:x},T=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],I=["style","className"],_=new Set;let O,j;const q=function(e){let{as:t="div",image:i,style:s,backgroundColor:u,className:d,class:p,onStartLoad:g,onLoad:m,onError:f}=e,h=o(e,T);const{width:y,height:b,layout:v}=i,w=c(y,b,v),{style:E,className:k}=w,L=o(w,I),S=(0,r.useRef)(),C=(0,r.useMemo)((()=>JSON.stringify(i.images)),[i.images]);p&&(d=p);const x=function(e,t,a){let r="";return"fullWidth"===e&&(r='<div aria-hidden="true" style="padding-top: '+a/t*100+'%;"></div>'),"constrained"===e&&(r='<div style="max-width: '+t+'px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg%20height=\''+a+"'%20width='"+t+"'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E\" style=\"max-width: 100%; display: block; position: static;\"></div>"),r}(v,y,b);return(0,r.useEffect)((()=>{O||(O=a.e(731).then(a.bind(a,6731)).then((e=>{let{renderImageToString:t,swapPlaceholderImage:a}=e;return j=t,{renderImageToString:t,swapPlaceholderImage:a}})));const e=S.current.querySelector("[data-gatsby-image-ssr]");if(e&&l())return e.complete?(null==g||g({wasCached:!0}),null==m||m({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)):(null==g||g({wasCached:!0}),e.addEventListener("load",(function t(){e.removeEventListener("load",t),null==m||m({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)}))),void _.add(C);if(j&&_.has(C))return;let t,r;return O.then((e=>{let{renderImageToString:a,swapPlaceholderImage:o}=e;S.current&&(S.current.innerHTML=a(n({isLoading:!0,isLoaded:_.has(C),image:i},h)),_.has(C)||(t=requestAnimationFrame((()=>{S.current&&(r=o(S.current,C,_,s,g,m,f))}))))})),()=>{t&&cancelAnimationFrame(t),r&&r()}}),[i]),(0,r.useLayoutEffect)((()=>{_.has(C)&&j&&(S.current.innerHTML=j(n({isLoading:_.has(C),isLoaded:_.has(C),image:i},h)),null==g||g({wasCached:!0}),null==m||m({wasCached:!0}))}),[i]),(0,r.createElement)(t,n({},L,{style:n({},E,s,{backgroundColor:u}),className:k+(d?" "+d:""),ref:S,dangerouslySetInnerHTML:{__html:x},suppressHydrationWarning:!0}))},R=(0,r.memo)((function(e){return e.image?(0,r.createElement)(q,e):null}));R.propTypes=N,R.displayName="GatsbyImage";const z=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"];function P(e){return function(t){let{src:a,__imageData:i,__error:s}=t,l=o(t,z);return s&&console.warn(s),i?r.createElement(e,n({image:i},l)):(console.warn("Image not loaded",a),null)}}const A=P((function(e){let{as:t="div",className:a,class:i,style:s,image:l,loading:p="lazy",imgClassName:g,imgStyle:f,backgroundColor:h,objectFit:y,objectPosition:b}=e,v=o(e,L);if(!l)return console.warn("[gatsby-plugin-image] Missing image prop"),null;i&&(a=i),f=n({objectFit:y,objectPosition:b,backgroundColor:h},f);const{width:w,height:x,layout:N,images:T,placeholder:I,backgroundColor:_}=l,O=c(w,x,N),{style:j,className:q}=O,R=o(O,S),z={fallback:void 0,sources:[]};return T.fallback&&(z.fallback=n({},T.fallback,{srcSet:T.fallback.srcSet?C(T.fallback.srcSet):void 0})),T.sources&&(z.sources=T.sources.map((e=>n({},e,{srcSet:C(e.srcSet)})))),r.createElement(t,n({},R,{style:n({},j,s,{backgroundColor:h}),className:q+(a?" "+a:"")}),r.createElement(m,{layout:N,width:w,height:x},r.createElement(E,n({},d(I,!1,N,w,x,_,y,b))),r.createElement(k,n({"data-gatsby-image-ssr":"",className:g},v,u("eager"===p,!1,z,p,f)))))})),M=function(e,t){for(var a=arguments.length,r=new Array(a>2?a-2:0),i=2;i<a;i++)r[i-2]=arguments[i];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?s().number.apply(s(),[e,t].concat(r)):new Error('"'+t+'" '+e[t]+" may not be passed when layout is fullWidth.")},W=new Set(["fixed","fullWidth","constrained"]),F={src:s().string.isRequired,alt:x,width:M,height:M,sizes:s().string,layout:e=>{if(void 0!==e.layout&&!W.has(e.layout))return new Error("Invalid value "+e.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".')}};A.displayName="StaticImage",A.propTypes=F;const H=P(R);H.displayName="StaticImage",H.propTypes=F},8771:function(e,t,a){var r=a(7294),i=a(1883),s=a(8032);t.Z=()=>{var e,t;const n=(0,i.useStaticQuery)("3257411868"),o=null===(e=n.site.siteMetadata)||void 0===e?void 0:e.author,l=null===(t=n.site.siteMetadata)||void 0===t?void 0:t.social;return r.createElement("div",{className:"bio"},r.createElement(s.S,{className:"bio-avatar",layout:"fixed",formats:["auto","webp","avif"],src:"../images/profile-pic.png",width:50,height:50,quality:95,alt:"Profile picture",__imageData:a(8766)}),(null==o?void 0:o.name)&&r.createElement("p",null,r.createElement("strong",null,o.name)," ",(null==o?void 0:o.summary)||null," ",r.createElement("a",{href:"https://twitter.com/"+((null==l?void 0:l.twitter)||"")},"Twitterをフォロー")," ",r.createElement(i.Link,{to:"/privacy-policy/"},"プライバシーポリシー")))}},8766:function(e){e.exports=JSON.parse('{"layout":"fixed","backgroundColor":"#f8f8f8","images":{"fallback":{"src":"/i/static/0c38e3279bc07b04616a7ea4ac8ad33c/e5610/profile-pic.png","srcSet":"/i/static/0c38e3279bc07b04616a7ea4ac8ad33c/e5610/profile-pic.png 50w,\\n/i/static/0c38e3279bc07b04616a7ea4ac8ad33c/e9b55/profile-pic.png 100w","sizes":"50px"},"sources":[{"srcSet":"/i/static/0c38e3279bc07b04616a7ea4ac8ad33c/d4bf4/profile-pic.avif 50w,\\n/i/static/0c38e3279bc07b04616a7ea4ac8ad33c/ee81f/profile-pic.avif 100w","type":"image/avif","sizes":"50px"},{"srcSet":"/i/static/0c38e3279bc07b04616a7ea4ac8ad33c/3faea/profile-pic.webp 50w,\\n/i/static/0c38e3279bc07b04616a7ea4ac8ad33c/6a679/profile-pic.webp 100w","type":"image/webp","sizes":"50px"}]},"width":50,"height":50}')}}]);
//# sourceMappingURL=179d370d789c749aee7bca2233999e0037771862-0caa8180cd5495da3e2c.js.map