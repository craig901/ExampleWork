<?php

// http://zechim.com/blog/2012/05/16/install-phpunit-on-ubuntu/

# To run this test type vendor\bin\phpunit app\library\ArticlesTest.php

require_once('bootstrap.php');

// Required assets
require_once('vendor/phpunit/phpunit/PHPUnit/Autoload.php');

Use Jengnet\Library\Articles as Articles;
Use Jengnet\Models\Article as Article;

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
class ArticlesTest extends PHPUnit_Framework_TestCase {
	
	protected $articleTestData;

	/**
	* Public method to set the tests up
	* @access public
	*/
	public function setUp()
	{
		$this->articleTestData = new articleTestData();
	}
	
	public function tearDown()
	{
	
	}
	
	/**
	* Public method to test for getting an array of articles
	* @access public
	*/
	public function testArticlesGetAll()
	{
		$articles = Articles::getAll();	
		$this->assertInternalType('array',$articles);
	}
	
	/**
	* Public method to test for getting a single article by slug
	* @access public
	*/
	public function testArticlesGetBySlug()
	{	
		$article = Articles::getBySlug( 'seo-in-a-nut-shell' );
		$this->assertInternalType( 'object', $article );
		$this->assertInstanceOf( 'Jengnet\Models\Article', $article );
	}



}