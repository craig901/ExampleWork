/**
* @name Article
* @description Handles article administration
*/
var Article = function()
{
	'use strict';
	/* exported Article */

	/**
	* The Article ID
	*/
	this.articleID = null;

	/**
	* The Article neta title
	*/
	this.meta_title = null;
	
	/**
	* The Article meta description
	*/
	this.meta_description = null;
	
	/**
	* The Article title
	*/
	this.articleTitle = null;
	
	/**
	* The Article excerpt
	*/
	this.excerpt = null;
	
	/**
	* The Article heading
	*/
	this.heading = null;
	
	/**
	* The Article body text
	*/
	this.articleBody = null;
	
	/**
	* The Article approved status
	*/
	this.approved = null;
	
	/**
	* The Article category ID
	*/
	this.categoryID = null;
	
	/**
	* The Article slug
	*/
	this.slug = null;

	/**
	* The nonce
	*/
	this.nonce = null;
	
	/**
	* The Ajax action
	*/
	this.ajaxAction = null;
	
	/**
	* The comment ID
	*/
	this.commentID = null;

	/**
	* Errors
	*/
	this.errors = [];

	this.valid = function()
	{
		var self = this;

		if ( this.articleTitle === '' ) {
			var error = new Error();
			error.elID = '#article_title';
			error.elText = 'Please enter your article name';
			self.errors.push( error );
		}

		if ( this.slug === '' ) {
			var error2 = new Error();
			error2.elID = '#article_slug';
			error2.elText = 'Please enter an article slug';
			self.errors.push( error2 );
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
	this.submitArticle = function()
	{
		if ( !this.valid() || this.nonce === null ) {
			return false;
		}

		/*$.ajax({
			url: '/app/init.php',
			type: 'POST',
			dataType: 'JSON',
			data: 'action=article&nonce='+this.nonce+'&'+'comment_name='+this.cname+'&comment_email='+this.email+'&website='+this.website+'&comment='+this.comment+'&article_id='+this.articleID,
			success: function(response) {
				if ( response.success )
				{
					callback(response);
				}
			}
		});*/
	};

	/**
	* Method to approve/unapprove comments
	*/
	this.approve = function(callback)
	{
		if ( this.ajaxAction === null || this.articleID === null || this.nonce === null ) {
			return false;
		}

		$.ajax({
			url: '/app/init.php',
			type: 'POST',
			dataType: 'JSON',
			data: 'action='+this.ajaxAction+'&nonce='+this.nonce+'&article-id='+this.articleID,
			success: function() {
				callback();
			}
		});
	};

	/**
	* Method to delete a comment
	*/
	this.deleteArticle = function(callback)
	{
		if ( this.articleID === null || this.nonce === null ) {
			return false;
		}

		$.ajax({
			url: '/app/init.php',
			type: 'POST',
			dataType: 'JSON',
			data: 'action=delete-article&nonce='+this.nonce+'&article-id='+this.articleID,
			success: function() {
				callback();
			}
		});
	};

};