// Make sure everything is ready before calling jQuery
$(document).ready(function () {
    
   // Set options
    var speed = 500; // The speed for the transition, when the arrows are clicked (Fade speed)
    var autoswitch = true; // Auto slider option
    var autoswitch_speed = 4000; // Auto slider speed
    
    
    // Add initial active class
    $('.slide').first().addClass('active');
    
    // Hide all slides
    $('.slide').hide();
    
    // Show first slide
    $('.active').show();
    
    // Go to the next slide - Next Handler
    $('#next').on('click', switchToNextSlide);
    
    // Go to the previous slide - Previous Handler
    $('#prev').on('click', switchToPreviousSlide);
    
    
    // Auto slider Handler
    if (autoswitch == true) {
        setInterval(switchToNextSlide, autoswitch_speed);
    }
    
    // Switch to the next slide
    function switchToNextSlide()
    {
             
        $('.active').removeClass('active').addClass('oldActive');
        
        if ($('.oldActive').is(':last-child')) { // if it is the last slide, then
            
            $('.slide').first().addClass('active'); // add the active class.
        
        } else {
            $('.oldActive').next().addClass('active')
        }
        
        $('.oldActive').removeClass('oldActive');
        $('.slide').fadeOut(speed);
        $('.active').fadeIn(speed);
            
    }
    
    // Switch to the previous slide
    function switchToPreviousSlide()
    {
        $('.active').removeClass('active').addClass('oldActive');
        
        if($('.oldActive').is(':first-child')) {
            
            $('.slide').last().addClass('active');
            
        } else {
            $('.oldActive').prev().addClass('active');
        }
        
        $('.oldActive').removeClass('oldActive');
        $('.slide').fadeOut(speed);
        $('.active').fadeIn(speed);
    }
    
});