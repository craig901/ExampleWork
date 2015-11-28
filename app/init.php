<?php

/**
* Session
*/
session_start();

/**
* Configuration
*/
include('config.php');

/**
* Auto load classes
*/
include('autoload.php');

/**
* Routes
*/
include('routes.php');

/**
* Ajax
*/
include('ajax.php');

/**
* Debug helper
*/
function dd($str)
{
	echo '<pre>';
	var_dump($str);
	echo '</pre>';
}

if ( isset($_POST['comment']) )
{
	$comment						= new Comment();
	$comment->name			= DB::escapeString($_POST['comment_name']);
	$comment->email			= DB::escapeString($_POST['comment_email']);
	$comment->website		= DB::escapeString($_POST['website']);
	$comment->comment		= DB::escapeString($_POST['comment']);
	$comment->articleID	= DB::escapeString($_POST['article_id']);

	if ( $comment->valid() )
	{
		$comment->save();
		$commentSuccess = true;
		$message = 'Thank you your comment has been added';
	}
	else
	{
		$commentErrors = $comment->getErrors();
		$commentSuccess = false;
		$message = 'Oooop\'s something has gone wrong';
	}
}

if ( isset($_POST['enquiry']) )
{
	$enquiry 						= new Enquiry();
	$enquiry->name 			= DB::escapeString($_POST['name']);
	$enquiry->email 		= DB::escapeString($_POST['email']);
	$enquiry->enquiry 	= DB::escapeString($_POST['enquiry']);

	if ( $enquiry->valid() )
	{
		$enquiry->save();
		$success = true;
		$message = 'Thank you for your enquiry, we will get back to you as soon as we can';
	}
	else
	{
		$errors = $enquiry->getErrors();
		$success = false;
		$message = 'Oooop\'s something has gone wrong';
	}

	if ( isset($_POST['ajax']) )
	{
		$return = array(
			'success' => $success,
			'errors' => $enquiry->getErrors(),
			'message' => $message
		);
	}

}
