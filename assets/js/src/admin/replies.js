$(document).ready(function()
{
	'use strict';
	/* global jAlert, nonce, Reply */

	var adminReplies = {

		processing:false,

		init:function()
		{
			this.attachReply();
			this.attachDelete();
			this.attachApprove();
		},

		attachReply:function()
		{
			var self = this;
			$('#admin').on('click', 'a[data-action="reply-to-comment"]', function(e)
			{
				e.preventDefault();

				var parent = $(this).parents('.adminItem');

				var reply = new Reply();
				reply.commentID = $(this).data('comment-id');
				reply.approved = 1;
				reply.nonce = nonce;
				reply.openForm();

				$('#submitReply').on('click', function(e)
				{
					e.preventDefault();
					reply.reply = $('#reply').val();
					self.clearErrors();
					if (reply.valid()) {
						reply.submitReply(function(response)
						{
							reply.closeForm();
							$(response.template).appendTo(parent.find('.replies'));
						});
					} else {
						reply.showErrors();
					}
				});
			});
		},

		clearErrors:function()
		{
			$('#addReply .error-text').remove();
			$('#addReply #reply').removeClass('error');
		},

		attachApprove:function()
		{
			$('#admin').on('click', 'a[data-action="approve-reply"]', function(e)
			{
				e.preventDefault();
				var $this = $(this);
				var reply = new Reply();
				reply.replyID = $(this).data('reply-id');
				reply.ajaxAction = ($(this).hasClass('approved')) ? 'un-approve-reply' : 'approve-reply';
				reply.nonce = nonce;
				reply.approve(function()
				{
					$this.toggleClass('approved');
				});
			});
		},

		attachDelete:function()
		{
			var self = this;
			$('#admin').on('click', 'a[data-action="delete-reply"]', function(e)
			{
				e.preventDefault();

				if ( self.processing ) {
					return false;
				}

				self.processing = true;

				var deleteOptions = {
					'alertType':'confirm',
					'message':'Are you sure you would like to delete this reply?',
					callback:function()
					{
						self.processing = false;
					}
				};
				var deleteAlert = new jAlert(deleteOptions);
				deleteAlert.alertOpen();

				var parent = $(this).parents('.reply');

				var reply = new Reply();
				reply.replyID = $(this).data('reply-id');
				reply.nonce = nonce;

				deleteAlert.ok(function()
				{
					reply.deleteReply(function()
					{
						parent.fadeOut(function()
						{
							$(this).remove();
						});
					});
				});

			});
		}
	};
	adminReplies.init();
});