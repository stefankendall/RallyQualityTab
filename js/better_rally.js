(function () {

    chrome.extension.onMessage.addListener(
        function (request, sender, sendResponse) {
            if (request.refresh) {
                location.reload();
            }
        }
    );

    var RALLY_UTIL_OPTIONS = ["rally_utils.interesting_builds"];
    var _optionIndex;
    for (_optionIndex = 0; _optionIndex < RALLY_UTIL_OPTIONS.length; ++_optionIndex) {
        var optionKey = RALLY_UTIL_OPTIONS[_optionIndex];
        chrome.extension.sendMessage({method:"getLocalStorage", key:optionKey}, function (response) {
            localStorage[optionKey] = JSON.stringify(response.data);
        });
    }

    chrome.extension.sendMessage({is_toggled_on:true}, function (response) {
        if (response.is_toggled_on) {
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
                chrome.extension.getURL("js/lib/underscore-min.js"),
                chrome.extension.getURL("js/lib/date.js"),
                chrome.extension.getURL("js/util/polling.js"),
                chrome.extension.getURL("js/navigation/trim_navigation_menu.js")
            ]);
        }
    });

})();