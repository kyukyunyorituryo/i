---
title: "改造版AozoraEpub3　1.1.1b14Qのリリース"
date: "2022-08-26 01:17:29"
description: "改造版AozoraEpub3　1.1.1b14Qのリリース"
ogpimage: ""
tags: ["AozoraEpub3"]
---
import Amazon from "../../../src/components/amazon"
import Hatena from "../../../src/components/hatena"

<Hatena src="https://www.youtube.com/watch?v=SHeUvLXaycc" title=""/>


　　文字コード判別が失敗していた。原因は青空文庫のテキストを2回読み込むのを一回だけ読み込んでいたことによるもの。更に、ウェブ小説を読み込む場合は強制的にUTF-8に指定していてから元の設定に戻す処理が複雑に絡み合っている。

　なのでコードの失敗をなくすにはウェブ小説の文字コード指定をなくして一本化させるのがいいのだろう。

<Hatena src="https://github.com/kyukyunyorituryo/AozoraEpub3/releases/tag/v1.1.1b14Q" title=""/>

<Hatena src="https://www.vector.co.jp/soft/winnt/writing/se522586.html" title=""/>

