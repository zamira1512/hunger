$(document).ready(function(){


    $("#header-burger").click(function () {
        $(".burger span").toggleClass("active")
        $(".header .nav").toggleClass("active")
    });


    $("#slider").owlCarousel({
        loop: true,
        items: 1,
        dots: true,
        touchDrag: true,
    });

    var owl = $('#slider');
    owl.owlCarousel();
// Go to the next item
    $('.customNextBtn').click(function() {
        owl.trigger('next.owl.carousel');
    });
// Go to the previous item
    $('.customPrevBtn').click(function() {
        // With optional speed parameter
        // Parameters has to be in square bracket '[]'
        owl.trigger('prev.owl.carousel', [300]);
    });


    $('ul.menu__tabs-btns').on('click', 'li:not(.active)', function() {
        $(this)
            .addClass('active').siblings().removeClass('active')
            .closest('div.menu__tabs').find('div.menu__content').removeClass('active').eq($(this).index()).addClass('active');
    });

});

