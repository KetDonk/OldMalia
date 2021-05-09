function ip_load() {
    document.querySelector(".main-center-ip").addEventListener("click", function (e) {
        var range, selection;

        if (window.getSelection && document.createRange) {
            selection = window.getSelection();
            range = document.createRange();
            range.selectNodeContents(this);
            selection.removeAllRanges();
            selection.addRange(range);
        } else if (document.selection && document.body.createTextRange) {
            range = document.body.createTextRange();
            range.moveToElementText(this);
            range.select();
        }
    });
}