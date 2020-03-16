function openGithub(info, tab) {
  chrome.tabs.create({
    url: "https://github.com/" + info.selectionText
  });
}

function openGist(info, tab) {
  chrome.tabs.create({
    url: "https://gist.github.com/" + info.selectionText
  });
}

function openPages(info, tab) {
  chrome.tabs.create({
    url: `http://${info.selectionText}.github.io`
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
