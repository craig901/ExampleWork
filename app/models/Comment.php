<?php

namespace Jengnet\Models
{
	use \Jengnet\Library\DB as DB;

	/**
	* Comment class for Jengnet.co.uk
	*
	* Handles the data relating to an article comment
	*
	* PHP version 5
	*
	* @author Craig Bullock <craig@jengnet.co.uk>
	* @version 1
	*/
	class Comment extends Model
	{
		/**
		* The comment id
		*
		* @var string
		* @access public
		*/
		public $id;

		/**
		* The comment name
		*
		* @var string
		* @access public
		*/
		public $name;
		
		/**
		* The comment email
		*
		* @var string
		* @access public
		*/
		public $email;

		/**
		* The persons web site
		*
		* @var string
		* @access public
		*/
		public $website;
		
		/**
		* The comment
		*
		* @var string
		* @access public
		*/
		public $comment;

		/**
		* The article id
		*
		* @var string
		* @access public
		*/
		public $article_id;

		/**
		* The article id
		*
		* @var string
		* @access public
		*/
		public $articleID;

		/**
		* The article name
		*
		* @var string
		* @access public
		*/
		public $article;

		/**
		* The read flag
		*
		* @var string
		* @access public
		*/
		public $read;
		
		/**
		* The time the enquiry was created
		*
		* @var datetime
		* @access public
		*/
		public $created_at;
		
		/**
		* The time the enquiry was updated
		*
		* @var datetime
		* @access public
		*/
		public $updated_at;

		/**
		* The replies array
		*
		* @var array
		* @access public
		*/
		public $replies = array();

		/**
		* The errors array
		*
		* @var array
		* @access public
		*/
		public $errors = array();

		public function __construct()
		{
			parent::__construct();
		}

		/**
		* A static method to return a comment object
		*
		* @param id
		* @return object
		* @access public
		*/
		public static function get($id)
		{
			try {
				$db = DB::getInstance();
				$return = array();
				$query = "SELECT * FROM `comments` WHERE `id` = :id LIMIT 1";
				$sth = $db->conn->prepare( $query );
				$sth->bindParam(':id', $id, \PDO::PARAM_INT);
				if ( !$sth->execute() ) {
					throw new \PDOException('Failed to get a comment from the database!');
				}
				if ( $obj = $sth->fetchObject( 'Jengnet\Models\Comment' ) ) {
					return $obj;
				} else {
					throw new \PDOException('Failed to get a Comment object from database resourse!');
				}
			} catch ( \PDOException $e ) {
				echo $e->getMessage();
			}
		}

		/**
		* Public method to test if the comment is valid
		*
		* @return boolean
		* @access public
		*/
		public function valid()
		{
			if (empty($this->name)) {
				array_push($this->errors,'Please enter a name');
			}

			if (!empty($this->email)) {
				if (!filter_var($this->email, FILTER_VALIDATE_EMAIL)) {
					array_push($this->errors,'Please enter a valid Email address');
				}			
			}

			if (empty($this->errors)) {
				return true;
			} else {
				return false;
			}
		}

		/**
		* Public method to save the enquiry
		*
		* @return boolean
		* @access public
		*/
		public function save()
		{
			if ( !$this->valid() ) {
				return false;
			}

			try {
				$query = "INSERT INTO `comments` SET `name` = :name, `email` = :email, `website` = :website, `comment` = :comment, `article_id` = :article_id, `created_at` = '".date('Y-m-d H:i:s')."', `updated_at` = '".date('Y-m-d H:i:s')."'";
				$db = DB::getInstance();
				$sth = $db->conn->prepare( $query );
				$sth->bindParam(':name', $this->name, \PDO::PARAM_STR);
				$sth->bindParam(':email', $this->email, \PDO::PARAM_STR);
				$sth->bindParam(':website', $this->website, \PDO::PARAM_STR);
				$sth->bindParam(':comment', $this->comment, \PDO::PARAM_STR);
				$sth->bindParam(':article_id', $this->article_id, \PDO::PARAM_INT);
				
				if ( !$sth->execute() ) {
					throw new \PDOException('Failed to add a comment to the database!');
				}

				return $db->conn->lastInsertId();
			}
			catch ( \PDOException $e ) {
				echo $e->getMessage();
			}
		}

