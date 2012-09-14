$(document).ready(function(){
    $(document).ready(function(){
            $(function() {
            
                // this is so links open in parent window, not in the popup
                $("#pp_full_res a").attr("target", "_parent");   
                
                // add ajax attributes for links for popupworkflow'
                $(".state-popuppublished").attr("href", function() { 
                    return this.href + "?ajax_load=1&ajax_include_head=1?ajax=true=true&width=300px&height=500px";
                }).attr({"rel": "prettyPhoto"});
                
                // add iframe attributes for links with name galleri'
                $(".section-galleri .state-popuppublished").attr("href", function() { 
                    return this.href + "?ajax_load=1&ajax_include_head=1?iframe=true&width=300px&height=500px";
                }).attr({"rel": "prettyPhoto"});

                // add rel tag for all links with class 'prettyPhoto'
                $("a.prettyPhoto").attr({"rel": "prettyPhoto"});

                // add iframe attributes for all links with class 'prettyPhotoIframe'
                $("a.prettyPhotoIframe").attr("href", function() {
                    return this.href + "?iframe=true&width=300px&height=500px";
                }).attr({"rel": "prettyPhoto"});
                


                // enable prettyPhoto
                $("a[rel^='prettyPhoto']").prettyPhoto({
                    animation_speed: 'normal', /* fast/slow/normal */
                    opacity: 0.80, /* Value between 0 and 1 */
                    show_title: true, /* true/false */
                    counter_separator_label: '/', /* The separator for the gallery counter 1 "of" 2 */
                    theme: 'pp_default',
                    autoplay: true, /* Automatically start videos: true/false */
                    autoplay_slideshow: false,
                    slideshow: false, /* false OR interval time in ms */
                    overlay_gallery: false, /* If set to true, a gallery will overlay the fullscreen image on mouse over */
                    social_tools: false, /* html markup for social tool icons */
                    deeplinking: false, /* allow prettyphoto to rewrite url for direktlinking to an image */
                    markup: undefined,
                });
            });
        });
    })(jQuery);