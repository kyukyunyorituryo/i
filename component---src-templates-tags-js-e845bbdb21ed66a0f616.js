"use strict";(self.webpackChunkgatsby_starter_blog=self.webpackChunkgatsby_starter_blog||[]).push([[942],{6602:function(e,t,l){l.r(t);var n=l(7294),a=l(1883),r=l(381),i=l.n(r),m=l(1804),c=l.n(m),o=l(8678),s=l(9357);t.default=e=>{var t;let{data:l,pageContext:r,location:m}=e;const u=(null===(t=l.site.siteMetadata)||void 0===t?void 0:t.title)||"Title",{totalCount:p}=l.allMdx,d=l.allMdx.nodes,{tag:E}=r;if(0===d.length)return n.createElement(o.Z,{location:m,title:u},n.createElement(s.Z,{title:'タグ: "'+E+'" (0記事)'}),n.createElement("p",null,"該当するタグの投稿記事がありません。"));const g='タグ: "'+E+'" ('+p+"記事)";return n.createElement(o.Z,{location:m,title:u},n.createElement(s.Z,{title:g}),n.createElement("h1",null,g),n.createElement("ol",{style:{listStyle:"none"}},d.map((e=>{const t=e.frontmatter.title||e.fields.slug,l=e.frontmatter.tags;return n.createElement("li",{key:e.fields.slug},n.createElement("article",{className:"post-list-item",itemScope:!0,itemType:"http://schema.org/Article"},n.createElement("header",null,n.createElement("h2",null,n.createElement(a.Link,{to:e.fields.slug,itemProp:"url"},n.createElement("span",{itemProp:"headline"},t))),n.createElement("small",null,i()(e.frontmatter.date).format("YYYY年MM月DD日 HH:mm")),n.createElement("div",{className:"tags-index"},l&&l.length>0&&l.map((e=>n.createElement(a.Link,{to:"/tags/"+c()(e)+"/",itemProp:"url"},n.createElement("button",null,e)))))),n.createElement("section",null,n.createElement("p",{dangerouslySetInnerHTML:{__html:e.frontmatter.description||e.excerpt},itemProp:"description"}))))}))))}}}]);
//# sourceMappingURL=component---src-templates-tags-js-e845bbdb21ed66a0f616.js.map