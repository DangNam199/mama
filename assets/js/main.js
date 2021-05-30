$(document).ready(function(){
    $(".icon-open").click(function(){
        $('.tab-content').slideToggle();
        $('.abc').toggleClass('open');
    });
    function open_menu(){
        $('.bars').addClass('d-none');
        $('.header-close').addClass('d-inline-block');
        $('.p-nav').addClass('d-block');
    }
    function close_menu(){
        $('.bars').removeClass('d-none');
        $('.header-close').removeClass('d-inline-block');
        $('.p-nav').removeClass('d-block');
    }
    function open_search(){
        $('.search-show').addClass('d-block');
        $('.search').addClass('d-none');
        $('.header-close1').addClass('d-inline-block');
    }
    function close_search(){
        $('.search-show').removeClass('d-block');
        $('.search').removeClass('d-none');
        $('.header-close1').removeClass('d-inline-block');
    }
    $(".bars").click(function(){
        open_menu();
        close_search();
    });
    $(".header-close").click(function(){
        close_menu();
    });
    $(".search").click(function(){
        open_search();
        close_menu();
    });
    $(".header-close1").click(function(){
        close_search();
    });
});



