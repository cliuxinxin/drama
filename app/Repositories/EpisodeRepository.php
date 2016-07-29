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
        $collection = Drama::find($dramaid)->episodes;

        $episodes = $collection->filter(function ($item) {
            return Carbon::now()->diffInDays(new Carbon($item->airdate),false)>=0;
        });

        return $episodes;

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
     * Get aired episodes by drama id
     *
     * @param $dramaid
     * @return mixed
     */
    public function getAiredEpisodes($dramaid)
    {
        $collection = Drama::find($dramaid)->episodes;

        $episodes = $collection->filter(function ($item) {
            return Carbon::now()->diffInDays(new Carbon($item->airdate),false)<0;
        });

        return $episodes;

    }
    /**
     * Get Episode by drama id.
     *
     * @param $dramaid
     * @return mixed
     */
    public function getDramaEpiodes($dramaid)
    {
        return Drama::find($dramaid)->episodes;
    }


    /**
     * Get episodes info from api by drama id.
     * @param $id
     * @return mixed
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