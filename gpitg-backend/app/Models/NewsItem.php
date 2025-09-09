<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class NewsItem extends Model
{
    protected $fillable = [
        'title',
        'description',
        'content',
        'image',
        'video',
        'date',
        'author',

    ];
}
