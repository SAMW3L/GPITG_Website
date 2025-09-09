<?php
namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\NewsItem;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class NewsItemController extends Controller
{
    // List all news items
    public function index()
    {
        return NewsItem::orderBy('date', 'desc')->get();
    }

    // Create a new news item
    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required|string',
            'description' => 'required|string',
            'content' => 'required|string',
            'image' => 'nullable|url', // Assuming URL input
            'video' => 'nullable|url', // Assuming URL input
            'date' => 'required|date',
        ]);

        $newsItem = NewsItem::create($request->all());
        return response()->json($newsItem, 201);
    }

    // Show a specific news item
    public function show(NewsItem $newsItem)
    {
        return $newsItem;
    }

    // Update a news item
    public function update(Request $request, NewsItem $newsItem)
    {
        $request->validate([
            'title' => 'required|string',
            'description' => 'required|string',
            'content' => 'required|string',
            'image' => 'nullable|url',
            'video' => 'nullable|url',
            'date' => 'required|date',
        ]);
        
        $newsItem->update($request->all());
        return response()->json($newsItem, 200);
    }

    // Delete a news item
    public function destroy(NewsItem $newsItem)
    {
        $newsItem->delete();
        return response()->json(null, 204);
    }
}