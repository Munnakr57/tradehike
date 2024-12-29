$(document).ready(function () {
    $("input").on("focus", function () {
        $(this).addClass("shrink-placeholder");
    });

    $("input").on("blur", function () {
        if (!$(this).val()) { // Only remove class if input is empty
            $(this).removeClass("shrink-placeholder");
        }
    });
});
