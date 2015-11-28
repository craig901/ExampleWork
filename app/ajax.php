<?php

use \Jengnet\Library\Nonce as Nonce;
use \Jengnet\Library\DB as DB;
use \Jengnet\Models\Enquiry as Enquiry;
use \Jengnet\Models\Comment as Comment;
use \Jengnet\Models\Reply as Reply;
use \Jengnet\Models\Article as Article;
use \Jengnet\Models\User as User;

if ( isset($_POST['action']) && $_POST['action'] == 'login' )
{
	$nonce = new Nonce();
	if ( !$nonce->checkNonce($_POST['nonce']) )
		die();

	$user = new User();
	$user->email = $_POST['email'];
	$user->password = $_POST['password'];
	$success = false;
	$message = '';
	if ( $user->validLogin() )
	{
		if ( $user->login() ) {
			$success = true;
		} else {
			$success = false;
			$message = 'Oooop\'s, it looks like your username or password was wrong, please try again';
		}
	}
	else
	{
		$success = false;
		$message = 'Oooop\'s, it looks like you have not entered valid details';
	}

	$return = new stdClass();
	$return->success = $success;
	$return->message = $message;

	echo json_encode($return);
	die();
}


if ( isset($_POST['action']) && $_POST['action'] == 'enquiry' )
{
	$nonce = new Nonce();
	if ( !$nonce->checkNonce($_POST['nonce']) )
		die();

	$enquiry 							= new Enquiry();
	$enquiry->name 				= $_POST['name'];
	$enquiry->email 			= $_POST['email'];
	$enquiry->enquiry 		= $_POST['enquiry'];

	if ( $enquiry->valid() )
	{
		$enquiry->save();
		$return = new stdClass();
		$return->success = true;
		$return->message = 'Thank you for your enquiry, we will get back to you right away.';
		$response = $return;
	}
	else
	{
		$errors = $enquiry->getErrors();
		$return = new stdClass();
		$return->success = false;
		$return->errors = $errors;
		$response = $return;
	}

	echo json_encode($response);
	die();
}


if ( isset($_POST['action']) && $_POST['action'] == 'comment' )
{
	$nonce = new Nonce();
	if ( !$nonce->checkNonce($_POST['nonce']) )
		die();

	$comment							= new Comment();
	$comment->name				= $_POST['comment_name'];
	$comment->email				= $_POST['comment_email'];
	$comment->website			= $_POST['website'];
	$comment->comment			= $_POST['comment'];
	$comment->article_id	= $_POST['article_id'];

	if ( $comment->valid() )
	{
		$comment->save();
		$return = new stdClass();
		$return->success = true;
		$return->message = 'Thank you your comment has been added';
		$return->template = $comment->getTemplate();
		$response = $return;
	}
	else
	{
		$errors = $comment->getErrors();
		$return = new stdClass();
		$return->success = false;
		$return->errors = $errors;
		$response = $return;
	}

	echo json_encode($response);
	die();
}

if ( isset($_POST['action']) && $_POST['action'] == 'delete-enquiry' )
{
	$nonce = new Nonce();
	if ( !$nonce->checkNonce($_POST['nonce']) )
		die();

	$id = $_POST['enquiry-id'];

	$enquiry = Enquiry::get($id);
	$success = $enquiry->delete();

	$return = new stdClass();
	$return->success = $success;

	echo json_encode($return);
	die();
}

if ( isset($_POST['action']) && $_POST['action'] == 'approve-comment' )
{
	$nonce = new Nonce();
	if ( !$nonce->checkNonce($_POST['nonce']) )
		die();

	$id = $_POST['comment-id'];

	$comment = Comment::get($id);
	$success = $comment->approve();

	$return = new stdClass();
	$return->success = $success;

	echo json_encode($return);
	die();
}

if ( isset($_POST['action']) && $_POST['action'] == 'un-approve-comment' )
{
	$nonce = new Nonce();
	if ( !$nonce->checkNonce($_POST['nonce']) )
		die();

	$id = $_POST['comment-id'];

	$comment = Comment::get($id);
	$success = $comment->unApprove();

	$return = new stdClass();
	$return->success = $success;

	echo json_encode($return);
	die();
}

if ( isset($_POST['action']) && $_POST['action'] == 'delete-comment' )
{
	$nonce = new Nonce();
	if ( !$nonce->checkNonce($_POST['nonce']) )
		die();

	$id = $_POST['comment-id'];

	$comment = Comment::get($id);
	$success = $comment->delete();

	$return = new stdClass();
	$return->success = $success;

	echo json_encode($return);
	die();
}

if ( isset($_POST['action']) && $_POST['action'] == 'delete-article' )
{
	$nonce = new Nonce();
	if ( !$nonce->checkNonce($_POST['nonce']) )
		die();

	$id = $_POST['article-id'];

	$article = Article::get($id);
	$success = $article->delete();

	$return = new stdClass();
	$return->success = $success;

	echo json_encode($return);
	die();
}

if ( isset($_POST['action']) && $_POST['action'] == 'approve-article' )
{
	$nonce = new Nonce();
	if ( !$nonce->checkNonce($_POST['nonce']) )
		die();

	$id = $_POST['article-id'];

	$article = Article::get($id);
	$success = $article->approve();

	$return = new stdClass();
	$return->success = $success;

	echo json_encode($return);
	die();
}

if ( isset($_POST['action']) && $_POST['action'] == 'un-approve-article' )
{
	$nonce = new Nonce();
	if ( !$nonce->checkNonce($_POST['nonce']) )
		die();

	$id = $_POST['article-id'];

	$article = Article::get($id);
	$success = $article->unApprove();

	$return = new stdClass();
	$return->success = $success;

	echo json_encode($return);
	die();
}

if ( isset($_POST['action']) && $_POST['action'] == 'reply' )
{
	$nonce = new Nonce();
	if ( !$nonce->checkNonce($_POST['nonce']) )
		die();

	$reply = new Reply();
	$reply->name = 'Craig';
	$reply->email = 'craig@jengnet.co.uk';
	$reply->reply = $_POST['reply'];
	$reply->approved = 1;
	$reply->comment_id = $_POST['comment_id'];
	$id = $reply->save();

	$reply = Reply::get($id);
	$template = $reply->getTemplate();

	$return = new stdClass();
	$return->success = true;
	$return->template = $template;

	echo json_encode($return);
	die();
}

if ( isset($_POST['action']) && $_POST['action'] == 'approve-reply' )
{
	$nonce = new Nonce();
	if ( !$nonce->checkNonce($_POST['nonce']) )
		die();

	$id = $_POST['reply-id'];

	$reply = Reply::get($id);
	$success = $reply->approve();

	$return = new stdClass();
	$return->success = $success;

	echo json_encode($return);
	die();
}

if ( isset($_POST['action']) && $_POST['action'] == 'un-approve-reply' )
{
	$nonce = new Nonce();
	if ( !$nonce->checkNonce($_POST['nonce']) )
		die();

	$id = $_POST['reply-id'];

	$reply = Reply::get($id);
	$success = $reply->unApprove();

	$return = new stdClass();
	$return->success = $success;

	echo json_encode($return);
	die();
}

if ( isset($_POST['action']) && $_POST['action'] == 'delete-reply' )
{
	$nonce = new Nonce();
	if ( !$nonce->checkNonce($_POST['nonce']) )
		die();

	$id = $_POST['reply-id'];

	$reply = Reply::get($id);
	$success = $reply->delete();

	$return = new stdClass();
	$return->success = $success;

	echo json_encode($return);
	die();
}