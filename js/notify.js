function notify(message, bg_color, fg_color, id){
    let s = id ? localStorage.getItem(id) : null;     
    if (s == null || Date.now() - s > 86400000) {
        var done = document.createElement('div');
        done.setAttribute('class', 'notify__done material-icons');
        done.innerHTML = 'done';
        done.addEventListener("click", function () {
            $(this).parent().addClass('notify--destroy');

            if (!!id) {
               localStorage.setItem(id, Date.now()); 
            }
            setTimeout(function(){
                done.parentNode.remove();
            }, 1000);
        });

        var notice = document.createElement('div');
        notice.setAttribute('class', 'notify');
        if (!!bg_color) {
            notice.style.backgroundColor = bg_color;
        }
        if (!!fg_color) {
            notice.style.color = fg_color;
        }
        notice.innerHTML = message;
        notice.appendChild(done);

        $('body').append(notice);
    }
}
