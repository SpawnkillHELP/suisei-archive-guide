# 准备工作

[[toc]]

## Windows

Windows 的准备并不复杂，设置好`$PATH`便完成了大半。

### $PATH

在 Windows 环境下，系统会从设定的`$PATH`路径中读取相应的`.exe`。

右键点击任务栏左下角，选择 Windows Powershell（管理员），并粘贴如下命令

```powershell
setx /M PATH "%PATH%;<本地路径>"
```
将命令中的 `<本地路径>` 替换为诸如 `J:\Youtube Downloads` 或 `F:\Video Archive`，随后执行即可。

### ffmpeg

`ffmpeg` 是本指南中，几乎所有工具都会用到的基础依赖。请从 [官方推荐的源](https://www.gyan.dev/ffmpeg/builds/) 下载 Windows 版本。推荐下载 `Release Build` ，这一版本在足够提供需要功能的同时，不会引入太多的问题。

下载完成后解压缩文件，将 `ffmpeg.exe` 放入你的 `$PATH` 文件夹，确保其他程序可以调用到。

### 其他相关依赖

其他所需要的程序以及依赖包均会在相应的介绍页面中提到。多数从官方网站下载、安装即可。

本指南中的操作均在 CLI（命令行）中执行，尽管很多程序有 GUI（图形交互界面）版本，但由于常常出现更新缓慢或众多不可预料的问题，本指南并不推荐使用。

## Ubuntu

### 为何选择 Ubuntu 服务器

本教程实际上是基于 Ubuntu 服务器进行的。由于这些服务器通常位于机房、拥有稳定的网络链接，且这些服务器同时为商业环境采用，较之家庭网络环境显然更为稳定。因此在服务器上进行下载、录制，较之在家庭网络环境失败率更低、发生问题的概率更小。并且使用服务器可以挂载相应任务后使之自动执行。

此外 Ubuntu 服务器通常较之 Windows 服务器价格更为低廉，因为 Ubuntu 无须额外的授权费用。同时因为 Ubuntu 的服务器版本并不提供桌面，同等配置下 Ubuntu 服务器更为流畅。

### 依赖包安装

#### 升级系统

本指南的操作环境是 Ubuntu 20.04 LTS ，采用了 [Amazon Lightsail](https://lightsail.aws.amazon.com/) 的服务器。

```bash
sudo apt update && sudo apt upgrade -y
```

接下来安装其他依赖。

#### FFmpeg

Ubuntu 官方源所提供的 FFmpeg 版本较低，因此在处理下载的 `vp9` + `opus` 影片时会报错，因此需要改用其他可信源进行安装。

```bash
sudo add-apt-repository ppa:savoury1/ffmpeg4
sudo apt install ffmpeg
```

可以阅读 [这篇文章](https://ubuntuhandbook.org/index.php/2021/05/install-ffmpeg-4-4-ppa-ubuntu-20-04-21-04/) 获取更多信息。

#### Node.js

本指南中所使用的工具诸如 `minyami` 或 `kkr` 是 Javascript 程序，因此可以通过 `npm` 进行安装。但是本指南不推荐使用 `sudo apt install npm` 进行安装，因为这会造成大量权限问题，这点在 Linux / Ubuntu 环境下尤其致命。

本教程推荐使用 [`tj/n`](https://github.com/tj/n) 对 Node.js 环境进行管理。

`tj/n` 提供的一键安装脚本如下

```bash
curl -L https://git.io/n-install | bash
```

这个脚本会同时默认安装最新的 Node.js LTS 版本。如果发现没有安装，可以手动输入 `n lts` 进行安装。

安装完成后输入 `npm version` 查看是否成功返回信息。

### 其他相关依赖

绝大部分存在疑问的环境安装以及处理如上，其余依赖包的安装以及软件的使用会在相应的章节中介绍。

如果对程序的安装、设置以及使用存在疑问，推荐阅读各个程序的 Github 源中的 README.md 。
