# rclone

[ [rclone](https://rclone.org/) ]

rclone 尽管配置复杂，但是本工具是目前最为通用的云端-本地存储同步的管理方案。

## 适用站点

- OneDrive
- Google Drive
- Amazon S3
- Backblaze
- ...
- etc.

## 安装

### Windows

阅读 [Windows 环境准备](/zh/preparation/)，并从[官方源](https://rclone.org/downloads/)下载 `rclone.exe` 并放入 `$PATH` 文件夹。

### Ubuntu

在 Linux 环境（包括 Ubuntu 及 macOS ），可以通过一键脚本安装 `rclone`

```bash
curl https://rclone.org/install.sh | sudo bash
```

## 设置

rclone 的设置非常复杂，本指南对此不作赘述，建议参考官方文档进行相应设置。

- OneDrive [官方文档](https://rclone.org/onedrive/)
- Google Drive [官方文档](https://rclone.org/drive/)

为避免拥堵、断流等问题，建议自建私有 Azure API 后进行使用。自建参考 [这篇文章](https://p3terx.com/archives/rclone-connect-onedrive-with-selfbuilt-api.html) 。

## 使用

此处假定已经设置完毕，可以开始下载 / 上传文件。

本指南使用的是 OneDrive ，以下均以 OneDrive 的相关选项作为例子。

下载

```bash
rclone copy -P "remote drive":"remote folder" "local folder"
```

上传

```bash
rclone copy -P "local folder" "remote drive":"remote folder"
```

![Result](./rclone-0001.jpg)

`copy` ： Copy 模式会在开始前检查所有文件，并根据相应特征跳过已经下载完毕的文件。

`-P` ：本选项会让 rclone 显示进度。默认情况下 rclone 不返回任何信息。

::: tip 建议

此处建议添加 `--onedrive-encoding "Slash"` 选项。

本选项规定下载 OneDrive 内文件时，仅对含 `/` 的文件进行重命名处理。

如此设置之后 rclone 便不会对 `#` 等已被 OneDrive 和本地文件系统支持的特殊字符进行处理。

:::

其余站点的设置以及特殊设置请参考官方文档。
