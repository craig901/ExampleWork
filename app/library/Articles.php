<?php

namespace Jengnet\Library
{
	use Jengnet\Models\Article as Article;

	/**
	* Articles class for Jengnet.co.uk
	*
	* Handles grabbing article data from MySQL and returning an array of article objects
	*
	* PHP version 5
	*
	* @author Craig Bullock <craig@jengnet.co.uk>
	* @version 1
	*/
	class Articles
	{
		/**
		* Static method to return an array of article objects
		*
		* @access public
		* @static
		* @return array
		*/
		public static function getAll($limit=null)
		{
			$db = DB::getInstance();
			$return = array();
			$query = "SELECT a.*, c.category FROM `articles` a INNER JOIN `categories` c ON a.category_id = c.id ORDER BY created_at DESC";
			if (!is_null($limit) && is_numeric($limit)) {
				$query .= ' LIMIT '.$limit;
			}
			$sth = $db->conn->prepare( $query );
			$sth->execute();
			while ( $obj = $sth->fetchObject( 'Jengnet\Models\Article' ) )
			{
				array_push($return, $obj);
			}
			return $return;
		}

		/**
		* Static method to return a single article object from the suuplied slug
		*
		* @param string $slug the article slug
		* @access public
		* @static
		* @return object
		*/
		public static function getBySlug($slug=null)
		{
			$db = DB::getInstance();
			$return = array();
			$query = "SELECT a.*, c.category FROM `articles` a INNER JOIN `categories` c ON a.category_id = c.id WHERE a.slug = :slug LIMIT 1";
			$sth = $db->conn->prepare( $query );
			$sth->bindParam(':slug', $slug, \PDO::PARAM_STR);
			$sth->execute();
			$article = $sth->fetchObject( 'Jengnet\Models\Article' );
			return $article;
		}
	}
}