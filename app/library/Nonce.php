<?php

namespace Jengnet\Library
{
	/**
	* Nonce class for Jengnet.co.uk
	*
	* Handles the creation and reading of the nonce
	*
	* PHP version 5
	*
	* @author Craig Bullock <craig@jengnet.co.uk>
	* @version 1
	*/
	class Nonce
	{
		/**
		* The nonce string
		*
		* @var string
		* @access protected
		*/
		protected $_nonce;

		/**
		* Class constructor, calls setNonce method
		*
		* @access public
		*/
		public function __construct()
		{
			$this->setNonce();
		}

		/**
		* Class constructor, calls setNonce method
		*
		* @access protected
		* @return string the nonce
		*/
		protected function createNonce()
		{
			return substr(str_shuffle("0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"), 0, 10);
		}

		/**
		* A protected method to set the Nonce
		*
		* @access protected
		*/
		protected function setNonce()
		{
			if (!isset($_SESSION['nonce']))
			{
				$this->_nonce = $this->createNonce();
				$_SESSION['nonce'] = $this->_nonce;
			}
			else
				$this->_nonce = $_SESSION['nonce'];
		}

		/**
		* A public method to return the nonce
		*
		* @access protected
		* @return string the nonce
		*/
		public function getNonce()
		{
			return $this->_nonce;
		}

		/**
		* A public method to validate the nonce
		*
		* @access protected
		* @param string $nonce the nonce to validate
		* @return boolean true if the nonce matches
		*/
		public function checkNonce($nonce)
		{
			if ( $this->_nonce != $nonce )
				return false;

			return true;
		}
	}
}