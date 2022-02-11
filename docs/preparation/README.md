# Preparation

[[toc]]

## Windows Preparation

Windows does not require a very complicated guide to prepare.

### $PATH

First of all, you should set up a `$PATH` folder to tell Windows where to find your programs/tools.

Run the Command Prompt ( or cmd ) as administrator. Then paste the following into the console:

```powershell
setx /M PATH "%PATH%;<REPLACE THIS WITH THE PATH TO YOUR DIRECTORY>"
```

The `<REPLACE THIS WITH THE PATH TO YOUR DIRECTORY>` section should be the folder where your tools are in. Example cases would be `J:\Youtube Downloads` or `F:\Video Archive` .

### ffmpeg

`ffmpeg` is the very fundamental tool to process videos and audios, nearly every tool here would need `ffmpeg` . Please be sure you have installed it.

For Windows, please download `ffmpeg` from [here](https://www.gyan.dev/ffmpeg/builds/), this is the source recommened by `ffmpeg` official site. I suggest download `release builds` for more stable experience.

After download, extract the compressed file and put `ffmpeg.exe` into your `$PATH` folder.

### Environment

The required packages can be found in each section, and require just downloading the installer from the official site. Windows does not have many problems with user permissions so it's easier for new users to understand.

Most of the commands are done in CLI, a GUI is not recommended as it can update slowly and can cause questions outside the scope of this guide.

## Ubuntu Preparation

### Why using a server

Virtual servers are running in server rooms with stable conditions and usually have faster Internet connection speeds since these are mostly used by businesses. It also has the advantage of allowing you to run jobs without monitoring them or worrying about interrupting them compared to a local set-up.

Linux servers are usually **cheaper** than Windows servers since Linux does not require license fee.

### Enviroment Preparation

#### Upgrade the system

Jobs are running on [Amazon Lightsail](https://lightsail.aws.amazon.com/), using Ubuntu 20.04 LTS.

```bash
sudo apt update
sudo apt upgrade -y
```

Next step is to install the other required components

#### FFmpeg

For ffmpeg, it might require a higher version to deal with vp9 video/audio muxing, read [this article](https://ubuntuhandbook.org/index.php/2021/05/install-ffmpeg-4-4-ppa-ubuntu-20-04-21-04/) to find out how to install ffmpeg 4.4 or higher.

```bash
sudo add-apt-repository ppa:savoury1/ffmpeg4 # Add PPA
sudo apt install ffmpeg
```

#### Node.js

Tools like `minyami` and `kkr` are written in Javascript and can be installed by using `npm`. Avoid installing `npm` by using `sudo apt install npm` as this causes permission problems, using [`tj/n`](https://github.com/tj/n) to install and manage Node.js instead.

This can be done in one line using the official script:

```bash
curl -L https://git.io/n-install | bash
```

The script should install the latest LTS version Node.js for you. If not you can manually install it by typing `n lts` .

Type `npm version` to see if it's properly installed.

### Other packages

Most software used in downloading are not yet listed. Please check every method for details.

Instructions on their usage can be found on their respective chapters.

For any other questions, please read the README.md in the original repos.
