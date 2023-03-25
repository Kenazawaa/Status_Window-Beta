$(document).ready(function(){
    // expand and colapse
    $('.sidebar-OPEN').click(function(){
        $('.menu-SIDEBAR').addClass('active');
        $('sidebar-OPEN').css("visibility", "hidden");
    });

    // for close buton
    $('.close-btn').click(function(){
        $('.menu-SIDEBAR').removeClass('active');
        $('sidebar-OPEN').css("visibility", "visible");
    });
    
    //for menu toggle
    $('.menuBTN-EXPAND').click(function(){
        $(this).next('.sub-OPTIONS').slideToggle(270);
        $(this).find('.dropdown').toggleClass('rotate');
    });
})