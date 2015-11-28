<?php

namespace Jengnet\Library
{
	/**
	* Database class for Jengnet.co.uk
	*
	* Handles the database credentials, connection to MySQL as well as queries
	*
	* PHP version 5
	*
	* @author Craig Bullock <craig@jengnet.co.uk>
	* @version 1
	*/
	class DB
	{
		/**
		* The database host
		*
		* @var string
		* @access protected
		*/
		protected $host;
		
		/**
		* The database user name
		*
		* @var string
		* @access protected
		*/
		protected $un;
		
		/**
		* The database password
		*
		* @var string
		* @access protected
		*/
		protected $pw;
		
		/**
		* The database name
		*
		* @var string
		* @access protected
		*/
		protected $db;
		
		/**
		* The database connection
		*
		* @var object
		* @access public
		*/
		public $conn;

		/**
		* Class constructor, grabs the database credentials and calls
		* the connect function
		*
		* @access public
		*/
		public function __construct()
		{
			$this->host 	= HOST;
			$this->un 		= USERNAME;
			$this->pw 		= PASSWORD;
			$this->db 		= DATABASE;
			$this->connect();
		}

		/**
		* Static method to return a single instance
		* of the database class
		*
		* @access public
		*/
		public static function getInstance()
		{
			static $inst = null;
			if ( $inst === null ) {
				$inst = new DB();
			}
			return $inst;
		}

		/**
		* Method to connect to MySQL with the mysqli connection
		*
		* @access public
		*/
		public function connect()
		{
			$dsn = 'mysql:dbname='.$this->db.';host=localhost';
			try { 
				if ( !$this->conn = new \PDO($dsn,$this->un,$this->pw) ) {
					throw new PDOException('Failed to connect to the database!');
				}
			} catch ( PDOException $e ) {
				echo $e->getMessage();
			}
		}

		/**
		* Method to return a MySQL results set
		*
		*	@param string
		* @return array
		* @access public
		*/
		public function getResults( $query )
		{
			$return = array();
			if ( $result = $this->conn->query( $query ) ) {
				while ( $obj = $result->fetchObject() ) {
					array_push($return, $obj);
				}
			}
			return $return;
		}

		/**
		* Method to query MySQL
		*
		*	@param string
		* @return boolean
		* @access public
		*/
		public function insert( $query )
		{
			if ( $this->conn->query( $query ) ) {
				return true;
			} else {
				return false;
			}
		}

		/**
		* Method to escape a string
		*
		*	@param string
		* @return string
		* @static
		* @access public
		*/
		public static function escapeString($string)
		{
			$db = self::getInstance();
			return $db->conn->quote($string);
		}

	}
}