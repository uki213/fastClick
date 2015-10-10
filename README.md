# $.fastClick.js

## 概要

$.fastClick.jsはスマートフォン機器で起きるクリックイベントの遅延を解消するjQueryプラグインです。
特別なイベントで定義する必要はありません。通常のclickイベントがそのまま高速化されます。

## 必要とするもの

* [jQuery](https://jquery.com/)

## 使用法

    <script src="$.fastClick.js"></script>
[ダウンロードして](http://uki213.github.io/fastClick/)scriptを読み込ませて準備完了

    $(DOM).click(function ()...
    $(DOM).on('click', function ()...
    $('body').on('click', 'DOM', function ()...
    <DOM onclick="function ()...
上記のようにclickイベントを通常どおりに記述すれば、fastClickとして動作します。

## DEMO
[http://uki213.github.io/fastClick/](http://uki213.github.io/fastClick/)  

## LICENCE

[MIT License](http://opensource.org/licenses/mit-license.php)

