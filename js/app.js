$(document).ready(function(){
    $('.ryu').mouseenter(function(){
        $('.ryu-still').hide();
        $('.ryu-ready').show();
    })
    .mouseleave(function() {
        $('.ryu-still').show();
        $('.ryu-ready').hide();
    })
    .mousedown(function(){
        playHadouken();
        $('.ryu-action').hide();
        $('.ryu-throwing').show();
        $('.hadouken').finish().show().animate(
            {'left': '1020px'},
            500,
            function(){
                $(this).hide();
                $(this).css('left', '520px');
            });
    })
    .mouseup(function(){
        $('.ryu-action').hide();
        $('.ryu-ready').show();
    });

$(document).keydown(function(e) {
        if(e.which == 88) {
            playCool();
            $('.ryu-action').hide();
            $('.ryu-cool').show();
        }       
    }).keyup(function(e) {
        if(e.which == 88) {
            $('#cool')[0].pause()
            $('.ryu-cool').hide();
            $('.ryu-still').show();
        }
    });
});


function playHadouken() {
        $('#hadouken-sound')[0].volume = 0.5;
        $('#hadouken-sound')[0].load();
        $('#hadouken-sound')[0].play();
    };

function playCool() {
    $('#cool')[0].volume = 0.5;
    $('#cool')[0].load();
    $('#cool')[0].play();
}
