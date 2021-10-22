# radigo

[ [radigo](https://github.com/yyoshiki41/radigo) ]

本项目仅用于拉取 [radiko.jp](https://radiko.jp) 的电台存档。

## 适用站点

- Radiko.jp

## 安装

请首先阅读 [环境准备](/zh/preparation/) 章节，完成相关准备。

### Windows

阅读 [Windows 环境准备](/zh/preparation/) 一节，并从[官方源](https://github.com/yyoshiki41/radigo/releases/)下载 `radigo.exe` 并把它放入 `$PATH` 文件夹。

### Ubuntu

从[官方源](https://github.com/yyoshiki41/radigo/releases/)下载对应版本并执行如下命令

```bash
mv /usr/local/bin/radigo
sudo chmod a+rx /usr/local/bin/radigo
```

输入 `radigo` 来验证安装是否成功。

## 使用

### 常规节目

radiko 会根据 IP 所在地决定可用的电台节目。

基本下载命令如下

```bash
radigo rec -a="area ID" -id="program ID" -s="timestamp"
```

`area ID` 可以从页面底部找到。

![footer](./radigo-0001.jpg)

点开后可以发现类似这样的一个链接，如 `JP13` 是东京的 `area ID` 。

```bash
https://radiko.jp/index/JP13
```

`program ID` 和 `timestamp` 则是从对应存档的链接中找到。

```
https://radiko.jp/#!/ts/QRR/20210914175500
```

`program ID` = QRR

`timestamp` = 20210914175500

### 高级订阅

部分节目归属于其他地区， radiko 要求用户订阅高级账户，方可收听这些区域外电台的存档。

第一步自然是注册并通过信用卡支付高级订阅费用。

如果您在使用 Ubuntu ，那么请执行如下命令

```bash
export RADIKO_MAIL="radigo@example.com" && export RADIKO_PASSWORD="password"
radigo rec -a="area ID" -id="program ID" -s="timestamp"
```

您也可以将登录信息写入 `~/.zshrc` 或 `~/.bashrc` 。

## 注意

Radiko 仅面向日本本土服务，您至少需要一个日本 IP 来获取下载所需的相关信息。

您的 IP 所在地会影响您可以收听 / 下载的内容。例如：我的服务器 IP 被划归至东京，那么我的服务器在没有高级订阅的情况下，仅可接收到默认分配给东京的节目。
