<?php

namespace Jengnet\Library
{
	use Jengnet\Models\Comment as Comment;
	use Jengnet\Models\Reply as Reply;

	/**
	* Comments class for Jengnet.co.uk
	*
	* Handles grabbing article data from MySQL and returning an array of article objects
	*
	* PHP version 5
	*
	* @author Craig Bullock <craig@jengnet.co.uk>
	* @version 1
	*/
	class Comments
	{
		/**
		* Static method to return an array of comment objects
		*
		* @access public
		* @static
		* @return array
		*/
		public static function getAll()
		{
			$db = DB::getInstance();
			$return = array();
			$query = "SELECT c.*, a.title AS article FROM `comments` c INNER JOIN `articles` a ON c.article_id = a.id ORDER BY created_at DESC";
			$sth = $db->conn->prepare( $query );
			$sth->execute();
			while ( $obj = $sth->fetchObject( 'Jengnet\Models\Comment' ) )
			{
				array_push($return, $obj);
			}
			return $return;
		}

		/**
		* Static method to return an array of comment objects along with their replies
		*
		* @access public
		* @static
		* @return array
		*/
		public static function getAllWithReplies()
		{
			$db = DB::getInstance();
			$return = array();
			$query = "SELECT
	c.*, a.title AS article, cr.id AS reply_id, cr.name AS reply_name, cr.email AS reply_email, cr.reply, cr.approved AS reply_approved, cr.created_at AS reply_created_at
FROM
	`comments` c
INNER JOIN
	`articles` a
ON
	c.article_id = a.id
LEFT OUTER JOIN
	`comment_replies` cr
ON
	c.id = cr.comment_id
ORDER BY 
	created_at
DESC";
			$sth = $db->conn->prepare( $query );
			$sth->execute();
			$id = -1;
			while ( $obj = $sth->fetchObject() )
			{
				if ($id !== $obj->id) {
					$comment 									= new Comment();
					$comment->id 							=	$obj->id;
					$comment->name 						=	$obj->name;
					$comment->email 					=	$obj->email;
					$comment->website 				=	$obj->website;
					$comment->comment 				=	$obj->comment;
					$comment->approved				= $obj->approved;
					$comment->article_id 			=	$obj->article_id;
					$comment->article 				=	$obj->article;
					$comment->read 						=	$obj->read;
					$comment->created_at 			=	$obj->created_at;
					$comment->updated_at 			=	$obj->updated_at;
					$return[$obj->id] = $comment;
				}
				if (!is_null($obj->reply_id)) {
					$reply 										= new Reply();
					$reply->id 								= $obj->reply_id;
					$reply->name 							= $obj->reply_name;
					$reply->email 						= $obj->reply_email;
					$reply->reply 						= $obj->reply;
					$reply->approved					= $obj->reply_approved;
					$reply->created_at 				= $obj->reply_created_at;
					if (isset($return[$obj->id])) {
						$return[$obj->id]->addReply($reply);
					}
				}
				$id = $obj->id;
			}
			return $return;	
		}

		/**
		* Static method to return an array of approved comment objects along with their approved replies
		*
		* @access public
		* @static
		* @return array
		*/
		public static function getCommentsByArticleID($article_id)
		{
			$db = DB::getInstance();
			$return = array();
			$query = "SELECT
	c.*, a.title AS article, cr.id AS reply_id, cr.name AS reply_name, cr.email AS reply_email, cr.reply, cr.approved AS reply_approved, cr.created_at AS reply_created_at
FROM
	`comments` c
INNER JOIN
	`articles` a
ON
	c.article_id = a.id
LEFT OUTER JOIN
	`comment_replies` cr
ON
	c.id = cr.comment_id AND cr.approved = 1
WHERE
	c.article_id = :article_id AND c.approved = 1
ORDER BY 
	created_at
DESC";
			$sth = $db->conn->prepare( $query );
			$sth->bindParam(':article_id', $article_id, \PDO::PARAM_INT);
			$sth->execute();
			$id = -1;
			while ( $obj = $sth->fetchObject() )
			{
				if ($id !== $obj->id) {
					$comment 									= new Comment();
					$comment->id 							=	$obj->id;
					$comment->name 						=	$obj->name;
					$comment->email 					=	$obj->email;
					$comment->website 				=	$obj->website;
					$comment->comment 				=	$obj->comment;
					$comment->approved				= $obj->approved;
					$comment->article_id 			=	$obj->article_id;
					$comment->article 				=	$obj->article;
					$comment->read 						=	$obj->read;
					$comment->created_at 			=	$obj->created_at;
					$comment->updated_at 			=	$obj->updated_at;
					$return[$obj->id] = $comment;
				}
				if (!is_null($obj->reply_id)) {
					$reply 										= new Reply();
					$reply->id 								= $obj->reply_id;
					$reply->name 							= $obj->reply_name;
					$reply->email 						= $obj->reply_email;
					$reply->reply 						= $obj->reply;
					$reply->approved					= $obj->reply_approved;
					$reply->created_at 				= $obj->reply_created_at;
					if (isset($return[$obj->id])) {
						$return[$obj->id]->addReply($reply);
					}
				}
				$id = $obj->id;
			}
			return $return;	
		}

		/**
		* Static method to return an array of comment objects that are related to an article
		*
		* @access public
		* @static
		* @return array
		*/
		/*public static function getCommentsByArticleID($articleID)
		{
			$db = DB::getInstance();
			$return = array();
			$query = "SELECT * FROM `comments` WHERE `article_id` = :articleID AND `approved` = 1 ORDER BY created_at DESC";
			$sth = $db->conn->prepare( $query );
			$sth->bindParam(':articleID', $articleID, \PDO::PARAM_INT);
			$sth->execute();
			while ( $obj = $sth->fetchObject( 'Jengnet\Models\Comment' ) )
			{
				array_push($return, $obj);
			}
			return $return;
		}*/

		/**
		* Static method to return an array of comment objects that are unread
		*
		* @access public
		* @static
		* @return array
		*/
		public static function getUnread()
		{
			$db = DB::getInstance();
			$return = array();
			$query = "SELECT * FROM `comments` WHERE `read` = 0 ORDER BY created_at DESC";
			$sth = $db->conn->prepare( $query );
			$sth->execute();
			while ( $obj = $sth->fetchObject( 'Jengnet\Models\Comment' ) )
			{
				array_push($return, $obj);
			}
			return $return;
		}
	}
}