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
    });
    $('#rightRotate').click(function() {
        $('#rotate').css('transform', 'translateX(0vw)');
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
// progress
// function changeColorCategory() {
//     var categotyIcon = document.getElementById('categoryIcon');
//     categoryIcon.style.color = '#59a840';
// }
$(document).ready(function() {
    $('#choseCategory').change(function() {
        $('#categoryIcon').css("color","#59a840");
    });

    $('#selectType').change(function() {
        $('#type').css("color","#59a840");
    });

    $('#goodsNameInput').change(function() {
        $('#goodsNameIcon').css("color","#59a840");
    });

    $('#priceCheck').change(function() {
        $('#priceIcon').css("color","#59a840");
    });

    $('#benefitial').change(function() {
        $('#priceIcon').css("color","#59a840");
    });
    
    $('#goodsDescription').change(function() {
        $('#goodsDescriptionIcon').css("color","#59a840");
    });

    $('#inputLocation').change(function() {
        $('#inputLocationIcon').css("color","#59a840");
    });

    $('#inputPhone').change(function() {
        $('#inputPhoneIcon').css("color","#59a840");
    });

    $('.custom-file-input').change(function() {
       $('#inputPhoto').css("color", "#59a840");
    })
})