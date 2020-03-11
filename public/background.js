function browse(info, tab) {
  chrome.tabs.create({
    url: "https://github.com/" + info.selectionText
  });
}

function pagesOpen(info, tab) {
  console.log("Word " + info.selectionText + " was clicked.");
  chrome.tabs.create({
    url: `http://${info.selectionText}.github.io`
  });
}

chrome.contextMenus.create({
  title: "Open github.com/%s",
  contexts: ["selection"],
  onclick: browse
});
chrome.contextMenus.create({
  title: "Open %s.github.io",
  contexts: ["selection"],
  onclick: pagesOpen
});
