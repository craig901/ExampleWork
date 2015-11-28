<?php

namespace Jengnet\Library
{
	use Jengnet\Models\Enquiry as Enquiry;

	/**
	* Enquiries class for Jengnet.co.uk
	*
	* Handles grabbing article data from MySQL and returning an array of article objects
	*
	* PHP version 5
	*
	* @author Craig Bullock <craig@jengnet.co.uk>
	* @version 1
	*/
	class Enquiries
	{
		/**
		* Static method to return an array of article objects
		*
		* @access public
		* @static
		* @return array
		*/
		public static function getAll()
		{
			$db = DB::getInstance();
			$return = array();
			$query = "SELECT * FROM `enquiries` ORDER BY created_at DESC";
			$sth = $db->conn->prepare( $query );
			$sth->execute();
			while ( $obj = $sth->fetchObject( 'Jengnet\Models\Enquiry' ) )
			{
				array_push($return, $obj);
			}
			return $return;
		}

		/**
		* Static method to return an array of enquiry objects that are unread
		*
		* @access public
		* @static
		* @return array
		*/
		public static function getUnread()
		{
			$db = DB::getInstance();
			$return = array();
			$query = "SELECT * FROM `enquiries` WHERE `read` = 0 ORDER BY created_at DESC";
			$sth = $db->conn->prepare( $query );
			$sth->execute();
			while ( $obj = $sth->fetchObject( 'Jengnet\Models\Enquiry' ) )
			{
				array_push($return, $obj);
			}
			return $return;
		}
	}
}