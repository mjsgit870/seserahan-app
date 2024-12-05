<?php

use App\Http\Controllers;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::resource('seserahan', Controllers\SeserahanController::class);
Route::resource('satuan', Controllers\SatuanController::class);
Route::resource('users', Controllers\UserController::class);
