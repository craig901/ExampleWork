<?php

namespace Jengnet\Models
{
	use Jengnet\Library\DB as DB;
	use Jengnet\Library\Comments as Comments;
	use Jengnet\Library\Icon as Icon;
	use Jengnet\Models\Category as Category;

	/**
	* Article class for Jengnet.co.uk
	*
	* Handles each individual article
	*
	* PHP version 5
	*
	* @author Craig Bullock <craig@jengnet.co.uk>
	* @version 1
	*/
	class Article extends Model
	{
		/**
		* The article id
		*
		* @var int
		* @access public
		*/
		public $id;

		/**
		* The article meta title
		*
		* @var string
		* @access public
		*/
		public $meta_title;

		/**
		* The article meta description
		*
		* @var string
		* @access public
		*/
		public $meta_description;

		/**
		* The article title
		*
		* @var string
		* @access public
		*/
		public $title;

		/**
		* The article excerpt
		*
		* @var string
		* @access public
		*/
		public $excerpt;

		/**
		* The article heading
		*
		* @var string
		* @access public
		*/
		public $heading;

		/**
		* The article body
		*
		* @var string
		* @access public
		*/
		public $body;

		/**
		* The article body
		*
		* @var string
		* @access public
		*/
		public $approved;

		/**
		* The article created at date time
		*
		* @var datetime
		* @access public
		*/
		public $created_at;

		/**
		* The article updated at date time
		*
		* @var datetime
		* @access public
		*/
		public $updated_at;

		/**
		* The article category id
		*
		* @var int
		* @access public
		*/
		public $category_id;

		/**
		* The article slug
		*
		* @var string
		* @access public
		*/
		public $slug;

		/**
		* The article category
		*
		* @var string
		* @access public
		*/
		public $category;

		/**
		* The article comments
		*
		* @var array
		* @access public
		*/
		public $comments = array();

		/**
		* The errors array
		*
		* @var array
		* @access public
		*/
		public $errors = array();

		/**
		* Class constructor
		*
		* @access public
		*/
		public function __construct()
		{
			parent::__construct();
			$this->comments = $this->getComments();
		}

		/**
		* Static method to retrive an article object from the database
		*
		* @access public
		* @param int
		* @return object
		*/
		public static function get($id)
		{
			try {
				$db = DB::getInstance();
				$query = "SELECT * FROM `articles` WHERE `id` = :id LIMIT 1";
				$sth = $db->conn->prepare( $query );
				$sth->bindParam(':id', $id, \PDO::PARAM_INT);
				if ( !$sth->execute() ) {
					throw new \PDOException('Failed to get an article from the database!');
				}
				if ( $obj = $sth->fetchObject( 'Jengnet\Models\Article' ) ) {
					return $obj;
				} else {
					throw new \PDOException('Failed to get an Article object from database resourse!');
				}
				return false;
			} catch ( PDOException $e ) {
				echo $e->getMessage();
			}
		}

		public function valid()
		{
			if (empty($this->meta_title)) {
				array_push($this->errors,'Please enter a meta title');
			}

			if (empty($this->meta_description)) {
				array_push($this->errors,'Please enter a meta description');
			}

			if (empty($this->title)) {
				array_push($this->errors,'Please enter a title');
			}

			if (empty($this->excerpt)) {
				array_push($this->errors,'Please enter an excerpt');
			}

			if (empty($this->heading)) {
				array_push($this->errors,'Please enter a heading');
			}

			if (empty($this->body)) {
				array_push($this->errors,'Please enter your article body');
			}	

			if (empty($this->category_id)) {
				array_push($this->errors,'Please select an article');
			}	

			if (empty($this->slug)) {
				array_push($this->errors,'Please add a slug');
			}			

			if (empty($this->errors)) {
				return true;
			} else {
				return false;
			}
		}

