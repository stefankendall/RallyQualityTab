(function () {
    document.addEventListener("DOMNodeInserted", function () {
        $('a[Title|="Quality"]').remove();
    });
})();

