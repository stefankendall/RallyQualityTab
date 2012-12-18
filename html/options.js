(function () {
    var tabs = ["My Home", "Plan", "Track", "Quality", "Reports", "Search"];
    var key = "rally_utils.tabToggles";

    function saveToggles(toggles) {
        localStorage[key] = JSON.stringify(toggles);
    }

    function loadToggles() {
        if (!(key in localStorage)) {
            var toggles = {};
            tabs.forEach(function (tab) {
                toggles[tab] = true;
            });
            toggles["Quality"] = false;
            saveToggles(toggles);
        }

        return JSON.parse(localStorage[key]);
    }

    function getToggleStatusOfTab(tab) {
        return loadToggles()[tab] ? "Enabled" : "Disabled";
    }

    function toggleTab(tab, jQueryNode) {
        var toggles = loadToggles();
        toggles[tab] = !toggles[tab];
        saveToggles(toggles);

        jQueryNode.text(getToggleStatusOfTab(tab));
    }

    var table = $('<table/>').appendTo($('body'));
    tabs.forEach(function (tab) {
        $('<tr/>').append(
            $('<td/>').append(tab),
            $('<td/>').append(
                $('<button/>').append(getToggleStatusOfTab(tab)).on('click', function () {
                    toggleTab(tab, $(this));
                })
            )
        ).appendTo(table);
    });
}());
