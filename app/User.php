<?php

namespace App;

use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'password',
    ];


    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    /**
     * User has many dramas
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany
     */
    public function dramas()
    {
        return $this->belongsToMany('App\Drama');
    }

    public function episodes()
    {
        return $this->belongsToMany('App\Episode');
    }
}
