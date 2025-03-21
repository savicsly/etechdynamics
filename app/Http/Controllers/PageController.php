<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PageController extends Controller
{
    public function index()
    {
        return inertia()->render('guest/homepage');
    }

    public function about()
    {
        return inertia()->render('guest/about');
    }

    public function services()
    {
        return inertia()->render('guest/services');
    }

    public function projects()
    {
        return inertia()->render('guest/projects');
    }

    public function blog()
    {
        return inertia()->render('guest/blog');
    }

    public function contact()
    {
        return inertia()->render('guest/contact');
    }
}
