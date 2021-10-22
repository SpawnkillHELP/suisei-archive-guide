# kkr

[ [kkr](https://github.com/Last-Order/kkr) ]

This is the project mainly focused on YouTube live stream recording, especially useful for an unarchived stream.

Since `youtube-dl` doesn't perform well on live recording, I suggest using this tool as an alternative.

## Target Site

- YouTube

## Installation

Please read [ [Preparation](/preparation/) ] before proceeding.

### Windows

Check [Node.js official site](https://nodejs.org/) and download the `LTS` version.

To check if installation is successful, type `npm version` to see if it returns value.

### Ubuntu

See [Preparations](/preparation/#node-js) to install `npm` `ffmpeg` and `node.js` environment.

Once done with installation, install by `npm`

```bash
npm i -g kkr
```

## Usage

```bash
kkr -d "<youtube link>" --live
```

It also supports stream pre-scheduling, which means you can start the recording session before the stream starts and it will automatically start recording when the stream begins.
