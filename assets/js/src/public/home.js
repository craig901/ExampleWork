$(document).ready(function() {

	'use strict';

	var navBar = {
		onScreen:true,
		init: function()
		{
			$(window).scroll(function()
			{
				if ( !$('header').isOnScreen(0.5,0.5) ) {
					if ( !$('header').hasClass('stick') ) {
						$('header').addClass('stick');
					}
				}
			});
		}
	};

	var banner = {
		init: function()
		{
			this.show();
			//this.scroll();
		},
		show: function()
		{
			setTimeout(function() {
				$('#banner .text').addClass('show');
			},700);
		},
		scroll: function()
		{
			$(window).scroll(function() {
				
				var top = $(window).scrollTop();
				if ( top < 400 )
				{
					var topPos = top + 100;
					$('#banner').css({
						backgroundPosition: 'center -' + topPos + 'px'
					});						
				}
			});
		},
	};

	var tech = {
		init: function()
		{
			var self = tech;
			setTimeout(function() {
				self.show();
			}, 1000);
		},
		show: function()
		{
			var time = 0;
			$('#tech ul li').each(function(i,el)
			{
				setTimeout(function() {
					$(el).addClass('show');
				}, time);
				time+=200;
			});
		}
	};

	var work = {
		init: function()
		{
			var self = work;
			self.workFadeIn();
			self.workTextFadeIn();
		},
		workFadeIn: function()
		{
			var complete = false;

			$(window).scroll(function() {
				if (!complete)
				{
					if ( $('#work').isOnScreen(0.5,0.5) )
					{
						var time = 0;
						$('#work .work').each(function(i,el) {
							setTimeout(function() {
								$(el).addClass('show');
							}, time);
						});
						complete = true;
					}					
				}
			});
		},
		workTextFadeIn: function()
		{
			var complete = false;
			$(window).scroll(function() {
				if (!complete)
				{
					if ( $('#work').isOnScreen(0.5,0.5) )
					{
						var time = 0;
						$('#work .work .text').each(function(i,el) {
							setTimeout(function() {
								$(el).addClass('show');
							}, time);
							//time+=500;
						});
						complete=true;
					}
				}
			});
		}
	};

	var testimonials = {
		init: function()
		{
			var self = testimonials;
			self.testimonialsFadeIn();
		},
		testimonialsFadeIn: function()
		{
			var complete = false;
			$(window).scroll(function()
			{	
				if (!complete)
				{
					if ( $('#testimonials').isOnScreen(0.5,0.5) )
					{
						$('#testimonials').addClass('show');
						var time = 0;
						$('#testimonials .testimonial').each(function(i,el) {
							setTimeout(function() {
								$(el).find('.pic').addClass('show');
							}, time);
							time+=500;
						});
					}					
				}
			});
		}
	};

	var articles = {
		init: function()
		{
			var self = articles;
			self.articlesFadeIn();
		},
		articlesFadeIn: function()
		{
			var complete = false;
			$(window).scroll(function()
			{	
				if (!complete)
				{
					if ( $('#articles').isOnScreen(0.5,0.5) )
					{
						var time = 0;
						$('#articles .article').each(function(i,el) {
							setTimeout(function() {
								$(el).addClass('show');
							}, time);
							time+=200;
						});
					}
				}
			});
		}
	};

	var contact = {
		init: function()
		{
			var self = contact;
			self.contactFadeIn();
		},
		contactFadeIn: function()
		{
			var complete = false;
			$(window).scroll(function() {
				if (!complete)
				{
					if ( $('#contact').isOnScreen(0.5, 0.5) )
					{
						$('#contact .row').each(function(i,el) {
							$(el).addClass('show');
						});
						setTimeout(function() {
							$('#contact input.button').addClass('show');
						},1000);
						complete = true;
					}
				}
			});
		}
	};

	// Initialise
	navBar.init();
	banner.init();
	tech.init();
	work.init();
	testimonials.init();
	articles.init();
	contact.init();

});