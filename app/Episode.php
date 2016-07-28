<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Episode extends Model
{
    protected $fillable = [
        'name','season','number','airdate','imgurl','summary','url','tvmazeid'
    ];
}
