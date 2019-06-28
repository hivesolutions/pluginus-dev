
/**
 * The main message handler method that will receive all of the
 * messages sent to this background script.
 * 
 * @param {Request} request The request that is being sent.
 * @param {Element} sender The sender entity reponsible for the message.
 * @param {Function} sendResponse The response (bi-directional communication)
 * to be used to send data.
 */
function handleMessage(request, sender, sendResponse) {
    if (sender.url !== browser.runtime.getURL("/devtools/panel/panel.html")) {
        return;
    }
    browser.tabs.executeScript(
        request.tabId, {
            code: request.script
        });
}

// registers the message listener that will handle all of
// the messages sent to theis background script
chrome.runtime.onMessage.addListener(handleMessage);
