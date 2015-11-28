<?php

# To run this test type vendor\bin\phpunit app\library\EnquiryTest.php

require_once('bootstrap.php');
require_once('vendor/phpunit/phpunit/PHPUnit/Autoload.php');

Use Jengnet\Models\User as User;

class UserTest extends PHPUnit_Framework_TestCase
{
	protected $userTestData;
	protected $id;

	public function setUp()
	{
		$this->userTestData = new userTestData();		
	}
	
	public function tearDown()
	{

	}

	public function testValidLogin()
	{
		$user = new User();
		$user->email = $this->userTestData->email;
		$user->password = $this->userTestData->password;
		$this->assertTrue($user->validLogin());

		$user = new User();
		$user->email = $this->userTestData->email;
		$this->assertFalse($user->validLogin());

		$user = new User();
		$user->password = $this->userTestData->password;
		$this->assertFalse($user->validLogin());

		$user = new User();
		$user->email = 'invalidEmail';
		$user->password = $this->userTestData->password;
		$this->assertFalse($user->validLogin());
	}

	public function testLogin()
	{
		$user = new User();
		$user->email = $this->userTestData->email;
		$user->password = $this->userTestData->password;
		$this->assertTrue($user->login());
	}

	public function testLogOut()
	{
		$user = new User();
		$user->email = $this->userTestData->email;
		$user->password = $this->userTestData->password;
		$user->login();
		
		$this->assertTrue($user->logout());
	}

	public function testLoggedIn()
	{
		$user = new User();
		$this->assertFalse($user->loggedIn());

		$user = new User();
		$user->email = $this->userTestData->email;
		$user->password = $this->userTestData->password;
		$user->login();

		$this->assertTrue($user->loggedIn());
	}

}