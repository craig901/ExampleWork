$(document).ready(function() {

	'use strict';

	var nav = {

		init: function()
		{
			this.mobileToggle();
			this.mobileClick();
		},

		mobileToggle: function()
		{
			$('#mobileToggle').on('click', function(e)
			{
				e.preventDefault();
				$(this).toggleClass('open');
				$('body').toggleClass('open');
			});			
		},

		mobileClick: function()
		{
			$('nav a').on('click', function()
			{
				if ($('body').hasClass('open')) {
					$('#mobileToggle').removeClass('open');
					$('body').removeClass('open');
				}
			});
		}

	};

	nav.init();

});