<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\PostsController;

Route::controller(AuthController::class)->group(function () {
    Route::post('login', 'login');
    Route::post('register', 'register');
    Route::get('unautharized', 'unautharized')->name("unautharized");
});

Route::middleware('auth:api')->group(function () {
    Route::post('logout', [AuthController::class, 'logout']);
    Route::post('refresh', [AuthController::class, 'refresh']);

    Route::post('posts', [PostsController::class, 'createPost']);
    Route::post('posts/{post_id}/like', [PostsController::class, 'like']);
    Route::post('posts/{post_id}/unlike', [PostsController::class, 'unlike']);
    Route::get('/search-users/{searchItem}', [UserController::class, 'searchUsers']);
    Route::get("/toggle-follow/{userId}", [UserController::class, "follow"]);
});
