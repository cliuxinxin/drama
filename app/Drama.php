<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Drama extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'url', 'imgurl','cnname','status','airedfrom','type','imdb','summary','tvmazeid'
    ];
}
