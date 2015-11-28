<?php

// Required assets
require_once('../app/init.php');
require_once('vendor/phpunit/phpunit/PHPUnit/Framework/TestCase.php');

/**
* Contact test class for Jengnet.co.uk
*
* To run this test type vendor\bin\phpunit ContactTest.php
*
* PHP version 5
*
* @author Craig Bullock <craig@jengnet.co.uk>
* @version 1
*/
class ContactTest extends PHPUnit_Framework_TestCase {

	private $contact;
	
	public function setUp()
	{
		$this->contact = new Contact();
	}
	
	public function tearDown()
	{
	
	}
	
	/**
	* Public method to test if a contact is valid
	* @access public
	*/
	public function testContactValid()
	{
		$this->contact->name = "Joe Bloggs";
		$this->contact->email = "joe@home.com";
		$this->contact->enquiry = "";
		
		$this->assertEquals( $this->contact->valid(), true);
	}
	
	/**
	* Public method to test if a contact is invalid
	* @access public
	*/
	public function testContactInValid()
	{
		$this->contact->name = "Joe Bloggs";
		$this->contact->email = "joeathome.com";
		$this->contact->enquiry = "";
		
		$this->assertEquals( $this->contact->valid(), false);
	}

	/**
	* Public method to test for getting an array of articles
	* @access public
	*/
	public function testContactSave()
	{
		$this->contact->name = "Joe Bloggs";
		$this->contact->email = "joe@home.com";
		$this->contact->enquiry = "";

		$this->assertEquals( $this->contact->save(), true);
	}


}