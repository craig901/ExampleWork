'use strict';
/* global SysError, nonce, Fail */

/**
*	Contact object for handling the contact form
* Performs basic validation and handles the Ajax request
*/
var loginForm = {

	/**
	* Errors array
	*/
	errors:[],

	/**
	*	Email regular expression
	*/
	emailRegEx:/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i,

	/**
	*	A method to start everything off
	*/
	init: function()
	{
		this.removeAutoComplete();
		this.attachSubmit();
	},

	/**
	*	A method to remove browser default auto complete
	*/
	removeAutoComplete: function()
	{
		$('#name,#password').prop('autocomplete', 'off');
	},

	/**
	* A method to attach submit event to the contact form
	*/
	attachSubmit: function()
	{
		var self = this;
		$('#submitLogin').on('click', function(e)
		{
			e.preventDefault();
			self.removeErrors();

			var credentials = {
				email:$('#email').val(),
				password:$('#password').val()
			};

			self.validate( credentials );

			if ( self.errors.length === 0 ) {
				self.submitLogin();
			} else {
				self.showErrors();
			}
		});
	},

	validate: function( credentials )
	{
		var self = this;
		if ( !self.emailRegEx.test( credentials.email ) )
		{
			var error1 = new SysError();
			error1.elID = '#email';
			error1.elText = 'Please enter a valid Email address';
			self.errors.push( error1 );
		}
		if ( credentials.password === '' )
		{
			var error2 = new SysError();
			error2.elID = '#password';
			error2.elText = 'Please enter a password';
			self.errors.push( error2 );
		}
	},

	/**
	* A method to remove any current errors
	*/
	removeErrors: function()
	{
		this.errors = [];
		$('.error-text').remove();
		$('input.error').removeClass('error');
	},

	/**
	* A method to show errors
	*/
	showErrors: function()
	{
		var self = this;
		if ( self.errors.length )
		{
			for ( var i = 0; i < self.errors.length; i++ )
			{
				self.errors[i].show();
			}
		}	
	},

	/**
	* A method to submit the enquiry by Ajax
	*/
	submitLogin: function()
	{
		$.ajax({
			url: '/app/init.php',
			type: 'POST',
			dataType: 'JSON',
			data: 'action=login&nonce='+nonce+'&'+$('#loginForm').serialize(),
			success: function(response) {
				
				if ( response.success )
				{
					window.location = '/admin/';
				}
				else
				{
					var fail = new Fail(response.message);
					fail.showFail();
				}
			}
		});
	},

	/**
	* A method to reset the form
	*/
	emptyForm: function()
	{
		$('#name,#email,#enquiry').val('');
	},

};

loginForm.init();