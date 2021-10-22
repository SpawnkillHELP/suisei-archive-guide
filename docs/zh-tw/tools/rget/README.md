# rget

[ [rget](https://github.com/wasamas/rget) ]

本工具主要為電台錄製，本指南主要將其用於 [Hibiki Radio Station](http://hibiki-radio.jp/) 的錄製。

Hibiki Radio Station 採用了加密 .m3u8 對電台進行串流，因此無法使用正常方法直接下載。

## 適用網站

- Hibiki Radio Station
- etc.

## 安裝

继续操作前，请閱讀 [環境準備](/zh-tw/preparation/) 章节。

### Windows

打開 [Ruby 官方網站](https://rubyinstaller.org/) 下載安裝包並安裝。

### Ubuntu

首先安裝 `ruby-full` 

```bash
sudo apt install ruby-full
```

再透過 `gem` 包管理器安裝 `rget`

```bash
sudo gem install rget
```

## 使用

::: warning 注意

本程序僅提供 Windows 版本，但是本指南在書寫並測試時遇到了問題。

推薦使用 Linux / Ubuntu 環境運行。

:::

舉個例子，例如我們需要下載 RAS 的電台節目，添加電台的方式如下：

```bash
# save a template of the radio program config
rget yaml https://hibiki-radio.jp/description/ras/detail >> ~/.rget
```

此處 `ras` 是如上連結中電台代碼。

再輸入如下指令進行下載

::: tip

默認下載格式是 `.mp3` ，可以添加 `--no-mp3` 來輸出 `.ts` 格式。

:::

```bash
rget ras --no-mp3
```

如需下載其他電台，請將 `ras` 替換為其他電台代碼。

如果 `rget` 持續報與 `path` 相關的錯誤，請手動編輯 `~/.rget` 並指定 `path: .` 或其他本機路徑。
