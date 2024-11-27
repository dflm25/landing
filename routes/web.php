<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');

Route::group(['middleware' => 'auth'], function () {
    Route::resource('pages', App\Http\Controllers\ContentController::class);
    Route::resource('products', App\Http\Controllers\ProductController::class);
    Route::resource('attributes', App\Http\Controllers\AttributeController::class);
});
