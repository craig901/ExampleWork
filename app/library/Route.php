<?php

namespace Jengnet\Library
{
	/**
	* Route class for Jengnet.co.uk
	*
	* Handles the set routes
	*
	* PHP version 5
	*
	* @author Craig Bullock <craig@jengnet.co.uk>
	* @version 1
	*/
	class Route
	{
		/**
		* The url string
		*
		* @var string
		* @access protected
		*/
		protected $_url;
		
		/**
		* The method string
		*
		* @var string
		* @access protected
		*/
		protected $_method;
		
		/**
		* The slug string
		*
		* @var string
		* @access protected
		*/
		protected $_slug;
		
		/**
		* The auth boolean
		*
		* @var boolean
		* @access protected
		*/
		protected $_auth;

		/**
		* Class constructor, sets the url, method, slug and auth vars
		*
		* @access public
		* @param string $url the url string
		* @param string $method the method to be called
		* @param boolean $auth if the route needs to be validated
		*/
		public function __construct($url,$method,$auth=false)
		{
			$this->_url = $this->sortURL($url);
			$this->_method = $method;
			$this->_slug = $this->sortSlug($url);
			$this->_auth = $auth;
		}

		/**
		* Protected method to break down the URL
		*
		* @access protected
		* @return string $url the url
		*/
		protected function sortURL($url)
		{
			if ($url == '/') {
				return $url;
			}

			if (preg_match("/{slug}/i", $url)) {
				$parts = explode('/', $url);
				return $parts[1];				
			}

			return $url;
		}

		/**
		* Protected method to sort the slug
		*
		* @access protected
		* @param string $url the url
		* @return string the slug
		*/
		protected function sortSlug($url)
		{
			$parts = explode('/', $url);

			if (count($parts) > 2)
				return $parts[2];

			return null;
		}

		/**
		* Public method to add the slug
		*
		* @access public
		* @param string $slug the slug
		*/
		public function addSlug($slug)
		{
			$this->_slug = $slug;
		}

		/**
		* Public method get the url
		*
		* @access public
		* @return string the url
		*/
		public function getURL()
		{
			return $this->_url;
		}

		/**
		* Public method get the method
		*
		* @access public
		* @return string the method
		*/
		public function getMethod()
		{
			return $this->_method;
		}

		/**
		* Public method get the slug
		*
		* @access public
		* @return string the slug
		*/
		public function getSlug()
		{
			return $this->_slug;
		}

		/**
		* Public method get if the route needs to be validated
		*
		* @access public
		* @return boolean the auth value
		*/
		public function getAuth()
		{
			return $this->_auth;
		}
	}
}