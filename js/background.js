chrome.extension.onMessage.addListener(
    function (request, sender, sendResponse) {
        if (request.method === "getLocalStorage") {
            var response = undefined;
            if (request.key in localStorage) {
                response = JSON.parse(localStorage[request.key]);
            }
            sendResponse({data:response});
        }
    }
);
