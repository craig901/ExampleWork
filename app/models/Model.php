<?php

namespace Jengnet\Models
{
	use \Jengnet\Library\DB as DB;

	/**
	* Model abstract base class for Jengnet.co.uk
	*
	* Sets a DB connection and maps out the save method
	*
	* PHP version 5
	*
	* @author Craig Bullock <craig@jengnet.co.uk>
	* @version 1
	*/
	abstract class Model
	{
		
		/**
		* The database connection
		*
		* @var object
		* @access protected
		*/
		protected $db;

		public function __construct()
		{
			$this->db = DB::getInstance();
		}

		/**
		* Abstract save method
		*
		* @var int
		* @access public
		*/

		abstract public function save();		
		abstract public function delete();
		abstract public function valid();

		/**
		* Method to return the item creation date
		*
		* @access public
		* @return string
		*/
		public function getDate()
		{
			$date = new \DateTime($this->created_at);
			return $date->format('jS M Y');
		}

		/**
		* Method to return the item creation date
		*
		* @access public
		* @return string
		*/
		public function getMonth()
		{
			$date = new \DateTime($this->created_at);
			return $date->format('M');
		}

		/**
		* Method to return the item creation date
		*
		* @access public
		* @return string
		*/
		public function getYear()
		{
			$date = new \DateTime($this->created_at);
			return $date->format('Y');
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
	}
}