# youtube-dl / yt-dlp

[ [youtube-dl](https://github.com/ytdl-org/youtube-dl) ] [ [yt-dlp](https://github.com/yt-dlp/yt-dlp) ]

This will be the primary tool to download youtube-dl videos, as well as the generic `.m3u8`.

If you are using `yt-dlp` (and I recommend using it most of the time), just replace all `youtube-dl` with `yt-dlp` .

::: tip Workflow

Downloaded video and audio → Merged .mp4 file → Write metadata → Write thumbnail

:::

## Target Site

- YouTube
- TVer
- SPWN
- ...
- Any sites on the support list
- Any sites using non-encrypted `.m3u8` stream

## Installation

Please read [ [Preparation](/preparation/) ] before proceeding.

### Windows

Download `yt-dlp` from [release](https://github.com/yt-dlp/yt-dlp/releases) and put it in your `$PATH` folder.

### Ubuntu / Linux

Install `python` and the required packages first.

```bash
sudo apt update && sudo upgrade -y
sudo apt install python3 python3-pip python-is-python3 ffmpeg atomicparsley
```

There are 2 ways to install

- Install using `curl`

```bash
sudo curl -L https://yt-dl.org/downloads/latest/youtube-dl -o /usr/local/bin/
sudo chmod a+rx /usr/local/bin/youtube-dl
```

- Install using `pip3`

```bash
sudo -H pip install --upgrade youtube-dl
```

If you are using `yt-dlp` (and I suggest using it for most of the time), just replace all `youtube-dl` with `yt-dlp`.

## Usage

To start the download

```bash
youtube-dl "url"
```

### Configuration

You will need to do further configuration to download a better quality file or for membership-only archives.

For Windows, the config files is located at `%APPDATA%\youtube-dl\config.txt` or `C:\Users\<user name>\youtube-dl.conf`.

```bash
-o 'D:\YouTube\(upload_date)s %(title)s.%(ext)s' # replace the directory
--embed-thumbnail
--format 'bestvideo+bestaudio/best/mp4'
--merge-output-format mp4
--add-metadata
--cookies '/home/ubuntu/cookies.txt' # replace the directory
```

For Ubuntu, the config file is located at `/etc/youtube-dl.conf`.

```bash
-o '/home/ubuntu/raw/(upload_date)s %(title)s.%(ext)s' # replace the directory
--embed-thumbnail
--format 'bestvideo+bestaudio/best/mp4'
--merge-output-format mp4
--add-metadata
--cookies '/home/ubuntu/cookies.txt' # replace the directory
```

Adding `--cookies cookies.txt` option helps downloading the member-only contents.

:::tip

You can also use `--format (bestvideo[vcodec=vp9]/bestvideo)+(bestaudio[acodec=opus]/bestaudio)/best/mp4` to prefer `vp9` + `opus` while also enable other formats as a fallback.

:::

Use this plugin to get a `cookies.txt` [ [Chrome](https://chrome.google.com/webstore/detail/get-cookiestxt/bgaddhkoddajcdgocldbbfleckgcbcid) ] [ [Firefox](https://addons.mozilla.org/en-US/firefox/addon/cookies-txt/) ]

### Manual Quality Select

You can manually check and select the quality or specify video / sound to download.

To check the available quality use `-F`

```bash
youtube-dl -F "link"
```

It will return a list like this

![result](./youtube-dl-0001.jpg)

To download the specific quality use `-f "video"+"audio"`

```bash
youtube-dl -f 303+251 "link"
```

### General .m3u8 Streams

The usage is basically the same but it will require some steps to extract the link.

Link extraction will be introduced [HERE](/tools/m3u8/)

## Tips

### No Archive Streams

No archive YouTube streams would need a process to hide the archive manually after the stream, so there would be a time gap between this.

If you are fast enough to start the download, YouTube won't break your connect as long your connections didn't break.

This is the same behavior you can see on YouTube apps, also applies to those copyright striken archive.

### Stream longer than 2 hours

`youtube-dl` has a [known and unsolved bug](https://github.com/ytdl-org/youtube-dl/issues/26330) mentioning it can only pull the last 2 hours right after the stream ends.

_e.g._ The stream is 3 hours long and YouTube would split it into [ 1 hour + 2 hour ] in the backend. So pulling the stream right after it ends would only be able to pull the last 2 hours half.

Unfortunately `youtube-dl` still not have fixed the bug yet.

So for those preannounced no archive streams, I suggest start the record using [kkr](/tools/kkr/) from the beginning in case the stream got longer than 2 hours.

### Workaround

::: danger Warning

There is _the only_ experimental workaround so far for `youtube-dl` .

_Use only when you have no other ways._

:::

In [issue#26330](https://github.com/ytdl-org/youtube-dl/issues/26330#issuecomment-803654248) , ehoogeveen-medweb provided a very experimental way to solve the problem by adding the missing segement number with a script.

You will need to install Node.js environment first [ [Ubuntu](/preparation/#node-js) ] [ [Windows](/tools/kkr/#windows) ].

Then download the provided `addMissingFragments.zip` and extract it in your working path.

Run the command to extract the `video.info.json` first

```bash
youtube-dl --output video --skip-download --write-info-json "youtube-url"
```

Then execute the addMissingFragments.js to retrieve the missing data.

```bash
node addMissingFragments "video.info.json"
```

Last download all segement using this command

```bash
youtube-dl --load-info-json "video.info.json"
```

This should at least grab a complete archive, but also as mentioned by mmis1000 this is not even technically a _workaround_. The script requires Node.js plus it might not being able to provide the highest quality of the archive for some reason. But since this is _the only_ working method out there, I decided to write it here but use at your own risk.
