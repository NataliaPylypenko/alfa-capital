$(document).ready(function () {


    $('.contact-us').on('click', function (event) {
        event.preventDefault();
        var modal = $('#contactModal');
        modal.show();

        bindPopupEvents();
    });

    function bindPopupEvents() {
        var modal = $('#contactModal');
        var modalContent = $('#contactModal .modal-content');
        var modalCloseBtn = $('#contactModal .modal-content .close');
        var modalSendBtn = $('#contactModal .modal-content .send');
        var buyBtn = $('.contact-us');

        $(window).on('click', function (e) {
            if (!modalContent.is(e.target) &&
                modalContent.has(e.target).length === 0 &&
                !buyBtn.is(e.target)) {
                modal.hide();
            }
        });

        modalCloseBtn.on('click', function () {
            modal.hide();
        });

        modalSendBtn.on('click', function () {
            modal.hide();
            return false;
        });
    }



    $('.info').on('click', function (event) {
        event.preventDefault();
        var modal = $('#infoModal');
        modal.show();

        infoModalEvents();
    });

    function infoModalEvents() {
        var modal = $('#infoModal');
        var modalContent = $('#infoModal .modal-content-info');
        var modalCloseBtn = $('#infoModal .modal-content-info .close');
        var modalCloseInfoBtn = $('#infoModal .modal-content-info .close-info');

        var buyBtn = $('.info');

        $(window).on('click', function (e) {
            if (!modalContent.is(e.target) &&
                modalContent.has(e.target).length === 0 &&
                !buyBtn.is(e.target)) {
                modal.hide();
            }
        });

        modalCloseBtn.on('click', function () {
            modal.hide();
        });

        modalCloseInfoBtn.on('click', function () {
            modal.hide();
            return false;
        });
    }



    // scroll top
    $(".scroll_top").click(function (e) {
        e.preventDefault();
        $("html, body").animate({scrollTop: 0}, 600);
        return false;
    });

    $(window).scroll(function () {

        if ($(window).scrollTop() > $(window).height()) {
            $(".scroll_top").fadeIn();
        } else if ($("body").scrollTop() < $(window).height()) {
            $(".scroll_top").fadeOut();
        }
    });


    // When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
        if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
            document.getElementById("top-nav").style.background = "rgba(0, 0, 0, 0.9)";
            document.getElementById("top-nav").style.padding = "15px 0";
        } else {
            document.getElementById("top-nav").style.background = "transparent";
            document.getElementById("top-nav").style.padding = "40px 0 20px";
        }
    }

    // smooth scrolling
    $("#navbar-nav .go-to").on("click", function (event) {
        event.preventDefault();

        var id  = $(this).attr('href'),

        top = $(id).offset().top;
        top = top - 90;

        $('body,html').animate({scrollTop: top}, 1500);
    });


    $('.menu-btn').on('click', function (e) {
        e.preventDefault();
        $('#navbar-nav').toggleClass('responsive');
    });



  // owl-carousel
    $('.owl-carousel').owlCarousel({
        loop:true,
        // margin:10,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:false,
                dots:true
            },
            768:{
                items:3,
                nav:false,
                dots:true
            }
        }
    })


});