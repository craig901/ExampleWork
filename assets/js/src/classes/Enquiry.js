/**
* @name Enquiry
* @description Handles enquiry administration
*/
var Enquiry = function()
{
	'use strict';
	/* exported Enquiry */
	/* global SysError */

	/**
	* The ID of the enquiry
	*/
	this.enquiryID = null;

	/**
	* The enquirer name
	*/
	this.ename = null;

	/**
	* The enquirer Email
	*/
	this.email = null;

	/**
	* The enquiry text
	*/
	this.enquiry = null;

	/**
	* The nonce
	*/
	this.nonce = null;

	/**
	*	Email regular expression
	*/
	this.emailRegEx = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;

	/**
	* Errors
	*/
	this.errors = [];

	/**
	* Method to check if the enquiry is valid
	*/
	this.valid = function()
	{
		var self = this;

		if ( this.ename === '' ) {
			var error1 = new SysError();
			error1.elID = '#name';
			error1.elText = 'Please enter your name';
			self.errors.push( error1 );
		}

		if ( this.email === '' ) {
			var error2 = new SysError();
			error2.elID = '#email';
			error2.elText = 'Please enter your Email address';
			self.errors.push( error2 );
		} else if ( !this.emailRegEx.test( this.email ) ) {
			var error3 = new SysError();
			error3.elID = '#email';
			error3.elText = 'Please enter a valid Email address';
			self.errors.push( error3 );
		}

		if ( self.errors.length ) {
			return false;
		}

		return true;
	};

	/**
	* A method the get the errors
	*/
	this.getErrors = function()
	{
		if ( this.errors.length ) {
			return this.errors;
		} else {
			return false;
		}
	};

	/**
	* Method to delete an enquiry
	*/
	this.deleteEnquiry = function(callback)
	{
		if ( this.ajaxAction === null || this.enquiryID === null || this.nonce === null ) {
			return false;
		}

		$.ajax({
			url: '/app/init.php',
			type: 'POST',
			dataType: 'JSON',
			data: 'action='+this.ajaxAction+'&nonce='+this.nonce+'&enquiry-id='+this.enquiryID,
			success: function(response) {
				if (response.success) {
					callback();
				}
			}
		});
	};

	/**
	* A method to submit the enquiry by Ajax
	*/
	this.submitEnquiry = function(callback)
	{
		if ( !this.valid() || this.nonce === null ) {
			return false;
		}

		$.ajax({
			url: '/app/init.php',
			type: 'POST',
			dataType: 'JSON',
			data: 'action=enquiry&nonce='+this.nonce+'&name='+this.ename+'&email='+this.email+'&enquiry='+this.enquiry,
			success: function(response) {
				if ( response.success )
				{
					callback(response);
				}
			}
		});
	};

};