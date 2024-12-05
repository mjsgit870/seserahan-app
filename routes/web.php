<?php

use App\Http\Controllers;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::controller(Controllers\AuthController::class)->group(function () {
    Route::get('/login', 'login')->name('login');
    Route::post('/login', 'login_post')->name('login.post');
    Route::get('/register', 'register')->name('register');
    Route::post('/register', 'register_post')->name('register.post');
});

Route::resource('seserahan', Controllers\SeserahanController::class);
Route::resource('satuan', Controllers\SatuanController::class);
Route::resource('users', Controllers\UserController::class);
