<?php

use Illuminate\Support\Facades\Route;

Route::namespace('Auth')
    ->prefix('auth')
    ->group(base_path('routes/dashboard/modules/auth.php'));


