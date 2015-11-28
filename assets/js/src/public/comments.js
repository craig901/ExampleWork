'use strict';
/* global nonce, SysComment, Success */
/*
*
*/
var comments = {

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
		$('#comment_name,#comment_email,#website,#comment').prop('autocomplete', 'off');
	},

	/**
	* A method to attach submit event to the comment form
	*/
	attachSubmit: function()
	{
		var self = this;
		$('#submit_comment').on('click', function(e)
		{
			e.preventDefault();
			self.removeErrors();

			var comment = new SysComment();
			comment.cname = $('#comment_name').val();
			comment.email = $('#comment_email').val();
			comment.website = $('#website').val();
			comment.commentText = $('#comment').val();
			comment.articleID = $('input[name="article_id"]').val();
			comment.nonce = nonce;

			if ( comment.valid() ) {
				comment.submitComment(function(response)
				{
					self.emptyForm();
					var success = new Success(response.message);
					success.showSuccess();

					jQuery(response.template)
						.hide()
						.prependTo('div[data-target="comments-holder"]')
						.slideDown();

					$('html,body').animate({
						scrollTop: $('#comments').offset().top
					}, 500);	
				});
			} else {
				self.errors = comment.getErrors();
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
		$('#commentForm input.error, #commentForm textarea.error').removeClass('error');
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
		$('#comment_name,#comment_email,#website,#comment').val('');
	},


};

comments.init();