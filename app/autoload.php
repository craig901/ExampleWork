<?php

/**
* Auto load classes
*/
function __autoload($class)
{
	$locations = array(
	'/app/library/',
	'/app/models/'
	);

	$parts = explode('\\', $class);
	foreach($locations as $loc)
	{
		$file = APP_ROOT . $loc . end($parts) . '.php';
		if ( file_exists($file) )
		{
			require_once($file);
		}
	}
}