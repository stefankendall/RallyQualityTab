(function () {
    function injectJs(links) {
        var script = document.createElement("script");
        script.type = "text/javascript";
        script.src = links[0];
        script.addEventListener('load', function () {
            if (links.length > 1) {
                injectJs(links.splice(1));
            }
        }, false);

        (document.head || document.body || document.documentElement).appendChild(script);
    }

    chrome.extension.sendMessage({method:"getLocalStorage", key:"rally_utils.tabToggles"}, function (response) {
        localStorage["rally_utils.tabToggles"] = JSON.stringify(response.data);
        injectJs([
            chrome.extension.getURL("js/lib/jquery-1.8.2.min.js"),
            chrome.extension.getURL("js/remove_tabs.js")
        ]);
    });
}());
