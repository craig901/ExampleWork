<?php

namespace Jengnet\Library
{
	/**
	* Generic helpers for Jengnet
	*
	* PHP version 5
	*
	* @author Craig Bullock <craig@jengnet.co.uk>
	* @version 1
	*/
	class Helpers
	{
		/**
		* Static method to redirect the user
		*
		* @access public
		* @param string the URL the user is to be redirected too
		* @static
		*/
		public static function redirect($url)
		{
			Header("Location: $url");
			die();
		}
	}
}