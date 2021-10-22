# rget

[ [rget](https://github.com/wasamas/rget) ]

This is a project mainly focused on recording radio stations, but here we use it to solve the [Hibiki Radio Station](http://hibiki-radio.jp/) .

Hibiki Radio Station streams encrypted .m3u8 so it cannot be downloaded in normal ways. You will also need a Japan IP to listen / download .

## Target Site

- Hibiki Radio Station
- etc.

## Installation

Please read [ [Preparation](/preparation/) ] before proceeding.

### Windows

Check [Ruby official site](https://rubyinstaller.org/) to download the installer and install it.

### Ubuntu

Install `ruby-full` first

```bash
sudo apt install ruby-full
```

Then you can install `rget` by using `gem`

```bash
sudo gem install rget
```

## Usage

::: warning
This program has only tested on Ubuntu, Windows users are advised to be careful in its usage.
:::

For example, Suisei has been on RAS' radio program, so here's how to add the template

```bash
# save a template of the radio program config
rget yaml https://hibiki-radio.jp/description/ras/detail >> ~/.rget
```

The format of the url is `/description/<short name>`, so `ras` is the short name of the program.

Type the command like this to start downloading

::: tip

Default output is `.mp3` format.
Add `--no-mp3` flag to output a raw `.ts` file.

:::

```bash
rget ras --no-mp3
```

`ras` should be replaced with the short name of the target radio program going to be downloaded.

If `rget` kept response error related with `PATH`, then edit `~/.rget` and set `path: .` this should fix the problem.