		public function save()
		{
			if ( !$this->valid() ) {
				return false;
			}

			try {
				$query = "INSERT INTO
	`articles`
SET
	`meta_title` = :meta_title,
	`meta_description` = :meta_description,
	`title` = :title,
	`excerpt` = :excerpt,
	`heading` = :heading,
	`body` = :body,
	`approved` = 0,
	`slug` = :slug,
	`category_id` = :category_id,
	`created_at` = '".date('Y-m-d H:i:s')."',
	`updated_at` = '".date('Y-m-d H:i:s')."'";
				$db = DB::getInstance();
				$sth = $db->conn->prepare( $query );
				$sth->bindParam(':meta_title', $this->meta_title, \PDO::PARAM_STR);
				$sth->bindParam(':meta_description', $this->meta_description, \PDO::PARAM_STR);
				$sth->bindParam(':title', $this->title, \PDO::PARAM_STR);
				$sth->bindParam(':excerpt', $this->excerpt, \PDO::PARAM_STR);
				$sth->bindParam(':heading', $this->heading, \PDO::PARAM_STR);
				$sth->bindParam(':body', $this->body, \PDO::PARAM_STR);
				$sth->bindParam(':category_id', $this->category_id, \PDO::PARAM_INT);
				$sth->bindParam(':slug', $this->slug, \PDO::PARAM_STR);
				
				if ( !$sth->execute() ) {
					throw new \PDOException('Failed to add a article to the database!');
				}

				return $db->conn->lastInsertId();
			}
			catch ( PDOException $e ) {
				echo $e->getMessage();
			}
		}

		public function delete()
		{
			if ( is_null($this->id) ) {
				return false;
			}

			try {
				$query = "DELETE FROM `articles` WHERE `id` = :id LIMIT 1";
				$sth = $this->db->conn->prepare( $query );
				$sth->bindParam(':id', $this->id, \PDO::PARAM_INT);
				if ( !$sth->execute() ) {
					throw new \PDOException('Failed to delete an article to the database!');
				}
				return true;				
			}
			catch ( PDOException $e ) {
				echo $e->getMessage();
			}
		}

		/**
		* A method to approve an article
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

			try {
				$query = "UPDATE `articles` SET `approved` = 1 WHERE `id` = :id LIMIT 1";
				$sth = $this->db->conn->prepare( $query );
				$sth->bindParam(':id', $this->id, \PDO::PARAM_INT);
				if ( !$sth->execute() ) {
					throw new \PDOException('Failed to approve a comment!');
				}
				return true;
			}
			catch ( PDOException $e ) {
				echo $e->getMessage();
			}

		}

		/**
		* A method to approve an article
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

			try {
				$query = "UPDATE `articles` SET `approved` = 0 WHERE `id` = :id LIMIT 1";
				$sth = $this->db->conn->prepare( $query );
				$sth->bindParam(':id', $this->id, \PDO::PARAM_INT);
				if ( !$sth->execute() )
				{
					throw new \PDOException('Failed to un approve a comment!');
				}
				return true;
			}
			catch ( PDOException $e ) {
				echo $e->getMessage();
			}
		}

		/**
		* Method to return the category
		*
		* @access public
		* @return string
		*/
		public function getCategory()
		{
			$category = Category::get($this->category_id);
			return $category;
		}

		/**
		* Method to return article comments
		*
		* @access public
		* @return array
		*/
		public function getComments()
		{
			$comments = Comments::getCommentsByArticleID($this->id);
			return $comments;
		}

		/**
		* Method to return the category icon
		*
		* @access public
		* @return string
		*/
		public function getIcon()
		{
			$icon = Icon::getIcon($this->category_id);
			return $icon;
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

		public function getCommentsCount()
		{
			$return = '';
			if (isset($this->comments) && count($this->comments) > 0) {
				$return = '
            <div class="comments">
              <span><i class="fa fa-comment"></i> '.count($this->comments).'</span>
            </div>
';
			}
			return $return;
		}
	}
}