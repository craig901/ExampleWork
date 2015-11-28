$(document).ready(function()
{
	'use strict';
	/* global jAlert, nonce, Article */

	var adminArticles = {

		processing:false,

		init:function()
		{
			this.attachApprove();
			this.attachDelete();
		},

		attachApprove:function()
		{
			$('#admin').on('click', 'a[data-action="approve-article"]', function(e)
			{
				e.preventDefault();
				var $this = $(this);
				var article = new Article();
				article.articleID = $(this).data('article-id');
				article.ajaxAction = ($(this).hasClass('approved')) ? 'un-approve-article' : 'approve-article';
				article.nonce = nonce;
				article.approve(function()
				{
					$this.toggleClass('approved');
				});
			});
		},

		attachDelete:function()
		{
			var self = this;
			$('#admin').on('click', 'a[data-action="delete-article"]', function(e)
			{
				e.preventDefault();

				if ( self.processing ) {
					return false;
				}

				self.processing = true;

				console.log($(this).data());

				var deleteOptions = {
					'alertType':'confirm',
					'message':'Are you sure you would like to delete this article?',
					callback:function()
					{
						self.processing = false;
					}
				};
				var deleteAlert = new jAlert(deleteOptions);
				deleteAlert.alertOpen();

				var parent = $(this).parents('.adminItem');

				var article = new Article();
				article.articleID = $(this).data('comment-id');
				article.nonce = nonce;

				deleteAlert.ok(function()
				{
					article.deleteArticle(function()
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

	adminArticles.init();
});