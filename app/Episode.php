<?php

namespace App;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;
use Tymon\JWTAuth\Facades\JWTAuth;

class Episode extends Model
{
    protected $fillable = [
        'name','season','number','airdate','imgurl','summary','url','tvmazeid'
    ];

    protected $appends = array('user_seen');

    /**
     * Aired episodes
     * @param $query
     * @return mixed
     */
    public function scopeAired($query)
    {
        return $query->where('airdate','<=',Carbon::now());
    }

    /**
     * Unair episodes
     * @param $query
     * @return mixed
     */
    public function scopeUnair($query)
    {
        return $query->where('airdate','>',Carbon::now());
    }

    /**
     * Get user seen attribute
     *
     * @return bool
     */
    public function getUserSeenAttribute()
    {
        if ($token = JWTAuth::getToken()) {
            $user = JWTAuth::parseToken()->authenticate();

            if(!$user->episodes->first()){
                return false;
            }

            if ($user->episodes->contains('id',$this['id'])){
                return true;
            }
        }

        return false;
    }
}
