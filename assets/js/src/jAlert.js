/**
* jAlert
* a nicer Javascript alert function, written for Jengnet by Craig Bullock
* 
* has 2 modes, standard and confirm replicating Javascripts alert and confirm methods
*/
var jAlert = function(options)
{
	'use strict';
	/* exported jAlert */

	/**
	* Options
	*/
	this.alertOptions = {
		'alertType':null,
		'message':null,
		callback:function(){}
	};

	this.currentjAlert = null;

	$.extend(this.alertOptions,options);

	this.alertOpen = function()
	{
		var self = this;

		if ( this.alertOptions.alertType === null ) {
			return false;
		}

		clearTimeout(self.currentjAlert);

		if ( this.alertOptions.alertType === 'alert' ) {
			this.alertStandard();
		} else if ( this.alertOptions.alertType === 'confirm' ) {
			this.alertConfirm();
		}

		this.attachActions();
	};

	this.attachActions = function()
	{
		var self = this;
		$('.jAlert a[data-action="cancel"]').on('click', function(e)
		{
			e.preventDefault();
			self.closeAlert(function(){});
		});
	};

	this.alertStandard = function()
	{
		var self = this;
		$('<div>')
			.addClass('overlay')
			.hide()
			.appendTo('body')
			.on('click', function() {
				self.closeAlert(function(){});
			})
			.fadeIn();

		var html = '<p>'+self.alertOptions.message+'</p>';
		html += '<div class="buttons"><a data-action="ok" href="#">OK</a></div>';

		$('<div>')
			.addClass('jAlert')
			.addClass('jAlertStandard')
			.html(html)
			.appendTo('body');

		setTimeout(function() {
			$('.jAlert').addClass('show');
		},100);
	};

	this.alertConfirm = function()
	{
		var self = this;
		$('<div>')
			.addClass('overlay')
			.hide()
			.appendTo('body')
			.on('click', function() {
				self.closeAlert(function(){});
			})
			.fadeIn();

		var html = '<p>'+self.alertOptions.message+'</p>';
		html += '<div class="buttons"><a data-action="ok" href="#">OK</a><a data-action="cancel" href="#">Cancel</a></div>';

		$('<div>')
			.addClass('jAlert')
			.addClass('jAlertStandard')
			.html(html)
			.appendTo('body');

		setTimeout(function() {
			$('.jAlert').addClass('show');
		},100);
	};

	this.closeAlert = function(callback)
	{
		var self = this;
		$('.overlay').fadeOut(function()
		{
			$(this).remove();
			$('.jAlert').removeClass('show');
			self.currentjAlert = setTimeout(function() {
				$('.jAlert').remove();
				if (typeof self.alertOptions.callback === 'function') {
					self.alertOptions.callback();	
				}
				if (typeof callback === 'function') {
					callback();	
				}
			},300);
		});
	};

	this.ok = function(callback)
	{
		var self = this;
		$('.jAlert a[data-action="ok"]').on('click', function(e)
		{
			e.preventDefault();
			callback();
			self.closeAlert();
		});
	};

};