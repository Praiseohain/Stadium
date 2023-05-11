$(document).ready(function() {
    
    
    /* For the sticky navigation */
    $('.js--section-product').waypoint(function(direction) {
        if (direction == "down") {
            $('nav div').addClass('sticky');
        } else {
            $('nav div').removeClass('sticky');
        }
    }, {
      offset: '60px;'
    });
})