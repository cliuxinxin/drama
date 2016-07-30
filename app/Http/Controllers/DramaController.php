<?php

namespace App\Http\Controllers;

use App\Drama;
use App\Episode;
use App\Repositories\DramaRepository;
use App\Repositories\EpisodeRepository;
use Illuminate\Http\Request;
use App\Http\Requests;
use Tymon\JWTAuth\Facades\JWTAuth;

class DramaController extends Controller
{
    //Get the login user
    private $user;

    //Auth the user
    public function __construct()
    {
        if ($token = JWTAuth::getToken()) {
            $this->user = JWTAuth::parseToken()->authenticate();
        }
    }

    /**
     * Get a drama detail and its episodes
     *
     * @param $dramaid
     * @return array
     */
    public function show($dramaid)
    {
        $drama = Drama::find($dramaid);

        $drama->episodeUpdate();

        $episodes = $drama->episodes;

        return [$drama,$episodes];
    }
    /**
     * Get All Drama list
     *
     * @return \Illuminate\Database\Eloquent\Collection|static[]
     */
    public function index()
    {
        $dramas = Drama::paginate(9);

//        foreach($dramas as $drama){
//            $drama->episodeUpdate();
//        }

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

        return 'followed';
    }

    /**
     * User unfollow the drama
     *
     * @param $drama
     * @return Boolean
     */
    public function unFollow($drama)
    {
        $user = JWTAuth::parseToken()->authenticate();

        $user->dramas()->detach($drama);

        return 'unfollowed';
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

        return 'ok';
    }

    public function test()
    {

        $episodes = Drama::find(26)->episodes()->aired()->get();

        return $episodes;
    }

}
