$(function () {

    $("iframe").not(":has([src])").each(function () {

    var ifrm = this;

    ifrm = (ifrm.contentWindow) ? ifrm.contentWindow : (ifrm.contentDocument.document) ? ifrm.contentDocument.document : ifrm.contentDocument;

    ifrm.document.open();
    ifrm.document.write($(this).attr("alt"));
    ifrm.document.close();

    });

});