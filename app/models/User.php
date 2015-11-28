<?php

namespace Jengnet\Models
{
	
	/**
	* User class for Jengnet.co.uk
	*
	* Handles the data relating to a user
	*
	* PHP version 5
	*
	* @author Craig Bullock <craig@jengnet.co.uk>
	* @version 1
	*/
	class User extends Model
	{

		/**
		* The users id
		*
		* @var int
		* @access public
		*/
		public $id;
		
		/**
		* The users email
		*
		* @var string
		* @access public
		*/
		public $email;
		
		/**
		* The users name
		*
		* @var string
		* @access public
		*/
		public $name;
		
		/**
		* The users password
		*
		* @var string
		* @access public
		*/
		public $password;
		
		/**
		* The user created at date time
		*
		* @var datetime
		* @access public
		*/
		public $created_at;

		/**
		* The user updated at date time
		*
		* @var datetime
		* @access public
		*/
		public $updated_at;

		/**
		* The article updated at date time
		*
		* @var string
		* @access protected
		*/
		protected $_salt;

		/**
		* The article updated at date time
		*
		* @var boolean
		* @access protected
		*/
		protected $_loggedIn = false;

		/**
		* The class constructor
		* calls the parent, sets the salt if the user is
		* logged in
		*
		* @access public
		*/
		public function __construct()
		{
			parent::__construct();
			$this->_salt = APP_SALT;
			if ( isset($_SESSION['loggedIn']) && $_SESSION['loggedIn'] == true ) {
				$this->_loggedIn = true;
			}
		}

		public static function get($id)
		{
			
		}

		public function valid()
		{
			
		}

		public function save()
		{
			
		}

		public function delete()
		{

		}

		/**
		* A method to hash the set password
		*
		* @access public
		*/
		public function hashPassword()
		{
			if ( is_null($this->password) || is_null($this->_salt) ) {
				return false;
			}

			return hash("sha256", $this->password . $this->_salt);
		}

		/**
		* A method to determine a valid login
		*
		* @access public
		*/
		public function validLogin()
		{
			if ( is_null($this->email) ) {
				return false;
			}

			if ( !filter_var($this->email, FILTER_VALIDATE_EMAIL) ) {
				return false;
			}

			if ( is_null($this->password) ) {
				return false;
			}

			return true;
		}

		/**
		* A method to log a user in
		* returns true if the user was succesffuly logged in
		*
		* @access public
		* @return boolean
		*/
		public function login()
		{
			$sql = "SELECT * FROM `users` WHERE `email` = ?";
			$sth = $this->db->conn->prepare($sql);
			$sth->execute(array($this->email));
			if ( $user = $sth->fetch(\PDO::FETCH_OBJ) ) {
				if ( $hashedPassword = $this->hashPassword() ) {
					if ( $hashedPassword == $user->password ) {
						$_SESSION['loggedIn'] = true;
						$this->_loggedIn = true;
						return true;
					}
				}
			}
			return false;
		}

		/**
		* A method to log the user out
		*
		* @access public
		* @return boolean
		*/
		public function logOut()
		{
			unset($_SESSION['loggedIn']);
			$this->_loggedIn = false;
			return true;
		}

		/**
		* A method to return true of the user is logged in
		*
		* @access public
		* @return boolean
		*/
		public function loggedIn()
		{
			return $this->_loggedIn;
		}
	}
}