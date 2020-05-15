function loading(){
	let	b = document.body;
	let e = document.getElementById('loader');
	let out = e.dataset.out ? e.dataset.out : '0';
	setTimeout(function(){ 
		if (!!b.classList.contains('loading')) {
			b.classList.add('loaded');
			b.classList.remove('loading');
		}
	}, out);
	if (!!e) {
	    e.addEventListener('transitionend', () =>{
	    	e.remove();
	    })
	}
}
loading();

