# 準備工作

[[toc]]

## Windows

Windows 的準備並不困難，設定好`$PATH`即大致完成。

### $PATH

在 Windows 環境下，系統會從設定好的`$PATH`路徑中讀取相應的`.exe`。

於電腦左下方搜尋中，搜尋 Windows Powershell（管理員），並貼上下列指令

```powershell
setx /M PATH "%PATH%;<本機路徑>"
```
將指令中的 `<本機路徑>` 替換為 `J:\Youtube Downloads` 或 `F:\Video Archive`，即可Enter執行。

### ffmpeg

`ffmpeg` 是非常重要的、用以處理影片及音訊的依賴，在進行後續操作前請確保已經正常安裝。官方推薦從 [此處](https://www.gyan.dev/ffmpeg/builds/) 下載 Windows 版本，建議下載 `Release Build` 。

下載完成後解壓縮檔案，並將 `ffmpeg.exe` 放入 `$PATH` 路徑。

### 其他相關支援

其他所需要的程序以及支援包均會在對應頁面提到，多數從官方網站下載安裝即可。

本指南中的操作均在 CLI（命令列介面）中執行，儘管很多程序有 GUI（圖形使用者介面）版本，但由於眾多BUG因素，本指南並不推薦使用。

## Ubuntu

### 為何選擇 Ubuntu 伺服器

本教學基於 Ubuntu 伺服器所進行。由於這些伺服器通常位於機房、擁有穩定的網路，且較為於商業採用，較家庭網路而言更為穩定。因此在伺服器上進行下載、錄製，比起在家庭網路中更容易、也不太發生問題。並且可以掛步驟在伺服器上自動執行。

此外 Ubuntu 比 Windows 伺服器價格較為低廉，因為 Ubuntu 無須額外的授權費用。同時 Ubuntu 伺服器版本不提供桌面，同樣配置下 Ubuntu 伺服器更流暢。

### 支援安裝

#### 升級系統

本指南操作環境是 Ubuntu 20.04 LTS ，採用了 [Amazon Lightsail](https://lightsail.aws.amazon.com/) 的伺服器。

```bash
sudo apt update && sudo apt upgrade -y
```

接下來安裝其他支援。

#### FFmpeg

Ubuntu 官方源所提供的 FFmpeg 版本較低，因此在處理下載的 `vp9` + `opus` 影片時會發生錯誤，因此需要改用其他可信任之來源進行安裝。

```bash
sudo add-apt-repository ppa:savoury1/ffmpeg4
sudo apt install ffmpeg
```

可以閱讀 [這篇文章](https://ubuntuhandbook.org/index.php/2021/05/install-ffmpeg-4-4-ppa-ubuntu-20-04-21-04/) 了解更多信息。

#### Node.js

本指南中所使用的工具諸如 `minyami` 或 `kkr` 是 Javascript 程序，因此可以透過 `npm` 進行安裝。但是本指南不推薦使用 `sudo apt install npm` 進行安裝，因為這會造成權限問題，這在 Linux / Ubuntu 是不理想的。

本教學推薦使用 [`tj/n`](https://github.com/tj/n) 對 Node.js 環境進行控制。

`tj/n` 提供的一鍵安裝腳本如下

```bash
curl -L https://git.io/n-install | bash
```

這個腳本會同時默認安装最新的 Node.js LTS 版本。如果發現沒有安裝，可以手動輸入 `n lts` 進行安裝。

安裝完成之後輸入 `npm version` 查看是否成功。

### 其他相關支援

大部分有疑問的安裝環境以及處理如上，其餘支援包的安裝、軟體的使用會在對應章節介紹。

如果對程序安裝、設置、使用有任何疑問，推薦閱讀個程序的 Github 源中的 README.md 。
