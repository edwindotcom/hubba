MS Plugin in a internal Chrome/Edge extension to make life a little easier. We don't bookmark as much as we used to and this extension puts common web links two clicks away.

## Installation

#### Webstore
* If you have a google webstore login, DM it to edwin.wong@microsoft.com or try group request: https://groups.google.com/d/forum/msplugin
* I'll add you, 
* goto: https://chrome.google.com/webstore and confirm you're logged in as the user from the prior step
* Open Edge(chromium)/Chrome and go to: https://chrome.google.com/webstore/detail/ms-launcher/jpfhhjaolopaikfnpljmjjhdmlgabckl
* Click `add to Chrome` to install, accept the prompt

#### Local install

* open a terminal and run:
```
git clone
cd msplugin
npm install
npm run build
```
* In EdgePreview/Chrome goto chrome://extensions
* toggle `Developer Mode`
* click `load unpacked extension`
* browse to the `/build` of this cloned repo
* look in tool tray for helix icon in browser
