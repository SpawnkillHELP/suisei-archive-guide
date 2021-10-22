# kkr

[ [kkr](https://github.com/Last-Order/kkr) ]

这是一个主要针对 YouTube 直播实时录制的工具，对于无存档直播尤为有效。

鉴于 `youtube-dl` 在实时录制直播方面表现并不尽如人意，故推荐这一工具。

## 适用站点

- YouTube

## 安装

请首先阅读 [环境准备](/zh/preparation/) 章节，完成相关准备。

### Windows

打开 [Node.js 官方网站](https://nodejs.org/) 并下载 `LTS` 版本。

输入 `npm version` 检查是否安装成功。

### Ubuntu

阅读 [Ubuntu 环境准备](/zh/preparation/#node-js) 一节，安装 `npm` 以及 Node.js 。

安装成功后，输入以下命令安装 `kkr`

```bash
npm i -g kkr
```

## 使用

```bash
kkr -d "<youtube link>" --live
```

`kkr` 还支持开播检测，因此在开播前即可启动命令，在开播后程序会自动开始录制。
