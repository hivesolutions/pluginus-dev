function handleMessage(request, sender, sendResponse) {
    if (sender.url != browser.runtime.getURL("/devtools/panel/panel.html")) {
        return;
    }
    browser.tabs.executeScript(
        request.tabId, {
            code: request.script
        });
}

chrome.runtime.onMessage.addListener(handleMessage);
