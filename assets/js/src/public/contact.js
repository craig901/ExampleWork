'use strict';
/* global nonce, Enquiry, Success */
/**
*	Contact object for handling the contact form
* Performs basic validation and handles the Ajax request
*/
var contactForm = {

	/**
	* Errors array
	*/
	errors:null,

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
		$('#name,#email,#enquiry').prop('autocomplete', 'off');
	},

	/**
	* A method to attach submit event to the contact form
	*/
	attachSubmit: function()
	{
		var self = this;
		$('#submitEnquiry').on('click', function(e)
		{
			e.preventDefault();
			self.removeErrors();

			var enquiry = new Enquiry();
			enquiry.ename = $('#name').val();
			enquiry.email = $('#email').val();
			enquiry.enquiry = $('#enquiry').val();
			enquiry.nonce = nonce;

			if ( enquiry.valid() ) {
				enquiry.submitEnquiry(function(response)
				{
					self.emptyForm();
					var success = new Success(response.message);
					success.showSuccess();
				});
			} else {
				self.errors = enquiry.getErrors();
				self.showErrors();
			}
		});
	},
	/**
	* A method to remove any current errors
	*/
	removeErrors: function()
	{
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
	* A method to reset the form
	*/
	emptyForm: function()
	{
		$('#name,#email,#enquiry').val('');
	},

};

contactForm.init();