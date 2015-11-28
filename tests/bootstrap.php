<?php

// <!-- vendor\bin\phpunit --configuration="phpunit.xml" -->

// vendor\bin\phpunit --configuration="phpunit.xml" --testsuite="models"

require_once('../app/config.php');

require_once('../app/library/Route.php');
require_once('../app/library/Router.php');
require_once('../app/library/DB.php');
require_once('../app/library/Articles.php');
require_once('../app/library/Categories.php');
require_once('../app/library/Comments.php');
require_once('../app/library/Controller.php');
require_once('../app/library/Enquiries.php');
require_once('../app/library/Helpers.php');
require_once('../app/library/Icon.php');
require_once('../app/library/Nonce.php');
require_once('../app/library/View.php');

require_once('../app/models/Model.php');
require_once('../app/models/Article.php');
require_once('../app/models/Category.php');
require_once('../app/models/Comment.php');
require_once('../app/models/Reply.php');
require_once('../app/models/Enquiry.php');
require_once('../app/models/User.php');

class articleTestData
{
	public $id = 4;
	public $meta_title = 'Test article meta title';
	public $meta_description = 'Test article meta description';
	public $title = 'Test Title';
	public $excerpt = 'Test excerpt';
	public $heading = 'Test Heading';
	public $body = 'Test body';
	public $approved = 0;
	public $category_id = 3;
	public $slug = 'test-slug';
}

class categoryTestData
{
	public $id = 1;
	public $category = 'CSS';
	public $slug = 'css';
}

class commentTestData
{
	public $id = null;
	public $name = 'Joe Bloggs';
	public $email = 'joe@blogs.com';
	public $website = '';
	public $comment = 'Blah';
	public $article_id = 8;
	public $read = 0;
}

class enquiryTestData
{
	public $id = null;
	public $name = 'Joe Bloggs';
	public $email = 'joe@blogss.com';
	public $enquiry = 'Test enquiry here';
	public $read = 0;
}

class userTestData
{
	public $email = 'cbullock2005@yahoo.co.uk';
	public $password = '1qaz2wsxj';
	public $name = 'Craig Bullock';
}