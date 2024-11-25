<?php

namespace App\Controllers\smart;

use CodeIgniter\Controller;

class DashboardController extends Controller
{   
    public function index()
    {
        $data['judul'] = 'Dashboard';
        return view('smart/dashboard/index', $data);
    }
}
