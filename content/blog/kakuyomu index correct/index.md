---
title: "カクヨム目次取得の修正"
date: "2023-12-31 17:59:01"
description: "以前のカクヨムの目次取得で、あとから追加した話が最後尾になってしまうという不具合があったので修正した。原因はepisodeの内容をアドレスの番号で整列していたためだった。カクヨム各話の順番はjsonに配列で書かれているのを見落としていた。"
ogpimage: ""
tags: ["AozoraEpub3"]
---
import Amazon from "../../../src/components/amazon"
import Hatena from "../../../src/components/hatena"

　以前のカクヨムの目次取得で、あとから追加した話が最後尾になってしまうという不具合があったので修正した。原因はepisodeの内容をアドレスの番号で整列していたためだった。カクヨム各話の順番はjsonに配列で書かれているのを見落としていた。
<Hatena src="https://99nyorituryo.hatenablog.com/entry/2023/12/07/235556" title=""/>

　本のIDから章の配列を取得して、章から話の配列と玉突き的に取得する。以前はエピソードIDで整列していたが、途中に追加した話は大きい数字になるので順番通りにならなかった。
tableOfContents、TableOfContentsChapter、episodeUnions
"Work:サイト番号"の.tableOfContentsで章の配列を取得する。tableOfContentsの配列にTableOfContentsChapterがあり、そこからさらに章内の話の配列がある。
```
json=document.getElementById("__NEXT_DATA__").text
const obj = JSON.parse(json);
const page=obj.props.pageProps.__APOLLO_STATE__
cd=location.pathname.replace(/\/+$/, "").split('/').pop();
title=page["Work:" + cd].title
introduction=page["Work:" + cd].introduction
author=page[page["Work:" + cd].author.__ref].activityName
toc=page["Work:" + cd].tableOfContents
tocc=[]//チャプター順番
episode=[]
for (let i = 0; i < toc.length; i++) {

tocc[i]=page["Work:" + cd].tableOfContents[i].__ref
for (let j = 0; j < page[tocc[i]].episodeUnions.length; j++) {

episode.push(page[tocc[i]].episodeUnions[j].__ref)
}
}

book=[]
for (let i = 0; i < episode.length; i++) {
//book[i].id=page[episode[i]].id
//book[i].title=page[episode[i]].title
//book[i].date=page[episode[i]].publishedAt
book.push({ id: page[episode[i]].id, title: page[episode[i]].title, date: page[episode[i]].publishedAt })
}

```



　gradleでインストーラーまで作成できれば後々楽かなとJava21までアップデートした。なぜか止まるので原因を探し中。それに伴い推奨環境をJava21に移行しようと思う。