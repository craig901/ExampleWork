/**
* @name SysError
* @description Handles errors
*/
var SysError = function()
{
	'use strict';
	/* exported SysError */

	this.elID = null;
	this.elText = null;

	/**
	* Nethod to show the error
	*/
	this.show = function()
	{
		$(this.elID).addClass('error');
		$('<div>')
			.addClass('error-text')
			.html('<span>'+this.elText+'</span>')
			.hide()
			.insertAfter(this.elID)
			.fadeIn();
	};
};