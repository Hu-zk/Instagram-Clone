<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\UserController;

Route::controller(AuthController::class)->group(function () {
    Route::post('login', 'login');
    Route::post('register', 'register');
    Route::get('unautharized', 'unautharized')->name("unautharized");
});

Route::middleware('auth:api')->group(function () {
    Route::post('logout', [AuthController::class, 'logout']);
    Route::post('refresh', [AuthController::class, 'refresh']);

    Route::post('posts', [PostController::class, 'createPost']);
    Route::post("/posts/{postId}/toggle-like", [PostController::class, 'toggleLike']);
    Route::post('/search/{searchItem}', [UserController::class, 'searchUsers']);
    Route::post("/toggle-follow/{userId}", [UserController::class, "follow"]);
});
