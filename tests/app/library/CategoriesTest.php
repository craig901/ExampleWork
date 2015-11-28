<?php

# To run this test type vendor\bin\phpunit CategoriesTest.php

// Required assets
//require_once('../app/init.php');
require_once('vendor/phpunit/phpunit/PHPUnit/Autoload.php');

Use Jengnet\Library\Categories as Categories;

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
class CategoriesTest extends PHPUnit_Framework_TestCase {
	
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
	public function testCategoriesGetAll()
	{
		$id = 2;
		$categories = Categories::getAll();
		$this->assertInternalType( 'array', $categories );
		if (!empty($categories) && is_array($categories)) {
			$this->assertInstanceOf( 'Jengnet\Models\Category', $categories[0] );
		}
	}

}