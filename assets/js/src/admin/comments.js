$(document).ready(function()
{
	'use strict';
	/* global SysComment, jAlert, nonce */

	var adminComments = {

		processing:false,

		init:function()
		{
			this.attachApprove();
			this.attachDelete();
		},

		attachApprove:function()
		{
			$('#admin').on('click', 'a[data-action="approve-comment"]', function(e)
			{
				e.preventDefault();
				var $this = $(this);
				var comment = new SysComment();
				comment.commentID = $(this).data('comment-id');
				comment.ajaxAction = ($(this).hasClass('approved')) ? 'un-approve-comment' : 'approve-comment';
				comment.nonce = nonce;
				comment.approve(function()
				{
					$this.toggleClass('approved');
				});
			});
		},

		attachDelete:function()
		{
			var self = this;
			$('#admin').on('click', 'a[data-action="delete-comment"]', function(e)
			{
				e.preventDefault();

				if ( self.processing ) {
					return false;
				}

				self.processing = true;

				var deleteOptions = {
					'alertType':'confirm',
					'message':'Are you sure you would like to delete this comment?',
					callback:function()
					{
						self.processing = false;
					}
				};
				var deleteAlert = new jAlert(deleteOptions);
				deleteAlert.alertOpen();

				var parent = $(this).parents('.adminItem');

				var comment = new SysComment();
				comment.commentID = $(this).data('comment-id');
				comment.ajaxAction = 'delete-comment';
				comment.nonce = nonce;

				deleteAlert.ok(function()
				{
					comment.deleteComment(function()
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

	adminComments.init();
});