/**
* @name Reply
* @description Handles comment replies
*/
var Reply = function()
{
	'use strict';
	/* exported Reply */

	/**
	* The reply id
	*/
	this.replyID = null;
	
	/**
	* The reply text
	*/
	this.reply = null;
	
	/**
	* The reply approved status
	*/
	this.approved = null;

	/**
	* The comment id the reply is assocaited with
	*/
	this.commentID = null;

	/**
	*	Email regular expression
	*/
	this.emailRegEx = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;

	/**
	* Errors array
	*/
	this.errors = [];

	/**
	* Method to open the reply form
	*/
	this.openForm = function()
	{
		var self = this;
		$('<div>')
			.addClass('overlay')
			.hide()
			.appendTo('body')
			.on('click', function() {
				self.closeForm(function(){});
			})
			.fadeIn();

		var html = '<div class="row"><textarea name="reply" id="reply"></textarea></div>';
		html += '<div class="row"><input type="submit" name="submit" id="submitReply" value="Reply"></div>';

		$('<div>')
			.attr('id','addReply')
			.html(html)
			.appendTo('body');

		setTimeout(function() {
			$('#addReply').addClass('show');
		},100);
	};

	
	/**
	* Method to close the form
	*/
	this.closeForm = function()
	{
		$('.overlay').fadeOut(function()
		{
			$(this).remove();
			$('#addReply').removeClass('show');
			setTimeout(function() {
				$('#addReply').remove();
			},300);
		});
	};

	/**
	* Method to validate the reply data
	*/
	this.valid = function()
	{
		var self = this;

		self.errors = [];

		if ( this.reply === null )
		{
			var error = new Error();
			error.elID = '#reply';
			error.elText = 'Please enter your reply';
			self.errors.push( error );
		}	

		if ( self.errors.length ) {
			return false;
		}

		return true;
	};

	/**
	* Method to show the errors
	*/
	this.showErrors = function()
	{
		var self = this;
		if ( self.errors.length ) {
			for ( var i = 0; i < self.errors.length; i++ ) {
				self.errors[i].show();
			}
		}	
	};

	/**
	* Method to get the errors
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
	* A method to submit the enquiry by Ajax
	*/
	this.submitReply = function(callback)
	{
		if ( !this.valid() ) {
			return false;
		}

		$.ajax({
			url: '/app/init.php',
			type: 'POST',
			dataType: 'JSON',
			data: 'action=reply&nonce='+this.nonce+'&reply='+this.reply+'&approved='+this.approved+'&comment_id='+this.commentID,
			success: function(response) {
				if ( response.success )
				{
					callback(response);
				}
			}
		});
	};

	/**
	* Method to approve/unapprove comment replies
	*/
	this.approve = function(callback)
	{
		if ( !this.ajaxAction || !this.replyID || !this.nonce ) {
			return false;
		}

		$.ajax({
			url: '/app/init.php',
			type: 'POST',
			dataType: 'JSON',
			data: 'action='+this.ajaxAction+'&nonce='+this.nonce+'&reply-id='+this.replyID,
			success: function() {
				callback();
			}
		});
	};

	/**
	* Method to delete a reply
	*/
	this.deleteReply = function(callback)
	{
		if ( !this.replyID || !this.nonce) {
			return false;
		}

		$.ajax({
			url: '/app/init.php',
			type: 'POST',
			dataType: 'JSON',
			data: 'action=delete-reply&nonce='+this.nonce+'&reply-id='+this.replyID,
			success: function(response) {
				if ( response.success )
				{
					callback(response);
				}
			}
		});
	};

};