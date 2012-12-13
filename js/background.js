chrome.extension.onMessage.addListener(
    function (request, sender, sendResponse) {
        if (request.method === "getLocalStorage") {
            sendResponse({data:JSON.parse(localStorage[request.key])});
        }
    }
);
