# rget

[ [rget](https://github.com/wasamas/rget) ]

本工具主要面向电台录制，本指南主要将其用于 [Hibiki Radio Station](http://hibiki-radio.jp/) 的录制。

Hibiki Radio Station 采用了加密 .m3u8 对电台进行串流，因此无法使用常规方式对其进行直接下载。

## 适用站点

- Hibiki Radio Station
- etc.

## 安装

请首先阅读 [环境准备](/zh/preparation/) 章节，完成相关准备。

### Windows

打开 [Ruby 官方网站](https://rubyinstaller.org/) 下载安装包并安装。

### Ubuntu

首先安装 `ruby-full` 

```bash
sudo apt install ruby-full
```

随后通过 `gem` 包管理器安装 `rget`

```bash
sudo gem install rget
```

## 使用

::: warning 注意

本程序尽管提供 Windows 版本，但是本指南在书写并测试时遇到了问题。

推荐使用 Linux / Ubuntu 环境运行。

:::

举个例子，例如我们需要下载 RAS 的电台节目，添加电台的方式如下

```bash
# save a template of the radio program config
rget yaml https://hibiki-radio.jp/description/ras/detail >> ~/.rget
```

此处 `ras` 是如上链接中电台代码。

随后输入如下命令进行下载

::: tip

默认下载格式是 `.mp3` ，可以添加 `--no-mp3` 来输出 `.ts` 格式。

:::

```bash
rget ras --no-mp3
```

如需下载其他电台，请将 `ras` 替换为其他电台代码。

如果 `rget` 持续报与 `path` 相关的错误，请手动编辑 `~/.rget` 并指定 `path: .` 或其他本地路径。
