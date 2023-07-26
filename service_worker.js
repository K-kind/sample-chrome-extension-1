chrome.contextMenus.create({
  id: "myExtension",
  title: "犬に変える",
  contexts: ["all"],
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.tabs.sendMessage(tabs[0].id, {});
  });
});
