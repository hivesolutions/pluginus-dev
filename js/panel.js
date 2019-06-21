window.onload = function () {
    chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
        if (changeInfo.status !== "complete") {
            return;
        }
        chrome.devtools.inspectedWindow.eval(
            "[manager.version, manager.plugins.map(v => v.getName())]",
            function (result, err) {
                if(err && err.isException) {
                    document.getElementById("plugins").innerHTML = "No Pluginus available";
                } else {
                    [version, plugins] = result;
                    const info = {version, plugins}
                    showInfo(info);
                }
            }
        );
    });
};

const showInfo = function (info) {
    const pluginsElement = document.getElementById("plugins");
    pluginsElement.innerHTML = "";

    let pluginsHtml = `<div>Pluginus version ${info.version}</div>`;

    for (const plugin of plugins) {
        pluginsHtml += `<div>${plugin}</div>`;
    }

    pluginsElement.innerHTML = pluginsHtml;
};
