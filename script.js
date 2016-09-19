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
    if ($(window).width() < 650) {
        $('.navbar').hide();
        $('.fa-bars').show();
        $('#title').removeClass('animal_chess');
        $('#title').addClass('header_font_change');
   } else {
       $('.navbar').show();
       $('.fa-bars').hide();
   }
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
$(document).ready(function() {
    $('#red_cow').mouseover(function() {
        $('#col_1_2, #col_2_1').addClass('highlight_red');
    })
    $('#red_cow').mouseleave(function() {
        $('#col_1_2, #col_2_1').removeClass('highlight_red');
    })
});
$(document).ready(function() {
    $('#red_lion').mouseover(function() {
        $('#col_1_1, #col_1_3, #col_2_2').addClass('highlight_red');
    })
    $('#red_lion').mouseleave(function() {
        $('#col_1_1, #col_1_3, #col_2_2').removeClass('highlight_red');
    })
});
$(document).ready(function() {
    $('#red_rabbit').mouseover(function() {
        $('#col_2_2').addClass('highlight_red');
    })
    $('#red_rabbit').mouseleave(function() {
        $('#col_2_2').removeClass('highlight_red');
    })
});
$(document).ready(function() {
    $('#red_sheep').mouseover(function() {
        $('#col_3_2').addClass('highlight_red');
    })
    $('#red_sheep').mouseleave(function() {
        $('#col_3_2').removeClass('highlight_red');
    })
});
$(document).ready(function() {
    $('#blue_cow').mouseover(function() {
        $('#col_3_3, #col_4_2').addClass('highlight_blue');
    })
    $('#blue_cow').mouseleave(function() {
        $('#col_3_3, #col_4_2').removeClass('highlight_blue');
    })
});
$(document).ready(function() {
    $('#blue_tiger').mouseover(function() {
        $('#col_3_2, #col_4_1, #col_4_3').addClass('highlight_blue');
    })
    $('#blue_tiger').mouseleave(function() {
        $('#col_3_2, #col_4_1, #col_4_3').removeClass('highlight_blue');
    })
});
$(document).ready(function() {
    $('#blue_rabbit').mouseover(function() {
        $('#col_3_2').addClass('highlight_blue');
    })
    $('#blue_rabbit').mouseleave(function() {
        $('#col_3_2').removeClass('highlight_blue');
    })
});
$(document).ready(function() {
    $('#blue_sheep').mouseover(function() {
        $('#col_2_2').addClass('highlight_blue');
    })
    $('#blue_sheep').mouseleave(function() {
        $('#col_2_2').removeClass('highlight_blue');
    })
});
$(document).ready(function() {
    $('button').click(function() {
        alert('If you bring your mouse onto the animal you would like to play, it will show the possible movements!');
    })
});