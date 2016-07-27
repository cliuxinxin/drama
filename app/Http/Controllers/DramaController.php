<?php

namespace App\Http\Controllers;

use App\Drama;
use App\Repositories\DramaRepository;
use GuzzleHttp\Client;
use Illuminate\Http\Request;
use App\Http\Requests;

class DramaController extends Controller
{
    protected $dramas;

    public function __construct(DramaRepository $dramas)
    {
        $this->dramas = $dramas;
    }
    /**
     * Get All Drama list
     *
     * @return \Illuminate\Database\Eloquent\Collection|static[]
     */
    public function index()
    {
        return Drama::paginate(20);
    }

    /**
     * Get All Shows
     *
     * @return string
     */
    public function get()
    {
        $this->dramas->getAll();

        return 'OK';
    }

    public function test()
    {
        return 'OK';
    }

}
