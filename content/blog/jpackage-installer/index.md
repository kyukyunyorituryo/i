---
title: "jpackageでJavaアプリケーションのインストーラー作る"
date: "2024-01-01 17:15:26"
description: "前にインストーラーを作ったときの書き方これだった。動作が失敗しだったので原因も含めて対処をしたい。Failed to Launch JVMというエラーが出る。"
ogpimage: ""
tags: ["AozoraEpub3"]
---
import Amazon from "../../../src/components/amazon"
import Hatena from "../../../src/components/hatena"

前にインストーラーを作ったときの書き方これだった。動作が失敗しだったので原因も含めて対処をしたい。Failed to Launch JVMというエラーが出る。
```
jpackage  --type msi --win-menu --win-dir-chooser --win-shortcut --win-shortcut-prompt --copyright kyukyunyorituryo --icon AozoraEpub3.ico --app-version 1.1.1.22 --description "改造版AozoraEpub3 青空文庫テキストePub3変換"  -n "AozoraEpub3" --main-jar AozoraEpub3.jar --input C:\Users\Owner\Desktop\AozoraEpub3-1.1.1b22Q 
```



<Hatena src="https://github.com/kyukyunyorituryo/AozoraEpub3/releases/tag/v1.1.1b19Q" title=""/>


参考にするのは以下のもの
```
C:\>jpackage --type msi --win-menu --win-dir-chooser --win-shortcut --win-shortcut-prompt --input .\clientexample\target --name clientexample --main-class com.redhat.clientexample.App --main-jar clientexample.jar
```
　違いを見ていくとmain classが指定されていなかった。

<Hatena src="https://rheb.hatenablog.com/entry/2023/10/25/110538" title=""/>


<Hatena src="https://99nyorituryo.hatenablog.com/entry/2023/04/13/005100" title=""/>

<Hatena src="https://99nyorituryo.hatenablog.com/entry/2023/05/02/002803" title=""/>

<Hatena src="https://stackoverflow.com/questions/75578985/failed-to-launch-jvm-after-using-jpackage-to-create-exe" title=""/>

<Hatena src="https://docs.gradle.org/current/userguide/getting_started_eng.html" title=""/>


gradleを覚えよう
gradleのチュートリアルをやってみる

<Hatena src="https://docs.gradle.org/current/userguide/part1_gradle_init.html#part1_begin" title=""/>

<Hatena src="https://www.torutk.com/issues/274" title=""/>

[https://www.reddit.com/r/JavaFX/comments/16izyis/how_can_i_deploy_my_javafx_application_after/]

<Hatena src="https://devdocs.jabref.org/code-howtos/jpackage.html" title=""/>

