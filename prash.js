$(document).ready(function () {
    $('#menu').click(function () {
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    $(window).on('scroll load', function () {
        $('#menu').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');

    });

    $('.certificates .button-container .btn').click(function () {
        let filter = $(this).attr('data-filter');

        if (filter == 'all') {
            $('.certificates .image-container .box').show('400')
        } else {
            $('.certificates .image-container .box').not('.' + filter).hide('200')
            $('.certificates .image-container .box').filter('.' + filter).show('400')
        }
    });

    $('#theme-toggler').click(function () {
        $(this).toggleClass('fa-sun');
        $('body').toggleClass('dark-theme');
    })

    // typing Animation script 

    var typed = new Typed(".typing", {
        strings: ["IT Infrastructure",
            "Cloud / DevOps",
            "AWS / Azure",
            "Docker / Kubernetes",
            "Terraform / Jenkins",
            "Python / Automation"],

        typeSpeed: 70,
        backSpeed: 40,
        backDelay: 1000,
        smartBackspace: false,
        loop: true
      

    });

    // smooth scrolling

    $('a[href*="#"]').on('click', function (e) {
        e.preventDefault();

        $('html, body').animate({

            scrollTop: $($(this).attr('href')).offset().top,

        },
            500,
            'linear'
        );

    })

});

// social-links toggle 


$(document).ready(function () {
    $('#trigger').click(function () {
        $(this).toggleClass('fa-times');
        $('menu').toggleClass('open');
    });

    $(window).on('scroll load', function () {
        $('#trigger').removeClass('fa-times');
        $('menu').removeClass('open');

    });

});

$(document).ready(function () {
    $(window).scroll(function () {
        if (this.scrollY > 500) {
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }

    });

});

//slide-up script
$('.scroll-up-btn').click(function () {
    $('html').animate({ scrollTop: 0 });
});