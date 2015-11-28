<?php

# To run this test type vendor\bin\phpunit app\library\EnquiryTest.php

require_once('bootstrap.php');
require_once('vendor/phpunit/phpunit/PHPUnit/Autoload.php');

Use Jengnet\Models\Enquiry as Enquiry;

class EnquiryTest extends PHPUnit_Framework_TestCase
{
	protected $enquiryTestData;
	protected $id;

	public function setUp()
	{
		$this->enquiryTestData = new enquiryTestData();

		$enquiry = new Enquiry();
		$enquiry->name = $this->enquiryTestData->name;
		$enquiry->email = $this->enquiryTestData->email;
		$enquiry->enquiry = $this->enquiryTestData->enquiry;

		if ( $enquiry->valid() ) {
			$this->id = $enquiry->save();
		} else {
			echo 'Error adding the test enquiry';
		}
		
	}
	
	public function tearDown()
	{
		if ( $enquiry = Enquiry::get($this->id) ) {
			$enquiry->delete();
		}
	}

	public function testGet()
	{
		if ( $enquiry = Enquiry::get($this->id) ) {

			$this->assertInstanceOf( 'Jengnet\Models\Enquiry', $enquiry );

			$this->assertObjectHasAttribute('id', $enquiry);
			$this->assertObjectHasAttribute('name', $enquiry);
			$this->assertObjectHasAttribute('email', $enquiry);
			$this->assertObjectHasAttribute('read', $enquiry);
			$this->assertObjectHasAttribute('created_at', $enquiry);
			$this->assertObjectHasAttribute('updated_at', $enquiry);

			$this->assertEquals($enquiry->name, $this->enquiryTestData->name);
			$this->assertEquals($enquiry->email, $this->enquiryTestData->email);
			$this->assertEquals($enquiry->enquiry, $this->enquiryTestData->enquiry);
			$this->assertEquals($enquiry->read, $this->enquiryTestData->read);
		}
	}

	public function testValid()
	{
		$enquiry = new Enquiry();
		$this->assertFalse($enquiry->valid());

		$enquiry = new Enquiry();
		$enquiry->name = $this->enquiryTestData->name;
		$this->assertFalse($enquiry->valid());

		$enquiry = new Enquiry();
		$enquiry->name = $this->enquiryTestData->name;
		$enquiry->email = 'invalidEmail';
		$this->assertFalse($enquiry->valid());

		$enquiry = new Enquiry();
		$enquiry->name = $this->enquiryTestData->name;
		$enquiry->email = $this->enquiryTestData->email;
		$this->assertTrue($enquiry->valid());
	}

	public function testSave()
	{
		$enquiry = new Enquiry();
		$enquiry->name = $this->enquiryTestData->name;
		$enquiry->email = $this->enquiryTestData->email;
		$enquiry->enquiry = $this->enquiryTestData->enquiry;
		$id = $enquiry->save();
		if ( $savedEnquiry = Enquiry::get($id) ) {
			$this->assertEquals($savedEnquiry->name, $this->enquiryTestData->name);
			$this->assertEquals($savedEnquiry->email, $this->enquiryTestData->email);
			$this->assertEquals($savedEnquiry->enquiry, $this->enquiryTestData->enquiry);
			$this->assertEquals($savedEnquiry->read, $this->enquiryTestData->read);
			$savedEnquiry->delete();
		}
	}

	public function testDelete()
	{
		$enquiry 							= new Enquiry();
		$enquiry->name				= $this->enquiryTestData->name;
		$enquiry->email				= $this->enquiryTestData->email;
		$enquiry->enquiry			= $this->enquiryTestData->enquiry;
		$id = $enquiry->save();
		$newEnquiry = Enquiry::get($id);
		$success = $newEnquiry->delete();
		$this->assertTrue($success);
	}

	public function testIsNew()
	{
		if ( $enquiry = Enquiry::get($this->id) ) {
			$this->assertTrue($enquiry->isNew());
		}
	}

}