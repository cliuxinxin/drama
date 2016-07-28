<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use Tymon\JWTAuth\Facades\JWTAuth;

class EpisodeController extends Controller
{
    /**
     * User seen a drama
     *
     * @param $episode
     * @return \Illuminate\Http\RedirectResponse
     * @internal param $drama
     */
    public function seen($episode)
    {
        $user = JWTAuth::parseToken()->authenticate();

        $user->episodes()->sync([$episode], false);

        return 'ok';
    }

    /**
     * User unseen the episode
     *
     * @param $episode
     * @return string
     * @internal param $drama
     */
    public function unFollow($episode)
    {
        $user = JWTAuth::parseToken()->authenticate();

        $user->episodes()->detach($episode);

        return 'ok';
    }
}
