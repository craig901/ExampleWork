<?php

// http://zechim.com/blog/2012/05/16/install-phpunit-on-ubuntu/

# To run this test type vendor\bin\phpunit app\library\CommentTest.php

require_once('bootstrap.php');
require_once('vendor/phpunit/phpunit/PHPUnit/Autoload.php');

Use Jengnet\Library\Articles as Articles;
Use Jengnet\Models\Article as Article;
Use Jengnet\Models\Category as Category;
Use Jengnet\Models\Comment as Comment;


class CommentTest extends PHPUnit_Framework_TestCase
{
	protected $backupGlobals = FALSE;

	protected $commentTestData;
	protected $id;

	public function setUp()
	{
		$this->commentTestData = new commentTestData();

		$comment							= new Comment();
		$comment->name				= $this->commentTestData->name;
		$comment->email				= $this->commentTestData->email;
		$comment->website			= $this->commentTestData->website;
		$comment->comment			= $this->commentTestData->comment;
		$comment->article_id	= $this->commentTestData->article_id;

		$this->id = $comment->save();
	}
	
	public function tearDown()
	{
		if ( $comment = Comment::get($this->id) ) {
			$comment->delete();
		}
	}

	public function testGet()
	{
		if ( $comment = Comment::get($this->id) ) {

			$this->assertInstanceOf( 'Jengnet\Models\Comment', $comment );

			$this->assertObjectHasAttribute('id', $comment);
			$this->assertObjectHasAttribute('name', $comment);
			$this->assertObjectHasAttribute('email', $comment);
			$this->assertObjectHasAttribute('website', $comment);
			$this->assertObjectHasAttribute('comment', $comment);
			$this->assertObjectHasAttribute('article_id', $comment);
			$this->assertObjectHasAttribute('read', $comment);

			$this->assertEquals($comment->name, $this->commentTestData->name);
			$this->assertEquals($comment->email, $this->commentTestData->email);
			$this->assertEquals($comment->website, $this->commentTestData->website);
			$this->assertEquals($comment->comment, $this->commentTestData->comment);
			$this->assertEquals($comment->article_id, $this->commentTestData->article_id);
			$this->assertEquals($comment->read, $this->commentTestData->read);
		}
	}

	public function testValid()
	{
		$comment = new Comment();
		$this->assertFalse($comment->valid());

		$comment = new Comment();
		$comment->name = $this->commentTestData->name;
		$this->assertTrue($comment->valid());

		$comment = new Comment();
		$comment->email = $this->commentTestData->email;
		$this->assertFalse($comment->valid());

		$comment = new Comment();
		$comment->name = $this->commentTestData->name;
		$comment->email = 'invalidEmail';
		$this->assertFalse($comment->valid());

		$comment = new Comment();
		$comment->name = $this->commentTestData->name;
		$comment->email = $this->commentTestData->email;
		$this->assertTrue($comment->valid());
	}

	public function testSave()
	{
		$comment 							= new Comment();
		$comment->name				= $this->commentTestData->name;
		$comment->email				= $this->commentTestData->email;
		$comment->website			= $this->commentTestData->website;
		$comment->comment			= $this->commentTestData->comment;
		$comment->article_id	= $this->commentTestData->article_id;
		$id = $comment->save();

		if ( $savedComment = Comment::get($id) ) {
			$this->assertEquals($savedComment->name, $this->commentTestData->name);
			$this->assertEquals($savedComment->email, $this->commentTestData->email);
			$this->assertEquals($savedComment->website, $this->commentTestData->website);
			$this->assertEquals($savedComment->comment, $this->commentTestData->comment);
			$this->assertEquals($savedComment->article_id, $this->commentTestData->article_id);
			$this->assertEquals($savedComment->read, $this->commentTestData->read);
		}
		$savedComment->delete();
	}

	public function testDelete()
	{
		$comment 							= new Comment();
		$comment->name				= $this->commentTestData->name;
		$comment->email				= $this->commentTestData->email;
		$comment->website			= $this->commentTestData->website;
		$comment->comment			= $this->commentTestData->comment;
		$comment->article_id	= $this->commentTestData->article_id;
		$id = $comment->save();
		$newComment = Comment::get($id);
		$success = $newComment->delete();
		$this->assertTrue($success);
	}

	public function testApprove()
	{
		if ( $comment = Comment::get($this->id) ) {
			$comment->approve();
			$comment = Comment::get($this->id);
			$approved = $comment->approved;
			$this->assertEquals($approved, '1');
		}
	}

	public function testUnApprove()
	{
		if ( $comment = Comment::get($this->id) ) {
			$comment->unApprove();
			$comment = Comment::get($this->id);
			$approved = $comment->approved;
			$this->assertEquals($approved, '0');
		}
	}

	public function testIsNew()
	{
		if ( $comment = Comment::get($this->id) ) {
			$this->assertTrue($comment->isNew());
		}
	}

	public function testGetApprovedClass()
	{
		if ( $comment = Comment::get($this->id) ) {
			$comment->approve();
			$comment = Comment::get($this->id);
			$this->assertEquals($comment->getApprovedClass(), 'approved');
			$comment->unApprove();
			$comment = Comment::get($this->id);
			$this->assertEquals($comment->getApprovedClass(), '');
		}	
	}


}