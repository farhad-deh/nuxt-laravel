<?php

use Illuminate\Support\Facades\Route;

Route::post('register', 'AuthController@register');
Route::post('login', 'AuthController@login');
Route::get('user', 'AuthController@user');

Route::middleware('auth:sanctum')->group(function (){
    Route::post('logout', 'AuthController@logout');
});
