<?php

namespace App\Http\Controllers;

use App\Drama;
use Illuminate\Http\Request;

use App\Http\Requests;

class DramaController extends Controller
{
    public function index()
    {
        return Drama::all();
    }
}
