$(document).ready(function () {
    var activeElement;
    //select active menu on page load
    var pageName = $('.page-selector').data('page-name');
    switch (pageName) {
        case 'dashboard': $('.menu-items.dashboard').addClass('active');
            activeElement = $('.menu-items.dashboard');
            break;
        case 'user-report': $('.menu-items.user-report').addClass('active');
            activeElement = $('.menu-items.user-report');
            break;
        case 'lead-reports': $('.submenu').removeClass('hidden-content'); //always show submenu on lead report
            $('.lead-reports').removeClass('sub-menu-closed');
            $(this).find('.dropdown-arrow').html('<i class="fas fa-chevron-up sidebar-icon"></i>');
            if($('#no-commit-data').length) activeElement = $('#no-commit-sub-menu');
            else if ($('#full-commit-data').length) activeElement = $('#full-commit-sub-menu');
            activeElement.addClass('active');
            break;
        default: break;
    }
    $('.menu-items').on('click', function () {
        if($(this).hasClass('lead-reports')){ //show & hide submenu
            if($(this).hasClass('sub-menu-closed')){
                $(this).removeClass('sub-menu-closed'); // opening submenu
                $('.submenu').removeClass('hidden-content');
                $(this).find('.dropdown-arrow').html('<i class="fas fa-chevron-up sidebar-icon"></i>');
            } 
            else {
                $(this).addClass('sub-menu-closed'); // closing submenu
                $('.submenu').addClass('hidden-content'); 
                $(this).find('.dropdown-arrow').html('<i class="fas fa-chevron-down sidebar-icon"></i>');
            }
            return;
        }
        if (activeElement) activeElement.removeClass('active');//active selected menu
        $(this).addClass('active');
        activeElement = $(this);
        addPageLoader('.rendered-page');
    });
});
//general loader function
function addPageLoader(loaderDivClass) {
    $(loaderDivClass).html('<div class="page-navigation-loader"><img src="/static/images/Ellipsis-1s-200px.gif"></img></div>');
}