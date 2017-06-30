# ChanCoin-for-4chan
A ChanCoin browser extension for 4chan
## General Information
This extension adds a tip button to 4chan posts with the following name format: `$4CHN:address`

If you want to receive tips through this extension, you MUST set your name on 4chan to this format. For example: `$4CHN:CbkMmgphehVHQo27tWEzNzLCbEKkwaBwwL`

Once installed, correctly-formatted 4chan posts will have an additional "Tip poster" button in their dropdown box.

![Tip button](http://i.imgur.com/weaL2Q1.png)

Clicking on this button will open a prompt that allows you to specify how much you would like to send.

## Installation

### Step 1
The first step is to run the ChanCoin wallet in server mode. This allows the extension to connect to it.

To do this, we'll create a configuration file in the wallet's data folder. This folder is located at `%appdata%/chancoin` on Windows and `/home/<username>/.chancoin` on Linux. You can [download](https://raw.githubusercontent.com/Michael4CHN/ChanCoin-for-4chan/master/chancoin.conf) the .conf file from the repository or copy and paste the following:


```
rpcuser=username
rpcpassword=password
rpcallowip=127.0.0.1
rpcport=43814
server=1
```

Save this file as `chancoin.conf`.

If the wallet is currently running, it will need to be restarted before the changes take effect.

### Step 2
The next step is to install a userscript extension if you don't already have one. I recommend [Tampermonkey](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo) on Google Chrome and [Greasemonkey](https://addons.mozilla.org/en-gb/firefox/addon/greasemonkey/) on Mozilla Firefox.

Once the userscript extension is installed, all you need to do is [click here](https://github.com/Michael4CHN/ChanCoin-for-4chan/raw/master/chancoin4chan.user.js) to install the extension.

___

If you like what I do, feel free to donate!

4CHN: `CbkMmgphehVHQo27tWEzNzLCbEKkwaBwwL`

BTC: `1LZmUtqwsRbAdtw2wJQV8PXmLW8qia91s5`
