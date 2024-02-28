---
title: "
AozoraEpub3-1.1.1b9Qをリリースしました。
"
date: "2021-05-06 22:28:29"
description: "
AozoraEpub3-1.1.1b9Qをリリースしました。
"
ogpimage: ""
tags: ["AozoraEpub3"]
---
import Amazon from "../../../src/components/amazon"
import Hatena from "../../../src/components/hatena"

<Hatena src="https://www.youtube.com/watch?v=SHeUvLXaycc" title=""/>

<Hatena src="https://www.youtube.com/watch?v=qxcDw5nWd10" title=""/>

AozoraEpub3-1.1.1b9Qをリリースしました。


　前のバージョンとの変更点は、


* 初心者向けの説明文を追加した。vectorで公開する時にこういうのが必要みたいだったから。

* 外字画像の処理部分をいじりました。




追加した説明文は下のとおりです。




青空文庫EPUB変換　改造版AozoraEpub3

Copyright (C)　2021 https://github.com/kyukyunyorituryo/AozoraEpub3

https://github.com/hmdev/AozoraEpub3　をもとにしたフォーク版です。GPL v3を継承しています。


-----------------------------------------------------------------------------------------

■紹介

-----------------------------------------------------------------------------------------

青空文庫をEPUBやMOBIファイルなどに変換して、kobo、kindle,などのEPUBリーダーなどで読むことができるソフトウェアです。作成したEPUBは電子書籍販売サイトで販売できるので、電子出版ツールとしても使うことができます。WEB小説から青空文庫に変換してEPUB出力する機能もあるので、WEB小説を電子書籍端末で読める形式に変換することが可能になります。

-----------------------------------------------------------------------------------------

■ライセンスについて

-----------------------------------------------------------------------------------------

ソースコードおよびバイナリ GPL v3 ( http://www.gnu.org/licenses/gpl-3.0.html ) ※ソースコードの流用、改変、再配布を行った場合もGPL v3が適用されます。

作成したデータ AozoraEpub3で変換したePubファイルの著作権は入力データと同一になります。 ePubファイルの修正や配布は入力データの著作権内で自由に行うことができます。


-----------------------------------------------------------------------------------------

■インストール

-----------------------------------------------------------------------------------------

https://adoptopenjdk.net/releases.html OpenJDK 11 (LTS)、HotSpot、OS、Install JREを選んでインストールしてください。

Windows Ubuntu MacOSX で動作確認済

　Linux版のkindlegenの配布が終了されました。そのため、mobiの変換はLinuxではできなくなりました。

　Apple Silicon M1では、下記記事を参考にAzul Zulu Javaのarm64を入れてください。

https://qiita.com/shibukawa/items/797b7cbb7e530842e6f7

AozoraEpub3-*.zip を任意のフォルダに解凍します。
-----------------------------------------------------------------------------------------
■使い方
-----------------------------------------------------------------------------------------
AozoraEpub3.jar をダブルクリックして実行します。

　またはコンソールから "java -jar AozoraEpub3.jar" でも実行可。

　※javaが見えなければフルパスで指定

　　例: "C:\Program Files\AdoptOpenJDK\jre-11.0.5.10-hotspot\bin/java.exe" -jar AozoraEpub3.jar

■例として青空文庫の「吾輩は猫である」をEPUBに変換する。

下記リンクから、テキストファイルのZIPファイルをダウンロードする

https://www.aozora.gr.jp/cards/000148/card789.html

テキストファイル(ルビあり) zip 789_ruby_5639.zip


　AozoraEpub3を起動後に拡張子でEPUBを選ぶとEPUB、mobiを選ぶとキンドル用に変換します。

AozoraEpub3に「ファイルまたはURL文字列をここにドラッグ＆ドロップ／ペーストで変換します」の場所にzipファイルをドラッグ・アンド・ドロップします。そうすると、変換確認画面が表示されるので、表紙を入れるなどして変換する。

■WEB小説の変換

WEB小説サイトは「小説家になろう/小説を読もう！」(＋関連サイト)「NEWVEL-LIBRARY」「FC2小説」「HAMELN」「Arcadia」「novelist.jp」「dNoVeLs」「暁」「カクヨム」「ノベルアップ＋」から取得が可能です。

小説家になろうの例

https://ncode.syosetu.com/n7788ft/

　アドレスの左側の鍵アイコンをデスクトップなどにドラッグ・アンド・ドロップすることでショートカットファイルを作成できる。Web小説サイトの作品一覧ページのURLまたはURLショートカット(.url)のドラッグ＆ドロップでの取得と変換も可能です。ショートカットを保存しておいてから複数を一括してドラッグ・アンド・ドロップすると一括して変換できる。

■自作のテキストからEPUBを作成する

　青空文庫形式で、テキストを制作するとEPUBファイルに変換できます。

　青空文庫形式の書き方は下記リンクを参考にしてください。

　https://www.aozora.gr.jp/aozora-manual/index-input.html

青空文庫形式の入力補助ツールなど

https://99nyorituryo.hatenablog.com/entry/2013/10/09/220711

<Hatena src="https://github.com/kyukyunyorituryo/AozoraEpub3/releases/tag/1.1.1b9Q" title=""/>


改造版AozoraEpub3ではスポンサーを募集しています。

<Hatena src="https://github.com/sponsors/kyukyunyorituryo" title=""/>

