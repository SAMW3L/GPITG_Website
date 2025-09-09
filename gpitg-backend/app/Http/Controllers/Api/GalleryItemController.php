<?php

namespace App\Http\Controllers\Api;

use App\Models\GalleryItem;
use Illuminate\Support\Facades\Storage;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class GalleryItemController extends Controller
{
    /**
     * Display a listing of the resource.
     */
   public function index() 
   { 
    return GalleryItem::orderBy('date', 'desc')->get(); 
}

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request) 
    {
    $validated = $request->validate([
        'title' => 'required', 
        'description' => 'required', 
        'type' => 'required|in:image,video', 
        'date' => 'required|date',
        'file' => 'required_if:type,image|file|max:5000', // max 5MB, accepts file upload
        'url' => 'nullable|url', // accepts URL
    ]);

    $url = $validated['url'] ?? null;
    if ($request->hasFile('file')) {
        $path = $request->file('file')->store('public/gallery');
        $url = Storage::url($path);
    }
    
    $item = GalleryItem::create(array_merge($validated, ['url' => $url]));
    return $item;
    }
    /**
     * Display the specified resource.
     */
    public function show(GalleryItem $galleryItem) 
    { 
        return $galleryItem; 
    }

    /**
     * Update the specified resource in storage.
     */
   public function update(Request $request, GalleryItem $galleryItem) 
   {
    $validated = $request->validate([
        'title' => 'required', 'description' => 'required', 'type' => 'required|in:image,video', 'date' => 'required|date',
        'file' => 'nullable|file|max:5000',
        'url' => 'nullable|url',
    ]);

    $url = $validated['url'] ?? $galleryItem->url;
    if ($request->hasFile('file')) {
        Storage::delete(str_replace('/storage/', 'public/', $galleryItem->url)); // Delete old file
        $path = $request->file('file')->store('public/gallery');
        $url = Storage::url($path);
    }
    
    $galleryItem->update(array_merge($validated, ['url' => $url]));
    return $galleryItem;
    }

    /**
     * Remove the specified resource from storage.
     */
   public function destroy(GalleryItem $galleryItem) 
   {
    Storage::delete(str_replace('/storage/', 'public/', $galleryItem->url));
    $galleryItem->delete();
    return response()->json(null, 204);
    }
}
