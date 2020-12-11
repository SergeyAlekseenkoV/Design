// events on nav
$(document).ready(function() {
    $('#leftToggling').click(function() {
        document.getElementById('navbarTogglerDemo01').style.zIndex='5';
    });
    $('#leftCollapse').click(function() {
        document.getElementById('navbarTogglerDemo01').style.zIndex='3';
    });
    $('#blockMenu').click(function() {
        $('#menu-user-lg').css("display","block");
    });
    $('#innerMenuUserLg').mouseleave(function() {
        $('#menu-user-lg').css("display","none");
    });
});
// rotation menu
$(document).ready(function() {
        var click = 0;
        $('#leftRotate').click(function() {
            if(click == 0) {
                $('#rotate').css('transform', 'translateX(-81.5vw)');
                click = 1;
            } else if(click == 1) {
                $('#rotate').css('transform', 'translateX(-142vw)');                
                click = 0;
            } else {
                return false;
            }
        $('#rightRotate').click(function() {
            $('#rotate').css('transform', 'translateX(0vw)');
        });
    });
});
// carousel
$(document).ready(function () {
    $('.rotation-container').slick({
        dots: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 6000,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });
});
// tooltips from bootstrap
$(function () {
    $('[data-toggle="tooltip"]').tooltip()
});
// button scrollTo-top
$(document).ready(function () {

    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.scrollup').fadeIn();
        } else {
            $('.scrollup').fadeOut();
        }
    });

    $('.scrollup').click(function () {
        $("html, body").animate({scrollTop: 0}, 800);
        return false;
    });
});