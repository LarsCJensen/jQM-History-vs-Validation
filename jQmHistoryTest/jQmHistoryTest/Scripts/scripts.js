$(function () {
    $(document).bind("pagebeforechange", function (e, data) {
        if (typeof data.toPage === "string") {
            var fromPage = data.options.fromPage.attr('id');
            var toPage = data.toPage;
            if (pageConditionsMet(fromPage, toPage)) {
                e.preventDefault();
                if ($("#text1").val() == "" || $("#date1").val() == "") {
                    $("#dialog").jqmData("pageToChangeTo", fromPage);
                    $("#dialogLabel").text("You must fill both the boxes before you can move back!");
                    $("#lnkDialog").click();
                }
            }
        }
    });

    function pageConditionsMet(fromPage, toPage) {
        if (toPage.toString().search("#dialog") != "-1")
            return false;
        if (fromPage == "page3" && $("#cancel").val() != "Canceled")
            return true;
        return false;
    }

    $("#page3").live("pagebeforeshow", function () {
        $("#cancel").val("Cancel");
        $("#cancel").unbind('click').bind('click', function () {
            $("#cancel").val("Canceled");
            history.go(-1);
        });
    });

    $("#dialog").live("pagebeforeshow", function () {
        $("#dialogOkClose").unbind('click').bind('click', function () {
            $('.ui-dialog').dialog('close');
        });
        $("#dialogOkChangePage").unbind('click').bind('click', function () {
            var pageToChangeTo = "#" + $("#dialog").jqmData("pageToChangeTo");
            $.mobile.changePage(pageToChangeTo, { transition: 'none' });
        });
    });

});