$(document).ready(function()
{
	'use strict';
	/* global jAlert, nonce, Enquiry */

	var adminEnquiries = {

		processing:false,

		init:function()
		{
			this.attachDelete();
		},

		attachDelete:function()
		{
			var self = this;
			$('#admin').on('click', 'a[data-action="delete-enquiry"]', function(e)
			{
				e.preventDefault();

				if ( self.processing ) {
					return false;
				}

				self.processing = true;
		
				var deleteOptions = {
					'alertType':'confirm',
					'message':'Are you sure you would like to delete this enquiry?',
					callback:function()
					{
						self.processing = false;
					}
				};
				var deleteAlert = new jAlert(deleteOptions);
				deleteAlert.alertOpen();

				var parent = $(this).parents('.adminItem');

				var enquiry = new Enquiry();
				enquiry.enquiryID = $(this).data('enquiry-id');
				enquiry.ajaxAction = 'delete-enquiry';
				enquiry.nonce = nonce;

				deleteAlert.ok(function()
				{
					enquiry.deleteEnquiry(function()
					{
						parent.fadeOut(function()
						{
							$(this).remove();
							self.processing = false;
						});
					});
				});
			});
		}
	};
	adminEnquiries.init();
});