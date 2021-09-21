# youtube-dl / yt-dlp

[ [youtube-dl](https://github.com/ytdl-org/youtube-dl) ] [ [yt-dlp](https://github.com/yt-dlp/yt-dlp) ]

这两个工具是下载 YouTube 存档的主力工具，`yt-dlp` 是 `youtube-dl` 的分支，更新更为迅速，修补了众多问题并添加了更多支持的站点。

尽管以下教程仍旧使用 `youtube-dl` ，但由于 `youtube-dl` 目前存在长期未更新、新功能和支持站点添加缓慢、缩略图添加方式过时等问题，推荐切换至 `yt-dlp` 使用。

::: tip 工作流

分别下载视频流以及音频流 → 使用 FFmpeg 合并为 .mp4 文件 → 写入 meta → 写入缩略图

:::

## 适用站点

- YouTube
- TVer
- SPWN
- ...
- 任何其他在程序支持列表中的网站
- 任何使用非加密 `.m3u8` 进行视频串流的网站

## 安装

### Windows

请阅读 [Windows 环境准备](/docs/preparation/windows.md) 章节，完成相关准备。随后从本章起始处的 Github 链接中下载 `.exe` 并放入 `$PATH` 文件夹。

### Ubuntu / Linux

此处需要安装 Python 环境

::: tip

如果仅使用 `yt-dlp` ，则无需安装 `AtomicParsley`

:::

```bash
sudo apt update && sudo upgrade -y
sudo apt install python3 python3-pip python-is-python3 ffmpeg atomicparsley
```

接下来有两种安装方式

- 通过 `curl` 安装

```bash
sudo curl -L https://yt-dl.org/downloads/latest/youtube-dl -o /usr/local/bin/
sudo chmod a+rx /usr/local/bin/youtube-dl
```

- 通过 `pip3` 包管理器安装

```bash
sudo -H pip install --upgrade youtube-dl
```

如果您准备使用 `yt-dlp` ，请参考其教程，修改下载地址。

## 使用

下载仅需输入以下命令

```bash
youtube-dl "url"
```

### 设置

如果需要默认下载最高画质的存档，或是需要下载会员限定影片等，则需要进行进一步设置。以下提供参考配置。

Windows 环境下，配置文件位于 `%APPDATA%\youtube-dl\config.txt` 或 `C:\Users\<user name>\youtube-dl.conf` 。

```bash
-o 'D:\YouTube\(upload_date)s %(title)s.%(ext)s'
--embed-thumbnail
--format 'bestvideo+bestaudio/best/mp4'
--merge-output-format mp4
--add-metadata
--cookies '/home/ubuntu/cookies.txt' # replace the directory
```

Ubuntu 环境下，配置文件位于 `/etc/youtube-dl.conf` 。

```bash
-o '/home/ubuntu/raw/(upload_date)s %(title)s.%(ext)s' # replace the directory
--embed-thumbnail
--format 'bestvideo+bestaudio/best/mp4'
--merge-output-format mp4
--add-metadata
--cookies '/home/ubuntu/cookies.txt' # replace the directory
```

添加 `--cookies cookies.txt` 可以让程序能够下载会员限定等存在限制的影片（地域限制除外）。

:::tip

目前 YouTube 提供了 `vp9` 以及 `opus` 格式。

这一组合可以通过更小的文件体积，提供极为近似的画面以及音质。

:::

如需要默认拉取这一格式组合，可以添加 `--format (bestvideo[vcodec=vp9]/bestvideo)+(bestaudio[acodec=opus]/bestaudio)/best/mp4`

这样在拉取这一组合的同时将其他格式列入备选，防止报错。

如果要获取 `cookies.txt` ，请使用相应的浏览器插件 [ [Chrome](https://chrome.google.com/webstore/detail/get-cookiestxt/bgaddhkoddajcdgocldbbfleckgcbcid) ] [ [Firefox](https://addons.mozilla.org/en-US/firefox/addon/cookies-txt/) ]

### 手动选择质量

除了使用以上配置，程序同样提供了手动选择质量的选项。

首先使用 `-F` 检查可用质量

```bash
youtube-dl -F "link"
```

执行后会返回如下信息

![result](./youtube-dl-0001.jpg)

随后通过添加 `-f "video"+"audio"` 选取对应质量，例如

```bash
youtube-dl -f 303+251 "link"
```

### 抽取 .m3u8 链接

尽管使用方法大致相同，但是抽取步骤会比较复杂。

链接抽取教程将在 [这一章节](/docs/download/m3u8.md) 中进行介绍。
