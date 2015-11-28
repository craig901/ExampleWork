<?php

use Jengnet\Library\Router as Router;

$router = new Router();

$router->add(
	array('url' => '/', 'method' => 'index')
);

$router->add(
	array('url' => '/article/{slug}', 'method' => 'article')
);

$router->add(
	array('url' => '/login/', 'method' => 'login')
);

$router->add(
	array('url' => '/logout/', 'method' => 'logout')
);

$router->add(
	array('url' => '/admin/', 'method' => 'admin', 'auth' => true)
);

$router->add(
	array('url' => '/admin/enquiries', 'method' => 'adminEnquiries', 'auth' => true)
);

$router->add(
	array('url' => '/admin/articles', 'method' => 'adminArticles', 'auth' => true)
);

$router->add(
	array('url' => '/admin/comments', 'method' => 'adminComments', 'auth' => true)
);