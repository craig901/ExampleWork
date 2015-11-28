<?php

namespace Jengnet\Models
{
	use \Jengnet\Library\DB as DB;

	/**
	* Comment Reply class for Jengnet.co.uk
	*
	* Handles the data relating to a comment reply
	*
	* PHP version 5
	*
	* @author Craig Bullock <craig@jengnet.co.uk>
	* @version 1
	*/
	class Reply extends Model
	{
		/**
		* The reply id
		*
		* @var string
		* @access public
		*/
		public $id;

		/**
		* The reply name
		*
		* @var string
		* @access public
		*/
		public $name;
		
		/**
		* The reply email
		*
		* @var string
		* @access public
		*/
		public $email;
		
		/**
		* The reply
		*
		* @var string
		* @access public
		*/
		public $reply;

		/**
		* Approved
		*
		* @var int
		* @access public
		*/
		public $approved;

		/**
		* The comment id
		*
		* @var string
		* @access public
		*/
		public $comment_id;
		
		/**
		* The time the reply was created
		*
		* @var datetime
		* @access public
		*/
		public $created_at;
		
		/**
		* The time the reply was updated
		*
		* @var datetime
		* @access public
		*/
		public $updated_at;

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
		* A static method to return a comment reply object
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
				$query = "SELECT * FROM `comment_replies` WHERE `id` = :id LIMIT 1";
				$sth = $db->conn->prepare( $query );
				$sth->bindParam(':id', $id, \PDO::PARAM_INT);
				if ( !$sth->execute() ) {
					throw new \PDOException('Failed to get a comment reply from the database!');
				}
				if ( $obj = $sth->fetchObject( 'Jengnet\Models\Reply' ) ) {
					return $obj;
				} else {
					throw new \PDOException('Failed to get a Comment Reply object from database resourse!');
				}
			} catch ( \PDOException $e ) {
				echo $e->getMessage();
			}
		}

		/**
		* Public method to test if the comment reply is valid
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
			} else {
				array_push($this->errors,'Please enter an Email address');
			}

			if (empty($this->reply)) {
				array_push($this->errors,'Please enter a reply');
			}

			if (empty($this->errors)) {
				return true;
			} else {
				return false;
			}
		}

		/**
		* Public method to save the reply
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
				$query = "INSERT INTO `comment_replies` SET `name` = :name, `email` = :email, `reply` = :reply, `comment_id` = :comment_id, `created_at` = '".date('Y-m-d H:i:s')."', `updated_at` = '".date('Y-m-d H:i:s')."'";
				$db = DB::getInstance();
				$sth = $db->conn->prepare( $query );
				$sth->bindParam(':name', $this->name, \PDO::PARAM_STR);
				$sth->bindParam(':email', $this->email, \PDO::PARAM_STR);
				$sth->bindParam(':reply', $this->reply, \PDO::PARAM_STR);
				$sth->bindParam(':comment_id', $this->comment_id, \PDO::PARAM_INT);
				
				if ( !$sth->execute() ) {
					throw new \PDOException('Failed to add a comment reply to the database!');
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
				$query = "DELETE FROM `comment_replies` WHERE `id` = :id LIMIT 1";
				$sth = $this->db->conn->prepare( $query );
				$sth->bindParam(':id', $this->id, \PDO::PARAM_INT);
				if ( $sth->execute() ) {
					return true;
				} else {
					throw new \PDOException('Failed to delete a comment reply!');
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

			$query = "UPDATE `comment_replies` SET `approved` = 1 WHERE `id` = :id LIMIT 1";
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

			$query = "UPDATE `comment_replies` SET `approved` = 0 WHERE `id` = :id LIMIT 1";
			$sth = $this->db->conn->prepare( $query );
			$sth->bindParam(':id', $this->id, \PDO::PARAM_INT);
			if ( $sth->execute() )
			{
				return true;
			}
			return false;
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

		public function getTemplate()
		{
	    return '
                <div class="reply cf">
                  <div class="left">
                    <span class="date">'.$this->getDate().'</span>
                  </div>
                  <div class="options">
                    <a class="delete" data-action="delete-reply" data-reply-id="'.$this->id.'" href="#"><span>Delete</span></a>
                    <a class="approve '.$this->getApprovedClass().'" data-action="approve-reply" data-reply-id="'.$this->id.'" href="#"><i class="fa fa-check"></i><span>Approve</span></a>
                  </div>
                  <ul>
                    <li class="cf"><span>Name:</span>'.$this->name.'</li>
                    <li class="cf"><span>Email:</span>'.$this->email.'</li>
                    <li class="cf"><span>Reply:</span>'.$this->reply.'</li>
                  </ul>
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