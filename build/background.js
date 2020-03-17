// Background.js 
// Enables context menu jump feature

function trimStr(s) {
  return s.replace(/^\/|^\@|\/$/g, "").trim()
}

function openGithub(info, tab) {
  let user = trimStr(info.selectionText)
  chrome.tabs.create({
    url: "https://github.com/" + user
  });
}

function openGist(info, tab) {
  let user = trimStr(info.selectionText);
  chrome.tabs.create({
    url: "https://gist.github.com/" + user
  });
}

function openPages(info, tab) {
  let user = trimStr(info.selectionText);
  chrome.tabs.create({
    url: `http://${user}.github.io`
  });
}

chrome.contextMenus.create({
  title: "Open github.com/%s",
  contexts: ["selection"],
  onclick: openGithub
});
chrome.contextMenus.create({
  title: "Open gist.github.com/%s",
  contexts: ["selection"],
  onclick: openGist
});
chrome.contextMenus.create({
  title: "Open %s.github.io",
  contexts: ["selection"],
  onclick: openPages
});
