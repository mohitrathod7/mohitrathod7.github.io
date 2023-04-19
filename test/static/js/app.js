// TO HIDE|DEFER FONT-TEXT|IMAGES WHILE LOADING PAGE
function defer(){
    var imgDefer = document.getElementsByTagName('img');

    for (var i = 0; i < imgDefer.length; i++) {
        if (imgDefer[i].getAttribute('data-src')) {
            imgDefer[i].setAttribute('src', imgDefer[i].getAttribute('data-src'));
            imgDefer[i].removeAttribute('data-src');
        }
    }

}

document.addEventListener("DOMContentLoaded", function(){
    defer();
});

$(window).on('load', function() {
    $('.material-icons').css('visibility', 'visible');
    $('.content').css('visibility', 'visible');
    $('.loader').remove();
});

$("body").on('click', '.password-icon', function(){
    var input = $(".password");

    if (input.attr("type") == "password"){
        input.attr("type", "text");
        $('.password-icon').css('display', 'none');
        $('.password-icon.invisible').css('display', 'block');
    }
    else{
        input.attr("type", "password");
        $('.password-icon').css('display', 'block');
        $('.password-icon.invisible').css('display', 'none');
    }
});

$(document).ready(function(){
    $('.goback').click(function(){
        parent.history.back();
        return false;
    });
});