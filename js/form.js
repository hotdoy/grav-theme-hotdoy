(function ($) {
	'use strict';

	var ajaxForm = function(){
	    $('.ajax-form').each(function() {
	    	var form = $(this);
		    form.submit(function(e) {
		        e.preventDefault();

			    var loader = $('<div class="form-loader"></div>');
			    form.append(loader);
			    form.find('button').blur();
			    loader.fadeTo(500, 0.7);

		        $.ajax({
		            url: form.attr('action'),
		            type: form.attr('method'),
		            dataType: 'html',
		            data: form.serialize(),
		            success: function(result) {
		            	var message = $(result).find('.form-message').html();
		            	var	status = $(result).find('.form-message').attr('data-status');
		            	$(form)[0].reset();
		            	console.log('form submission success!');
		            	notify(message, status);
		            	loader.fadeOut(500);
		            },
		            error: function() {
		            	console.log('form submission failed!!!');
		            	notify('Submission failed. Refresh page and retry.', '#f44336');
		            	loader.fadeOut(500);
		            }
		        });
		    });
	    })
	}

	var init = function () {
		ajaxForm();
	};

	$(init);
})(jQuery);
