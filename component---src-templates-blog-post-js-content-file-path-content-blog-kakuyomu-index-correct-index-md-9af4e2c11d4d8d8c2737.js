"use strict";(self.webpackChunkgatsby_starter_blog=self.webpackChunkgatsby_starter_blog||[]).push([[1595],{2796:function(e,t,n){n.r(t),n.d(t,{Head:function(){return E},default:function(){return b}});var r=n(8453),a=n(6540),l=(n(2473),n(7880));function o(e){const t=Object.assign({p:"p",span:"span"},(0,r.RP)(),e.components);return a.createElement(a.Fragment,null,a.createElement(t.p,null,"　以前のカクヨムの目次取得で、あとから追加した話が最後尾になってしまうという不具合があったので修正した。原因はepisodeの内容をアドレスの番号で整列していたためだった。カクヨム各話の順番はjsonに配列で書かれているのを見落としていた。"),"\n",a.createElement(l.A,{src:"https://99nyorituryo.hatenablog.com/entry/2023/12/07/235556",title:""}),"\n",a.createElement(t.p,null,'　本のIDから章の配列を取得して、章から話の配列と玉突き的に取得する。以前はエピソードIDで整列していたが、途中に追加した話は大きい数字になるので順番通りにならなかった。\r\ntableOfContents、TableOfContentsChapter、episodeUnions\r\n"Work:サイト番号"の.tableOfContentsで章の配列を取得する。tableOfContentsの配列にTableOfContentsChapterがあり、そこからさらに章内の話の配列がある。'),"\n",a.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="text"><pre class="language-text"><code class="language-text">json=document.getElementById("__NEXT_DATA__").text\r\nconst obj = JSON.parse(json);\r\nconst page=obj.props.pageProps.__APOLLO_STATE__\r\ncd=location.pathname.replace(/\\/+$/, "").split(\'/\').pop();\r\ntitle=page["Work:" + cd].title\r\nintroduction=page["Work:" + cd].introduction\r\nauthor=page[page["Work:" + cd].author.__ref].activityName\r\ntoc=page["Work:" + cd].tableOfContents\r\ntocc=[]//チャプター順番\r\nepisode=[]\r\nfor (let i = 0; i &lt; toc.length; i++) {\r\n\r\ntocc[i]=page["Work:" + cd].tableOfContents[i].__ref\r\nfor (let j = 0; j &lt; page[tocc[i]].episodeUnions.length; j++) {\r\n\r\nepisode.push(page[tocc[i]].episodeUnions[j].__ref)\r\n}\r\n}\r\n\r\nbook=[]\r\nfor (let i = 0; i &lt; episode.length; i++) {\r\n//book[i].id=page[episode[i]].id\r\n//book[i].title=page[episode[i]].title\r\n//book[i].date=page[episode[i]].publishedAt\r\nbook.push({ id: page[episode[i]].id, title: page[episode[i]].title, date: page[episode[i]].publishedAt })\r\n}\r\n</code></pre></div>'}}),"\n",a.createElement(t.p,null,"　gradleでインストーラーまで作成できれば後々楽かなとJava21までアップデートした。なぜか止まるので原因を探し中。それに伴い推奨環境をJava21に移行しようと思う。"))}var i=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,r.RP)(),e.components);return t?a.createElement(t,e,a.createElement(o,e)):o(e)},s=n(4794),c=n(4967),p=n(3895),d=n(7528),m=n(2343),g=n(249),u=n.n(g);const f=e=>{var t;let{data:{previous:n,next:r,site:l,mdx:o},location:i,children:d}=e;const g=(null===(t=l.siteMetadata)||void 0===t?void 0:t.title)||"Title",f=o.frontmatter.tags;return a.createElement(p.A,{location:i,title:g},a.createElement("article",{className:"blog-post",itemScope:!0,itemType:"http://schema.org/Article"},a.createElement("header",null,a.createElement("h1",{itemProp:"headline"},o.frontmatter.title),a.createElement("p",null,o.frontmatter.date,"　",f&&f.length>0&&f.map((e=>a.createElement(s.Link,{to:`/tags/${u()(e)}/`,itemProp:"url"},a.createElement("button",null,e)))))),a.createElement("section",{itemProp:"articleBody"},d),a.createElement("hr"),a.createElement(m.A,{title:o.frontmatter.title,url:`${l.siteMetadata.siteUrl}${o.fields.slug}`}),a.createElement("footer",null,a.createElement(c.A))),a.createElement("nav",{className:"blog-post-nav"},a.createElement("ul",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",listStyle:"none",padding:0}},a.createElement("li",null,n&&a.createElement(s.Link,{to:n.fields.slug,rel:"prev"},"← ",n.frontmatter.title)),a.createElement("li",null,r&&a.createElement(s.Link,{to:r.fields.slug,rel:"next"},r.frontmatter.title," →")))))},E=e=>{let{data:{mdx:t}}=e;return a.createElement(d.A,{title:t.frontmatter.title,description:t.frontmatter.description||t.excerpt,ogpimage:t.frontmatter.ogpimage})};function b(e){return a.createElement(f,e,a.createElement(i,e))}}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-content-file-path-content-blog-kakuyomu-index-correct-index-md-9af4e2c11d4d8d8c2737.js.map