		/**
		* A method to delete a comment
		*
		* @param id
		* @return boolean
		* @access public
		*/
		public function delete()
		{
			if ( is_null($this->id) ) {
				return false;
			}

			try {
				$query = "DELETE FROM `comments` WHERE `id` = :id LIMIT 1";
				$sth = $this->db->conn->prepare( $query );
				$sth->bindParam(':id', $this->id, \PDO::PARAM_INT);
				if ( $sth->execute() ) {
					return true;
				} else {
					throw new \PDOException('Failed to delete a comment!');
				}			
			}
			catch ( \PDOException $e ) {
				echo $e->getMessage();
			}
			return false;
		}

		/**
		* A method to approve a comment
		*
		* @param id
		* @return object
		* @access public
		*/
		public function approve()
		{
			if ( is_null($this->id) ) {
				return false;
			}

			$query = "UPDATE `comments` SET `approved` = 1 WHERE `id` = :id LIMIT 1";
			$sth = $this->db->conn->prepare( $query );
			$sth->bindParam(':id', $this->id, \PDO::PARAM_INT);
			if ( $sth->execute() )
			{
				return true;
			}
			return false;
		}

		/**
		* A method to approve a comment
		*
		* @param id
		* @return boolean
		* @access public
		*/
		public function unApprove()
		{
			if ( is_null($this->id) ) {
				return false;
			}

			$query = "UPDATE `comments` SET `approved` = 0 WHERE `id` = :id LIMIT 1";
			$sth = $this->db->conn->prepare( $query );
			$sth->bindParam(':id', $this->id, \PDO::PARAM_INT);
			if ( $sth->execute() )
			{
				return true;
			}
			return false;
		}

		public function addReply(Reply $reply)
		{
			array_push($this->replies,$reply);
		}

		/**
		* Public method to return errors array
		*
		* @return boolean
		* @access public
		*/
		public function getErrors()
		{
			return $this->errors;
		}

		/**
		* Method to return the comment icon
		*
		* @access public
		* @return string
		*/
		public function getIcon()
		{
			return substr($this->name,0,1);
		}

		public function getTemplate()
		{
			$replies = '';

			if (isset($this->replies) && !empty($this->replies)) {
				$replies = '<div class="replies">';
				foreach($this->replies as $reply) {
					$replies .= '
					<div class="reply cf">
						<div class="pic">
							<img src="/assets/images/me.jpg" alt="">
						</div>
						<div class="details">
							<span class="replyDate">'.$reply->getDate().'</span>
							<h3>'.$reply->name.'</h3>
							<p>'.$reply->reply.'</p>
						</div>
					</div>
					';
				}
				$replies .= '</div>';
			}

	    return '
	      <div class="comment">
	        <div class="icon">
	          <span>'.$this->getIcon().'</span>
	        </div>
	        <div class="details">
	          <span class="commentDate">'.$this->getDate().'</span>
	          <h3>'.$this->name.'</h3>
	          <p>'.$this->comment.'</p>
	        </div>
	        '.$replies.'
	      </div>
	    ';
		}

		/**
		* Public method to get new flag
		*
		* @return boolean
		* @access public
		*/
		public function isNew()
		{
			if ($this->read == 0) {
				return true;
			}

			return false;
		}

		/**
		* Public method to get approved class
		*
		* @return boolean
		* @access public
		*/
		public function getApprovedClass()
		{
			if ( $this->approved == 1 ) {
				return 'approved';
			}
			return '';
		}
	}
}