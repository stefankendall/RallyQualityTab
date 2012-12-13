(function () {
    var is_toggled_on;

    var refresh_tab = function () {
        chrome.tabs.getSelected(null, function (tab) {
            chrome.tabs.sendMessage(tab.id, {refresh:true});
        });
    };

    var toggle_on_off = function () {
        if (is_toggled_on) {
            is_toggled_on = false;
            chrome.browserAction.setIcon({path:"images/icon128_off.png"});
        } else {
            is_toggled_on = true;
            chrome.browserAction.setIcon({path:"images/icon128.png"});
        }
        refresh_tab();
    };

    toggle_on_off();

    chrome.extension.onMessage.addListener(
        function (request, sender, sendResponse) {
            if (request.is_toggled_on) {
                sendResponse({is_toggled_on:is_toggled_on});
            }
        }
    );

    chrome.browserAction.onClicked.addListener(toggle_on_off);
})();

chrome.extension.onMessage.addListener(
    function (request, sender, sendResponse) {
        if (request && request.method === "getLocalStorage") {
            sendResponse({data:JSON.parse(localStorage[request.key])});
        }
    }
);
