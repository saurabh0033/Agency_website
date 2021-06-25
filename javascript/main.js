
$(document).ready(function () {

    // menu Toggle button
    // $(".menu-toggle").click(function () {
    //     $('.menu-toggle').toggleClass('active');
    // })

    //owl carousel
    var owl = $('.projects');
    owl.owlCarousel({
        // loop: true,
        // margin: 20,
        // autoplay: true,
        // slideTransition: 'linear',
        // autoplayTimeout: 2000,
        // autoplaySpeed: 4000,
        // autoplayHoverPause: false,
        loop: true,
        margin: 10,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayspeed: 3000,
        autoplayHoverPause: false,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 3,
            },
            1000: {
                items: 3,
            }
        }
    });

    $('.projects').owlCarousel({
        loop: true,
        margin: 10,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            600: {
                items: 3,
                nav: false
            },
            1000: {
                items: 3,
                nav: true,
                loop: false
            }
        }
    })



    // feedback section. 
    var owl = $('.projects1');
    owl.owlCarousel({
        loop: true,
        margin: 20,
        autoplay: true,
        slideTransition: 'linear',
        autoplayTimeout: 4000,
        autoplaySpeed: 5000,
        autoplayHoverPause: false,
        responsiveClass: true,
        responsive: {
            0: {
                items: 2,
            },
            600: {
                items: 3,
            },
            1000: {
                items: 5,
            }
        }
    });
    $('.projects1').owlCarousel({
        loop: true,
        margin: 10,
        responsiveClass: true,
        responsive: {
            0: {
                items: 2,
                nav: true
            },
            600: {
                items: 3,
                nav: false
            },
            1000: {
                items: 5,
                nav: true,
                loop: false
            }
        }
    })

   
})



 // scroll top bar
 $(window).scroll(function() {
    var height = $(window).scrollTop();
    if (height > 100) {
        $('#back-to-top').fadeIn();
    } else {
        $('#back-to-top').fadeOut();
    }
});
$(document).ready(function() {
    $("#back-to-top").click(function(event) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });

});









  // navigation smooth scroll
    $("#navbarNav ul li a").click(function (event) {
        if (this.hash !== "") {

            event.preventDefault();

            var hash = this.hash;

            $('html,body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {
                window.location.hash = hash;
            });

            // add active class in navigation
            $("#navbarNav ul li a").removeClass("active")
            $(this).addClass("active");

        }
    })