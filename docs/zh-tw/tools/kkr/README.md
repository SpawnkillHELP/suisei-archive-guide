# kkr

[ [kkr](https://github.com/Last-Order/kkr) ]

這是一個主要針對 YouTube 直播即時錄製的工具，對不留檔直播特攻。

有鑑於 `youtube-dl` 無法支援即時錄製，故使用此法。

## 適用網站

- YouTube

## 安裝

继续操作前，请閱讀 [環境準備](/zh-tw/preparation/) 章节。

### Windows

打開 [Node.js 官方網站](https://nodejs.org/) 並下載 `LTS` 版本。

輸入 `npm version` 檢查是否安裝成功。

### Ubuntu

閱讀 [Ubuntu 環境準備](/zh-tw/preparation/#node-js) ，安裝 `npm` 以及 Node.js 。

安裝成功後，輸入以下命令安裝 `kkr`

```bash
npm i -g kkr
```

## 使用

```bash
kkr -d "<youtube link>" --live
```

`kkr` 還支持開播通知，因此在開播前即可啟動命令，在開播後程序會自動開始錄製。
