<?php

namespace Jengnet\Library
{
	use Jengnet\Library\Nonce as Nonce;

	/**
	* View class for Jengnet.co.uk
	*
	* Handles serving up the views with data which is passed from the controller
	*
	* PHP version 5
	*
	* @author Craig Bullock <craig@jengnet.co.uk>
	* @version 1
	*/
	class View
	{
		/**
		* The directory in which the views are located
		*
		* @var string
		* @access protected
		*/
		protected $_dir;
		
		/**
		* The content data
		*
		* @var array
		* @access protected
		*/
		protected $_content = array();
		
		/**
		* The nonce
		*
		* @var array
		* @access protected
		*/
		protected $_nonce;

		/**
		* Class constructor, sets the views directory, initialises the nonce
		*
		* @access public
		*/
		public function __construct()
		{
			$this->_dir = APP_ROOT . '/app/views/';
			$nonce = new Nonce();
			$this->_nonce = $nonce->getNonce();
		}

		/**
		* A public method to allow the controller to apply name value pairs to the view instance
		*
		* @access public
		* @return object an instance of itself
		*/
		public function with($key,$value)
		{
			array_push($this->_content,array($key => $value));

			return $this;
		}

		/**
		* A public method to render the view
		*
		* @access public
		*/
		public function render($view)
		{
			foreach($this->_content as $content) {
				extract($content);	
			}
			
			ob_start();
			$file = $this->_dir . $view . '.html';
			include $file;
			echo ob_get_clean();
		}
	}
}