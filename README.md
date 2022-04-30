# Defibrillator

Defibrillator is a simple [Wake on Lan](https://en.wikipedia.org/wiki/Wake-on-LAN) tool that uses [cloudflare access](https://www.cloudflare.com/products/zero-trust/access/) + a raspberry pi to remotely turn on machines that sit in your private network without the need of port forward or static IP's.

## Requirements

* Raspberry Pi (tested on 3B+ with Raspberry Pi OS Lite bullseye)
* [node.js](https://nodejs.org/en/) version 18.0.0
* Cloudflare free account
* [Enable wake on lan on your machine](https://www.intel.co.uk/content/www/uk/en/support/articles/000006002/boards-and-kits/desktop-boards.html) (link for intel BIOS)
* The Mac address of the node you want to turn on

# Configure the raspberry pi

* To Do

## Testing locally

```bash
npm install
npm start
```

Put this on your browser url to see the interface:

http://localhost:3000

## Test

```bash
npm test
```

## ToDo

* Add a self hosted runner for github actions to run tests on Arm machines
