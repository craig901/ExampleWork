<?php

namespace Jengnet\Library
{
	/**
	* Categories class for Jengnet.co.uk
	*
	* Handles getting category data from MySQL and creating Category objects
	*
	* PHP version 5
	*
	* @author Craig Bullock <craig@jengnet.co.uk>
	* @version 1
	*/
	class Categories
	{
		/**
		* Static method to return an array of category objects
		*
		* @access public
		* @static
		* @return array
		*/
		public static function getAll()
		{
			$db = DB::getInstance();
			$return = array();
			$query = "SELECT * FROM `categories` ORDER BY created_at DESC";
			$sth = $db->conn->prepare( $query );
			$sth->execute();
			while ( $obj = $sth->fetchObject( 'Jengnet\Models\Category' ) )
			{
				array_push($return, $obj);
			}
			return $return;
		}
	}
}