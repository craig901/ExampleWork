<?php

namespace Jengnet\Models
{
	use Jengnet\Library\DB as DB;

	/**
	* Enquiry class for Jengnet.co.uk
	*
	* Handles the data relating to an enquiry
	*
	* PHP version 5
	*
	* @author Craig Bullock <craig@jengnet.co.uk>
	* @version 1
	*/
	class Enquiry extends Model
	{
		/**
		* The enquiry id
		*
		* @var string
		* @access public
		*/
		public $id;

		/**
		* The enquiry name
		*
		* @var string
		* @access public
		*/
		public $name;
		
		/**
		* The enquiry email
		*
		* @var string
		* @access public
		*/
		public $email;
		
		/**
		* The enquiry enquiry
		*
		* @var string
		* @access public
		*/
		public $enquiry;

		/**
		* The read flag
		*
		* @var int
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
		* The class constructor
		*
		* @access public
		*/
		public $errors = array();

		public function __construct()
		{
			parent::__construct();
		}

		/**
		* A static method to return an enquiry object
		*
		* @param id
		* @return object
		* @access public
		*/
		public static function get($id)
		{
			$db = DB::getInstance();
			$return = array();
			$query = "SELECT * FROM `enquiries` WHERE `id` = :id LIMIT 1";
			$sth = $db->conn->prepare( $query );
			$sth->bindParam(':id', $id, \PDO::PARAM_STR);
			$sth->execute();
			if ( $obj = $sth->fetchObject( 'Jengnet\Models\Enquiry' ) )
			{
				return $obj;
			}
			return false;
		}

		/**
		* Public method to test if the enquiry is valid
		*
		* @return boolean
		* @access public
		*/
		public function valid()
		{
			if (empty($this->name)) {
				array_push($this->errors,'Please enter a name');
			}

			if (empty($this->email)) {
				array_push($this->errors,'Please enter an Email address');
			} elseif (!filter_var($this->email, FILTER_VALIDATE_EMAIL)) {
				array_push($this->errors,'Please enter a valid Email address');
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
				$query = "INSERT INTO `enquiries` SET `name` = :name, `email` = :email, `enquiry` = :enquiry, `created_at` = '".date('Y-m-d H:i:s')."', `updated_at` = '".date('Y-m-d H:i:s')."'";
				$db = DB::getInstance();
				$sth = $db->conn->prepare( $query );
				$sth->bindParam(':name', $this->name, \PDO::PARAM_STR);
				$sth->bindParam(':email', $this->email, \PDO::PARAM_STR);
				$sth->bindParam(':enquiry', $this->enquiry, \PDO::PARAM_STR);
			
				if ( !$sth->execute() ) {
					throw new \PDOException('Failed to save a comment!');
				}

				return $db->conn->lastInsertId();
			
			} catch ( \PDOException $e ) {
				echo $e->getMessage();
			}
		}

		/**
		* A method to delete enquiry
		*
		* @param id
		* @return boolean
		* @access public
		*/
		public function delete($id=null)
		{
			$enquiryID = (is_null($id)) ? ( (is_null($this->id)) ? null : $this->id ) : $id;
			$db = DB::getInstance();
			$return = array();
			$query = "DELETE FROM `enquiries` WHERE `id` = :id";
			$sth = $db->conn->prepare( $query );
			$sth->bindParam(':id', $enquiryID, \PDO::PARAM_INT);
			if ( $sth->execute() ) {
				return true;
			}
			return false;
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
	}
}