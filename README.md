# 🍀 Y Note (ブログサイト)

## 📌 概要
『Y Note』は、世の中の「分かりにくいことを分かりやすくを届けたい」をコンセプトにしたブログサイトです。

**「🌐 デモサイト (公開URL): https://...」**

---

## 📐 プロジェクト構成および機能 (Project Composition and Features)

* **index.htmlおよびstyle.css**: Home画面の設定。
* **ArticleList.htmlおよびArticleListStyle.css**: 記事一覧画面の設定。
* **AboutMe.htmlおよびAboutMeStyle.css**: 自身のプロフィールや問い合わせリンクを模したボタンが記載されているページの設定。

以下、jsファイルとその機能
* **menubutton.js**: メニューボタンの機能とアニメーション。
* **elementsAnimation.js**: Home画面内の要素に対するアニメーション。
* **articleCardsRender.js**: Home画面内の「最近の記事」欄に表示させる記事の情報を取得する。
* **contactToggle.js**: Home画面下部にある擬似問い合わせフォームの表示アニメーション。
* **articleListFunction.js**: 記事一覧画面の記事情報の取得と表示。
* **ArticlesListAnimation.js**: 記事一覧画面のアニメーション。

* **vivus.min.js**: 現時点での設定では、index.html内コメントアウトにより使えないが、今後SVGパスによるローディング時のアニメーションを搭載予定のため。


---

## ⚙️ 環境構築・動作方法 (Usage)

### 前提条件 / 動作環境
* 特になし（Google Chrome や Safari などの一般的なWebブラウザがあれば動作します）
* Node.js などの環境構築・事前ビルドは不要です。

### 起動手順

1. 本リポジトリをダウンロード（クローン）します。
   ```bash
   git clone https://github.com/Glimmer0-shine/blog-site-project.git