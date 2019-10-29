
function notify(message, color){
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
    if (color) {
        notification.style.backgroundColor = color;
    }
    notification.setAttribute('data-ts', Date.now());
    notification.innerHTML = message;
    notification.appendChild(done);

    $('body').append(notification);
}
