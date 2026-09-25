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
        strings: ["Cloud / DevOps",
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


// ===============================
// PORTFOLIO SHARE OPTIONS
// ===============================

const portfolioURL = window.location.href.split("#")[0];
const portfolioTitle = "Prashant Mahor - IT Infrastructure, Cloud & DevOps Portfolio";


// Copy Portfolio Link
document.getElementById("copy-link").addEventListener("click", function(e) {
    e.preventDefault();

    navigator.clipboard.writeText(portfolioURL)
        .then(() => {
            alert("Portfolio link copied!");
        })
        .catch(() => {
            alert("Unable to copy link.");
        });
});


// Share on LinkedIn
document.getElementById("share-linkedin").addEventListener("click", function(e) {
    e.preventDefault();

    const linkedInURL =
        "https://www.linkedin.com/sharing/share-offsite/?url=" +
        encodeURIComponent(portfolioURL);

    window.open(linkedInURL, "_blank");
});


// Share via Email
document.getElementById("share-email").addEventListener("click", function(e) {
    e.preventDefault();

    const subject = encodeURIComponent(
        "Prashant Mahor - Professional Portfolio"
    );

    const body = encodeURIComponent(
        "Hi,\n\nPlease take a look at my professional portfolio:\n\n" +
        portfolioURL +
        "\n\nRegards,\nPrashant Mahor"
    );

    window.location.href =
        `mailto:?subject=${subject}&body=${body}`;
});


// Share on WhatsApp
document.getElementById("share-whatsapp").addEventListener("click", function(e) {
    e.preventDefault();

    const message = encodeURIComponent(
        `${portfolioTitle}\n\n${portfolioURL}`
    );

    window.open(
        `https://wa.me/?text=${message}`,
        "_blank"
    );
});