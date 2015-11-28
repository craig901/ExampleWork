<?php

namespace jengnet\Library
{
	/**
	* Icon class for Jengnet.co.uk
	*
	* Handles icons that are associated to an article
	*
	* PHP version 5
	*
	* @author Craig Bullock <craig@jengnet.co.uk>
	* @version 1
	*/
	class Icon
	{
		/**
		* Static method to return an icon
		*
		* @access public
		* @param int $categoryID the id of the category
		* @static
		* @return string
		*/
		public static function getIcon($categoryID)
		{
			$icon = '';
			switch($categoryID)
			{
				case 1:
					$icon = 'CSS';
					break;
				case 2:
					$icon = 'PHP';
					break;
				case 3:
					$icon = 'SEO';
					break;
				case 4:
					$icon = 'JS';
					break;
			}
			return $icon;
		}
	}	
}
