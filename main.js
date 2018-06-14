console.log("hello");

function main() {
    $('.experiences').hide();
    $('.experiences').fadeIn(1000);
    $('#photos').hide();
    $('#photos').fadeIn(1000);
    $('.story').hide();

    $('#poetry-out-loud').on('click', function() {
        $(this).next().slideToggle(400);
    });

    $('#peru').on('click', function() {
        $(this).next().slideToggle(400);
    });

    $('#make-school').on('click', function() {
        $(this).next().slideToggle(400);
    });
}

$(document).ready(main);
