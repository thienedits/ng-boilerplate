$(document).ready(function() {
	
	$(function(){
    checkResolution();
});
	
});

function checkResolution() {
    // Resolution width > 960px
    if ($(window).innerWidth() > 960) {
        replaceImagePaths("desktop");
    }
	// Resolution < 960px
    else {
        replaceImagePaths("mobile");
    }
  
}


function replaceImagePaths(resolution) {
    // Switch images
    $('a.imagepopup').each(function(){
        var imagePath = $(this).attr('href');

        $(this).attr('href', imagePath.replace(/mobile|desktop/, resolution));//with the right regex you can do it all in one

    });//was missing the  ");"
}

$(window).resize(function() {
    checkResolution();
});

$(window).load(function() {
    var target_flexslider = $('.flexslider');
       target_flexslider.flexslider({
		 selector: "div.slides > section",
		 animation: "slide",
		 animationLoop: false,
		 slideshow: false,              
		 animationSpeed: 500,
         directionNav: true,
		 smoothHeight: true,
		 start: function(slider) {
               target_flexslider.removeClass('loading');
           }
    });
});