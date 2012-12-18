(function () {
    var disabledTabs = (function () {
        var disabledToggles = [],
            toggles = JSON.parse(localStorage["rally_utils.tabToggles"]);
        for (var tab in toggles) {
            if (toggles.hasOwnProperty(tab) && !toggles[tab]) {
                disabledToggles.push(tab);
            }
        }
        return disabledToggles;
    }());

    document.addEventListener("DOMNodeInserted", function () {
        disabledTabs.forEach(function (tab) {
            $('a[Title|="' + tab + '"]').hide();
        });
    });
}());
