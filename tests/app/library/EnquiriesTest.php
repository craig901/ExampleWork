<?php

Use Jengnet\Library\Enquiries as Enquiries;

/**
* Articles test class for Jengnet.co.uk
*
* To run this test type vendor\bin\phpunit ArticlesTest.php
*
* PHP version 5
*
* @author Craig Bullock <craig@jengnet.co.uk>
* @version 1
*/
class EnquiriesTest extends PHPUnit_Framework_TestCase {
	
	/**
	* Public method to set the tests up
	* @access public
	*/
	public function setUp()
	{

	}
	
	public function tearDown()
	{
	
	}
	
	/**
	* Public method to test for getting a single category
	* @access public
	*/
	public function testGetAll()
	{
		$enquiries = Enquiries::getAll();
		$this->assertInternalType( 'array', $enquiries );
		if (!empty($enquiries) && is_array($enquiries)) {
			$this->assertInstanceOf( 'Jengnet\Models\Enquiry', $enquiries[0] );
		}
	}

	public function testGetUnread()
	{
		$enquiries = Enquiries::getUnread();
		$this->assertInternalType( 'array', $enquiries );
		if (!empty($enquiries) && is_array($enquiries)) {
			$this->assertInstanceOf( 'Jengnet\Models\Enquiry', $enquiries[0] );
		}
	}

}