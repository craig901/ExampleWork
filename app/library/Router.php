<?php

namespace Jengnet\Library
{
	/**
	* Router class for Jengnet.co.uk
	*
	* Handles the routes that have been set
	*
	* PHP version 5
	*
	* @author Craig Bullock <craig@jengnet.co.uk>
	* @version 1
	*/
	class Router
	{
		/**
		* The routes array
		*
		* @var array
		* @access protected
		*/
		protected $_routes = array();
		
		/**
		* The request URI
		*
		* @var string
		* @access protected
		*/
		protected $_requestURI;

		/**
		* Class constructor, sets the request URI
		*
		* @access public
		*/
		public function __construct()
		{
			$this->_requestURI = $_SERVER['REQUEST_URI'];
		}

		/**
		* Public method to add the route
		* Creates a route object and adds it to the _routes array
		*
		* @access public
		* @param array $route the route
		*/
		public function add($route)
		{
			$url = $route['url'];
			$method = $route['method'];
			$auth = (isset($route['auth'])) ? true : false;

			array_push(
				$this->_routes, 
				new Route($url,$method,$auth)
			);
		}

		/**
		* Public method to get a route
		*
		* @access public
		* @return object $route a Route object
		*/
		public function getRoute()
		{
			if ( $this->_requestURI === '/' ) {
				foreach( $this->_routes as $route ) {
					if ( $route->getURL() === '/' ) {
						return $route;
					}
				}
			}

			$_url = explode('/',$this->_requestURI);
			if (empty($_url[0])) {
				array_shift($_url);
			}

			$url = new \stdClass();
			$url->method = $_url[0];
			$url->slug = $_url[1];

			foreach($this->_routes as $route) {
				if ($this->_requestURI === $route->getURL()) {
					return $route;
				}
			}

			foreach($this->_routes as $route) {
				if ($route->getMethod() == $url->method && !is_null($route->getSlug())) {
					$route->addSlug($url->slug);
					return $route;
				}
			}
			return false;
		}

		/**
		* Public method to set everything off
		* Redirects the user if they have requested a URL that is a 404, or if they are
		* trying to access a URL which needs validation,
		* Initialises the controller and routes the method with a slug if requested
		*
		* @access public
		*/
		public function dispatch()
		{			
			if (!$route = $this->getRoute()) {
				echo '404';
				die();
			}

			if ($route->getAuth()) {
				$user = new \Jengnet\Models\User();
				if ( !$user->loggedIn() ) {
					Helpers::redirect('/login/');
				}
			}
			
			$method = $route->getMethod();
			$controller = new Controller();

			if (is_null($route->getSlug())) {
				$controller->$method();
			} else {
				$controller->$method($route->getSlug());
			}
		}
	}
}