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
$(window).on("resize", function() {
   if ($(window).width() < 700) {
        $('.navbar').hide();
   } else {$('.navbar').show();}
});
$(document).ready(function() {
    $('td').on('click', function() {
        $('td').addClass(hi);
    });
});
$(document).ready(function() {
    $('#red_lion').on('click', function() {
        alert("is this working?");
    });
});
$(document).ready(function() {
    $('button').on('click', function() {
        
    });
});