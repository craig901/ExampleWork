<?php

// http://zechim.com/blog/2012/05/16/install-phpunit-on-ubuntu/

# To run this test type vendor\bin\phpunit app\library\ArticlesTest.php

require_once('bootstrap.php');
require_once('vendor/phpunit/phpunit/PHPUnit/Autoload.php');

Use Jengnet\Library\Articles as Articles;
Use Jengnet\Models\Article as Article;
Use Jengnet\Models\Category as Category;


class ArticleTest extends PHPUnit_Framework_TestCase
{
	protected $articleTestData;
	protected $id;

	public function setUp()
	{
		$this->articleTestData = new articleTestData();

		$article = new Article();
		$article->meta_title = $this->articleTestData->meta_title;
		$article->meta_description = $this->articleTestData->meta_description;
		$article->title = $this->articleTestData->title;
		$article->excerpt = $this->articleTestData->excerpt;
		$article->heading = $this->articleTestData->heading;
		$article->body = $this->articleTestData->body;
		$article->slug = $this->articleTestData->slug;
		$article->category_id = $this->articleTestData->category_id;

		if ( $article->valid() ) {
			$this->id = $article->save();
		} else {
			echo 'Error adding the test article';
		}
		
	}
	
	public function tearDown()
	{
		if ( $article = Article::get($this->id) ) {
			$article->delete();
		}
	}

	public function testGet()
	{
		if ( $article = Article::get($this->id) ) {

			$this->assertInstanceOf( 'Jengnet\Models\Article', $article );

			$this->assertObjectHasAttribute('id', $article);
			$this->assertObjectHasAttribute('meta_title', $article);
			$this->assertObjectHasAttribute('meta_description', $article);
			$this->assertObjectHasAttribute('title', $article);
			$this->assertObjectHasAttribute('excerpt', $article);
			$this->assertObjectHasAttribute('heading', $article);
			$this->assertObjectHasAttribute('body', $article);
			$this->assertObjectHasAttribute('approved', $article);
			$this->assertObjectHasAttribute('created_at', $article);
			$this->assertObjectHasAttribute('updated_at', $article);
			$this->assertObjectHasAttribute('category_id', $article);
			$this->assertObjectHasAttribute('slug', $article);

			$this->assertEquals($article->meta_title, $this->articleTestData->meta_title);
			$this->assertEquals($article->meta_description, $this->articleTestData->meta_description);
			$this->assertEquals($article->title, $this->articleTestData->title);
			$this->assertEquals($article->excerpt, $this->articleTestData->excerpt);
			$this->assertEquals($article->heading, $this->articleTestData->heading);
			$this->assertEquals($article->approved, $this->articleTestData->approved);
			$this->assertEquals($article->slug, $this->articleTestData->slug);
			$this->assertEquals($article->category_id, $this->articleTestData->category_id);
		}
	}

	public function testValid()
	{
		$article = new Article();
		$article->meta_title = $this->articleTestData->meta_title;
		$article->meta_description = $this->articleTestData->meta_description;
		$article->title = $this->articleTestData->title;
		$article->excerpt = $this->articleTestData->excerpt;
		$article->heading = $this->articleTestData->heading;
		$article->body = $this->articleTestData->body;
		$article->slug = $this->articleTestData->slug;
		$article->category_id = $this->articleTestData->category_id;
		$this->assertTrue($article->valid());
	}

	public function testApprove()
	{
		if ( $article = Article::get($this->id) ) {
			$article->approve();
			$article = Article::get($this->id);
			$approved = $article->approved;
			$this->assertEquals($approved, '1');
		}
	}

	public function testUnApprove()
	{
		if ( $article = Article::get($this->id) ) {
			$article->unApprove();
			$article = Article::get($this->id);
			$approved = $article->approved;
			$this->assertEquals($approved, '0');
		}	
	}

	public function testGetCategory()
	{
		if ( $article = Article::get($this->id) ) {
			$category = $article->getCategory();
			
			$this->assertInstanceOf( 'Jengnet\Models\Category', $category );
			
			$this->assertObjectHasAttribute('id', $category);
			$this->assertObjectHasAttribute('category', $category);
			$this->assertObjectHasAttribute('slug', $category);

			$this->assertEquals($category->id, $this->articleTestData->category_id);
			$this->assertEquals($category->category, 'SEO');
			$this->assertEquals($category->slug, 'seo');
		}		
	}

	public function testGetComments()
	{
		if ( $article = Article::get($this->articleTestData->id) ) {
			
			$comments = $article->getComments();
			if (!empty($comments)) {
				$comment = $comments[0];

				$this->assertInstanceOf( 'Jengnet\Models\Comment', $comment );
				
				$this->assertObjectHasAttribute('id', $comment);
				$this->assertObjectHasAttribute('name', $comment);
				$this->assertObjectHasAttribute('email', $comment);
				$this->assertObjectHasAttribute('website', $comment);
				$this->assertObjectHasAttribute('comment', $comment);
				$this->assertObjectHasAttribute('article_id', $comment);

			}
		}		
	}

	public function testGetIcon()
	{
		if ( $article = Article::get($this->id) ) {
			$icon = $article->getIcon();
			$this->assertEquals($icon, 'SEO');
		}
	}

	public function testGetApprovedClass()
	{
		if ( $article = Article::get($this->id) ) {
			$article->approve();
			$article = Article::get($this->id);
			$class = $article->getApprovedClass();
			$this->assertEquals($class, 'approved');
		}
	}

}