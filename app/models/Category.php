<?php

namespace Jengnet\Models
{
	Use Jengnet\Library\DB as DB;

	/**
	* Category class for Jengnet.co.uk
	*
	* Handles each individual category
	*
	* PHP version 5
	*
	* @author Craig Bullock <craig@jengnet.co.uk>
	* @version 1
	*/
	class Category extends Model
	{
		/**
		* The id of the category
		*
		* @var int
		* @access public
		*/
		public $id;

		/**
		* The name of the category
		*
		* @var string
		* @access public
		*/
		public $category;

		/**
		* The slug of the category
		*
		* @var string
		* @access public
		*/
		public $slug;

		/**
		* Class constructor, initilises category data
		*
		* @access public
		*/
		public function __construct()
		{
			parent::__construct();
		}

		public static function get($id)
		{
			$db = DB::getInstance();
			$return = array();
			$query = "SELECT * FROM `categories` WHERE `id` = :id LIMIT 1";
			$sth = $db->conn->prepare( $query );
			$sth->bindParam(':id', $id, \PDO::PARAM_INT);
			$sth->execute();
			if ( $obj = $sth->fetchObject( 'Jengnet\Models\Category' ) )
			{
				return $obj;
			}
			return false;
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
	}
}