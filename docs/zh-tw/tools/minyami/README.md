# minyami

[ [minyami](https://github.com/Last-Order/Minyami) ]

本工具主要用於 Niconico Timeshift （直播存檔），以及 AbemaTV 影片的下載。

## 適用網站

- Nico 直播 ( 僅直播部分 )
- AbemaTV

## 安裝

继续操作前，请閱讀 [環境準備](/zh-tw/preparation/) 章节。

### Windows

打開 [Node.js 官方网站](https://nodejs.org/) 並下載 `LTS` 版本。

輸入 `npm version` 檢查是否安裝成功。

### Ubuntu

閱讀 [Ubuntu 環境準備](/zh-tw/preparation/#node-js) ，安裝 `npm` 以及 Node.js 。

安裝成功後，輸入以下指令安裝 `minyami`

```bash
npm i -g minyami
```

### 瀏覽器插件

`minyami` 需要配合瀏覽器插件生成下載所需要的指令。

Chrome 插件點擊 [這裡](https://chrome.google.com/webstore/detail/minyami/cgejkofhdaffiifhcohjdbbheldkiaed) 進行下載及安裝。

## 使用

首先打開一個 Nico 直播的存檔頁面，隨後點擊插件，插件會自動生成下載所需的指令。

![Plugin](./minyami-0001.jpg)

將指令複製貼上並執行，即可開始下載。

AbemaTV 頁面下載流程相同，不再贅述。

## 注意

要順利下載 Nico 直播存檔，你可能需要準備這些

- 高級會員（可選），這樣在 Niconico 的繁忙時段也可以下載最高畫質的影片。

- 頻道會員（可選），部分直播需要頻道會員訂閱才可以觀看（完整）存檔。

- 日本 IP（可選），部分節目鎖區，僅供日本用戶觀看，尤其是動畫的上映會等。

有報告稱 Niconico 阻擋了部分機房 IP 地址。如果發現 `minyami` 持續報錯，請嘗試更換 IP 後再執行。

如果有其他使用上的疑問，請閱讀 Github 上的 `README.md` 獲取更多信息。
