<?php

# To run this test type vendor\bin\phpunit CategoriesTest.php

// Required assets
//require_once('../app/init.php');
require_once('vendor/phpunit/phpunit/PHPUnit/Autoload.php');

Use Jengnet\Library\Comments as Comments;

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
class CommentsTest extends PHPUnit_Framework_TestCase {
	
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
		$comments = Comments::getAll();
		$this->assertInternalType( 'array', $comments );
		if (!empty($comments) && is_array($comments)) {
			$this->assertInstanceOf( 'Jengnet\Models\Comment', $comments[0] );
		}
	}

}