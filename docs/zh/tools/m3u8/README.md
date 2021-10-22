# 通用 .m3u8

尽管很多站点并没有被 youtube-dl / yt-dlp 正式支持，但实际上我们只需要获取直播串流的 `.m3u8` 链接即可下载。

## 适用站点

- SPWN
- Nissin
- ...
- etc.

## 注意

请首先阅读 [环境准备](/zh/preparation/) 章节，完成相关环境准备，并确认 `youtube-dl` 或 `yt-dlp` 可以正常工作。

## 获取链接

![step](./m3u8-0001.jpg)

打开直播页面，点击 F12 打开浏览器的开发模式。随后点击<span style="color:#e93320; font-weight:bold">红色</span>箭头指向的 网络 选项卡。

在<span style="color:#59ac59; font-weight:bold">绿色</span>箭头指向的 过滤器 中输入 m3u8 ，随后**刷新一次页面**。

此时应该可以看到一些 m3u8 链接被筛选出来了。

因为每个人所使用的网络环境不同，默认串流质量不尽相同。为了确保可以获取最高画质，我们提取 main m3u8 index 以获取所有串流质量选项。

右键点击<span style="color:#43a2e3; font-weight:bold">蓝色</span>箭头指向的条目，选择复制 > 复制URL。

::: warning 建议

确保您获取的是 index 而非某一特定质量的串流链接。有时这些特定质量的链接不包含音频流。

:::

## 获取 cookies.txt

![cookies](./m3u8-0002.jpg)

由于 SPWN 等站点提供的是付费节目，需要对用户进行鉴权。因为需要获取 `cookies.txt` 以通过验证。

此处用到的是 `Get cookies.txt` 插件 [ [Chrome](https://chrome.google.com/webstore/detail/get-cookiestxt/bgaddhkoddajcdgocldbbfleckgcbcid) ] [ [Firefox](https://addons.mozilla.org/en-US/firefox/addon/cookies-txt/) ]

安装完毕插件后，确保您已登录网站，并点击插件图标。在弹出对话框中选择 Export ，浏览器会自动保存 `cookies.txt` 至本地。

## 下载

此处已经获取 `.m3u8` 链接以及 `cookies.txt` ， 可以使用 youtube-dl / yt-dlp 下载影片了。

下载命令如下，将引号内容替换为对应信息

Use this template to download the video. Replace the stuff in `""` with the appropriate content you got from earlier

```bash
youtube-dl ".m3u8 link" --cookies "path to cookies.txt" -o "local saving path"
```

![downloadlink](./m3u8-0003.jpg)

现在可以开始下载了。

## 手动选择质量

由于 SPWN 等站点的串流命名不规范，所以仅使用 `best` 或 `bestaudio+bestvideo` 并不能很好确保拉取到最佳质量的串流。

建议在下载前添加 `-F` 选项以检查可获取的编码格式 / 质量。

![format](./m3u8-0004.jpg)

同上所示，添加 `-F` 后程序列出了可选的所有格式。

此处输入 `-f 5279+program_audio-Fine` 以拉取最高质量的视频及音频串流。

```bash
youtube-dl -f 5279+program_audio-Fine ".m3u8 address"
```

现在我们可以下载最高质量的影片了。
