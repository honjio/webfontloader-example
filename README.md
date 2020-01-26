# Web Font Loader を使用した Web Font の読み込みサンプル

> Web Font Loaderは、Google Fonts APIが提供するよりも、フォントの読み込みをより細かく制御できるJavaScriptライブラリです

[Google Fonts | Web Font Loader](https://developers.google.com/fonts/docs/webfont_loader) より引用（日本語訳）

## 静的な Link タグでの読み込みよりも優れる点

* 動的に link タグを追加するので、一通りコンテンツのレンダリングが終了した後に webfont の読み込みを実施することができる
* script による webfont の読み込み状況検知により、読み込みが完全に完了した後 webfont 指定のある font-family を有効化できる。その為、表示のちらつきを最小限に抑える事ができる  
webfont を指定した font-family が静的に記述されている場合、読み込みが完全に完了していない状態でも webfont を表示しようとする為、表示のちらつきが発生してしまう
