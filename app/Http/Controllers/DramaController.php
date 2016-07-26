<?php

namespace App\Http\Controllers;

use App\Drama;
use GuzzleHttp\Client;
use Illuminate\Http\Request;
use Symfony\Component\DomCrawler\Crawler;
use Goutte;
use App\Http\Requests;

class DramaController extends Controller
{
    /**
     * Get All Drama list
     *
     * @return \Illuminate\Database\Eloquent\Collection|static[]
     */
    public function index()
    {
        return Drama::all();
    }

    /**
     * Get All Shows
     *
     * @return string
     */
    public function get()
    {
        for($i=0;$i<78;$i++){
            $this->getOnePageDramas($i);
        }

        return 'OK';
    }

    public function test()
    {


        return 'OK';
    }

    

    /**
     * Get TVmaze info by api
     *
     * @return mixed
     */
    private function getTVmazeInfo($url)
    {
        $client = new Client();
        $res = $client->get($url);
        $data = json_decode($res->getBody()->getContents(), true);
        return $data;
    }

    /**
     * Get one Page Dramas
     */
    private function getOnePageDramas($page)
    {
        $url = 'http://api.tvmaze.com/shows?page='.$page;
        $data = $this->getTVmazeInfo($url);
        foreach ($data as $drama) {
            $data = [
                'name' => $drama['name'],
                'url' => $drama['url'],
                'imgurl' => is_null($drama['image']['medium'])?"xxxx":$drama['image']['medium'],
                'type' => $drama['type'],
                'summary' => $drama['summary'],
                'imdb' => is_null($drama['externals']['imdb'])?"xxxx":$drama['externals']['imdb']
            ];
            Drama::FirstOrCreate($data);
        }
    }
}
