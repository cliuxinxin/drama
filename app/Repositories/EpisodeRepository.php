<?php
/**
 * Created by PhpStorm.
 * User: liuxinxin
 * Date: 2016/7/28
 * Time: 10:25
 */

namespace App\Repositories;


use App\Drama;
use App\Episode;
use Carbon\Carbon;
use GuzzleHttp\Client;
use Symfony\Component\Finder\Tests\Iterator\DateRangeFilterIteratorTest;

class EpisodeRepository
{


    /**
     * Get unaired episodes by drama id
     *
     * @param $dramaid
     * @return mixed
     */
    public function getUnAirEpisodes($dramaid)
    {
        return Drama::find($dramaid)->episodes()->unair()->get();


    }

    /**
     * Get aired episodes by drama id
     *
     * @param $dramaid
     * @return mixed
     */
    public function getAiredEpisodes($dramaid)
    {
        return Drama::find($dramaid)->episodes()->aired()->get();
    }

    /**
     * Get episodes by drama id
     * @param $dramaid
     */
    public function getEpisodesByDramaid($dramaid)
    {
        $showid = Drama::find($dramaid)->tvmazeid;

        $this->getEpisodesByShowid($showid);
    }


    /**
     * Get episodes info from api by drama id.
     * @param $tvmazeid
     * @return mixed
     * @internal param $id
     */
    public function getEpisodesByShowid($tvmazeid)
    {
        $url = 'http://api.tvmaze.com/shows/'.$tvmazeid.'/episodes';
        $data = $this->getTVmazeInfo($url);
        foreach ($data as $episode) {
            $data = [
                'name' => $episode['name'],
                'season' => $episode['season'],
                'number' => $episode['number'],
                'airdate' => $episode['airdate'],
                'imgurl' => is_null($episode['image']['medium'])?"xxxx":$episode['image']['medium'],
                'summary' => $episode['summary'],
                'url' => $episode['url'],
                'tvmazeid' => $tvmazeid
            ];
            Episode::FirstOrCreate($data);
        };

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