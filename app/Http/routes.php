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

    Route::post('register', 'JWTController@register');
    Route::post('login', 'JWTController@login');
    Route::group(['middleware' => 'jwt-auth'], function () {
        Route::post('get_user_details', 'JWTloController@get_user_details');
    });
});

