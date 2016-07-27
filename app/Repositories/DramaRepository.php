<?php
/**
 * Created by PhpStorm.
 * User: liuxinxin
 * Date: 2016/7/27
 * Time: 13:53
 */

namespace App\Repositories;

use App\Drama;
use GuzzleHttp\Client;

class DramaRepository
{
    /**
     * Get all dramas info.
     */
    public function getAll()
    {
        for($i=0;$i<78;$i++){
            $this->getOnePageDramas($i);
        }
    }


    /**
     * Get one Page Dramas
     */
    public function getOnePageDramas($page)
    {
        $url = 'http://api.tvmaze.com/shows?page='.$page;
        $data = $this->getTVmazeInfo($url);
        foreach ($data as $drama) {
            $data = [
                'name' => $drama['name'],
                'tvmazeid' => $drama['id'],
                'url' => $drama['url'],
                'imgurl' => is_null($drama['image']['medium'])?"xxxx":$drama['image']['medium'],
                'type' => $drama['type'],
                'summary' => $drama['summary'],
                'imdb' => is_null($drama['externals']['imdb'])?"xxxx":$drama['externals']['imdb']
            ];
            Drama::FirstOrCreate($data);
        }
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
}