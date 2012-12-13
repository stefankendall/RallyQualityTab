(function () {

    chrome.extension.onMessage.addListener(
        function (request, sender, sendResponse) {
            if (request && request.refresh) {
                location.reload();
            }
        }
    );

    chrome.extension.sendMessage({is_toggled_on:true}, function (response) {
        if (response && response.is_toggled_on) {
            function injectJs(links) {
                var script = document.createElement("script");
                script.type = "text/javascript";
                script.src = links[0];
                var callback = function () {
                    if (links.length > 1) {
                        injectJs(links.slice(1));
                    }
                };
                script.addEventListener('load', callback, false);

                (document.head || document.body || document.documentElement).appendChild(script);
            }

            injectJs([
                chrome.extension.getURL("js/lib/jquery-1.8.2.min.js"),
                chrome.extension.getURL("js/navigation/remove_quality_tab.js")
            ]);
        }
    });

})();
