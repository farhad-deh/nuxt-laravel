<?php


use App\Http\Controllers\Dashboard\Auth\AuthController;
use Illuminate\Support\Facades\Route;

Route::post('register', [AuthController::class, 'register']);
Route::post('login',[AuthController::class, 'login']);
Route::get('user',[AuthController::class, 'user']);

Route::middleware('auth:sanctum')->group(function (){
    Route::post('logout',[AuthController::class, 'logout']);
});

Route::get('test',[AuthController::class, 'test'] );
