---
title: "なろうの目次ページが変更になって１００話区切りになった"
date: "2024-02-09 22:53:24"
description: "なろうの目次ページが変更になって１００話区切りになった"
ogpimage: ""
tags: ["AozoraEpub3"]
---
import Amazon from "../../../src/components/amazon"
import Hatena from "../../../src/components/hatena"

　現状１００話未満なら正常にダウンロードする。１００より後は認識しない。２ページ目以降の目次をドラッグアンドドロップすると１００話より後もダウンロードできるが上書きされてしまう。

１００話以上ある小説の場合にページネーションが追加されて分割されるようだ。
novelview_pager-boxのaタグ内のクラスnovelview_pager-next　リンク先が?p=2で末尾の数字ページ番号である。
最後のページの場合には　novelview_pager-nextのクラスがspanタグになっている。
```
document.getElementsByClassName("novelview_pager-next").length==0
の場合は目次なし
document.getElementsByClassName("novelview_pager-next")[0].tagName=='A'
の場合に次のページがあり
document.getElementsByClassName("novelview_pager-next")[0].href
を取得する末尾に　?p=2　が追加される　
document.getElementsByClassName("novelview_pager-next")[0].tagName=='SPAN'
の場合最終ページ
```
トップページ読み込み２ページ目へのリンクがある場合には２ページ目を読み込みに行く。２ページ目更新の更新情報と各話へのリンクに追加する。これを最終ページまで繰り返す。

HREF

SUB_UPDATE

CONTENT_UPDATE_LIST

サイトを読み込んで処理をするときに、

```
各ページのclass="index_box"を取得して中身を連結
document.getElementsByClassName("index_box")[0].children
```
jsoupのdom操作がJSとだいぶ違うのでマニュアル見ながらじゃないとできない。
<Hatena src="https://jsoup.org/cookbook/extracting-data/dom-navigation" title=""/>

jsoupでノードのコピー

[https://www.tabnine.com/code/java/methods/org.jsoup.nodes.Document/appendChild]

<Hatena src="https://stackoverflow.com/questions/48671687/pagination-in-web-scraping-using-jsoup-in-java-swing" title=""/>

extract.txtから設定を読み込むために設定内容を考える。

ページャーの上限　PagerMax 100
目次のクラスネーム　index .index_box:0
リンクのクラスネーム　NEXTPAGE .novelview_pager-next

### ページネーション読み込み機能をつけてみた
<Hatena src="https://github.com/kyukyunyorituryo/AozoraEpub3/releases/tag/v1.1.1b21Q" title=""/>

バグが出ても対応できる人向け web/ncode.syosetu.com/extract.txt内の
 #NEXTPAGE の#を外すとページネーションが有効化される