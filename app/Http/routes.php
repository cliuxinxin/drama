<?php

/*
|--------------------------------------------------------------------------
| Return index view for every routes but the API's ones
|--------------------------------------------------------------------------
*/

Route::get('{slug}', function() {
    return view('index');
})
->where('slug', '(?!api)([A-z\d-\/_.]+)?');


/*
|--------------------------------------------------------------------------
| Application API routes
|--------------------------------------------------------------------------
*/

Route::group(['prefix' => 'api'], function() {
    Route::resource('posts', 'PostsController');

    //Auth
    Route::post('register', 'JWTController@register');
    Route::post('login', 'JWTController@login');
    Route::group(['middleware' => 'jwt-auth'], function () {
        Route::post('get_user_details', 'JWTloController@get_user_details');
    });

    //Drama
    Route::get('drama','DramaController@index');
    Route::get('test','DramaController@test');
    Route::get('drama/get','DramaController@get');
    Route::group(['middleware' => 'jwt.auth'],function(){
        Route::get('drama/follow/{drama}','DramaController@follow');
        Route::get('drama/unFollow/{drama}','DramaController@unFollow');
        Route::get('drama/{username}','DramaController@userDramas');
    });


});

