function open_side_menu() {
    document.getElementById("side_menu_bar").style.width = "100%";
};
function close_side_menu() {
    document.getElementById("side_menu_bar").style.width = "0";
};
$(document).ready(function() {
    if ($(window).width() < 650) {
        $('.navbar').hide();
        $('.sideMenu').show();
        $('#title').addClass('header_font_change');
        $('#title').removeClass('animal_chess');
   } else {
       $('.navbar').show();
       $('.sideMenu').hide();
   }
});
$(window).on("resize", function() {
   if ($(window).width() < 650) {
        $('.navbar').hide();
        $('.sideMenu').show();
       $('#revivalMenuOpen').show();
   } else {
       $('.navbar').show();
       $('.sideMenu').hide();
       $('#revivalMenuOpen').hide();
   }
});