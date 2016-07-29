<?php

namespace App;

use App\Repositories\EpisodeRepository;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;
use Tymon\JWTAuth\Facades\JWTAuth;

class Drama extends Model
{

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'url', 'imgurl','cnname','status','airedfrom','type','imdb','summary','tvmazeid',
        'episode_update_date', 'newest_season', 'newest_number', 'newest_date','next_season', 'next_number',
        'next_date'
    ];

    protected $appends = array('user_follow');

    /**
     * The drama belongs to many users.
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany
     */
    public function users()
    {
        return $this->belongsToMany('App\User');

    }

    /**
     * Drama have many episodes
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function episodes()
    {
        return $this->hasMany('App\Episode','tvmazeid','tvmazeid');
    }


    /**
     * get user_follow attribute
     *
     * @return bool
     */
    public function getUserFollowAttribute()
    {
        if ($token = JWTAuth::getToken()) {
            $user = JWTAuth::parseToken()->authenticate();
            if ($this->isFollowBy($user)) {
                return true;
            }
        }

        return false;
    }
    /**
     * Is Drama follow by given user
     *
     * @param $user
     * @return bool
     */
    public function isFollowBy($user)
    {
        if(!$user->dramas->first()){
            return false;
        }

        if ($user->dramas->contains('id',$this['id'])){
            return true;
        }

        return false;
    }




    /**
     * The drama is updated
     *
     * @return bool
     */
    public function isNeedUpdate()
    {
        if (is_null($this['episode_update_date'])){
            return true;
        }
        if (Carbon::now()->diffInDays(new Carbon($this['episode_update_date'])) > 3){
            return true;
        }
        return false;
    }






    /**
     * Update Drama episode info.
     */
    public function episodeUpdate()
    {
        if($this->isNeedUpdate()){
            $episodes = new EpisodeRepository();
            $dramaid = $this['id'];

            $episodes->getEpisodesByDramaid($dramaid);

            $airedEpisodes = $episodes->getAiredEpisodes($dramaid);
            $unAirEpisodes = $episodes->getUnAirEpisodes($dramaid);

            if($unAirEpisodes->first()){
                $next_season = $unAirEpisodes->min('season');
                $next_number = $unAirEpisodes->where('season',$next_season)->min('number');
                $next_date =$unAirEpisodes->where('season',$next_season)->where('number',$next_number)->first()->airdate;

                $this['next_season'] = $next_season;
                $this['next_number'] = $next_number;
                $this['next_date'] = $next_date;
            }

            if($airedEpisodes->first()){
                $newest_season = $airedEpisodes->max('season');
                $newest_number = $airedEpisodes->where('season',$newest_season)->max('number');
                $newest_date = $airedEpisodes->where('season',$newest_season)->where('number',$newest_number)->first()->airdate;

                $this['episode_update_date'] = Carbon::now();
                $this['newest_season'] = $newest_season;
                $this['newest_number'] = $newest_number;
                $this['newest_date'] = $newest_date;
            }

        }
        $this->save();
    }
}
