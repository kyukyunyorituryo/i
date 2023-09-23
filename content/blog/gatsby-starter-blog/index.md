---
title: "gatsby-starter-blogを使ってブログを作ってみた"
date: "2023-08-10"
description: "Gatsbyではブログも作れるので作ってみた。ただ、普通のブログのようなコメントが外部の機能を使わないといけない。"
tags: ["Gatsby.js"]
---
import Amazon from "../../../src/components/amazon"
import Hatena from "../../../src/components/hatena"

Gatsbyではブログも作れるので作ってみた。ただ、普通のブログのようなコメントが外部の機能を使わないといけない。静的サイトというのはあまり書き換えることがないことが前提。マニュアルをいっぱい読むのも飽きてきたので、作りながら考えることにした。

作ったのがこれ、まだちゃんと設定ができていない。

<Hatena src="https://kyukyunyorituryo.github.io/i/"/>

### gatsby-starter

このgatsby-starter-blogというのはマークダウンファイルを読み込んでブログの形に出力するようだ。

<Hatena src="https://www.gatsbyjs.com/starters/gatsbyjs/gatsby-starter-blog"/>

<Hatena src="https://bel-itigo.com/blog-customize-20220206/"/>

例えばハローワールドのマークダウンは「gatsby-starter-blog\content\blog\hello-world」位置にある。２個目のファイルは「gatsby-starter-blog\content\blog\my-second-post」と別のフォルダーに分かれている。フォルダー名がslugになりサイトのアドレスになるので日本語はやめておいたほうがよさそう。

&nbsp;出力されるページはこのようだ。

<Hatena src="https://gatsbystarterblogsource.gatsbyjs.io/"/>

英語用のスターターなので日本語のサイトとすると少し変なところがあるので修正したい。hello-worldフォルダー内のindex.mdの最初にFront-matterというタイトル、日付、説明などを追加している。この日付で投稿の順番が整列される。

---  
title: Hello World  
date: "2015-05-01T22:12:03.284Z"  
description: "Hello World"  
---

日付の表示が英語風だったので日本語風に直した。

* トップページ：src/pages/index.js
* 個別ページ：src/templates/blog-post.js

> date(formatString: "MMMM DD, YYYY")
>
> May 01, 2015
>
> date(formatString: "YYYY年MM月DD日")
>
> 2015年05月01日
>
>

&nbsp; &nbsp; &nbsp;あと ＜Bio /＞の位置を下げた

### アマゾンアフィリエイトを貼る方法

説明通りにやると私の環境ではaccessKey、secretKeyをgithubで公開してしまいそうだったのでdotenvから読み込むように書き換えた。

>require('dotenv').config();

&nbsp; &nbsp; &nbsp; &nbsp; accessKey: process.env.accessKey,  
&nbsp; &nbsp; &nbsp; &nbsp; secretKey: process.env.secretKey,

使ってみた問題点、アイテムが１０を超えると処理が止まる。なのでissueを投げてみた。

<Hatena src="https://github.com/mjun0812/gatsby-remark-amazon-link"/>

取得するのがタイトルと表紙だけなので、著者名も取得できるように書き換えればなとは思う。コード見てみると、ライブラリ自体がタイトルと表紙しか取得してないのでライブラリ自体を書き換えないといけなさそう。

<Hatena src="https://tech.qookie.jp/posts/use-npm-package-github-fork/"/>

<Hatena src="https://qiita.com/ozaki25/items/3e2cf94f29bd0edc1979"/>

puppeterを使っているので時間がかかる。アマゾンアフィリエイトを先に処理させるようにしないと干渉する。

<Hatena src="https://yayo1.com/blog/gatsby_blog_linkcard/"/>

設定を入れるだけでサイトマップを自動で作ってくれる。

<Hatena src="https://www.gatsbyjs.com/plugins/gatsby-plugin-sitemap/"/>

SEO対策をどうするかだが、OGPの設定が文字だけになっている。

<Hatena src="https://bel-itigo.com/how-to-use-gatsby-head-api/"/>

簡単に作った割には、サイトパフォーマンスが高い。

<Hatena src="https://knowledge.sakura.ad.jp/21477/"/>

<Hatena src="https://99nyorituryo.hatenablog.com/entry/2023/07/22/221721"/>

<Hatena src="https://99nyorituryo.hatenablog.com/entry/2023/07/15/004242"/>

