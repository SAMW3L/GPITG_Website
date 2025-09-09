<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\NewsItemController;
use App\Http\Controllers\Api\GalleryItemController;

Route::post('/login', [AuthController::class, 'login']);

Route::middleware('auth:sanctum')->group(function () {
    Route::resource('news', NewsItemController::class)->except(['create', 'edit']);
    Route::resource('gallery', GalleryItemController::class)->except(['create', 'edit']);
});

# Public routes for fetching data for the main site
Route::get('news', [NewsItemController::class, 'index']);
Route::get('news/{newsItem}', [NewsItemController::class, 'show']);
Route::get('gallery', [GalleryItemController::class, 'index']);
Route::get('gallery/{galleryItem}', [GalleryItemController::class, 'show']);