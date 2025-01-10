<?php

use Illuminate\Support\Facades\Route;
use App\Http\Middleware\CheckBusinnesData;

Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

Route::group(['middleware' => 'auth'], function () {
    Route::middleware([CheckBusinnesData::class])->group(function () {
        Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
        Route::resource('pages', App\Http\Controllers\ContentController::class);
        Route::resource('products', App\Http\Controllers\ProductController::class);
        Route::resource('attributes', App\Http\Controllers\AttributeController::class);
        Route::resource('combinations', App\Http\Controllers\CombinationController::class);
        Route::resource('medias', App\Http\Controllers\MediaController::class);

        // common routes
        Route::get('/common', [App\Http\Controllers\CommonController::class, 'index'])->name('home');
        Route::get('/image/{id}', [App\Http\Controllers\CommonController::class, 'image']);
    });

    Route::resource('business-info', App\Http\Controllers\BusinessController::class);
});
