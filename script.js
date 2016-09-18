var hi = 'test'
function allowDrop(ev) {
    ev.preventDefault();
};
function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
};
function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
};
function open_side_menu() {
    document.getElementById("side_menu_bar").style.width = "100%";
};
function close_side_menu() {
    document.getElementById("side_menu_bar").style.width = "0";
};
$(document).ready(function() {
    $('.fa-bars').hide();
});
$(window).on("resize", function() {
   if ($(window).width() < 650) {
        $('.navbar').hide();
        $('.fa-bars').show();
   } else {
       $('.navbar').show();
       $('.fa-bars').hide();
   }
});