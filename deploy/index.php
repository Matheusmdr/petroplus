<?php

/**
 * Custom entry point for public_html.
 * The Laravel app lives in ~/petroplus_app (sibling of public_html).
 */

use Illuminate\Http\Request;

define('LARAVEL_START', microtime(true));

// Laravel app is one level up from public_html, inside petroplus_app/
$laravelBase = dirname(__DIR__) . '/petroplus_app';

// Maintenance mode check
if (file_exists($maintenance = $laravelBase . '/storage/framework/maintenance.php')) {
    require $maintenance;
}

// Register the Composer autoloader
require $laravelBase . '/vendor/autoload.php';

// Bootstrap Laravel and handle the request
(require_once $laravelBase . '/bootstrap/app.php')
    ->handleRequest(Request::capture());
