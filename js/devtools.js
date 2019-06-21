function handleShown() {
    console.log("panel is being shown");
}

function handleHidden() {
    console.log("panel is being hidden");
}

chrome.devtools.panels.create(
    "Pluginus",
    "/images/icon.png",
    "/panel.html",
    panel => {
        panel.onShown.addListener(handleShown);
        panel.onHidden.addListener(handleHidden);
    }
);
