<?php

namespace App\Http\Controllers;

use App\Drama;
use App\Episode;
use App\Repositories\DramaRepository;
use App\Repositories\EpisodeRepository;
use Carbon\Carbon;
use GuzzleHttp\Client;
use Illuminate\Http\Request;
use App\Http\Requests;
use Illuminate\Support\Facades\Auth;
use Tymon\JWTAuth\Facades\JWTAuth;

class DramaController extends Controller
{
    /**
     * Get All Drama list
     *
     * @return \Illuminate\Database\Eloquent\Collection|static[]
     */
    public function index()
    {
        $dramas = Drama::paginate(9);

        foreach($dramas as $drama){
            $drama->episodeUpdate();
        }

        return $dramas;
    }

    /**
     * User follow a drama
     *
     * @param $drama
     * @return \Illuminate\Http\RedirectResponse
     */
    public function follow($drama)
    {
        $user = JWTAuth::parseToken()->authenticate();

        $user->dramas()->sync([$drama], false);

        return 'ok';
    }

    /**
     * User unfollow the drama
     *
     * @param $drama
     * @return string
     */
    public function unFollow($drama)
    {
        $user = JWTAuth::parseToken()->authenticate();

        $user->dramas()->detach($drama);

        return 'ok';
    }


    /**
     * User's drama
     * 
     * @return mixed
     */
    public function userDramas()
    {
        $user = JWTAuth::parseToken()->authenticate();

        return $user->dramas;
    }

    /**
     * Get All Shows
     *
     * @return string
     */
    public function get()
    {
        $dramas = new DramaRepository();

        $dramas->getAll();

        return 'OK';
    }

    public function test()
    {
        $dramas = new EpisodeRepository();

        $dramaepisodes = $dramas->getAiredEpisodes(118);


        return $dramaepisodes;
    }

}
