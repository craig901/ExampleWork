<?php

namespace Jengnet\Library
{
	use Jengnet\Models\User as User;
	use Jengnet\Models\Enquiry as Enquiry;
	use Jengnet\Models\Article as Article;
	use Jengnet\Library\Enquiries as Enquiries;
	use Jengnet\Library\Articles as Articles;
	use Jengnet\Library\Comments as Comments;
	use Jengnet\Library\Helpers as Helpers;

	/**
	* Controller class for Jengnet.co.uk
	*
	* Handles the management of the data to be served to the views
	*
	* PHP version 5
	*
	* @author Craig Bullock <craig@jengnet.co.uk>
	* @version 1
	*/
	class Controller
	{
		/**
		* The view object
		*
		* @var object
		* @access protected
		*/
		protected $_view;
		
		/**
		* The nonce
		*
		* @var string
		* @access protected
		*/
		protected $_nonce;

		/**
		* Class constructor, instantiates the view
		*
		* @access public
		*/
		public function __construct()
		{
			$this->_view = new View();
		}

		/**
		* The home page
		*
		* @access public
		*/
		public function index()
		{
			$articles = Articles::getAll();
			$this->_view
							->with('metaTitle', 'Web Design Camberley : Jengnet')
							->with('metaDescription', 'We are a digital agency based in Camberley. We work with start ups and SME\'s and have helped many clients since our creation in 2005.')
							->with('articles', $articles)
							->with('nonce', $this->_nonce)
							->render('index');
		}

		/**
		* The article page
		*
		* @access public
		* @param string $slug the article slug
		*/
		public function article($slug)
		{
			$article = Articles::getBySlug($slug);
			$articles = Articles::getAll(4);
			$this->_view
								->with('metaTitle', $article->meta_title)
								->with('metaDescription', $article->meta_description)
								->with('article', $article)
								->with('articles', $articles)
								->with('nonce', $this->_nonce)
								->render('article');
		}

		/**
		* The login page
		*
		* @access public
		*/
		public function login()
		{
			$this->_view->render('login');
		}

		/**
		* The logout page
		*
		* @access public
		*/
		public function logout()
		{
			$user = new User();
			$user->logOut();
			Helpers::redirect('/login/');
		}

		/**
		* The admin page
		*
		* @access public
		*/
		public function admin()
		{
			$enquiries = Enquiries::getAll();
			$articles = Articles::getAll();
			$newEnquiries = Enquiries::getUnread();
			$newComments = Comments::getUnread();

			$this->_view
							->with('newEnquiries', count($newEnquiries))
							->with('articles', $articles)
							->with('newComments', count($newComments))
							->render('admin');
		}

		/**
		* The admin enquiries page
		*
		* @access public
		*/
		public function adminEnquiries()
		{
			$enquiries = Enquiries::getAll();
			$this->_view
							->with('enquiries', $enquiries)
							->render('admin-enquiries');
		}

		/**
		* The admin comments page
		*
		* @access public
		*/
		public function adminComments()
		{
			//$comments = Comments::getAll();
			$comments = Comments::getAllWithReplies();
			$this->_view
							->with('comments', $comments)
							->render('admin-comments');
		}

		/**
		* The admin articles page
		*
		* @access public
		*/
		public function adminArticles()
		{
			$articles = Articles::getAll();
			$this->_view
							->with('articles', $articles)
							->render('admin-articles');
		}
	}
}