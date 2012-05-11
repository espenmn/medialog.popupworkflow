
jq(document).ready(function(){
    jq(document).ready(function(){
        
        // this is so links open in parent window, not in the popup
        jq("#pp_full_res a").attr("target", "_parent");   

        // add rel tag for all links with class 'prettyPhoto'
        jq("a.prettyPhoto").attr({"rel": "prettyPhoto"});
        
        // add iframe attributes for links for popupworkflow'
        jq(".state-popuppublished").attr("href", function() { 
            return this.href + "?ajax_load=1&ajax_include_head=1&iframe=true&width=75%&height=75%";
        }).attr({"rel": "prettyPhoto"});
 

        // add iframe attributes for all links with class 'prettyPhotoIframe'
        jq("a.prettyPhotoIframe").attr("href", function() { 
            return this.href + "?iframe=true&width=75%&height=75%";
        }).attr({"rel": "prettyPhoto"});


        // enable prettyPhoto
        jq("a[rel^='prettyPhoto']").prettyPhoto({theme:'light_rounded'});
    });
});


