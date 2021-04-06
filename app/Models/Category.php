<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Cviebrock\EloquentSluggable\Sluggable;
use Kyslik\ColumnSortable\Sortable;
use App\Models\Post;

class Category extends Model
{
    use HasFactory, Sortable, Sluggable;
    protected $fillable = ['ES_name', 'EN_name', 'slug'];

    public function Posts()
    {
        return $this->belongsToMany(
            Post::class,
            'category_posts',
            'category_id',
            'post_id');
    }

    public function sluggable(): array
    {
        return [
            'slug' => [
                'source' => 'EN_name'
            ]
        ];
    }
}
