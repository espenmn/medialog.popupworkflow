$(document).ready(function(){
    $(document).ready(function(){
        
        // this is so links open in parent window, not in the popup
        $("#pp_full_res a").attr("target", "_parent");   

        // add rel tag for all links with class 'prettyPhoto'
        $("a.prettyPhoto").attr({"rel": "prettyPhoto"});
        
        // add iframe attributes for links for popupworkflow'
        $(".state-popuppublished").attr("href", function() { 
            return this.href + "?ajax_load=1&ajax_include_head=1?iframe=true";
        }).attr({"rel": "prettyPhoto"});

        // add iframe attributes for all links with class 'prettyPhotoIframe'
        $("a.prettyPhotoIframe").attr("href", function() { 
            return this.href + "?iframe=true";
        }).attr({"rel": "prettyPhoto"});


        // enable prettyPhoto
        $("a[rel^='prettyPhoto']").prettyPhoto({theme:'light_rounded'});
    });
});


