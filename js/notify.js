
function notify(message, bg_color, fg_color, bg_src){
    var done = document.createElement('div');
    done.setAttribute('class', 'notify-done material-icons');
    done.innerHTML = 'done';
    done.addEventListener("click", function () {
        $(this).parent().addClass('notify-out');
        setTimeout(function(){
            done.parentNode.remove();
        }, 500);
    });

    var notification = document.createElement('div');
    notification.setAttribute('class', 'notify notify-in tight');
    if (bg_color) {
        notification.style.backgroundColor = bg_color;
    }
    if (fg_color) {
        notification.style.color = fg_color;
    }
    if (bg_src) {
        notification.style.backgroundImage = bg_src;
    }
    notification.setAttribute('data-ts', Date.now());
    notification.innerHTML = message;
    notification.appendChild(done);

    $('body').append(notification);
}
