/**
* @name Success
* @description Handles success messages
*/
var Success = function(message)
{
	'use strict';
	/* exported Success */

	/**
	* The success message
	*/
	this.message = message;

	/**
	* Function to show the success message
	*/
	this.showSuccess = function()
	{
		var self = this;
		$('<div>')
			.addClass('overlay')
			.hide()
			.appendTo('body')
			.on('click', function() {
				self.closeSuccess();
			})
			.fadeIn();
		$('<div>')
			.addClass('success')
			.text(this.message)
			.appendTo('body');

		setTimeout(function() {
			$('.success').addClass('show');
		},100);

		setTimeout(function() {
			self.closeSuccess();
		}, 5000);
	};

	/**
	* Function to close the success message
	*/
	this.closeSuccess = function()
	{
		$('.overlay').fadeOut(function()
		{
			$(this).remove();
			$('.success').removeClass('show');
			setTimeout(function() {
				$('.success').remove();
			},1000);
		});
	};
};