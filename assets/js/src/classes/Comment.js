/**
* @name SysComment
* @description Handles comment administration
*/
var SysComment = function()
{
	'use strict';
	/* exported SysComment */
	/* global SysError */

	/**
	* The commenter name
	*/
	this.cname = null;

	/**
	* The commenter email
	*/
	this.email = null;

	/**
	* The commenters website
	*/
	this.website = null;

	/**
	* The comment
	*/
	this.commentText = null;
	
	/**
	* The article ID the comment is related to
	*/
	this.articleID = null;

	/**
	* The nonce
	*/
	this.nonce = null;
	
	/**
	* Ajax action
	*/
	this.ajaxAction = null;
	
	/**
	* The comment ID
	*/
	this.commentID = null;

	/**
	*	Email regular expression
	*/
	this.emailRegEx = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;

	/**
	* Errors
	*/
	this.errors = [];

	this.valid = function()
	{
		var self = this;

		if ( this.cname === '' ) {
			var error = new SysError();
			error.elID = '#comment_name';
			error.elText = 'Please enter your name';
			self.errors.push( error );
		}

		if ( this.email !== '' ) {
			if ( !this.emailRegEx.test( this.email ) ) {
				var error2 = new SysError();
				error2.elID = '#comment_email';
				error2.elText = 'Please enter a valid Email address';
				self.errors.push( error2 );
			}
		}

		if ( this.commentText === '' ) {
			var error3 = new SysError();
			error3.elID = '#comment';
			error3.elText = 'Please enter a comment';
			self.errors.push( error3 );
		}

		if ( self.errors.length ) {
			return false;
		}

		return true;
	};

	/**
	* Method to return an array of errors
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
	* Method to submit comment
	*/
	this.submitComment = function(callback)
	{
		if ( !this.valid() || this.nonce === null ) {
			return false;
		}

		$.ajax({
			url: '/app/init.php',
			type: 'POST',
			dataType: 'JSON',
			data: 'action=comment&nonce='+this.nonce+'&'+'comment_name='+this.cname+'&comment_email='+this.email+'&website='+this.website+'&comment='+this.commentText+'&article_id='+this.articleID,
			success: function(response) {
				if ( response.success )
				{
					callback(response);
				}
			}
		});
	};

	/**
	* Method to approve/unapprove comments
	*/
	this.approve = function(callback)
	{
		if ( this.ajaxAction === null || this.commentID === null || this.nonce === null ) {
			return false;
		}

		$.ajax({
			url: '/app/init.php',
			type: 'POST',
			dataType: 'JSON',
			data: 'action='+this.ajaxAction+'&nonce='+this.nonce+'&comment-id='+this.commentID,
			success: function() {
				callback();
			}
		});
	};

	/**
	* Method to delete a comment
	*/
	this.deleteComment = function(callback)
	{
		if ( this.ajaxAction === null || this.commentID === null || this.nonce === null ) {
			return false;
		}

		$.ajax({
			url: '/app/init.php',
			type: 'POST',
			dataType: 'JSON',
			data: 'action='+this.ajaxAction+'&nonce='+this.nonce+'&comment-id='+this.commentID,
			success: function() {
				callback();
			}
		});
	};

};