/*! For license information please see component---src-templates-blog-post-js-content-file-path-content-blog-narou-kindle-index-md-57775eba99e7e20b6460.js.LICENSE.txt */
(self.webpackChunkgatsby_starter_blog=self.webpackChunkgatsby_starter_blog||[]).push([[2690],{2017:function(e){"use strict";e.exports=function e(t,A){if(t===A)return!0;if(t&&A&&"object"==typeof t&&"object"==typeof A){if(t.constructor!==A.constructor)return!1;var n,a,r;if(Array.isArray(t)){if((n=t.length)!=A.length)return!1;for(a=n;0!=a--;)if(!e(t[a],A[a]))return!1;return!0}if(t.constructor===RegExp)return t.source===A.source&&t.flags===A.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===A.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===A.toString();if((n=(r=Object.keys(t)).length)!==Object.keys(A).length)return!1;for(a=n;0!=a--;)if(!Object.prototype.hasOwnProperty.call(A,r[a]))return!1;for(a=n;0!=a--;){var o=r[a];if(!e(t[o],A[o]))return!1}return!0}return t!=t&&A!=A}},6749:function(e,t,A){"use strict";A.r(t),A.d(t,{Head:function(){return O},default:function(){return G}});var n=A(8453),a=A(6540),r=A(2473),o=A(7880),i=A(5556),s=A.n(i),l=A(2017),c=A.n(l),d=A(3517),p=A.n(d),u=Object.defineProperty,f=Object.defineProperties,g=Object.getOwnPropertyDescriptors,m=Object.getOwnPropertySymbols,h=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable,E=(e,t,A)=>t in e?u(e,t,{enumerable:!0,configurable:!0,writable:!0,value:A}):e[t]=A,b=(e,t)=>{for(var A in t||(t={}))h.call(t,A)&&E(e,A,t[A]);if(m)for(var A of m(t))y.call(t,A)&&E(e,A,t[A]);return e},v=(e,t)=>f(e,g(t));function P(e={}){return v(b({},e),{height:0,width:0,playerVars:v(b({},e.playerVars),{autoplay:0,start:0,end:0})})}var B={videoId:s().string,id:s().string,className:s().string,iframeClassName:s().string,style:s().object,title:s().string,loading:s().oneOf(["lazy","eager"]),opts:s().objectOf(s().any),onReady:s().func,onError:s().func,onPlay:s().func,onPause:s().func,onEnd:s().func,onStateChange:s().func,onPlaybackRateChange:s().func,onPlaybackQualityChange:s().func},w=class extends a.Component{constructor(e){super(e),this.destroyPlayerPromise=void 0,this.onPlayerReady=e=>{var t,A;return null==(A=(t=this.props).onReady)?void 0:A.call(t,e)},this.onPlayerError=e=>{var t,A;return null==(A=(t=this.props).onError)?void 0:A.call(t,e)},this.onPlayerStateChange=e=>{var t,A,n,a,r,o,i,s;switch(null==(A=(t=this.props).onStateChange)||A.call(t,e),e.data){case w.PlayerState.ENDED:null==(a=(n=this.props).onEnd)||a.call(n,e);break;case w.PlayerState.PLAYING:null==(o=(r=this.props).onPlay)||o.call(r,e);break;case w.PlayerState.PAUSED:null==(s=(i=this.props).onPause)||s.call(i,e)}},this.onPlayerPlaybackRateChange=e=>{var t,A;return null==(A=(t=this.props).onPlaybackRateChange)?void 0:A.call(t,e)},this.onPlayerPlaybackQualityChange=e=>{var t,A;return null==(A=(t=this.props).onPlaybackQualityChange)?void 0:A.call(t,e)},this.destroyPlayer=()=>this.internalPlayer?(this.destroyPlayerPromise=this.internalPlayer.destroy().then((()=>this.destroyPlayerPromise=void 0)),this.destroyPlayerPromise):Promise.resolve(),this.createPlayer=()=>{if("undefined"==typeof document)return;if(this.destroyPlayerPromise)return void this.destroyPlayerPromise.then(this.createPlayer);const e=v(b({},this.props.opts),{videoId:this.props.videoId});this.internalPlayer=p()(this.container,e),this.internalPlayer.on("ready",this.onPlayerReady),this.internalPlayer.on("error",this.onPlayerError),this.internalPlayer.on("stateChange",this.onPlayerStateChange),this.internalPlayer.on("playbackRateChange",this.onPlayerPlaybackRateChange),this.internalPlayer.on("playbackQualityChange",this.onPlayerPlaybackQualityChange),(this.props.title||this.props.loading)&&this.internalPlayer.getIframe().then((e=>{this.props.title&&e.setAttribute("title",this.props.title),this.props.loading&&e.setAttribute("loading",this.props.loading)}))},this.resetPlayer=()=>this.destroyPlayer().then(this.createPlayer),this.updatePlayer=()=>{var e;null==(e=this.internalPlayer)||e.getIframe().then((e=>{this.props.id?e.setAttribute("id",this.props.id):e.removeAttribute("id"),this.props.iframeClassName?e.setAttribute("class",this.props.iframeClassName):e.removeAttribute("class"),this.props.opts&&this.props.opts.width?e.setAttribute("width",this.props.opts.width.toString()):e.removeAttribute("width"),this.props.opts&&this.props.opts.height?e.setAttribute("height",this.props.opts.height.toString()):e.removeAttribute("height"),this.props.title?e.setAttribute("title",this.props.title):e.setAttribute("title","YouTube video player"),this.props.loading?e.setAttribute("loading",this.props.loading):e.removeAttribute("loading")}))},this.getInternalPlayer=()=>this.internalPlayer,this.updateVideo=()=>{var e,t,A,n;if(void 0===this.props.videoId||null===this.props.videoId)return void(null==(e=this.internalPlayer)||e.stopVideo());let a=!1;const r={videoId:this.props.videoId};(null==(t=this.props.opts)?void 0:t.playerVars)&&(a=1===this.props.opts.playerVars.autoplay,"start"in this.props.opts.playerVars&&(r.startSeconds=this.props.opts.playerVars.start),"end"in this.props.opts.playerVars&&(r.endSeconds=this.props.opts.playerVars.end)),a?null==(A=this.internalPlayer)||A.loadVideoById(r):null==(n=this.internalPlayer)||n.cueVideoById(r)},this.refContainer=e=>{this.container=e},this.container=null,this.internalPlayer=null}componentDidMount(){this.createPlayer()}componentDidUpdate(e){return t=this,A=null,n=function*(){(function(e,t){var A,n,a,r;return e.id!==t.id||e.className!==t.className||(null==(A=e.opts)?void 0:A.width)!==(null==(n=t.opts)?void 0:n.width)||(null==(a=e.opts)?void 0:a.height)!==(null==(r=t.opts)?void 0:r.height)||e.iframeClassName!==t.iframeClassName||e.title!==t.title})(e,this.props)&&this.updatePlayer(),function(e,t){return e.videoId!==t.videoId||!c()(P(e.opts),P(t.opts))}(e,this.props)&&(yield this.resetPlayer()),function(e,t){var A,n;if(e.videoId!==t.videoId)return!0;const a=(null==(A=e.opts)?void 0:A.playerVars)||{},r=(null==(n=t.opts)?void 0:n.playerVars)||{};return a.start!==r.start||a.end!==r.end}(e,this.props)&&this.updateVideo()},new Promise(((e,a)=>{var r=e=>{try{i(n.next(e))}catch(t){a(t)}},o=e=>{try{i(n.throw(e))}catch(t){a(t)}},i=t=>t.done?e(t.value):Promise.resolve(t.value).then(r,o);i((n=n.apply(t,A)).next())}));var t,A,n}componentWillUnmount(){this.destroyPlayer()}render(){return a.createElement("div",{className:this.props.className,style:this.props.style},a.createElement("div",{id:this.props.id,className:this.props.iframeClassName,ref:this.refContainer}))}},j=w;j.propTypes=B,j.defaultProps={videoId:"",id:"",className:"",iframeClassName:"",style:{},title:"",loading:void 0,opts:{},onReady:()=>{},onError:()=>{},onPlay:()=>{},onPause:()=>{},onEnd:()=>{},onStateChange:()=>{},onPlaybackRateChange:()=>{},onPlaybackQualityChange:()=>{}},j.PlayerState={UNSTARTED:-1,ENDED:0,PLAYING:1,PAUSED:2,BUFFERING:3,CUED:5};var Q=j;function k(e){const t=Object.assign({h3:"h3",p:"p",span:"span",a:"a"},(0,n.RP)(),e.components);return a.createElement(a.Fragment,null,a.createElement(t.h3,null,"AozoraEpub3"),"\n",a.createElement(t.p,null,"　小説家になろうで連載されている小説はAozoraEpub3を使えばキンドルで読むことができるようになります。「小説家になろう/小説を読もう！」(＋関連サイト)以外にも、「NEWVEL-LIBRARY」「FC2小説」「HAMELN」「Arcadia」「novelist.jp」「dNoVeLs」「暁」「カクヨム」「ノベルアップ＋」から取得が可能です。キンドルで売られていないけれど電子書籍化して読むことは可能となってる。EPUBという形式はキンドルだけではなく、koboやソニーリーダー、iPhone、アンドロイド端末でも読むことが可能になっています。アンドロイド端末ではkinoppyがおすすめ。AozoraEpub3はPCがないと変換できない。"),"\n",a.createElement(t.p,null,"小説家になろうをキンドルで読む"),"\n",a.createElement(Q,{videoId:"qxcDw5nWd10",title:"小説家になろうをキンドルで読む"}),"\n",a.createElement(t.p,null,"青空文庫のEPUB変換とAozoraEpub3のセットアップ"),"\n",a.createElement(Q,{videoId:"SHeUvLXaycc",title:"青空文庫のEPUB変換とAozoraEpub3のセットアップ"}),"\n",a.createElement(t.p,null,"　AozoraEpub3の本家のほうは最近更新されてないので、クローンを作って挿絵が読み込まれない不具合を修正しました。下のサイトからAozoraEpub3をダウンロードしてください。"),"\n",a.createElement(t.p,null,"Assetsの下の「AozoraEpub3-1.1.1b19Q.zip」をクリックすることでダウンロードできます。バージョンは最新のものがおすすめ。"),"\n",a.createElement(o.A,{src:"https://github.com/kyukyunyorituryo/AozoraEpub3/releases",title:"AozoraEpub3のダウンロード"}),"\n",a.createElement(t.p,null,"Javaが入っていない人はjavaをインストールする必要がある。"),"\n",a.createElement(o.A,{src:"https://adoptium.net/temurin/releases/?version=21",title:"Latest Releases | Adoptium"}),"\n",a.createElement(t.p,null,"Windowsの場合はOperating System：Windows、Architecture：x64、Package Type：JRE、Version：21を選んでインストールしてください。"),"\n",a.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 520px; "\n    >\n      <a\n    class="gatsby-resp-image-link"\n    href="/i/static/9a89ff1b411459557dc96431c0df9d5f/ddb38/aozoraepub1.jpg"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n    <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 88.60759493670886%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAASABQDASIAAhEBAxEB/8QAGQABAAIDAAAAAAAAAAAAAAAAAAIDAQQF/8QAFgEBAQEAAAAAAAAAAAAAAAAAAQMA/9oADAMBAAIQAxAAAAHp5vY01onOI0pBP//EABsQAAIDAAMAAAAAAAAAAAAAAAASAQIRAyEx/9oACAEBAAEFAlgWpasCinJHemytvf/EABcRAQEBAQAAAAAAAAAAAAAAAAEAEBH/2gAIAQMBAT8B4Tjf/8QAFBEBAAAAAAAAAAAAAAAAAAAAIP/aAAgBAgEBPwEf/8QAGRAAAgMBAAAAAAAAAAAAAAAAADEBECCh/9oACAEBAAY/AlAuCy6//8QAGxAAAgIDAQAAAAAAAAAAAAAAAAERIUFRcTH/2gAIAQEAAT8htxcNShNqqolPqJCEvCW2PJDtpeD/2gAMAwEAAgADAAAAEJQQfP/EABcRAAMBAAAAAAAAAAAAAAAAAAAQMWH/2gAIAQMBAT8QwKVH/8QAFBEBAAAAAAAAAAAAAAAAAAAAIP/aAAgBAgEBPxAf/8QAHRABAAICAgMAAAAAAAAAAAAAAQARITFRgZGhwf/aAAgBAQABPxAewmF0GJYTzpKqtW9srsB1NiovZAYxdnyzL9peOTm4oKcNs//Z\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="AozoraEpub3の起動画面"\n        title=""\n        src="/i/static/9a89ff1b411459557dc96431c0df9d5f/ddb38/aozoraepub1.jpg"\n        srcset="/i/static/9a89ff1b411459557dc96431c0df9d5f/ff44c/aozoraepub1.jpg 158w,\n/i/static/9a89ff1b411459557dc96431c0df9d5f/a6688/aozoraepub1.jpg 315w,\n/i/static/9a89ff1b411459557dc96431c0df9d5f/ddb38/aozoraepub1.jpg 520w"\n        sizes="(max-width: 520px) 100vw, 520px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n  </a>\n    </span>'}}),"\n",a.createElement(t.h3,null,"AozoraEpub3の起動画面"),"\n",a.createElement(t.p,null,"拡張子と書いているところにepubとでいている。send to kindleを使う場合はepubのままでいい。端末と直接USBでつないでkindleで読む場合はmobiにしてください。mobiに変換するのにはkindlegenがいるので下の方のリンクからOSに合ったのをダウンロードして入れる必要がある。"),"\n",a.createElement(t.p,null,"　AozoraEpub3を解凍して、その時にCドライブのprogram filesに入れると実行できない場合があるので、デスクトップなどに解凍するといいでしょう。"),"\n",a.createElement(t.h3,null,"kindlegen"),"\n",a.createElement(t.p,null,"kindlegenはepubをkindleで読める形式に変換するツールです。単体でのkindlegenの配布がなくなりました。Kindle Previewer 3内のkindlegenを取り出してください。"),"\n",a.createElement(t.h3,null,"Kindle Previewer"),"\n",a.createElement(t.p,null,"　Kindle Previewer をインストールする"),"\n",a.createElement(o.A,{src:"https://kdp.amazon.co.jp/ja_JP/help/topic/G202131170",title:"Kindle Previewer"}),"\n",a.createElement(t.p,null,"OSにあったKindle Previewerをインストールしてください。kindlegenの単体での配布が終了しました。Windowsの場合はKindle Previewer 3をインストールし、Kindle Previewer 3フォルダー内に「C:\\Users\\user\\AppData\\Local\\Amazon\\Kindle Previewer 3\\lib\\fc\\bin」kindlegenがあります。userはご自分のユーザー名に置き換えてください。"),"\n",a.createElement(t.p,null,"　koboやsony readerやkinoppyなどではepubを選べばいい。キンドルではepubを直接は読むことができないのでmobiという形式に変換する。kindlegenやkindlePreviewerというのを使うのだけれど、AozoraEpub３のフォルダーにkindlegenを入れるだけでmobiに変換してくれる用になります。"),"\n",a.createElement(t.h3,null,"sendtokindle"),"\n",a.createElement(t.p,null,"send to kindleは「 PDF、DOC、DOCX、TXT、RTF、HTM、HTML、PNG、GIF、JPG、JPEG、BMP、EPUB」などのファイルをkindleで読める形式に変換してからkindleに送るサービスです。このサービスを使う場合はEPUBが適しています。"),"\n",a.createElement(o.A,{src:"https://www.amazon.co.jp/sendtokindle",title:"sendtokindle"}),"\n",a.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 520px; "\n    >\n      <a\n    class="gatsby-resp-image-link"\n    href="/i/static/49f25cb00ddecfa85a2ffe117b8a84c8/ddb38/space-remove.jpg"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n    <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 88.60759493670886%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAASABQDASIAAhEBAxEB/8QAGQABAAIDAAAAAAAAAAAAAAAAAAIDAQQF/8QAFgEBAQEAAAAAAAAAAAAAAAAAAQMA/9oADAMBAAIQAxAAAAHpSuzjTWic4jSkE//EABoQAAIDAQEAAAAAAAAAAAAAAAABAhESMQP/2gAIAQEAAQUCpGESikZMnp2y3mXf/8QAFxEBAQEBAAAAAAAAAAAAAAAAAQAQEf/aAAgBAwEBPwHhON//xAAUEQEAAAAAAAAAAAAAAAAAAAAg/9oACAECAQE/AR//xAAYEAEBAAMAAAAAAAAAAAAAAAAxAAEQIP/aAAgBAQAGPwIjEcuv/8QAHhAAAgEDBQAAAAAAAAAAAAAAAAEhEUGRMVFhcYH/2gAIAQEAAT8hV9cEtFiHyjoV8YPAseirdjuQ7aTY/9oADAMBAAIAAwAAABC30Hz/xAAXEQADAQAAAAAAAAAAAAAAAAAAEDFh/9oACAEDAQE/EMClR//EABQRAQAAAAAAAAAAAAAAAAAAACD/2gAIAQIBAT8QH//EAB0QAQACAgIDAAAAAAAAAAAAAAEAESFBMVFhscH/2gAIAQEAAT8Qv2YdM26NdkHQF2cbtmgawIMq61KC8fbMv2l45O7igpw5Z//Z\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="空行除去"\n        title=""\n        src="/i/static/49f25cb00ddecfa85a2ffe117b8a84c8/ddb38/space-remove.jpg"\n        srcset="/i/static/49f25cb00ddecfa85a2ffe117b8a84c8/ff44c/space-remove.jpg 158w,\n/i/static/49f25cb00ddecfa85a2ffe117b8a84c8/a6688/space-remove.jpg 315w,\n/i/static/49f25cb00ddecfa85a2ffe117b8a84c8/ddb38/space-remove.jpg 520w"\n        sizes="(max-width: 520px) 100vw, 520px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n  </a>\n    </span>'}}),"\n",a.createElement(t.p,null,"「小説家になろう」では初期設定のままでは、表示が変な場合があるので、線を引いたところを変えるといいと思います。"),"\n",a.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 630px; "\n    >\n      <a\n    class="gatsby-resp-image-link"\n    href="/i/static/6a810efa308a19c3fc25e48bc39edd63/e20b3/overlord.jpg"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n    <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 87.9746835443038%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAASABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAECBf/EABQBAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhADEAAAAe6lCDFCg//EABYQAQEBAAAAAAAAAAAAAAAAABEQIP/aAAgBAQABBQIhv//EABQRAQAAAAAAAAAAAAAAAAAAACD/2gAIAQMBAT8BH//EABQRAQAAAAAAAAAAAAAAAAAAACD/2gAIAQIBAT8BH//EABYQAAMAAAAAAAAAAAAAAAAAAAAwMf/aAAgBAQAGPwIiP//EABsQAAMAAgMAAAAAAAAAAAAAAAABEVFhEIGh/9oACAEBAAE/IRNhpTojwTXom8leeP/aAAwDAQACAAMAAAAQoM88/8QAFBEBAAAAAAAAAAAAAAAAAAAAIP/aAAgBAwEBPxAf/8QAFBEBAAAAAAAAAAAAAAAAAAAAIP/aAAgBAgEBPxAf/8QAHRAAAgICAwEAAAAAAAAAAAAAAAERIWGRMVGBof/aAAgBAQABPxBrLavA6RJ6jkH8Gn3MDY3nl4LVtmZslwrZ/9k=\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="なろうサイトから"\n        title=""\n        src="/i/static/6a810efa308a19c3fc25e48bc39edd63/828fb/overlord.jpg"\n        srcset="/i/static/6a810efa308a19c3fc25e48bc39edd63/ff44c/overlord.jpg 158w,\n/i/static/6a810efa308a19c3fc25e48bc39edd63/a6688/overlord.jpg 315w,\n/i/static/6a810efa308a19c3fc25e48bc39edd63/828fb/overlord.jpg 630w,\n/i/static/6a810efa308a19c3fc25e48bc39edd63/e20b3/overlord.jpg 667w"\n        sizes="(max-width: 630px) 100vw, 630px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n  </a>\n    </span>'}}),"\n",a.createElement(t.p,null,"次になろうのサイトからAozoraEpub3に一括ダウンロードするそのやり方はchromeでは、下線の部分を[ファイルまたはURL文字列をここにドラッグ＆ドロップ／ペーストで変換します]の部分にドラッグアンドドロップすることで、一括してダウンロードされます。保存場所は任意に指定できる。"),"\n",a.createElement(t.p,null,a.createElement(t.a,{href:"https://ncode.syosetu.com/n4402bd/"},"オーバーロード：前編")),"\n",a.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 630px; "\n    >\n      <a\n    class="gatsby-resp-image-link"\n    href="/i/static/aaeb034ee603bcb6199c896ffb17022f/6aca1/filepath.jpg"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n    <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 105.69620253164558%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAVABQDASIAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAAAAIDBAX/xAAVAQEBAAAAAAAAAAAAAAAAAAABAP/aAAwDAQACEAMQAAAB9ZVxytwTqLIj/8QAGBABAQEBAQAAAAAAAAAAAAAAAQACESH/2gAIAQEAAQUCM2sgAWfZLlm7N//EABURAQEAAAAAAAAAAAAAAAAAABEg/9oACAEDAQE/ASP/xAAUEQEAAAAAAAAAAAAAAAAAAAAg/9oACAECAQE/AR//xAAXEAADAQAAAAAAAAAAAAAAAAAAATEg/9oACAEBAAY/AoiIm//EABwQAAICAgMAAAAAAAAAAAAAAAABESExkXGBof/aAAgBAQABPyFbU+A8uLoaWGhnDgkzY0WENGiw1n//2gAMAwEAAgADAAAAELQ4QP/EABcRAAMBAAAAAAAAAAAAAAAAAAABEBH/2gAIAQMBAT8QwOM//8QAFBEBAAAAAAAAAAAAAAAAAAAAIP/aAAgBAgEBPxAf/8QAHBABAAIDAAMAAAAAAAAAAAAAAQARITFBUXHR/9oACAEBAAE/ENMb5ECirND5LIv7ErFoFtwBVg8WPAAVyPnswqZtVMTHJ//Z\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="保存場所"\n        title=""\n        src="/i/static/aaeb034ee603bcb6199c896ffb17022f/828fb/filepath.jpg"\n        srcset="/i/static/aaeb034ee603bcb6199c896ffb17022f/ff44c/filepath.jpg 158w,\n/i/static/aaeb034ee603bcb6199c896ffb17022f/a6688/filepath.jpg 315w,\n/i/static/aaeb034ee603bcb6199c896ffb17022f/828fb/filepath.jpg 630w,\n/i/static/aaeb034ee603bcb6199c896ffb17022f/6aca1/filepath.jpg 650w"\n        sizes="(max-width: 630px) 100vw, 630px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n  </a>\n    </span>'}}),"\n",a.createElement(t.p,null,"　保存場所を指定すると、変換前確認画面が出るので、表紙を指定したい場合は、赤線が引いていある部分にjpg画像などをドラッグアンドドロップする。"),"\n",a.createElement(t.p,null," そうして出力されたmobiファイルをkindleのdocumentフォルダーに入れるキンドルで読むことが可能になる。"),"\n",a.createElement(t.h3,null,"パーソナルドキュメントサービス"),"\n",a.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 630px; "\n    >\n      <a\n    class="gatsby-resp-image-link"\n    href="/i/static/02f752dbba4f5609e5ecfe1f86202e5c/72e01/personal-document.jpg"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n    <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 53.79746835443038%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAALABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAQACBf/EABQBAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhADEAAAAe6mgmP/xAAVEAEBAAAAAAAAAAAAAAAAAAAQAf/aAAgBAQABBQJj/8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAwEBPwE//8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAgEBPwE//8QAFBABAAAAAAAAAAAAAAAAAAAAIP/aAAgBAQAGPwJf/8QAFRABAQAAAAAAAAAAAAAAAAAAASD/2gAIAQEAAT8hKf/aAAwDAQACAAMAAAAQYw//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAEDAQE/ED//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAECAQE/ED//xAAaEAEBAQADAQAAAAAAAAAAAAABEQAhMUGR/9oACAEBAAE/EKel+OBnM0fcBtPdDjQ3/9k=\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="パーソナルドキュメントサービス"\n        title=""\n        src="/i/static/02f752dbba4f5609e5ecfe1f86202e5c/828fb/personal-document.jpg"\n        srcset="/i/static/02f752dbba4f5609e5ecfe1f86202e5c/ff44c/personal-document.jpg 158w,\n/i/static/02f752dbba4f5609e5ecfe1f86202e5c/a6688/personal-document.jpg 315w,\n/i/static/02f752dbba4f5609e5ecfe1f86202e5c/828fb/personal-document.jpg 630w,\n/i/static/02f752dbba4f5609e5ecfe1f86202e5c/0ede0/personal-document.jpg 945w,\n/i/static/02f752dbba4f5609e5ecfe1f86202e5c/72e01/personal-document.jpg 1024w"\n        sizes="(max-width: 630px) 100vw, 630px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n  </a>\n    </span>'}}),"\n",a.createElement(t.p,null,"パーソナルドキュメントというのを利用する方法があるのでそっちの説明もおこうなる。"),"\n",a.createElement(t.p,null,"「my kindle」とグーグルなどで検索して出てきたサイトからアマゾンにログインする。"),"\n",a.createElement(t.p,null,"そのページから設定をクリックして。下の方を見ていくと、次のような画面が出てくる。キンドルペーパーホワイトやアンドロイドに割り当てられたメールアドレスが出てきます。そのメールアドレス宛に、さっき作ったmobiファイルを添付して送り、その端末がネットにつないで本をダウンロードできる状態にすると作った本が送られてきます。ただ送るときのメールアドレスも、承認済みEメールアドレスに追加していないと受信できないようになっています。gmailだったりヤフーというようなフリーメールも使えるようになっています。"),"\n",a.createElement(r.A,{asin:"B0B9WV9GVS"}))}var N=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,n.RP)(),e.components);return t?a.createElement(t,e,a.createElement(k,e)):k(e)},C=A(4794),Y=A(4967),x=A(3895),D=A(7528),I=A(2343),S=A(249),R=A.n(S);const M=e=>{var t;let{data:{previous:A,next:n,site:r,mdx:o},location:i,children:s}=e;const l=(null===(t=r.siteMetadata)||void 0===t?void 0:t.title)||"Title",c=o.frontmatter.tags;return a.createElement(x.A,{location:i,title:l},a.createElement("article",{className:"blog-post",itemScope:!0,itemType:"http://schema.org/Article"},a.createElement("header",null,a.createElement("h1",{itemProp:"headline"},o.frontmatter.title),a.createElement("p",null,o.frontmatter.date,"　",c&&c.length>0&&c.map((e=>a.createElement(C.Link,{to:`/tags/${R()(e)}/`,itemProp:"url"},a.createElement("button",null,e)))))),a.createElement("section",{itemProp:"articleBody"},s),a.createElement("hr"),a.createElement(I.A,{title:o.frontmatter.title,url:`${r.siteMetadata.siteUrl}${o.fields.slug}`}),a.createElement("footer",null,a.createElement(Y.A))),a.createElement("nav",{className:"blog-post-nav"},a.createElement("ul",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",listStyle:"none",padding:0}},a.createElement("li",null,A&&a.createElement(C.Link,{to:A.fields.slug,rel:"prev"},"← ",A.frontmatter.title)),a.createElement("li",null,n&&a.createElement(C.Link,{to:n.fields.slug,rel:"next"},n.frontmatter.title," →")))))},O=e=>{let{data:{mdx:t}}=e;return a.createElement(D.A,{title:t.frontmatter.title,description:t.frontmatter.description||t.excerpt,ogpimage:t.frontmatter.ogpimage})};function G(e){return a.createElement(M,e,a.createElement(N,e))}},6147:function(e){function t(e,t){e.onload=function(){this.onerror=this.onload=null,t(null,e)},e.onerror=function(){this.onerror=this.onload=null,t(new Error("Failed to load "+this.src),e)}}function A(e,t){e.onreadystatechange=function(){"complete"!=this.readyState&&"loaded"!=this.readyState||(this.onreadystatechange=null,t(null,e))}}e.exports=function(e,n,a){var r=document.head||document.getElementsByTagName("head")[0],o=document.createElement("script");"function"==typeof n&&(a=n,n={}),n=n||{},a=a||function(){},o.type=n.type||"text/javascript",o.charset=n.charset||"utf8",o.async=!("async"in n)||!!n.async,o.src=e,n.attrs&&function(e,t){for(var A in t)e.setAttribute(A,t[A])}(o,n.attrs),n.text&&(o.text=""+n.text),("onload"in o?t:A)(o,a),o.onload||t(o,a),r.appendChild(o)}},4666:function(e){"use strict";var t;t=function(){var e={},t={};return e.on=function(e,A){var n={name:e,handler:A};return t[e]=t[e]||[],t[e].unshift(n),n},e.off=function(e){var A=t[e.name].indexOf(e);-1!==A&&t[e.name].splice(A,1)},e.trigger=function(e,A){var n,a=t[e];if(a)for(n=a.length;n--;)a[n].handler(A)},e},e.exports=t},4748:function(e,t,A){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,a=A(3004),r=(n=a)&&n.__esModule?n:{default:n};t.default={pauseVideo:{acceptableStates:[r.default.ENDED,r.default.PAUSED],stateChangeRequired:!1},playVideo:{acceptableStates:[r.default.ENDED,r.default.PLAYING],stateChangeRequired:!1},seekTo:{acceptableStates:[r.default.ENDED,r.default.PLAYING,r.default.PAUSED],stateChangeRequired:!0,timeout:3e3}},e.exports=t.default},1706:function(e,t,A){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(A(6602)),a=i(A(9345)),r=i(A(1769)),o=i(A(4748));function i(e){return e&&e.__esModule?e:{default:e}}var s=(0,n.default)("youtube-player"),l={proxyEvents:function(e){var t={},A=function(A){var n="on"+A.slice(0,1).toUpperCase()+A.slice(1);t[n]=function(t){s('event "%s"',n,t),e.trigger(A,t)}},n=!0,a=!1,o=void 0;try{for(var i,l=r.default[Symbol.iterator]();!(n=(i=l.next()).done);n=!0){A(i.value)}}catch(c){a=!0,o=c}finally{try{!n&&l.return&&l.return()}finally{if(a)throw o}}return t},promisifyPlayer:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],A={},n=function(n){t&&o.default[n]?A[n]=function(){for(var t=arguments.length,A=Array(t),a=0;a<t;a++)A[a]=arguments[a];return e.then((function(e){var t=o.default[n],a=e.getPlayerState(),r=e[n].apply(e,A);return t.stateChangeRequired||Array.isArray(t.acceptableStates)&&-1===t.acceptableStates.indexOf(a)?new Promise((function(A){e.addEventListener("onStateChange",(function n(){var a=e.getPlayerState(),r=void 0;"number"==typeof t.timeout&&(r=setTimeout((function(){e.removeEventListener("onStateChange",n),A()}),t.timeout)),Array.isArray(t.acceptableStates)&&-1!==t.acceptableStates.indexOf(a)&&(e.removeEventListener("onStateChange",n),clearTimeout(r),A())}))})).then((function(){return r})):r}))}:A[n]=function(){for(var t=arguments.length,A=Array(t),a=0;a<t;a++)A[a]=arguments[a];return e.then((function(e){return e[n].apply(e,A)}))}},r=!0,i=!1,s=void 0;try{for(var l,c=a.default[Symbol.iterator]();!(r=(l=c.next()).done);r=!0){n(l.value)}}catch(d){i=!0,s=d}finally{try{!r&&c.return&&c.return()}finally{if(i)throw s}}return A}};t.default=l,e.exports=t.default},3004:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={BUFFERING:3,ENDED:0,PAUSED:2,PLAYING:1,UNSTARTED:-1,VIDEO_CUED:5},e.exports=t.default},1769:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=["ready","stateChange","playbackQualityChange","playbackRateChange","error","apiChange","volumeChange"],e.exports=t.default},9345:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=["cueVideoById","loadVideoById","cueVideoByUrl","loadVideoByUrl","playVideo","pauseVideo","stopVideo","getVideoLoadedFraction","cuePlaylist","loadPlaylist","nextVideo","previousVideo","playVideoAt","setShuffle","setLoop","getPlaylist","getPlaylistIndex","setOption","mute","unMute","isMuted","setVolume","getVolume","seekTo","getPlayerState","getPlaybackRate","setPlaybackRate","getAvailablePlaybackRates","getPlaybackQuality","setPlaybackQuality","getAvailableQualityLevels","getCurrentTime","getDuration","removeEventListener","getVideoUrl","getVideoEmbedCode","getOptions","getOption","addEventListener","destroy","setSize","getIframe"],e.exports=t.default},3517:function(e,t,A){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a=i(A(4666)),r=i(A(6694)),o=i(A(1706));function i(e){return e&&e.__esModule?e:{default:e}}var s=void 0;t.default=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},A=arguments.length>2&&void 0!==arguments[2]&&arguments[2],i=(0,a.default)();if(s||(s=(0,r.default)(i)),t.events)throw new Error("Event handlers cannot be overwritten.");if("string"==typeof e&&!document.getElementById(e))throw new Error('Element "'+e+'" does not exist.');t.events=o.default.proxyEvents(i);var l=new Promise((function(A){"object"===(void 0===e?"undefined":n(e))&&e.playVideo instanceof Function?A(e):s.then((function(n){var a=new n.Player(e,t);return i.on("ready",(function(){A(a)})),null}))})),c=o.default.promisifyPlayer(l,A);return c.on=i.on,c.off=i.off,c},e.exports=t.default},6694:function(e,t,A){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,a=A(6147),r=(n=a)&&n.__esModule?n:{default:n};t.default=function(e){return new Promise((function(t){if(window.YT&&window.YT.Player&&window.YT.Player instanceof Function)t(window.YT);else{var A="http:"===window.location.protocol?"http:":"https:";(0,r.default)(A+"//www.youtube.com/iframe_api",(function(t){t&&e.trigger("error",t)}));var n=window.onYouTubeIframeAPIReady;window.onYouTubeIframeAPIReady=function(){n&&n(),t(window.YT)}}}))},e.exports=t.default},6602:function(e,t,A){function n(){var e;try{e=t.storage.debug}catch(A){}return!e&&"undefined"!=typeof process&&"env"in process&&(e={}.DEBUG),e}(t=e.exports=A(9245)).log=function(){return"object"==typeof console&&console.log&&Function.prototype.apply.call(console.log,console,arguments)},t.formatArgs=function(e){var A=this.useColors;if(e[0]=(A?"%c":"")+this.namespace+(A?" %c":" ")+e[0]+(A?"%c ":" ")+"+"+t.humanize(this.diff),!A)return;var n="color: "+this.color;e.splice(1,0,n,"color: inherit");var a=0,r=0;e[0].replace(/%[a-zA-Z%]/g,(function(e){"%%"!==e&&(a++,"%c"===e&&(r=a))})),e.splice(r,0,n)},t.save=function(e){try{null==e?t.storage.removeItem("debug"):t.storage.debug=e}catch(A){}},t.load=n,t.useColors=function(){if("undefined"!=typeof window&&window.process&&"renderer"===window.process.type)return!0;return"undefined"!=typeof document&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||"undefined"!=typeof window&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)},t.storage="undefined"!=typeof chrome&&void 0!==chrome.storage?chrome.storage.local:function(){try{return window.localStorage}catch(e){}}(),t.colors=["lightseagreen","forestgreen","goldenrod","dodgerblue","darkorchid","crimson"],t.formatters.j=function(e){try{return JSON.stringify(e)}catch(t){return"[UnexpectedJSONParseError]: "+t.message}},t.enable(n())},9245:function(e,t,A){var n;function a(e){function A(){if(A.enabled){var e=A,a=+new Date,r=a-(n||a);e.diff=r,e.prev=n,e.curr=a,n=a;for(var o=new Array(arguments.length),i=0;i<o.length;i++)o[i]=arguments[i];o[0]=t.coerce(o[0]),"string"!=typeof o[0]&&o.unshift("%O");var s=0;o[0]=o[0].replace(/%([a-zA-Z%])/g,(function(A,n){if("%%"===A)return A;s++;var a=t.formatters[n];if("function"==typeof a){var r=o[s];A=a.call(e,r),o.splice(s,1),s--}return A})),t.formatArgs.call(e,o),(A.log||t.log||console.log.bind(console)).apply(e,o)}}return A.namespace=e,A.enabled=t.enabled(e),A.useColors=t.useColors(),A.color=function(e){var A,n=0;for(A in e)n=(n<<5)-n+e.charCodeAt(A),n|=0;return t.colors[Math.abs(n)%t.colors.length]}(e),"function"==typeof t.init&&t.init(A),A}(t=e.exports=a.debug=a.default=a).coerce=function(e){return e instanceof Error?e.stack||e.message:e},t.disable=function(){t.enable("")},t.enable=function(e){t.save(e),t.names=[],t.skips=[];for(var A=("string"==typeof e?e:"").split(/[\s,]+/),n=A.length,a=0;a<n;a++)A[a]&&("-"===(e=A[a].replace(/\*/g,".*?"))[0]?t.skips.push(new RegExp("^"+e.substr(1)+"$")):t.names.push(new RegExp("^"+e+"$")))},t.enabled=function(e){var A,n;for(A=0,n=t.skips.length;A<n;A++)if(t.skips[A].test(e))return!1;for(A=0,n=t.names.length;A<n;A++)if(t.names[A].test(e))return!0;return!1},t.humanize=A(2988),t.names=[],t.skips=[],t.formatters={}},2988:function(e){var t=1e3,A=60*t,n=60*A,a=24*n,r=365.25*a;function o(e,t,A){if(!(e<t))return e<1.5*t?Math.floor(e/t)+" "+A:Math.ceil(e/t)+" "+A+"s"}e.exports=function(e,i){i=i||{};var s,l=typeof e;if("string"===l&&e.length>0)return function(e){if((e=String(e)).length>100)return;var o=/^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(e);if(!o)return;var i=parseFloat(o[1]);switch((o[2]||"ms").toLowerCase()){case"years":case"year":case"yrs":case"yr":case"y":return i*r;case"days":case"day":case"d":return i*a;case"hours":case"hour":case"hrs":case"hr":case"h":return i*n;case"minutes":case"minute":case"mins":case"min":case"m":return i*A;case"seconds":case"second":case"secs":case"sec":case"s":return i*t;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return i;default:return}}(e);if("number"===l&&!1===isNaN(e))return i.long?o(s=e,a,"day")||o(s,n,"hour")||o(s,A,"minute")||o(s,t,"second")||s+" ms":function(e){if(e>=a)return Math.round(e/a)+"d";if(e>=n)return Math.round(e/n)+"h";if(e>=A)return Math.round(e/A)+"m";if(e>=t)return Math.round(e/t)+"s";return e+"ms"}(e);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(e))}}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-content-file-path-content-blog-narou-kindle-index-md-57775eba99e7e20b6460.js.map