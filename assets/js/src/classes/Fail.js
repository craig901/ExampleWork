/**
* @name Fail
* @description Handles failiure messages
*/
var Fail = function(message)
{
	'use strict';
	/* exported Fail */

	/**
	* The success message
	*/
	this.message = message;

	/**
	* Function to show the success message
	*/
	this.showFail = function()
	{
		var self = this;
		$('<div>')
			.addClass('overlay')
			.hide()
			.appendTo('body')
			.on('click', function() {
				self.closeFail();
			})
			.fadeIn();
		$('<div>')
			.addClass('fail')
			.text(this.message)
			.appendTo('body');

		setTimeout(function() {
			$('.fail').addClass('show');
		},100);

		setTimeout(function() {
			self.closeFail();
		}, 5000);
	};

	/**
	* Function to close the success message
	*/
	this.closeFail = function()
	{
		$('.overlay').fadeOut(function()
		{
			$(this).remove();
			$('.fail').removeClass('show');
			setTimeout(function() {
				$('.fail').remove();
			},1000);
		});
	};
};