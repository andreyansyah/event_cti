<?php

use CodeIgniter\Router\RouteCollection;

/**
 * @var RouteCollection $routes
 */
$routes->get('/', 'Home::index');

$routes->get('smart/dashboard', 'smart\DashboardController::index');

service('auth')->routes($routes);
