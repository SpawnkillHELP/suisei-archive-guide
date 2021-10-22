# rclone

[ [rclone](https://rclone.org/) ]

rclone 雖然配置稍微複雜，但是本工具是目前最為通用的雲端-本機存儲同步的管理方案。

## 適用網站

- OneDrive
- Google Drive
- Amazon S3
- Backblaze
- ...
- etc.

## 安装

### Windows

閱讀 [Windows 環境準備](/zh-tw/preparation/)，並從[官方源](https://rclone.org/downloads/)下載 `rclone.exe` 並放入 `$PATH` 資料夾。

### Ubuntu

在 Linux 環境（包括 Ubuntu 及 macOS ），可以通過一鍵腳本安裝 `rclone`

```bash
curl https://rclone.org/install.sh | sudo bash
```

## 設置

rclone 的設置非常複雜，本指南不多贅述，建議看官方文檔進行設置。

- OneDrive [官方文檔](https://rclone.org/onedrive/)
- Google Drive [官方文檔](https://rclone.org/drive/)

為了避免通道擁擠、斷線等問題，建議自己設定私有 Azure API 後進行使用。参考 [這篇文章](https://p3terx.com/archives/rclone-connect-onedrive-with-selfbuilt-api.html) 。

## 使用

假定設定玩閉沒問題，可以開始下載 / 上傳文件。

本指南使用的是 OneDrive ，以下均以 OneDrive 的相關選項作為例子。

下載

```bash
rclone copy -P "remote drive":"remote folder" "local folder"
```

上傳

```bash
rclone copy -P "local folder" "remote drive":"remote folder"
```

![Result](./rclone-0001.jpg)

`copy` ： Copy 此模式會在開始前檢查所有文件，並根據相應特徵跳過已下載完畢的文件。

`-P` ：本選項會讓 rclone 顯示進度。默認情况下 rclone 不回應任何信息。

::: tip 建議

此處建議添加 `--onedrive-encoding "Slash"` 選項。

本選項規定下載 OneDrive 内文件时，僅對含 `/` 的文件進行重新命名處理。

如此設置之後 rclone 便不会對 `#` 等已被 OneDrive 和本機文件系統支持的特殊字符進行處理。

:::

其餘雲端設置以及特殊設置請參考官方文檔。
