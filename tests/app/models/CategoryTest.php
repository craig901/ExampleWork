<?php

# To run this test type vendor\bin\phpunit app\library\CategoryTest.php

require_once('bootstrap.php');
require_once('vendor/phpunit/phpunit/PHPUnit/Autoload.php');

Use Jengnet\Models\Category as Category;

class CategoryTest extends PHPUnit_Framework_TestCase
{
	protected $categoryTestData;
	protected $id;

	public function setUp()
	{
		$this->categoryTestData = new categoryTestData();		
	}
	
	public function tearDown()
	{
	}

	public function testGet()
	{
		if ( $category = Category::get($this->categoryTestData->id) ) {

			$this->assertInstanceOf( 'Jengnet\Models\Category', $category );

			$this->assertObjectHasAttribute('id', $category);
			$this->assertObjectHasAttribute('category', $category);
			$this->assertObjectHasAttribute('slug', $category);

			$this->assertEquals($category->category, $this->categoryTestData->category);
			$this->assertEquals($category->slug, $this->categoryTestData->slug);
		}
	}
}